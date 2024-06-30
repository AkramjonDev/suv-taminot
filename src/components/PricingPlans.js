import React from "react";

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

const PricingTables = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Bizning narx rejalarimiz
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">
              {plan.title}
            </h3>
            <p className="text-xl font-bold mb-4 text-center">{plan.price}</p>
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
            <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Sotib olish
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTables;
