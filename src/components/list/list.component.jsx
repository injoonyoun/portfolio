import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import Square from '../square/square.component.jsx';
import './list.css'; 
import { Outlet, Link } from 'react-router-dom';

const works = [
    {id: 1, name: 'PROJECT 1', description: '', fontFamily: "magazine"},
    {id: 2, name: 'PROJECT 2', description: '', fontFamily: "plank"},
    {id: 3, name: 'PROJECT 3', description: '', fontFamily: "minecraft"}
];

const WorkList = ({work, index, fontFamily, handleWorkHover, handleWorkHoverOut}) => {
    return (
        <div className="work-list" id={`work-${index}`}> 
            <Link className="work-list-links" to={`/work/${work.id}`} onMouseEnter={handleWorkHover(fontFamily)} onMouseLeave={handleWorkHoverOut()}>
                <h3 className="work-list-name">{work.name}</h3>
                <h3 className="work-list-description">{work.description}</h3>
            </Link>
        </div>
    );
};

const List = ({ handleWorkHover, handleWorkHoverOut }) => {
    const listRef = useRef(null);

    return (
        <div className="list" ref={listRef}>
            {works.map((work, index) => (
                <WorkList 
                work={work} 
                index={index}
                fontFamily={work.fontFamily} 
                handleWorkHover={handleWorkHover}
                handleWorkHoverOut={handleWorkHoverOut}
                />
            ))}
        </div>
    );
};
export default List;