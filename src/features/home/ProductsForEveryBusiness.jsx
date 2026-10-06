import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Star } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import PageContainer from "@/components/layout/PageContainer";

const ProductsForEveryBusiness = () => {
  const products = [
    { id: 1, name: "Luxury Perfume", price: 4500, oldPrice: 5500, badge: "Sale", category: "Perfumes" },
    { id: 2, name: "Gold Necklace Set", price: 3200, oldPrice: null, badge: null, category: "Jewelry" },
    { id: 3, name: "Skincare Bundle", price: 2800, oldPrice: 3500, badge: "Sale", category: "Skincare" },
    { id: 4, name: "Designer Handbag", price: 6500, oldPrice: null, badge: null, category: "Bags" },
    { id: 5, name: "Rose Gold Earrings", price: 1800, oldPrice: null, badge: "New", category: "Jewelry" },
    { id: 6, name: "Face Serum", price: 1500, oldPrice: 2000, badge: "Sale", category: "Skincare" },
    { id: 7, name: "Oud Wood Perfume", price: 5500, oldPrice: null, badge: null, category: "Perfumes" },
    { id: 8, name: "Diamond Studs", price: 4200, oldPrice: 5000, badge: "Sale", category: "Jewelry" },
    { id: 9, name: "Leather Tote Bag", price: 7200, oldPrice: null, badge: null, category: "Bags" },
    { id: 10, name: "Night Cream", price: 2200, oldPrice: null, badge: "New", category: "Skincare" },
    { id: 11, name: "Floral Perfume", price: 3800, oldPrice: null, badge: null, category: "Perfumes" },
    { id: 12, name: "Pearl Necklace", price: 2600, oldPrice: 3400, badge: "Sale", category: "Jewelry" },
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
                      <Badge variant={product.badge === "Sale" ? "danger" : "success"} size="sm">
                        {product.badge}
                      </Badge>
                    </div>
                  )}
                  <Image
                    src={`/assets/images/products/p-${product.id}.png`}
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

                <Button size="sm" variant="outline" fullWidth className="!text-xs !py-2">
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