import React from "react";

const reviews = [
  {
    id: 1,
    text: "Suliman Hakimi is not just a skilled developer but also a great friend. His work is top-notch!",
    name: "Jawad Hakimi",
    role: "Frontend Web Developer",
  },
  {
    id: 2,
    text: "I’ve seen Suliman’s passion for coding firsthand. He truly loves what he does, and it shows in his projects.",
    name: "Sabor Hakimi",
    role: "Software Engineer",
  },
  {
    id: 3,
    text: "Suliman helped me build my website, and the result was beyond expectations. Highly recommend working with him!",
    name: "Ali Khan",
    role: "Business Owner",
  },
];

const ReviewSection = () => {
  return (
    <section className="bg-white py-12" id="reviews">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What My Friends Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <p className="text-gray-700 italic mb-4">&quot;{review.text}&quot;</p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
