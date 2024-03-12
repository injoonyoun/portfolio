import React from "react";
import {Link } from 'react-router-dom';
import './square.css'; 

const Square = ({ work, index, fontFamily, handleWorkHover, handleWorkHoverOut }) => {
    return (
        <div className="work" id={`work-${index}`}>
            <Link className="work-links" to={`/work/${work.id}`}>
                <img className="work-img" src={work.image} alt={work.name} onMouseEnter={() => handleWorkHover(fontFamily)} onMouseLeave={handleWorkHoverOut} />
                <h3 className="work-name">{work.name}</h3>
                <p className="work-description">{work.description}</p>
            </Link>
        </div>
    );
};

export default Square;