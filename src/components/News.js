"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

const newsArticles = [
  {
    title: "Yangi suv tozalash inshooti ochildi",
    date: "June 25, 2024",
    description:
      "Shahardagi suv sifatini yaxshilash maqsadida yangi zamonaviy suv tozalash inshooti foydalanishga topshirildi.",
    link: "#",
    image: "/images/news1.jpg",
  },
  {
    title: "Yoz uchun suvni tejash bo'yicha maslahatlar",
    date: "June 20, 2024",
    description:
      "Yozning jazirama fasli yaqinlashayotgan bir paytda suvni tejash bo'yicha samarali maslahatlar.",
    link: "#",
    image: "/images/news2.jpg",
  },
  {
    title: "Suv sifati hisobotlarini tushunish",
    date: "June 15, 2024",
    description:
      "Mahalliy suv sifati hisobotlarini qanday o'qish va tushunishni o'rganing.",
    link: "#",
    image: "/images/news3.jpg",
  },
];

const News = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        So'ngi yangiliklar
      </h2>
      <Splide
        options={{ type: "loop", perPage: 1, autoplay: true, interval: 3000 }}
      >
        {newsArticles.map((article, index) => (
          <SplideSlide key={index}>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                width={400}
                height={200}
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-2">{article.date}</p>
              <p className="text-gray-700 mb-4">{article.description}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default News;
