import React from 'react';
import { FaDesktop, FaShoppingCart, FaSearch } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-brand">My Services</h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaDesktop className="w-12 h-12 mx-auto text-brand" />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Website Design</h3>
          <p className="mt-2 text-gray-600">Custom designs for your website to make it stand out and function perfectly on all devices.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaShoppingCart className="w-12 h-12 mx-auto text-brand" />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">E-Commerce Development</h3>
          <p className="mt-2 text-gray-600">Build your online store with features like product management, payment processing, and more.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaSearch className="w-12 h-12 mx-auto text-brand" />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">SEO Optimization</h3>
          <p className="mt-2 text-gray-600">Improve your website's ranking on search engines through SEO best practices and strategies.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
