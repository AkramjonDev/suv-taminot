"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

const newsArticles = [
  {
    title: "Yoz uchun suvni tejash bo'yicha maslahatlar",
    date: "June 20, 2024",
    description:
      "To‘plangan Yomg‘ir Suvidan Foydalanish: Yomg‘ir suvini yig‘ish va bog‘ yoki o‘simliklarni sug‘orishda undan foydalanish suvni tejashning yaxshi usuli bo‘lishi mumkin.\
      Suv O‘lchov Qilinadigan Jihozlar: Suv iste’molini kuzatish uchun suv hisoblagichlardan foydalanish, isrofni kamaytirishga yordam beradi.",
    link: "#",
    image: "https://uzsuv.uz/media/wallpapar/2021/02/IMG_20201122_194202_1.jpg",
  },
  {
    title: "Suv bilan farovonlik ham kirib boradi",
    date: "June 15, 2024",
    description:
      "Prezidentimizning parlamentga murojaatida 2020-yilda hududlardagi aholining markazlashgan ichimlik suvi bilan ta’minlanganlik darajasi 70,8 foizdan 73,0 foizga yetkazilgani alohida ta’kidlandi. Ya’ni ushbu yilda 1,2 million nafar yurtdoshimiz ilk bor markazlashgan ichimlik suvidan bahramand bo‘lgan.",
    link: "#",
    image: "https://uzsuv.uz/media/speech/image/2021/02/CC.jpg",
  },
  {
    title: "Yoz uchun suvni tejash bo'yicha maslahatlar",
    date: "June 20, 2024",
    description:
      "To‘plangan Yomg‘ir Suvidan Foydalanish: Yomg‘ir suvini yig‘ish va bog‘ yoki o‘simliklarni sug‘orishda undan foydalanish suvni tejashning yaxshi usuli bo‘lishi mumkin.\
      Suv O‘lchov Qilinadigan Jihozlar: Suv iste’molini kuzatish uchun suv hisoblagichlardan foydalanish, isrofni kamaytirishga yordam beradi.",
    link: "#",
    image: "https://uzsuv.uz/media/wallpapar/2021/02/IMG_20201122_194202_1.jpg",
  },
  {
    title: "Suv bilan farovonlik ham kirib boradi",
    date: "June 15, 2024",
    description:
      "Prezidentimizning parlamentga murojaatida 2020-yilda hududlardagi aholining markazlashgan ichimlik suvi bilan ta’minlanganlik darajasi 70,8 foizdan 73,0 foizga yetkazilgani alohida ta’kidlandi. Ya’ni ushbu yilda 1,2 million nafar yurtdoshimiz ilk bor markazlashgan ichimlik suvidan bahramand bo‘lgan.",
    link: "#",
    image: "https://uzsuv.uz/media/speech/image/2021/02/CC.jpg",
  },
];

const News = () => {
  return (
    <div id="news" className="bg-gray-100 p-4 md:p-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        So'ngi yangiliklar
      </h2>
      <Splide
        options={{
          type: "loop",
          perPage: 2,
          autoplay: true,
          interval: 3000,
          gap: "2rem",
          breakpoints: {
            640: { perPage: 1 },
            768: { perPage: 2 },
            1024: { perPage: 3 },
          },
        }}
        className="container mx-auto"
      >
        {newsArticles.map((article, index) => (
          <SplideSlide key={index}>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                width={400}
                height={200}
                src={article.image}
                alt={article.title}
                className="w-full h-48 md:h-64 lg:h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-2">{article.date}</p>
              <p className="text-gray-700 mb-4 line-clamp-3">
                {article.description}
              </p>
              <a
                href={article.link}
                className="text-blue-500 hover:text-blue-700"
              >
                Batafsil
              </a>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default News;
