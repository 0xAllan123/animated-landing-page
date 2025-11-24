import {useEffect, useRef} from "react";

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    return (
        <section id="hero">
            <div>
                <h1>Welcome to Dreams Market</h1>
                <p>Where Trading Dreams Become Reality on Solana</p>
            </div>

            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />
        </section>
    )
}
export default Hero
