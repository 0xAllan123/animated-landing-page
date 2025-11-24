import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Highlights = () => {
    const isMobile = useMediaQuery({  query: '(max-width: 1024px)' });

    useGSAP(() => {
        gsap.to(['.left-column', '.right-column'], {
            scrollTrigger: {
                trigger: '#highlights',
                start: isMobile ? 'bottom bottom' : 'top center'
            },
            y: 0,
            opacity: 1,
            stagger: 0.5,
            duration: 1,
            ease: 'power1.inOut'
        });
    })

    return (
        <section id="highlights">
            <h2>Join Dreams Market: The Revolution in Crypto Trading.</h2>
            <h3>Here's what makes Dreams Market unique.</h3>

            <div className="masonry">
                <div className="left-column">
                    <div>
                        <img src="/laptop.png" alt="Trading" />
                        <p>Trade with lightning speed on Dreams Market with minimal fees on Solana.</p>
                    </div>
                    <div>
                        <img src="/sun.png" alt="Rewards" />
                        <p>Win exclusive <br />
                            supercars on <br/>
                            Dreams Market.</p>
                    </div>
                </div>
                <div className="right-column">
                    <div className="apple-gradient">
                        <img src="/ai.png" alt="NFT" />
                        <p>Own Dreams Market <br />
                            <span>NFT collectibles.</span></p>
                    </div>
                    <div>
                        <img src="/battery.png" alt="Staking" />
                        <p>Earn up to
                            <span className="green-gradient">{' '}25% APY{' '}</span>
                            staking on Dreams Market.
                            <span className="text-dark-100">{' '}(Passive income rewards.)
                            </span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Highlights
