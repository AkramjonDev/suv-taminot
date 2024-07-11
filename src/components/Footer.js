import Link from "next/link";
import Image from "next/image";
import div from "../../public/images/div.svg";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        <div className="text-center md:text-left">
          <p className="mb-2 md:mb-0 text-white">
            &copy; "SHOXIMARDON RAMZIDDIN SERVIS" MCHJ. Barcha hizmatlar
            litsenziyalangan.
          </p>
          <p className="text-sm text-white">Aloqa uchun: +998 88 663 30 00</p>
        </div>
        <Link
          href="https://t.me/shox_dev"
          target="_blank"
          className="flex items-center gap-2 text-center md:text-left div-logo"
        >
          <Image src={div.src} alt="developer logo" width={42} height={48} />
          <div>
            <p className="text-sm text-white">
              Developed by <br /> <b>DIV-Group</b>
            </p>
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
