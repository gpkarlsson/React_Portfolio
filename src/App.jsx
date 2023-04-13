import './App.css';
import React from 'react';
import Landing from './pages/Home/Landing.jsx'
// import AboutMe from './pages/AboutMe'
// import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
      <main>
    <Navigation />
    <Landing />
   
    {/* <Header /> */}
    {/* <AboutMe />  */}
    {/* <Contact />
    <Portfolio />
    <Resume />*/}
    <Footer /> 
    
      </main>

    );
}

