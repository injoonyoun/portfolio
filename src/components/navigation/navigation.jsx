import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import './navigation.css';


const Navigation = ({onClick}) => {

    return (
        <Fragment>
            <header className="navbar">
                <ul>
                    <li><p className="nav-link"><Link className="a" to={`/`}>HOME</Link></p></li>
                    <li><p className="nav-link"><Link className="a" to={'about'} onClick={onClick}>ABOUT</Link></p></li>
                </ul>
            </header>
            <Outlet />
        </Fragment>

    );
}


export default Navigation; 