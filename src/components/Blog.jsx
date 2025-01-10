import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: "Web Development Tips",
      description: "Best practices for writing clean and efficient code.",
      link: "#blog",
      image: "/images/1.jpg"
    },
    {
      title: "Tailwind CSS for Beginners",
      description: "A complete guide to using Tailwind CSS in your projects.",
      link: "#blog",
      image: "/images/2.jpg"
    },
  ];
  
  return (
    <section id="blog" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-brand">Blog</h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-2">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-md">
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-4">{post.title}</h3>
            <p className="mt-2 text-gray-600">{post.description}</p>
            <a href={post.link} className="text-brand mt-4 inline-block">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
