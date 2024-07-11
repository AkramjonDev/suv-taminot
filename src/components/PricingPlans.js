"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const standardPlan = {
  title: "Narxlar va narxlar bo'yicha shartnomalar",
  price: "580 so'm/kub",
  description:
    "O'zbekiston Respublikasi Moliya vazirligi tomonidan shartnoma va ruxsatnoma",
  images: ["/documents/narxlar.jpg", "/documents/moliya.jpg"],
};

const PricingTable = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

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
          <p className="text-center mb-4">{standardPlan.description}</p>
          <div className="accordion">
            <button
              onClick={toggleAccordion}
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200"
            >
              Narxlar bo'yicha hujjatlarni ko'rish
            </button>
            {isOpen && (
              <div className="mt-4">
                {standardPlan.images.map((image, index) => (
                  <div key={index} className="mb-4">
                    <img
                      src={image}
                      alt={`Plan image ${index + 1}`}
                      className="w-full rounded-lg"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link href={"#contact"} className="">
            <p className="w-full py-2 flex justify-center bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200 mt-4">
              Servisdan foydalanish
            </p>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PricingTable;
