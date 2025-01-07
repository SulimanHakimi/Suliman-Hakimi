import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="flex justify-center flex-col bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white text-center py-20"
    >
      <div className="relative w-52 h-52 self-center rounded-full overflow-hidden border-4 border-gradient-to-r from-pink-500 via-orange-500 to-red-500">
        <img
          className="w-full h-full object-cover rounded-full"
          src="https://media.licdn.com/dms/image/v2/D4D03AQEp4qksSwNcXw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731496707875?e=1741824000&v=beta&t=abF7hMg1PPIxwNPvM_BB82xZqaTgbwDl3hCOqUpdAko"
          alt="Suliman Hakimi"
        />
      </div>
      <h2 className="text-4xl font-bold mt-6">Hi, I’m Suliman Hakimi</h2>
      <p className="mt-4 text-lg">Your go-to developer for stunning and functional websites</p>
      <div className="mt-6">
        <a
          href="#portfolio"
          className="px-6 py-3 bg-white text-orange-500 font-semibold rounded-md mr-4"
        >
          View Portfolio
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
