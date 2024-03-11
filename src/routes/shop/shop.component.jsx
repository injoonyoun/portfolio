import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import './shop.css'; 
import {gsap} from "gsap";
import { TextPlugin } from 'gsap/all';

gsap.registerPlugin(TextPlugin);

const Shop = () => {

    const titleRef = useRef(null);
    const messageRef = useRef(null);

    useLayoutEffect(() => {
        const titleAnimIn = () => {
            gsap.to(titleRef.current, {
                duration: 2,
                text: {
                    value: "SHOP",
                    delimiter: ""
                }
            });
        }

        const messageAnimIn = () => {
            gsap.to(messageRef.current, {
                duration: 5,
                text: {
                    value: "Sorry, nothing here to see yet. :(",
                    delimiter: ""
                }
            });
        }

        titleAnimIn();
        messageAnimIn();

    }, []);

    return (
        <section className="shop-page">
            <h1 ref={titleRef} className="shop-title"></h1>
            <div className="shop-items">
                <p ref={messageRef} className="message"></p>
            </div>
        </section>
    );
  
}
export default Shop; 