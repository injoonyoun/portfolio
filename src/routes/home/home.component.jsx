import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { Outlet, Link } from 'react-router-dom';
import './home.css'; 
import Carousel from '../../components/carousel/carousel.component.jsx';
import Grid from '../../components/grid/grid.component.jsx';
import Spiral from '../../components/spiral/spiral.component.jsx';
import { gsap } from "gsap";
import { TextPlugin } from 'gsap/all';

gsap.registerPlugin(TextPlugin);

const Home = () => {
    const [displayOption, setDisplayOption] = useState("carousel");
    const [activeOption, setActiveOption] = useState("carousel");
    const titleRef = useRef(null);

    const handleDisplayOptionChange = (option) => {
        setDisplayOption(option);
        setActiveOption(option);
    };

    useLayoutEffect(() => {
        const titleAnimIn = () => {
            gsap.to(titleRef.current, {
                duration: 2,
                text: {
                    value: "YOON IN JOON",
                    delimiter: ""
                },
                ease: "none",
                delay: 0.5,
            });
        }

        titleAnimIn();

    }, []);

    const handleWorkHover = (fontFamily) => {
        gsap.to(titleRef.current, { fontFamily, duration: 0 });
    };

    const handleWorkHoverOut = () => {
        gsap.to(titleRef.current, { fontFamily: "vcrosd", duration: 0 });
    };

    return (
        <section className="home-page">
            <section className="display-content">
                {displayOption === "carousel" && <Carousel handleWorkHover={handleWorkHover} handleWorkHoverOut={handleWorkHoverOut}  />}
                {displayOption === "grid" && <Grid handleWorkHover={handleWorkHover} handleWorkHoverOut={handleWorkHoverOut}  />}
                {displayOption === "spiral" && <Spiral handleWorkHover={handleWorkHover} handleWorkHoverOut={handleWorkHoverOut}  />}
            </section>
            <section className="title-content">
                <section className="display-options">
                    <ul>
                        <li><Link className={activeOption === "carousel" ? "display-link active" : "display-link"} to="#" onClick={() => handleDisplayOptionChange("carousel")}>CAROUSEL</Link></li>
                        <li><Link className={activeOption === "grid" ? "display-link active" : "display-link"} to="#" onClick={() => handleDisplayOptionChange("grid")}>GRID</Link></li>
                        <li><Link className={activeOption === "spiral" ? "display-link active" : "display-link"} to="#" onClick={() => handleDisplayOptionChange("spiral")}>SPIRAL</Link></li>
                    </ul>
                </section>
                <section className="fields">
                        <p className="field-elements">WEB DEVELOPMENT  /  WEB DESIGN  /  FASHION  /  ART</p>
                </section>
                <section className="title">
                    <h1 ref={titleRef} className="main-title" id="title"></h1>
                    <h1 className="vertical-title-one">YOON</h1>
                    <h1 className="vertical-title-two">IN</h1>
                    <h1 className="vertical-title-three">JOON</h1>
                </section>
            </section>
        </section>
    );
  
};

export default Home; 