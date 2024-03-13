import React, {useState} from "react";
import {Link } from 'react-router-dom';
import './square.css'; 

const Square = ({ work, index, fontFamily, handleWorkHover, handleWorkHoverOut, initialOpacity }) => {

    const handleHover = () => {
        const square = document.getElementById(`work-${index}`);
        const opacity = parseFloat(window.getComputedStyle(square).opacity);
        console.log(opacity)
        if (opacity > 0) {
            handleWorkHover(fontFamily);
        }
    };

    const handleHoverOut = () => {
        handleWorkHoverOut();
    };

    return (
        <div className={"work"} id={`work-${index}`} style={{ opacity: initialOpacity }}>
                <Link className="work-links" to={`/work/${work.id}`}>
                    <img className="work-img" src={work.image} alt={work.name} onMouseEnter={handleHover} onMouseLeave={handleHoverOut} />
                    <h3 className="work-name">{work.name}</h3>
                    <p className="work-description">{work.description}</p>
                </Link>
        </div>
    );
};

export default Square;