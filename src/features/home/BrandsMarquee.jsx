import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";

const BrandsMarquee = () => {
  // 📋 Brand Logos (9 brands)
  const brands = [
    { name: "Amazon", logo: "/assets/images/brands/amazon.png" },
    { name: "Shopify", logo: "/assets/images/brands/shopify.png" },
    { name: "Alibaba", logo: "/assets/images/brands/alibaba.png" },
    { name: "Costco", logo: "/assets/images/brands/apple.png" },
    { name: "eBay", logo: "/assets/images/brands/ebay.png" },
    { name: "Global Sources", logo: "/assets/images/brands/globalsource.png" },
    { name: "Bose", logo: "/assets/images/brands/bose.png" },
    { name: "Samsung", logo: "/assets/images/brands/samsung.png" },
    { name: "Sony", logo: "/assets/images/brands/sony.png" },
  ];

  return (
    <section className="py-12 lg:py-16 bg-white border-y border-gray-100">
      <PageContainer>
        {/* 📝 Heading */}
        <p className="text-center text-xs sm:text-sm font-bold text-secondary-700 tracking-[0.2em] uppercase mb-12">
          Trusted By Leading Brands Worldwide
        </p>

        {/* 🎞️ Marquee */}
        <div className="relative overflow-hidden py-4">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Row */}
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="mx-8 lg:mx-14 flex items-center justify-center flex-shrink-0"
              >
                {/* ⭐ BARA SIZE — w-40 h-16 (pehle w-32 h-12 tha) */}
                <div className="relative w-32 h-14 sm:w-40 sm:h-16 lg:w-44 lg:h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 176px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default BrandsMarquee;