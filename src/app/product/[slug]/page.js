"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingBag, Heart, ArrowLeft, Truck, ShieldCheck } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import PageContainer from "@/components/layout/PageContainer";
import { getProductBySlug, getProductsByCategory } from "@/lib/products";

export default function ProductPage({ params }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);

  const formatPrice = (price) => `Rs. ${price.toLocaleString()}`;

  if (!product) {
    return (
      <PageContainer>
        <div className="py-20 text-center">
          <h1 className="text-3xl font-heading font-bold mb-4">
            Product Not Found
          </h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </PageContainer>
    );
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <section className="py-8 lg:py-12">
      <PageContainer>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-secondary-500 mb-6 flex-wrap">
          <Link href="/" className="hover:text-primary-500">
            Home
          </Link>
          <span>/</span>
          <Link
            href={`/category/${product.category}`}
            className="hover:text-primary-500 capitalize"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-secondary-900 font-medium truncate">
            {product.name}
          </span>
        </div>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Image */}
          <div className="relative aspect-square bg-[#faf7f2] rounded-2xl overflow-hidden">
            {product.badge && (
              <div className="absolute top-4 left-4 z-10">
                <Badge
                  variant={
                    product.badge === "Sale"
                      ? "danger"
                      : product.badge === "New"
                      ? "success"
                      : "gold"
                  }
                >
                  {product.badge}
                </Badge>
              </div>
            )}
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Info */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-primary-500 text-primary-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-secondary-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-end gap-3 mb-6">
              <span className="text-3xl font-bold text-secondary-900">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <>
                  <span className="text-lg text-secondary-400 line-through mb-1">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                  <span className="text-sm font-bold text-green-600 mb-1.5">
                    {Math.round(
                      ((product.compareAtPrice - product.price) /
                        product.compareAtPrice) *
                        100
                    )}
                    % OFF
                  </span>
                </>
              )}
            </div>

            {/* Stock */}
            <div className="mb-6">
              {product.inStock ? (
                <span className="inline-flex items-center gap-2 text-green-600 font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  In Stock
                </span>
              ) : (
                <span className="text-red-500 font-medium">Out of Stock</span>
              )}
            </div>

            {/* Description */}
            <p className="text-secondary-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity + Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="flex items-center border-2 border-gray-200 rounded-lg">
                <button className="px-4 py-3 hover:bg-gray-50 font-bold">
                  −
                </button>
                <span className="px-6 font-bold">1</span>
                <button className="px-4 py-3 hover:bg-gray-50 font-bold">
                  +
                </button>
              </div>
              <Button className="flex-1 !py-3.5">
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </Button>
              <Button variant="outline" className="!py-3.5 !px-4">
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-primary-500" />
                <div>
                  <p className="text-sm font-semibold">Free Shipping</p>
                  <p className="text-xs text-secondary-500">Above Rs. 2000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-primary-500" />
                <div>
                  <p className="text-sm font-semibold">Cash on Delivery</p>
                  <p className="text-xs text-secondary-500">Pay on receive</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-secondary-900 mb-6">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.slug}`}
                  className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-primary-200 hover:shadow-medium transition-all"
                >
                  <div className="relative aspect-square bg-[#faf7f2] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-secondary-900 line-clamp-2 mb-2 group-hover:text-primary-600">
                      {p.name}
                    </h3>
                    <p className="text-base font-bold text-secondary-900">
                      {formatPrice(p.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </PageContainer>
    </section>
  );
}