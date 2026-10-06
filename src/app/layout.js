import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";

// 🎨 Fonts — Poppins (headings) + Inter (body)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "SastaMart.pk — Perfumes, Jewelry, Skincare & Bags Online",
  description:
    "Pakistan's trusted online store for perfumes, jewelry, skincare, and ladies bags. Cash on Delivery available across Pakistan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main className="min-h-screen pb-20 lg:pb-0">{children}</main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}