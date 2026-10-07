"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  ShoppingBag,
  Heart,
  ArrowLeft,
  Truck,
  ShieldCheck,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import PageContainer from "@/components/layout/PageContainer";
import { getProductBySlug, getProductsByCategory } from "@/lib/products";

export default function ProductPage({ params }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price) => `Rs. ${price.toLocaleString()}`;

  // ❌ Product Not Found
  if (!product) {
    return (
      <section className="py-20">
        <PageContainer>
          <div className="text-center max-w-md mx-auto">
            <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🔍</span>
            </div>
            <h1 className="text-3xl font-heading font-bold mb-4">
              Product Not Found
            </h1>
            <p className="text-secondary-600 mb-8">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/shop">
              <Button>
                <ArrowLeft className="w-4 h-4" />
                Back to Shop
              </Button>
            </Link>
          </div>
        </PageContainer>
      </section>
    );
  }

  // ✅ Related Products
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  // ✅ Discount Percentage
  const discountPercent = product.compareAtPrice
    ? Math.round(
        ((product.compareAtPrice - product.price) / product.compareAtPrice) *
          100
      )
    : 0;

  return (
    <section className="py-8 lg:py-12">
      <PageContainer>
        {/* 🔝 Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-secondary-500 mb-6 flex-wrap">
          <Link href="/" className="hover:text-primary-500">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-primary-500">
            Shop
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

        {/* 📦 Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* 🖼️ Image */}
          <div>
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
              {discountPercent > 0 && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="danger">-{discountPercent}%</Badge>
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
          </div>

          {/* 📝 Info */}
          <div>
            {/* Category */}
            <Link
              href={`/category/${product.category}`}
              className="text-sm text-primary-600 font-medium uppercase tracking-wide hover:underline"
            >
              {product.category}
            </Link>

            {/* Name */}
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mt-2 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
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
              <span className="text-4xl font-bold text-secondary-900">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <>
                  <span className="text-xl text-secondary-400 line-through mb-1">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                  <span className="text-sm font-bold text-green-600 mb-2">
                    Save {formatPrice(product.compareAtPrice - product.price)}
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
                <span className="text-red-500 font-medium">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-secondary-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity + Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="flex items-center border-2 border-gray-200 rounded-lg">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 hover:bg-gray-50 transition-colors"
                  aria-label="Decrease"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 font-bold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 hover:bg-gray-50 transition-colors"
                  aria-label="Increase"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <Button className="flex-1 !py-4 !text-base">
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </Button>

              <Button
                variant="outline"
                className="!py-4 !px-5"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-secondary-900">
                    Free Shipping
                  </p>
                  <p className="text-xs text-secondary-500">
                    Above Rs. 2000
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-secondary-900">
                    Cash on Delivery
                  </p>
                  <p className="text-xs text-secondary-500">
                    Pay on receive
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🎯 Related Products */}
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

        {/* 🔙 Back Link */}
        <div className="mt-12 text-center">
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