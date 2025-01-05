import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "KuntoX Online Shop Website",
      description: "An e-commerce website built using WordPress, showcasing e-commerce features.",
      link: "https://kuntox.fi", // Replace with actual project link
      image: "https://homedesignideas.help/wp-content/uploads/2021/03/Online-Shopping-Website-Templates-Free-Download-HTML5-With-CSS.jpg"
    },
    {
      title: "Wowautohuolto Website",
      description: "A WordPress website designed for an auto service business.",
      link: "https://Wowautohuolto.fi", // Replace with actual project link
      image: "https://vierityspalkki.fi/wp-content/uploads/2018/10/atoy-autohuolto-verkkosivuston-uudistus.jpg"
    },
    {
      title: "Binary Translator to English",
      description: "A tool for converting binary code to English and vice versa, demonstrating problem-solving skills.",
      link: "https://example.com", // Replace with actual project link
      image: "https://www.webnots.com/wp-content/uploads/2019/07/binary-translator.jpg"
    },
    {
      title: "Quran Karim App",
      description: "A mobile app providing access to the Quran, showcasing commitment to meaningful applications.",
      link: "https://example.com", // Replace with actual project link
      image: "https://al-quran-kareem-lkran-lkrym.en.softonic.com/android/img/ss-0.jpg"
    },
    {
      title: "Rapiditeration Full Website Clone",
      description: "A complete clone of the Rapiditeration website, demonstrating skills in replicating complex websites.",
      link: "https://example.com", // Replace with actual project link
      image: "https://www.slideshare.net/mbsnapp/rapid-iterative-design-a-minimalist-approach-to-requirementsgathering-and-interface-design-for-agile-software-developers"
    },
    {
      title: "Medical Website",
      description: "A healthcare-focused website, demonstrating versatility in different domains.",
      link: "https://example.com", // Replace with actual project link
      image: "https://colorlib.com/wp/wp-content/uploads/sites/2/medical-website-templates.jpg"
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-brand">My Portfolio</h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
