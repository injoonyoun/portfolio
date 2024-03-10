import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import About from './routes/about/about.component';
import WorkOne from './routes/work1/work1.components';
import WorkTwo from './routes/work2/work2.components';
import WorkThree from './routes/work3/work3.components';

const App = () => {

  return (
    <Routes>
      <Route path='/' render={<Navigation />}>
        <Route index render={<Home />} />
        <Route path='shop' render={<Shop />} />
        <Route path='about' render={<About />} />
        <Route path='work/1' render={<WorkOne />} />
        <Route path='work/2' render={<WorkTwo />} />
        <Route path='work/3' render={<WorkThree />} />
      </Route>
    </Routes>
  );
};

export default App;
