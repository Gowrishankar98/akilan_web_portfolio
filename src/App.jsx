import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Precision from './components/Precision';
import TechStack from './components/TechStack';
import Career from './components/Career';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Precision />
        <TechStack />
        <Career />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
