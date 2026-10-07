import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Newsletter from "@/features/home/Newsletter";

// 🎨 Fonts
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

// 📝 SEO Metadata
export const metadata = {
  title: "SastaMart.pk — Perfumes, Jewelry, Skincare & Bags Online",
  description:
    "Pakistan's trusted online store for perfumes, jewelry, skincare, and ladies bags. Cash on Delivery available across Pakistan.",
  keywords: [
    "perfumes",
    "jewelry",
    "skincare",
    "ladies bags",
    "online shopping",
    "Pakistan",
    "cash on delivery",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen pb-20 lg:pb-0">{children}</main>
        <Newsletter />
        <Footer />
        <MobileNav />
        <ScrollToTop />
      </body>
    </html>
  );
}