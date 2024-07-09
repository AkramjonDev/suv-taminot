import bgimg from "../../public/images/1687169826_.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgimg.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Tabiiy suv ta'minoti va tozalash echimlari
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white">
            Yuqori sifatli tabiiy suv va keng qamrovli suv bilan ta'minlash
            uchun ishonchli va toza suv ta'minot hizmatlarini taklif qilamiz.
          </p>
          <Link
            href="tel:+998886633000"
            className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-full text-lg"
          >
            Manager bilan bog'lanish
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
