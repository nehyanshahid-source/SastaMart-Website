import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import PageContainer from "@/components/layout/PageContainer";

const Hero = () => {
  return (
    <section className="relative bg-[#faf7f2] overflow-hidden">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4 py-12 lg:py-16">
          {/* 📝 Left Side — Text (5 columns) */}
          <div className="lg:col-span-5 text-center lg:text-left order-2 lg:order-1">
            {/* Top Badge */}
            <div className="inline-block border border-secondary-400 text-secondary-800 px-4 py-2 rounded-full text-xs font-medium mb-6 tracking-wide">
              PERFUMES • JEWELRY • SKINCARE • BAGS
            </div>

            {/* Heading — Reference Jaisa (2 lines) */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-secondary-900 leading-[1.05] tracking-tight mb-6">
              Quality Products.
              <br />
              <span className="text-primary-500">Smarter Shopping.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-secondary-600 mb-8 leading-relaxed">
              Discover our premium collection of perfumes, jewelry, skincare
              and ladies bags. Cash on Delivery available across Pakistan.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/shop">
                <Button
                  size="lg"
                  className="!bg-primary-500 hover:!bg-primary-600 !rounded-lg !px-8 !py-4 !text-base !font-semibold !text-white"
                >
                  Explore Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="!bg-secondary-900 hover:!bg-secondary-800 !rounded-lg !px-8 !py-4 !text-base !font-semibold !text-white"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* 🖼️ Right Side — Image with Blend (7 columns) */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <div className="relative w-full aspect-square lg:aspect-[7/6]">
              <Image
                src="/assets/images/hero/hero-bg.png"
                alt="Premium products — perfumes, jewelry, skincare, bags"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />

              {/* 🎨 Left Edge Fade — Image ko background ke saath blend karta hai */}
              <div className="absolute top-0 bottom-0 left-0 w-32 lg:w-48 bg-gradient-to-r from-[#faf7f2] to-transparent pointer-events-none" />

              {/* 🎨 Top Edge Fade (smooth) */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#faf7f2] to-transparent pointer-events-none" />

              {/* 🎨 Bottom Edge Fade (smooth) */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#faf7f2] to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default Hero;