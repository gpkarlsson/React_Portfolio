import './App.css';
import React from 'react';

import AboutMe from './pages/AboutMe/AboutMe'
import Header from './components/Header/Header'


export default function App() {
  return (
      <main>
    <Header />
    <Navigation />
    <AboutMe />
    <Contact />
    <Portfolio />
    <Resume />
    <Footer />
    <Landing />
      </main>
 

    );
}

