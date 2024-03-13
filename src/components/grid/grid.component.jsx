import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { Outlet, Link } from 'react-router-dom';
import './grid.css';
import Square from '../square/square.component.jsx';
import none from '../../assets/img/default.jpg';
import ceramic from '../../assets/img/ceramic.jpg';
import crochet from '../../assets/img/crochet.jpg';
import { gsap } from "gsap";

const works = [
    {id: 1, name: 'CERAMICS', description: '', image: ceramic, fontFamily: "magazine"},
    {id: 2, name: 'CROCHET', description: '', image: crochet, fontFamily: "plank"},
    {id: 3, name: 'CAWI TOOLKIT', description: '', image: none, fontFamily: "minecraft"}
];

const emptyCells = [
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 10},
    {id: 11},
    {id: 12},
    {id: 13},
    {id: 14},
    {id: 15},
    {id: 16},
    {id: 17},
    {id: 18},
    {id: 19},
    {id: 20},
    {id: 21},
    {id: 22},
    {id: 23},
    {id: 24},
    {id: 25}
]

const Cell = () => {
    return (
        <div className="empty-cell"></div>
    );
};

const Grid = ({ handleWorkHover, handleWorkHoverOut }) => {
    const gridRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const index = Number(entry.target.getAttribute("data-index"));
                if (entry.isIntersecting && entry.intersectionRatio === 1.0) {
                    const square = entry.target.querySelector('.work');
                    gsap.to(square, { 
                        opacity: 1,
                        stagger: 0.2, 
                        duration: 0.5 
                    }); 
                } else if (entry.intersectionRatio < 1.0 && entry.boundingClientRect.bottom >= window.innerHeight) {
                    const square = entry.target.querySelector('.work');
                    gsap.to(square, { opacity: 0, duration: 0.5 }); // Fade out animation
                }
            });
        }, {
            threshold: 1.0 
        });

        const cell = document.querySelectorAll(".grid-cell");
        cell.forEach(cell => observer.observe(cell));

        return () => observer.disconnect(); 
    }, []);

    return(
        <div className="grid" ref={gridRef}>
            {works.map((work, index) => (
                <div className="grid-cell" key={index} >
                        <Square 
                            work={work} 
                            index={index}
                            fontFamily={work.fontFamily} 
                            handleWorkHover={handleWorkHover}
                            handleWorkHoverOut={handleWorkHoverOut}
                            //sOpacity={work.sOpacity}
                            initialOpacity={entry => entry.isIntersecting && entry.intersectionRatio === 1.0 ? 1 : 0}
                        />
                </div>
            ))}
            {emptyCells.map((cell)=>(
                <div className="grid-cell" key={cell.id} >
                    <Cell />
                </div>
            ))}
        </div>
    );
};
export default Grid;