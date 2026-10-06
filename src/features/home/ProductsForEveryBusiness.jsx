import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingBag } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import PageContainer from "@/components/layout/PageContainer";

const ProductsForEveryBusiness = () => {
  const products = [
    {
      id: 1,
      name: "Luxury Perfume",
      price: 4500,
      oldPrice: 5500,
      badge: "Sale",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Gold Necklace Set",
      price: 3200,
      oldPrice: null,
      badge: null,
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Skincare Bundle",
      price: 2800,
      oldPrice: 3500,
      badge: "Sale",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Designer Handbag",
      price: 6500,
      oldPrice: null,
      badge: null,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      name: "Rose Gold Earrings",
      price: 1800,
      oldPrice: null,
      badge: "New",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
    },
    {
      id: 6,
      name: "Face Serum",
      price: 1500,
      oldPrice: 2000,
      badge: "Sale",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    },
    {
      id: 7,
      name: "Oud Wood Perfume",
      price: 5500,
      oldPrice: null,
      badge: null,
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop",
    },
    {
      id: 8,
      name: "Diamond Studs",
      price: 4200,
      oldPrice: 5000,
      badge: "Sale",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
    },
    {
      id: 9,
      name: "Leather Tote Bag",
      price: 7200,
      oldPrice: null,
      badge: null,
      image:
        "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=400&fit=crop",
    },
    {
      id: 10,
      name: "Night Cream",
      price: 2200,
      oldPrice: null,
      badge: "New",
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
    },
    {
      id: 11,
      name: "Floral Perfume",
      price: 3800,
      oldPrice: null,
      badge: null,
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop",
    },
    {
      id: 12,
      name: "Pearl Necklace",
      price: 2600,
      oldPrice: 3400,
      badge: "Sale",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
    },
  ];

  const formatPrice = (price) => `Rs. ${price.toLocaleString()}`;

  return (
    <section className="py-16 lg:py-20 bg-white">
      <PageContainer>
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-3">
            Products for Every Need
          </h2>
          <p className="text-secondary-600">
            Premium quality products for every occasion
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-primary-200 hover:shadow-medium transition-all duration-300"
            >
              <Link href={`/product/${product.id}`}>
                <div className="relative aspect-square bg-[#faf7f2] overflow-hidden">
                  {product.badge && (
                    <div className="absolute top-2 left-2 z-10">
                      <Badge
                        variant={product.badge === "Sale" ? "danger" : "success"}
                        size="sm"
                      >
                        {product.badge}
                      </Badge>
                    </div>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>

              <div className="p-3">
                <Link href={`/product/${product.id}`}>
                  <h3 className="text-sm font-semibold text-secondary-900 mb-1 line-clamp-2 min-h-[2.5rem] group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>

                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3 h-3 fill-primary-500 text-primary-500" />
                  <span className="text-xs text-secondary-500">4.8</span>
                </div>

                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="text-base font-bold text-secondary-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-xs text-secondary-400 line-through">
                      {formatPrice(product.oldPrice)}
                    </span>
                  )}
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  fullWidth
                  className="!text-xs !py-2"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
};

export default ProductsForEveryBusiness;