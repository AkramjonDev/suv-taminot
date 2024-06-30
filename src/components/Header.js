"use client";
import { useState } from "react";
import Link from "next/link";
import bgimg from "../../public/images/1687169826_.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="flex items-center justify-between p-4 border-b-2 border-gray-300">
          <div className="text-2xl font-bold tracking-widest">Suv Ta'minot</div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
          <ul
            className={`flex-col md:flex-row md:flex items-center space-y-2 md:space-y-0 md:space-x-6 ${
              isMenuOpen ? "flex" : "hidden"
            } transition-all duration-500 ease-in-out transform ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-20 opacity-0"
            } md:opacity-100 md:translate-y-0`}
          >
            <li className="relative">
              <Link href="/">
                <p className="hover:text-gray-600">YANGILIKLAR</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <p className="hover:text-gray-600">NARXLARIMIZ</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <p className="hover:text-gray-600">KONTAKTLAR</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
