import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-brand">SulimanHakimi</h1>
        <nav className="space-x-4">
          <a href="#home" className="hover:text-brand">Home</a>
          <a href="#about" className="hover:text-brand">About</a>
          <a href="#portfolio" className="hover:text-brand">Portfolio</a>
          <a href="#blog" className="hover:text-brand">Blog</a>
          <a href="#services" className="hover:text-brand">Services</a>
          <a href="#contact" className="hover:text-brand">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
