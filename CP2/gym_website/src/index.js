import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom'; - not supported by react 18
import './index.css';
import App from './App';

// ReactDOM.render(
//   <>
//     <App />
//   </>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);