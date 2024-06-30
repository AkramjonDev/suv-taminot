// "use client";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/splide.min.css";
// import Image from "next/image";
// import Link from "next/link";

// const newsData = [
//   {
//     title: "Suv bilan farovonlik ham kirib boradi",
//     date: "2021-02-08 16:16",
//     description: `Prezidentimizning parlamentga murojaatida 2020-yilda hududlardagi aholining markazlashgan ichimlik suvi bilan ta'minlanganlik darajasi 70,8 foizdan 73,0 foizga yetkazilgani alohida ta'kidlandi. Ya'ni ushbu yilda 1,2 million nafar yurtimiz ilk bor markazlashgan ichimlik suvidan bahramand bo'lgan.`,
//     imageUrl:
//       "https://uzsuv.uz/media/speech/image/2024/03/photo_2024-03-19_15-03-30.jpg",
//   },
// ];

// const News2 = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Rahbarlar nutqlari</h2>
//       <Splide
//         options={{
//           type: "loop",
//           perPage: 1,
//           autoplay: true,
//         }}
//         aria-label="News Articles"
//       >
//         {newsData.map((news, index) => (
//           <SplideSlide key={index}>
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <Image
//                 width={400}
//                 height={300}
//                 src={news.imageUrl}
//                 alt={news.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-bold text-blue-600">
//                   {news.title}
//                 </h3>
//                 <p className="text-gray-600">{news.date}</p>
//                 <p className="mt-2 text-gray-700">{news.description}</p>
//               </div>
//             </div>
//           </SplideSlide>
//         ))}
//       </Splide>
//     </div>
//   );
// };

// export default News2;
