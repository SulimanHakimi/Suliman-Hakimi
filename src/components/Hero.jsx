import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white text-center py-20"
    >
      <h2 className="text-4xl font-bold">Hi, I’m Suliman Hakimi</h2>
      <p className="mt-4 text-lg">Your go-to developer for stunning and functional websites</p>
      <div className="mt-6">
        <a
          href="#portfolio"
          className="px-6 py-3 bg-white text-brand font-semibold rounded-md mr-4"
        >
          View Portfolio
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-brand text-white font-semibold rounded-md"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
