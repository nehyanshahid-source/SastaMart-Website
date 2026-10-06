import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Gem,
  Droplets,
  ShoppingBag,
  FlaskConical,
  Crown,
} from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";

const CategoriesPreview = () => {
  const categories = [
    {
      name: "Perfumes",
      href: "/category/perfumes",
      icon: Sparkles,
      image: "/assets/images/categories/perfumes.png",
    },
    {
      name: "Jewelry",
      href: "/category/jewelry",
      icon: Gem,
      image: "/assets/images/categories/jewelry.png",
    },
    {
      name: "Skincare",
      href: "/category/skincare",
      icon: Droplets,
      image: "/assets/images/categories/skincare.png",
    },
    {
      name: "Ladies Bags",
      href: "/category/bags",
      icon: ShoppingBag,
      image: "/assets/images/categories/bags.png",
    },
    {
      name: "Fragrances",
      href: "/category/fragrances",
      icon: FlaskConical,
      image: "/assets/images/categories/fragrances.png",
    },
    {
      name: "Luxury Items",
      href: "/category/luxury",
      icon: Crown,
      image: "/assets/images/categories/luxury.png",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <PageContainer>
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-2">
            Shop By Category
          </h2>
          <p className="text-secondary-600">Explore our premium collections</p>
        </div>

        {/* 📦 Grid — gap kam (gap-3) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href={category.href}
                className="group block"
              >
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-primary-200 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  {/* 🖼️ Image Area */}
                  <div className="relative aspect-square bg-[#faf7f2] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* 🏷️ Pink Strip — Icon + Label */}
                  <div className="flex items-center gap-2 px-3 py-3 bg-[#fdf5f7]">
                    <div className="w-7 h-7 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-bold text-secondary-900 leading-tight truncate">
                      {category.name}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
};

export default CategoriesPreview;