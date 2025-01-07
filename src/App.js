import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingForm from './components/Time-book';
import WebsitePriceEstimator from './components/dyc-price';

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Blog />
      <Services />
      <WebsitePriceEstimator/>
      <BookingForm/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
