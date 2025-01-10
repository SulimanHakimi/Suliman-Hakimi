import React from "react";
import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <NewsletterForm />
      </div>

      <div className="container mx-auto text-center mt-8">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/in/sulimanhakimi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand transition-colors"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://github.com/SulimanHakimi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand transition-colors"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
              alt="GitHub"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://twitter.com/SulimanHakimi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand transition-colors"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png"
              alt="Twitter"
              className="w-6 h-6"
            />
          </a>
        </div>

      <div className="mt-6 border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">
            Designed with <span className="text-brand font-bold">&hearts;</span>{" "}
            by Suliman Hakimi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
