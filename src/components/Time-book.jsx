import React, { useState } from "react";
import emailjs from "emailjs-com";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    duration: 1, // default to 1 hour
    dateTime: "", // New field for date and time
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailParams = {
      name: formData.name,
      email: formData.email,
      duration: formData.duration,
      dateTime: formData.dateTime,
      price: totalPrice,
    };

    emailjs
      .send(
        'service_sij9hag',
        'template_v3rjr84',
        emailParams,
        'Ufc6wG8fADGYUCvLV'
      )
      .then(
        (response) => {
          setStatus("Booking request sent successfully.");
          setFormData({ name: "", email: "", duration: 1, dateTime: "" });
          setTotalPrice(0);
        },
        (error) => {
          setStatus("Error sending booking request.");
        }
      );
  };

  return (
    <section id="book-time" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-brand">
        Book a Time for a Meeting
      </h2>
      <form onSubmit={handleSubmit} className="mt-8 max-w-xl lg:mx-auto md:mx-auto sm:mx-5">
        <div>
          <label className="block text-sm font-medium text-gray-600" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600" htmlFor="email">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600" htmlFor="duration">
            Meeting Duration (hours)
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            min="1"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600" htmlFor="dateTime">
            Choose Meeting Date and Time
          </label>
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 mt-5 bg-brand text-white font-semibold rounded-md"
        >
          Send Booking Request
        </button>
      </form>

      {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
    </section>
  );
};

export default BookingForm;
