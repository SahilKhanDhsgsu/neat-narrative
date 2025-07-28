
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default Index;
