import React from 'react';

const NewsletterForm = () => {
  return (
    <div className=" text-white py-8 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6 text-brand">Subscribe to My Newsletter</h2>
      <p className="text-gray-300 mb-4 text-sm">
        Stay updated with the latest news, tips, and insights directly in your inbox.
      </p>

      <form
        action="https://gmail.us22.list-manage.com/subscribe/post?u=d3cd115d427da8c90657fab6c&amp;id=f843abe080&amp;f_id=00dcc2e1f0"
        method="post"
        target="_blank"
        noValidate
        className="flex justify-center items-center max-w-md mx-auto"
      >
        <input
          type="email"
          name="EMAIL"
          placeholder="Enter your email"
          className="p-3 flex-1 rounded-l-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand text-gray-800"
          required
        />
        <button
          type="submit"
          className="bg-brand hover:bg-orange-600 text-white p-3 rounded-r-md font-semibold transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
