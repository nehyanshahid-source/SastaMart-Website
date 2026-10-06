import Hero from "@/features/home/Hero";
import BrandsMarquee from "@/features/home/BrandsMarquee";
import CategoriesPreview from "@/features/home/CategoriesPreview";
import PromoBanner from "@/features/home/PromoBanner";
import FeaturedProducts from "@/features/home/FeaturedProducts";
import HowItWorks from "@/features/home/HowItWorks";
import StatsBar from "@/features/home/StatsBar";
import ProductsForEveryBusiness from "@/features/home/ProductsForEveryBusiness";
import WorldwideNetwork from "@/features/home/WorldwideNetwork";
import Testimonials from "@/features/home/Testimonials";
import FAQ from "@/features/home/FAQ";
import Newsletter from "@/features/home/Newsletter";
import ScrollToTop from "@/features/home/ScrollToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandsMarquee />
      <CategoriesPreview />
      <PromoBanner />
      <FeaturedProducts />
      <HowItWorks />
      <StatsBar />
      <ProductsForEveryBusiness />
      <WorldwideNetwork />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <ScrollToTop/>
    </>
  );
}