"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const pricingPlans = [
  {
    title: "Basic Plan",
    price: "$29/har oy",
    features: [
      "1 soatlik konsultatsiya",
      "Asosiy suv tozalash xizmatlari",
      "Oylik texnik tekshiruvlar",
      "Hamyonbob narx",
    ],
  },
  {
    title: "Standard Plan",
    price: "$49/har oy",
    features: [
      "2 soatlik konsultatsiya",
      "Ilg'or suv tozalash xizmatlari",
      "Ikki haftalik texnik tekshiruvlar",
      "Telefon va elektron pochta orqali yordam",
      "Har chorakda tizimni baholash",
    ],
  },
  {
    title: "Premium Plan",
    price: "$99/har oy",
    features: [
      "4 soatlik konsultatsiya",
      "Kompleks suv tozalash xizmatlari",
      "Haftalik texnik tekshiruvlar",
      "24/7 ustuvor qo'llab-quvvatlash",
      "Oylik tizimni baholash",
      "Maxsus echimlar va yangilanishlar",
    ],
  },
];

const notify = () => {
  toast.info("Sorovingiz jo'natildi");
};

const handleSubmit = (e) => {
  e.preventDefault();
  notify();
};

const PricingTables = () => {
  return (
    <div id="pricing" className="bg-gray-100 p-4 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Bizning narx rejalarimiz
      </h2>
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full lg:w-1/3"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">
              {plan.title}
            </h3>
            <p className="text-lg sm:text-xl font-bold mb-4 text-center">
              {plan.price}
            </p>
            <ul className="mb-6">
              {plan.features.map((feature, idx) => (
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
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default PricingTables;
