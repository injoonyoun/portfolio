import React, { useEffect, useRef, useState, useLayoutEffect, Fragment } from "react";
import { Outlet, Link } from 'react-router-dom';
import './home.css'; 
//import Carousel from '../../components/carousel/carousel.component.jsx';
import Grid from '../../components/grid/grid.component.jsx';
import List from '../../components/list/list.component.jsx';
import FishTank from '../../components/fishtank/fishtank.components.jsx';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin, ScrollTrigger } from 'gsap/all';
import styled from "styled-components";
import Square from "../../components/square/square.component.jsx";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger)

const Hero = styled.section`
    margin: 0;
    padding: 0;
    padding-bottom: 1px;
    height: 100vh;
    width: 100vw;
    background-color: white;


    //border: 0.1px solid green;
`;

const TitlePage = styled.section`
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: fixed;
    bottom: 0;
    z-index: 10;

    //border: 1px solid red;
`;

const Titles = styled.section`
    margin: 0;
    padding: 0;
    width: 400vw;
    position: relative;
    display: flex;
    flex-wrap: no-wrap;
    z-index: 10;
    //border: 1px solid blue;
`;

const TitleOption = styled.h1`
    width: 100vw;
    font-size: 10rem;
    z-index: 10;
`;

const Title = styled.h1`
    width: 100vw;
    font-size: 10rem;
    z-index: 10;
`;

const SubTitle = styled.p`
    margin: 0;
    padding: 0;
    padding-left: 0.5rem;
    top: 50%;

`;

const Content = styled.section`
    margin: 0;
    padding: 0;
    height: 400vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    z-index: 5;
    //overflow-x: hidden;

    //border: 1px solid blue;
`;

const Carousel = styled.section`
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 300vw;
    display: flex;
    /*flex-wrap: wrap;*/
`;

const ContentElement = styled.section`
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    //border: 2px solid yellow;
`;

const ContentTitle = styled.h1`
    font-size: 5rem;
`;

const Home = () => {
    const homeRef = useRef();
    const contentRef = useRef();
    const titleRef = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let elements = gsap.utils.toArray(".title-element");

            //var tl = gsap.timeline();

            gsap.to('.title', {
                scrollTrigger: {
                    scrub: 1,
                    pin: true,
                    pinSpacing: false,
                    trigger: '.content',
                    start: "top, bottom",
                    endTrigger: '.title',
                    end: "bottom bottom",
                },
                top: "40%",
            });

            gsap.to('.sub-title', {
                scrollTrigger: {
                    scrub: 1,
                    trigger: '.content',
                    start: "top, bottom",
                    end: "bottom, bottom",
                },
                opacity: 0,
                display: "none",
            });

            /*gsap.to('.title-page', {
                scrollTrigger: {
                    scrub: 1,
                    trigger: '.one',
                    start: "top, top",
                    end: "top, bottom",
                },
                height: "fit-content",
            });*/

            gsap.to(elements, {
                xPercent: -100 * (elements.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    snap: 1 / (elements.length -1),
                }
            });


        }, homeRef);
        return () => ctx.revert();
    });

    return (
        <div className="home" ref={homeRef}>
        <TitlePage className="title-page">
            <SubTitle className="sub-title">WEB DEVELOPMENT </SubTitle>
            <Titles className="title" ref={titleRef}>
                <TitleOption className="title-element"> 
                    YOON IN JOON
                </TitleOption>
                <TitleOption className="title-element">
                   OPTION 1
                </TitleOption>
                <TitleOption className="title-element">
                    OPTION 2
                </TitleOption>
                <TitleOption className="title-element">
                    OPTION 3
                </TitleOption>
            </Titles>
        </TitlePage>
        <Hero />
        <Content className="content" ref={contentRef}>
        <ContentElement className="element ">
                <ContentTitle>WELCOME</ContentTitle>
        </ContentElement>
        <ContentElement className="element one">
                <ContentTitle><a href="www.google.com">ONE</a></ContentTitle>
        </ContentElement>
        <ContentElement className="element two">
                <ContentTitle>TWO</ContentTitle>
        </ContentElement>
        <ContentElement className="element three">
                <ContentTitle>THREE</ContentTitle>
        </ContentElement>
        </Content>
        </div>

    );
  
};

export default Home; 