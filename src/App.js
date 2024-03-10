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
      <Route path='/portfolio' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/portfolio/shop' element={<Shop />} />
        <Route path='/portfolio/about' element={<About />} />
        <Route path='/portfolio/works/1' element={<WorkOne />} />
        <Route path='/portfolio/2' element={<WorkTwo />} />
        <Route path='/portfolio/works/3' element={<WorkThree />} />
      </Route>
    </Routes>
  );
};

export default App;
