import React from 'react';

const NewsletterForm = () => {
  return (
    <div className="bg-gray-800 text-white py-8 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Subscribe to my Newsletter</h2>

      <form
        action="https://gmail.us22.list-manage.com/subscribe/post?u=d3cd115d427da8c90657fab6c&amp;id=f843abe080&amp;f_id=00dcc2e1f0"
        method="post"
        target="_blank"
        noValidate
        className="space-x-4"
      >
        <input
          type="email"
          name="EMAIL"
          placeholder="Enter your email"
          className="p-2 rounded-l-md text-gray-800"
          required
        />
        <button
          type="submit"
          className="bg-brand text-white p-2 rounded-r-md hover:bg-orange-600"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
