import React from 'react';
import NewsletterForm from './NewsletterForm';  // Import your NewsletterForm component

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">&copy; 2025 Suliman Hakimi. All rights reserved.</p>
        
        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 mb-6">
          <a href="https://www.linkedin.com/in/sulimanhakimi" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="https://github.com/SulimanHakimi" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/SulimanHakimi" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="Twitter" className="w-6 h-6" />
          </a>
        </div>
        
        {/* Add the Newsletter Form */}
        <NewsletterForm />
      </div>
    </footer>
  );
};

export default Footer;
