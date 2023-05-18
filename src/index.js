// Dependency Injections
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // import the global CSS file
import App from './App';
// import { PDFViewer } from '@react-pdf/renderer';
import { Router } from 'react-router';


//Render the main React DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


