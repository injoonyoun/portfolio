import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import './about.css'; 
import {gsap} from "gsap";
import { TextPlugin } from 'gsap/all';

gsap.registerPlugin(TextPlugin);

const About = () => {

    const titleRef = useRef(null);

    useLayoutEffect(() => {
        const titleAnimIn = () => {
            gsap.to(titleRef.current, {
                duration: 1,
                text: {
                    value: "ABOUT",
                    delimiter: ""
                },
                delay: 0.5,
            });
        }

        titleAnimIn();

    }, []);

    return (
        <section className="ab-page">
            <h1 ref={titleRef} className="ab-title"></h1>
        </section>
    );
  
}
export default About; 