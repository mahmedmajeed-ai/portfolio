import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Publications from './components/Publications';
import Teaching from './components/Teaching';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Taskbar from './components/Taskbar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Research />
      <Publications />
      <Teaching />
      <Contact />
      <Footer />
      <Taskbar />
    </div>
  );
}

export default App;