import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const successRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (formRef.current) {
        gsap.to(formRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 0.3,
          onComplete: () => {
            setSubmitted(true);
            if (successRef.current) {
              gsap.fromTo(
                successRef.current,
                { opacity: 0, scale: 0.9 },
                {
                  opacity: 1,
                  scale: 1,
                  duration: 0.4,
                  ease: 'back.out(1.2)',
                }
              );
            }
          },
        });
      }
    }, 1000);
  };

  return (
    <section ref={sectionRef} id="waitlist" className="waitlist-section">
      <div className="waitlist-container">
        <h2 className="waitlist-title">Join the Dreams Market Waitlist</h2>
        <p className="waitlist-subtitle">Be among the first to trade, earn, and win on Dreams Market</p>

        {!submitted ? (
          <form ref={formRef} onSubmit={handleSubmit} className="waitlist-form">
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="waitlist-input"
                required
              />
            </div>
            <button type="submit" disabled={isLoading} className="waitlist-submit-btn">
              {isLoading ? (
                <span className="loading-spinner"></span>
              ) : (
                'Join Waitlist'
              )}
            </button>
          </form>
        ) : (
          <div ref={successRef} className="waitlist-success">
            <div className="success-checkmark">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>You're on the list!</h3>
            <p>We'll notify you when we launch.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Waitlist;

