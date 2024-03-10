import React, { useEffect, useRef, useState } from "react";
import { Outlet, Link } from 'react-router-dom';
import './home.css'; 
import none from '../../assets/img/default.jpg'
import ceramic from '../../assets/img/ceramic.jpg'
import crochet from '../../assets/img/crochet.jpg'
import { gsap } from "gsap";


const works = [
    {id: 1, name: 'CERAMICS', image: ceramic, fontFamily: "magazine"},
    {id: 2, name: 'PROJECT', image: crochet, fontFamily: "plank"},
    {id: 3, name: 'CAWI TOOLKIT', image: none, fontFamily: "minecraft"}
];

const Square = ({ work, index, fontFamily, handleWorkHover, handleWorkHoverOut }) => {
    return (
        <div className="work" id={`work-${index}`}>
            <Link className="work-links" to={`/work/${work.id}`}>
                <img className="work-img" src={work.image} alt={work.name} onMouseEnter={() => handleWorkHover(fontFamily)} onMouseLeave={handleWorkHoverOut} />
                <h3 className="work-name">{work.name}</h3>
            </Link>
        </div>
    );
};

const Carousel = ({ handleWorkHover, handleWorkHoverOut }) => {
    const carouselRef = useRef(null);
    const loopedWorks = [...works, ...works, ...works];

    useEffect(() => {
        const handleInitialScroll = () => {
            const scrollWidth = carouselRef.current.scrollWidth;
            const containerWidth = carouselRef.current.clientWidth;
            const initialScrollPosition = (scrollWidth - containerWidth) / 2;
            carouselRef.current.scrollLeft = initialScrollPosition;
        };

        const handleScroll = () => {
            const containerWidth = carouselRef.current.clientWidth;
            const scrollLeft = carouselRef.current.scrollLeft;
            const scrollRight = carouselRef.current.scrollWidth - containerWidth - scrollLeft;
            const scrollWidth = carouselRef.current.scrollWidth;
    
            if (scrollLeft <= 0) {
                carouselRef.current.scrollLeft = scrollWidth / 3;
            }else if (scrollRight <= 0) {
                carouselRef.current.scrollLeft = (scrollWidth - containerWidth) / 4;
            }
        };

        handleInitialScroll();

        const instance = carouselRef.current;
        instance.addEventListener("scroll", handleScroll);

        return() => {
            instance.removeEventListener("scroll", handleScroll);
        }

    }, []);

    useEffect(() => {
        const handleVerticalScroll = (event) => {
            if (carouselRef.current) {
                const deltaY = event.deltaY;
                carouselRef.current.scrollLeft += deltaY;
                // event.preventDefault(); // prevent vertical scrolling
            }
        };

        document.addEventListener('wheel', handleVerticalScroll);
        return () => {
            document.removeEventListener('wheel', handleVerticalScroll);
        };
    }, []);

    const handleScroll = (event) => {
        const isHorizontalScroll = Math.abs(event.deltaX) > Math.abs(event.deltaY);
      
        if (isHorizontalScroll) {
          event.preventDefault();
          // event.stopPropagation(); // stop the event from further propagation
        }
      };
      
      document.addEventListener('wheel', handleScroll, { passive: false });

    return (
        <div className="carousel" ref={carouselRef}>
            {loopedWorks.map((work, index) => (
                <Square 
                key={index} 
                work={work} 
                index={index}
                fontFamily={work.fontFamily} 
                handleWorkHover={handleWorkHover} // Pass down handleWorkHover prop
                handleWorkHoverOut={handleWorkHoverOut} // Pass down handleWorkHoverOut prop
            />
            ))}
        </div>
    );
};


const Home = () => {
    const titleRef = useRef(null);

    const handleWorkHover = (fontFamily) => {
        gsap.to(titleRef.current, { fontFamily, duration: 0 });
    };

    const handleWorkHoverOut = () => {
        gsap.to(titleRef.current, { fontFamily: "vcrosd", duration: 0 });
    };

    return (
        <section className="home-page">
            <section className="content">
                <Carousel handleWorkHover={handleWorkHover} handleWorkHoverOut={handleWorkHoverOut}  />
            </section>
            <section className="title">
                <h1 ref={titleRef} className="main-title" id="title">YOON IN JOON</h1>
                <h1 className="vertical-title-one">YOON</h1>
                <h1 className="vertical-title-two">IN</h1>
                <h1 className="vertical-title-three">JOON</h1>
            </section>
        </section>
    );
  
};

export default Home; 