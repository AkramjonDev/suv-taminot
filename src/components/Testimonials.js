"use client"
import { useState } from 'react';

const testimonials = [
  {
    name: "John Doe",
    feedback: "The service was fantastic and the team was professional.",
    company: "Company A"
  },
  {
    name: "Jane Smith",
    feedback: "Highly recommend for reliable and clean water solutions.",
    company: "Company B"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4">Testimonials</h2>
      <div className="text-center">
        <p className="text-xl italic">"{testimonials[currentIndex].feedback}"</p>
        <p className="mt-2 font-bold">- {testimonials[currentIndex].name}, {testimonials[currentIndex].company}</p>
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={handlePrev}
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
