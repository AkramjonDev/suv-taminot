"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    phoneNumber: "",
    data: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendTelegramMessage = () => {
    const { firstName, phoneNumber, data } = formData;
    const message = `Ismi: ${firstName} \nTelefon raqami: ${phoneNumber} \nQo'shimcha ma'lumot: ${data}`;

    const botToken = "7163565383:AAFkh9hwTvlzMawkFCGJiwl63VqNGREuqp4";
    const chatId = "-1002213988966";

    return axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: message,
    });
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      phoneNumber: "",
      data: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendTelegramMessage();
      resetForm();
      notify();
    } catch (error) {
      console.log("Error handling form submission:", error);
    }
  };

  const notify = () => {
    toast.info("Sorovingiz jo'natildi");
  };

  return (
    <div
      id="contact"
      className="container flex flex-col lg:flex-row justify-center items-center lg:gap-8 p-4 lg:p-8"
    >
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
        <label htmlFor="firstName" className="text-gray-700 font-semibold">
          Ism
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
          className="p-3 border border-gray-300 rounded-lg outline-none bg-white"
        />
        <label htmlFor="phoneNumber" className="text-gray-700 font-semibold">
          Telefon raqam
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
          className="p-3 border border-gray-300 rounded-lg outline-none bg-white"
        />
        <label htmlFor="data" className="text-gray-700 font-semibold">
          Qo'shimcha savol
        </label>
        <textarea
          id="data"
          name="data"
          value={formData.data}
          onChange={handleInputChange}
          required
          className="p-3 border border-gray-300 rounded-lg h-32 outline-none bg-white"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Jo'natish
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactComponent;
