import './App.css';
import React from 'react';

import {AboutMe, Contact, Footer, Header, Navigation, Portfolio, Resume, Landing} from './components';

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

