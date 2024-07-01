"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-blue-500 shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href={"/"} className="text-2xl font-bold tracking-widest text-white">
          SUV TA'MINOT
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-square btn-ghost"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
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
          className={`fixed inset-0 top-[4rem] bg-blue-500 md:static md:flex md:items-center md:space-x-6 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-0" : "translate-y-full md:translate-y-0"
          } md:flex-row md:space-y-0 md:opacity-100 md:translate-y-0 flex-col items-center space-y-4`}
        >
          <li className="text-center md:text-left">
            <Link href="#news" onClick={() => setIsMenuOpen(false)}>
              <p className="block px-4 py-2 hover:text-gray-300 text-white">
                YANGILIKLAR
              </p>
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link href="#pricing" onClick={() => setIsMenuOpen(false)}>
              <p className="block px-4 py-2 hover:text-gray-300 text-white">
                NARXLARIMIZ
              </p>
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
              <p className="block px-4 py-2 hover:text-gray-300 text-white">
                KONTAKTLAR
              </p>
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link href="/documents" onClick={() => setIsMenuOpen(false)}>
              <p className="block px-4 py-2 hover:text-gray-300 text-white">
                HUJJATLAR
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
