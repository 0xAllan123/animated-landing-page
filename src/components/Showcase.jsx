import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});

    useGSAP(() => {
        if(!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });

            timeline
                .to('.mask img', {
                    transform: 'scale(1.1)'
                }).to('.content', { opacity: 1, y: 0, ease: 'power1.in' });
        }
    }, [isTablet])

    return (
        <section id="showcase">
            <div className="media">
                <video src="/videos/game.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/mask-logo3.svg" />
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-lg">
                        <h2>Dreams Market on Solana</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Powered by {" "}
                                <span className="text-white">
                                    Solana's high-performance blockchain
                                </span>
                                , Dreams Market delivers
                            </p>
                            <p>
                                Lightning-fast transactions with near-zero fees. Dreams Market lets you trade, stake, and earn rewards on the most efficient blockchain network in crypto.
                            </p>
                            <p>
                                Dreams Market combines cutting-edge DeFi technology with gamified rewards, making trading both profitable and exciting. Win exclusive prizes including supercars, NFTs, and more.
                            </p>
                            <p className="text-primary">Explore Dreams Market trading platform</p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>65,000 TPS</h3>
                            <p>transaction speed on Solana</p>
                        </div>
                        <div className="space-y-2">
                            <p>Near</p>
                            <h3>$0.00025</h3>
                            <p>average transaction fee</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Showcase
