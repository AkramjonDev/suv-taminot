import Link from "next/link";
import Image from "next/image";
import div from "../../public/images/div.svg";
const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-4">
      <div className="container flex justify-between items-center">
        <p>&copy; 2024 Suv Ta'minot. Barcha huquqlar himoyalangan.</p>
        <p>Aloqa uchun: +998918317242</p>
        <Link
          href="https://t.me/shox_dev"
          target="_blank"
          className="flex gap-2 div-logo"
        >
          <Image src={div.src} alt="developer logo" width={42} height={48} />
          <div>
            <p>
              Developed by <br /> <b>DIV-Group</b>
            </p>
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
