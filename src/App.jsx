import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DataJourney from './components/DataJourney';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#F3EBDD] text-[#17231A] min-h-screen selection:bg-[#C8FF3D] selection:text-[#17231A] flex flex-col font-sans">
      {/* Desktop subtle cursor interaction */}
      <CustomCursor />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Chapters */}
      <main className="flex-grow">
        <Hero />
        <About />
        <DataJourney />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
