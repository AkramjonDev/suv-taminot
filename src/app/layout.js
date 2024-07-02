import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SHOXIMARDON RAMZIDDIN SERVIS",
  description:
    "RAMZIDDIN SERVIS sizga yuqori sifatli suv ta'minoti va tozalash xizmatlarini taklif qiladi. Bizning xizmatlarimiz orasida HVAC suv tozalash, maxsus quvurlarni tozalash, legionella nazorat qilish, suvni baholash, glikol tizimini tozalash va to'ldirish, va filtratsiya echimlari kiradi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
