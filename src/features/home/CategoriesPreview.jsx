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
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
    },
    {
      name: "Jewelry",
      href: "/category/jewelry",
      icon: Gem,
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
    },
    {
      name: "Skincare",
      href: "/category/skincare",
      icon: Droplets,
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    },
    {
      name: "Ladies Bags",
      href: "/category/bags",
      icon: ShoppingBag,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
    },
    {
      name: "Fragrances",
      href: "/category/fragrances",
      icon: FlaskConical,
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop",
    },
    {
      name: "Luxury Items",
      href: "/category/luxury",
      icon: Crown,
      image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href={category.href}
                className="group block"
              >
                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-square bg-[#faf7f2] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center gap-2 px-3 py-3.5 bg-[#fdf5f7]">
                    <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-bold text-secondary-900 leading-tight">
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