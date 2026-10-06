"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingBag, ArrowLeft } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import PageContainer from "@/components/layout/PageContainer";
import { getProductsByCategory, getCategoryBySlug } from "@/lib/products";

export default function CategoryPage({ params }) {
  const { slug } = use(params);
  const category = getCategoryBySlug(slug);
  const categoryProducts = getProductsByCategory(slug);

  const formatPrice = (price) => `Rs. ${price.toLocaleString()}`;

  if (!category) {
    return (
      <PageContainer>
        <div className="py-20 text-center">
          <h1 className="text-3xl font-heading font-bold mb-4">
            Category Not Found
          </h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </PageContainer>
    );
  }

  return (
    <section className="py-8 lg:py-12">
      <PageContainer>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-secondary-500 mb-6">
          <Link href="/" className="hover:text-primary-500">
            Home
          </Link>
          <span>/</span>
          <span className="text-secondary-900 font-medium">{category.name}</span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-3">
            {category.name}
          </h1>
          <p className="text-secondary-600">
            {categoryProducts.length} products available
          </p>

          {/* Subcategories */}
          <div className="flex flex-wrap gap-2 mt-4">
            {category.subcategories.map((sub) => (
              <span
                key={sub}
                className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-100 cursor-pointer transition-colors"
              >
                {sub}
              </span>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {categoryProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-primary-200 hover:shadow-medium transition-all duration-300"
              >
                <div className="relative aspect-square bg-[#faf7f2] overflow-hidden">
                  {product.badge && (
                    <div className="absolute top-2 left-2 z-10">
                      <Badge
                        variant={
                          product.badge === "Sale"
                            ? "danger"
                            : product.badge === "New"
                            ? "success"
                            : "gold"
                        }
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
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-3">
                  <h3 className="text-sm font-semibold text-secondary-900 mb-1 line-clamp-2 min-h-[2.5rem] group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-3 h-3 fill-primary-500 text-primary-500" />
                    <span className="text-xs text-secondary-500">
                      {product.rating}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-base font-bold text-secondary-900">
                      {formatPrice(product.price)}
                    </span>
                    {product.compareAtPrice && (
                      <span className="text-xs text-secondary-400 line-through">
                        {formatPrice(product.compareAtPrice)}
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
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-secondary-500">
              No products in this category yet.
            </p>
          </div>
        )}

        {/* Back */}
        <div className="mt-10 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}