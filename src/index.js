// Dependency Injections
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // import the global CSS file
import App from './App';
// import { PDFViewer } from '@react-pdf/renderer';
// import { Router } from 'react-router';
import { createRoot } from 'react-dom';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);

//Render the main React DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


