import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_sij9hag', 
        'template_v3rjr84', 
        formData,
        'Ufc6wG8fADGYUCvLV' 
      )
      .then(
        (response) => {
          setStatus('Message sent successfully');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setStatus('Error sending message');
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-brand">Contact Me</h2>
      <form onSubmit={handleSubmit} className="mt-8 max-w-xl lg:mx-auto md:mx-auto sm:mx-5">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-brand text-white font-semibold rounded-md"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-gray-600">{status}</p>}
    </section>
  );
};

export default Contact;
