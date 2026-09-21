import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Offers from './components/Offers/Offers'; // <-- Import komponen Offers
import Experience from './components/Experience/Experience';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="bg-darkBg min-h-screen text-white relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Offers /> {/* <-- Ditambahkan di sini */}
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;