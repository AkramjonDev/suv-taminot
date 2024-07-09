"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const standardPlan = {
  title: "Standard",
  price: "580 so'm/kub",
  features: [
    "2 soatlik konsultatsiya",
    "Ilg'or suv tozalash xizmatlari",
    "Ikki haftalik texnik tekshiruvlar",
    "Telefon va elektron pochta orqali yordam",
    "Har chorakda tizimni baholash",
  ],
};

const notify = () => {
  toast.info("Sorovingiz jo'natildi");
};

const handleSubmit = (e) => {
  e.preventDefault();
  notify();
};

const PricingTable = () => {
  return (
    <div id="pricing" className="bg-gray-100 p-4 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Bizning narx rejamiz
      </h2>
      <div className="container mx-auto flex justify-center items-center">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full lg:w-1/2">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">
            {standardPlan.title}
          </h3>
          <p className="text-lg sm:text-xl font-bold mb-4 text-center">
            {standardPlan.price}
          </p>
          <ul className="mb-6">
            {standardPlan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center mb-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <button
            onClick={handleSubmit}
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200"
          >
            Sotib olish
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PricingTable;
