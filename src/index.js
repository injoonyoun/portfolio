import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

console.log('Rendering app...');
const rootElement = document.getElementById('root');
render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolio">
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
console.log('App rendered successfully!');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
