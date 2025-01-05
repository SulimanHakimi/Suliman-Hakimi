import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Import Footer component

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Blog />
      <Services />
      <Contact />
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default App;
