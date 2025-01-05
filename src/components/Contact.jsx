import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Message sent successfully');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Error sending message');
      }
    } catch (error) {
      setStatus('Error sending message');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-brand">Contact Me</h2>
      <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto">
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
