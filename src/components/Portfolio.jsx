import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "KuntoX Online Shop Website",
      description: "An e-commerce website built using WordPress, showcasing e-commerce features.",
      link: "https://kuntox.fi",
      image: "/kuntox.PNG"
    },
    {
      title: "Wowautohuolto Website",
      description: "A WordPress website designed for an auto service business.",
      link: "https://Wowautohuolto.fi",
      image: "/wow.PNG"
    },
    {
      title: "Quran Karim App",
      description: "A mobile app providing access to the Quran, showcasing commitment to meaningful applications.",
      link: "https://quran-karim-zeta.vercel.app/",
      image: "/quran.PNG"
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-brand">My Portfolio</h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 p-5 rounded-lg shadow-md">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <a href={project.link} className="text-brand mt-4 inline-block" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
