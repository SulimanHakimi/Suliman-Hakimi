import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-brand">SulimanHakimi</h1>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-brand">Home</a>
          <a href="#about" className="hover:text-brand">About</a>
          <a href="#portfolio" className="hover:text-brand">Portfolio</a>
          <a href="#blog" className="hover:text-brand">Blog</a>
          <a href="#services" className="hover:text-brand">Services</a>
          <a href="#contact" className="hover:text-brand">Contact</a>
          <a href="#book-time" className="hover:text-brand">Book Time</a> 
          <a href="#WebsitePriceEstimator" className="hover:text-brand">Price Estimator</a>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 space-y-4">
          <a href="#home" className="block hover:text-brand" onClick={closeMenu}>Home</a>
          <a href="#about" className="block hover:text-brand" onClick={closeMenu}>About</a>
          <a href="#portfolio" className="block hover:text-brand" onClick={closeMenu}>Portfolio</a>
          <a href="#blog" className="block hover:text-brand" onClick={closeMenu}>Blog</a>
          <a href="#services" className="block hover:text-brand" onClick={closeMenu}>Services</a>
          <a href="#contact" className="block hover:text-brand" onClick={closeMenu}>Contact</a>
          <a href="#book-time" className="block hover:text-brand" onClick={closeMenu}>Book Time</a> 
          <a href="#WebsitePriceEstimator" className="block hover:text-brand" onClick={closeMenu}>Price Estimator</a> 
        </nav>
      )}
    </header>
  );
};

export default Header;
