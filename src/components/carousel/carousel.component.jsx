import React, { useEffect, useRef} from "react";
import Square from '../square/square.component.jsx';
import './carousel.css'; 
import none from '../../assets/img/default.jpg';
import ceramic from '../../assets/img/ceramic.jpg';
import crochet from '../../assets/img/crochet.jpg';

const works = [
    {id: 1, name: '', description: '', image: ceramic, fontFamily: "magazine"},
    {id: 2, name: '', description: '', image: crochet, fontFamily: "plank"},
    {id: 3, name: '', description: '', image: none, fontFamily: "minecraft"}
];

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

export default Carousel;