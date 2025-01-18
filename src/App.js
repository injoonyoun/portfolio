import React, { Fragment, useEffect, useRef, useState, useLayoutEffect } from "react";
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './components/navigation/navigation';
import About from './routes/about/about.component';
import WorkOne from './routes/work1/work1.components';
import WorkTwo from './routes/work2/work2.components';
import WorkThree from './routes/work3/work3.components';
import './routes/home/home.css';
import Carousel from './components/carousel/carousel.component';
import { gsap } from "gsap";
import { TextPlugin } from 'gsap/all';

gsap.registerPlugin(TextPlugin);

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='work/1' element={<WorkOne />} />
        <Route path='work/2' element={<WorkTwo />} />
        <Route path='work/3' element={<WorkThree />} />
      </Route>
    </Routes>
  );
};

export default App;
