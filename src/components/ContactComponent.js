"use client";
import { useState } from "react";

const ContactComponent = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Имя:", name);
    console.log("Номер телефона:", phone);
    console.log("Сообщение:", message);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-8 p-4 lg:p-8">
      <div className="w-full lg:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.083764663527!2d71.80608397628177!3d40.38957807227548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bbdde272d8821b%3A0xa48eec50dfc5d204!2sApollon%20Injiniring!5e0!3m2!1sen!2sus!4v1688120594822!5m2!1sen!2sus"
          width="100%"
          height="500"
          className="border-0 rounded-lg shadow-lg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <form
        className="w-full lg:w-1/2 flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg mt-6 lg:mt-0"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="text-gray-700 font-semibold">
          Ism
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-3 border border-gray-300 rounded-lg outline-none"
        />
        <label htmlFor="phone" className="text-gray-700 font-semibold">
          Telefon raqam
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="p-3 border border-gray-300 rounded-lg outline-none"
        />
        <label htmlFor="message" className="text-gray-700 font-semibold">
          Qoshimcha savol
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="p-3 border border-gray-300 rounded-lg h-32 outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Jo'natish
        </button>
      </form>
    </div>
  );
};

export default ContactComponent;
