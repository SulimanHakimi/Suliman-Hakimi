import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-brand">About Me</h2>
      <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600">
        I’m a web developer specializing in creating beautiful and functional websites. With a passion for coding and design, I help businesses and individuals build their online presence.
      </p>
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Frontend Section */}
          <div className="text-gray-600">
            <h4 className="font-semibold text-lg text-gray-800">Frontend</h4>
            <ul className="mt-2">
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </div>

          <div className="text-gray-600">
            <h4 className="font-semibold text-lg text-gray-800">Backend</h4>
            <ul className="mt-2">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Passport.js</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className="text-gray-600">
            <h4 className="font-semibold text-lg text-gray-800">Tools</h4>
            <ul className="mt-2">
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Google Tools (Analytics, Ads, Console)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
