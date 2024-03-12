import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Carousel from './components/carousel/carousel.component';
import Grid from './components/grid/grid.component';
import Spiral from './components/spiral/spiral.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import About from './routes/about/about.component';
import WorkOne from './routes/work1/work1.components';
import WorkTwo from './routes/work2/work2.components';
import WorkThree from './routes/work3/work3.components';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='/' element={<Home />} />
        <Route path="/carousel" component={Carousel} />
        <Route path="/grid" component={Grid} />
        <Route path="/spiral" component={Spiral} />
        <Route path='shop' element={<Shop />} />
        <Route path='about' element={<About />} />
        <Route path='work/1' element={<WorkOne />} />
        <Route path='work/2' element={<WorkTwo />} />
        <Route path='work/3' element={<WorkThree />} />
      </Route>
    </Routes>
  );
};

export default App;
