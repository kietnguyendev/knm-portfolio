import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Hero() {
    const el = useRef(null);
    const typed: any = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                "Software Engineer",
                "Front-end Developer",
            ],
            typeSpeed: 80,
            backSpeed: 80,
            loop: true,
        };
        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        };
    }, []);

    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-title" data-aos="animate__zoomIn">
                    <h1>HI, I'M NGUYEN&nbsp;MINH&nbsp;KIET</h1>
                </div>
                <div className="hero-textrun">
                    I'm a <span ref={el}></span>
                </div>
            </div>
            <a className="hero-footer" href="#about">
                <span className="mouse-btn">
                    <span className="mouse-scroll"></span>
                </span>
                <div className="chevrons">
                    <div className="chevrondown"></div>
                    <div className="chevrondown"></div>
                </div>
            </a>
        </div>
    );
}

export default Hero;
