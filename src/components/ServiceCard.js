import Image from "next/image";
import Link from "next/link";
import serviceImage2 from "../../public/images/service2.jpg";
import serviceImage4 from "../../public/images/service4.jpg";
import serviceImage5 from "../../public/images/service5.jpg";
import serviceImage6 from "../../public/images/service6.jpg";

const services = [
  {
    title: "Murakkab quvurlarni tozalash xizmatlari",
    description:
      "Sanoat standartlariga moslashtirilgan ilg'or tozalash yechimlarimiz bilan quvurlaringizni toza va samarali saqlang.",
    image: serviceImage2,
    link: "/pipe-cleaning",
  },
  {
    title: "Suv tizimini puxta baholash",
    description:
      "Ishonchliligi va samaradorligini ta'minlash uchun suv tozalash tizimlarining batafsil baholarini oling.",
    image: serviceImage4,
    link: "/water-assessment",
  },
  { 
    title: "Professional glikol tizimi xizmatlari",
    description:
      "Bizning professional tozalash va to'ldirish xizmatlarimiz bilan glikol tizimlaringizni saqlang va yaxshilang.",
    image: serviceImage5,
    link: "/glycol-system",
  },
  {
    title: "Eng zamonaviy filtrlash yechimlari",
    description:
      "Eng yaxshi ishlash uchun moʻljallangan zamonaviy filtrlash yechimlarimiz yordamida toza, yuqori sifatli suvga erishing.",
    image: serviceImage6,
    link: "/filtration-solutions",
  },
];

const ServiceCards = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-0">
      <h2
        className="text-center font-bold text-4xl mb-10
      "
      >
        Suvni tozalash xizmatlari
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
