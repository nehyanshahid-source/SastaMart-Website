"use client";

import { use, useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  ShoppingBag,
  Eye,
  SlidersHorizontal,
  X,
  Plus,
  Minus,
  Truck,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import PageContainer from "@/components/layout/PageContainer";
import { products } from "@/lib/products";

export default function ShopPage({ searchParams }) {
  const params = use(searchParams);
  const initialQuery = params?.q || "";

  const [query] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 25000]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [quickViewQty, setQuickViewQty] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  // 📋 Categories with Subcategories
  const categories = [
    { value: "all", label: "All Products", subcategories: [] },
    {
      value: "perfumes",
      label: "Perfumes",
      subcategories: ["Men", "Women", "Unisex", "Oud"],
    },
    {
      value: "jewelry",
      label: "Jewelry",
      subcategories: ["Rings", "Necklaces", "Earrings", "Bracelets"],
    },
    {
      value: "skincare",
      label: "Skincare",
      subcategories: ["Face Wash", "Moisturizers", "Serums", "Sunscreen"],
    },
    {
      value: "bags",
      label: "Ladies Bags",
      subcategories: ["Handbags", "Clutches", "Tote Bags", "Wallets"],
    },
  ];

  // 🔍 Filter + Sort
  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (query.trim()) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (selectedSubcategory !== "all") {
      list = list.filter(
        (p) =>
          p.subcategory &&
          p.subcategory.toLowerCase() === selectedSubcategory.toLowerCase()
      );
    }

    list = list.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    if (inStockOnly) {
      list = list.filter((p) => p.inStock);
    }

    if (sortBy === "price-low") list.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") list.sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [
    query,
    selectedCategory,
    selectedSubcategory,
    sortBy,
    priceRange,
    inStockOnly,
  ]);

  // 📄 Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  // 🔄 Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedSubcategory, priceRange, inStockOnly, sortBy]);

  const formatPrice = (price) => `Rs. ${price.toLocaleString()}`;

  // 📄 Generate Page Numbers
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <section className="py-8 lg:py-12">
      <PageContainer>
        {/* 🔝 Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-secondary-500 mb-4">
            <Link href="/" className="hover:text-primary-500">
              Home
            </Link>
            <span>/</span>
            <span className="text-secondary-900 font-medium">Shop</span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-2">
                Shop
              </h1>
              <p className="text-secondary-600">
                Showing {startIndex + 1}-
                {Math.min(endIndex, filteredProducts.length)} of{" "}
                {filteredProducts.length} products
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-secondary-600 font-medium">
                Sort By:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 text-sm font-medium"
              >
                <option value="featured">Default Sorting</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* 📦 Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 🎯 Sidebar Filters (Desktop) — Scrollable */}
          <aside className="hidden lg:block">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 sticky top-32 max-h-[calc(100vh-9rem)] overflow-y-auto sidebar-scroll">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-heading font-bold text-secondary-900">
                  Filters
                </h2>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedSubcategory("all");
                    setPriceRange([0, 25000]);
                    setInStockOnly(false);
                  }}
                  className="text-xs text-primary-500 hover:text-primary-600 font-medium"
                >
                  Clear All
                </button>
              </div>

              {/* Price */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-secondary-900 mb-3">
                  Price
                </h3>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([+e.target.value, priceRange[1]])
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"
                    placeholder="0"
                  />
                  <span className="text-secondary-400">-</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], +e.target.value])
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"
                    placeholder="25000"
                  />
                </div>
              </div>

              {/* 🎯 Category — Always Visible Subcategories */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-secondary-900 mb-4">
                  Category
                </h3>
                <div className="space-y-6">
                  {categories.map((cat) => (
                    <div key={cat.value}>
                      <button
                        onClick={() => {
                          setSelectedCategory(cat.value);
                          setSelectedSubcategory("all");
                        }}
                        className={`block w-full text-left text-sm font-bold mb-2 pb-1 border-b-2 transition-colors ${
                          selectedCategory === cat.value
                            ? "text-primary-600 border-primary-300"
                            : "text-secondary-900 border-gray-100 hover:text-primary-500"
                        }`}
                      >
                        {cat.label}
                      </button>

                      {cat.subcategories.length > 0 && (
                        <div className="space-y-1 pl-3">
                          <button
                            onClick={() => {
                              setSelectedCategory(cat.value);
                              setSelectedSubcategory("all");
                            }}
                            className={`block w-full text-left text-sm py-1 transition-colors ${
                              selectedCategory === cat.value &&
                              selectedSubcategory === "all"
                                ? "text-primary-600 font-semibold"
                                : "text-secondary-600 hover:text-primary-500"
                            }`}
                          >
                            All {cat.label}
                          </button>

                          {cat.subcategories.map((sub) => (
                            <button
                              key={sub}
                              onClick={() => {
                                setSelectedCategory(cat.value);
                                setSelectedSubcategory(sub);
                              }}
                              className={`block w-full text-left text-sm py-1 transition-colors ${
                                selectedCategory === cat.value &&
                                selectedSubcategory.toLowerCase() ===
                                  sub.toLowerCase()
                                  ? "text-primary-600 font-semibold"
                                  : "text-secondary-600 hover:text-primary-500"
                              }`}
                            >
                              {sub}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <h3 className="text-sm font-bold text-secondary-900 mb-3">
                  Availability
                </h3>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-4 h-4 accent-primary-500"
                  />
                  <span className="text-sm text-secondary-700 group-hover:text-primary-500">
                    In Stock Only
                  </span>
                </label>
              </div>
            </div>
          </aside>

          {/* 🛍️ Products Area */}
          <div className="lg:col-span-3">
            <button
              onClick={() => setShowFilters(true)}
              className="lg:hidden w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 rounded-lg font-medium mb-4"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {paginatedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
                  {paginatedProducts.map((product) => (
                    <div
                      key={product.id}
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
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                          <button
                            onClick={() => {
                              setQuickViewProduct(product);
                              setQuickViewQty(1);
                            }}
                            className="w-11 h-11 rounded-full bg-white text-secondary-900 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors shadow-lg"
                            aria-label="Quick View"
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                          <button
                            className="w-11 h-11 rounded-full bg-primary-500 text-white flex items-center justify-center hover:bg-primary-600 transition-colors shadow-lg"
                            aria-label="Add to Cart"
                          >
                            <ShoppingBag className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      <div className="p-4">
                        <h3 className="text-sm font-semibold text-secondary-900 mb-1 line-clamp-2 min-h-[2.5rem] group-hover:text-primary-600 transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="w-3 h-3 fill-primary-500 text-primary-500" />
                          <span className="text-xs text-secondary-500">
                            {product.rating} ({product.reviewCount})
                          </span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-base font-bold text-secondary-900">
                            {formatPrice(product.price)}
                          </span>
                          {product.compareAtPrice && (
                            <span className="text-xs text-secondary-400 line-through">
                              {formatPrice(product.compareAtPrice)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 📄 Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-10">
                    {/* Prev */}
                    <button
                      onClick={() =>
                        setCurrentPage((p) => Math.max(1, p - 1))
                      }
                      disabled={currentPage === 1}
                      className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                      aria-label="Previous Page"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    {/* Page Numbers */}
                    {getPageNumbers().map((page, index) =>
                      page === "..." ? (
                        <span
                          key={`ellipsis-${index}`}
                          className="w-10 h-10 flex items-center justify-center text-secondary-400"
                        >
                          ...
                        </span>
                      ) : (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-10 h-10 rounded-lg font-semibold text-sm transition-colors ${
                            currentPage === page
                              ? "bg-primary-500 text-white"
                              : "border border-gray-200 text-secondary-700 hover:bg-primary-50 hover:border-primary-300"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}

                    {/* Next */}
                    <button
                      onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                      disabled={currentPage === totalPages}
                      className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                      aria-label="Next Page"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-2xl">
                <p className="text-xl text-secondary-500 mb-4">
                  No products found.
                </p>
                <Button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedSubcategory("all");
                    setPriceRange([0, 25000]);
                    setInStockOnly(false);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </PageContainer>

      {/* 🔍 Quick View Modal */}
      {quickViewProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setQuickViewProduct(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-strong w-full max-w-5xl max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white shadow-medium flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 lg:p-8">
              <div className="relative aspect-square bg-[#faf7f2] rounded-2xl overflow-hidden">
                {quickViewProduct.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge
                      variant={
                        quickViewProduct.badge === "Sale"
                          ? "danger"
                          : quickViewProduct.badge === "New"
                          ? "success"
                          : "gold"
                      }
                    >
                      {quickViewProduct.badge}
                    </Badge>
                  </div>
                )}
                <Image
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-xs text-primary-600 uppercase tracking-wide font-medium mb-2">
                  {quickViewProduct.category}
                </p>
                <h2 className="text-2xl lg:text-3xl font-heading font-bold text-secondary-900 mb-3">
                  {quickViewProduct.name}
                </h2>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(quickViewProduct.rating)
                            ? "fill-primary-500 text-primary-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-secondary-600">
                    {quickViewProduct.rating} ({quickViewProduct.reviewCount}{" "}
                    reviews)
                  </span>
                </div>

                <div className="flex items-end gap-3 mb-6 flex-wrap">
                  <span className="text-3xl font-bold text-secondary-900">
                    {formatPrice(quickViewProduct.price)}
                  </span>
                  {quickViewProduct.compareAtPrice && (
                    <>
                      <span className="text-lg text-secondary-400 line-through mb-1">
                        {formatPrice(quickViewProduct.compareAtPrice)}
                      </span>
                      <span className="text-xs font-bold text-green-600 mb-1.5 bg-green-50 px-2 py-1 rounded">
                        Save{" "}
                        {formatPrice(
                          quickViewProduct.compareAtPrice -
                            quickViewProduct.price
                        )}
                      </span>
                    </>
                  )}
                </div>

                <p className="text-secondary-600 mb-5 leading-relaxed text-sm">
                  {quickViewProduct.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-5 p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-xs text-secondary-500 mb-1">Category</p>
                    <p className="text-sm font-semibold text-secondary-900 capitalize">
                      {quickViewProduct.category}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-secondary-500 mb-1">
                      Sub-Category
                    </p>
                    <p className="text-sm font-semibold text-secondary-900">
                      {quickViewProduct.subcategory || "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-secondary-500 mb-1">
                      Availability
                    </p>
                    <p
                      className={`text-sm font-semibold ${
                        quickViewProduct.inStock
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {quickViewProduct.inStock ? "In Stock" : "Out of Stock"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-secondary-500 mb-1">SKU</p>
                    <p className="text-sm font-semibold text-secondary-900">
                      SM-{String(quickViewProduct.id).padStart(4, "0")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center border-2 border-gray-200 rounded-lg">
                    <button
                      onClick={() =>
                        setQuickViewQty((q) => Math.max(1, q - 1))
                      }
                      className="px-3 py-2.5 hover:bg-gray-50 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-5 font-bold">{quickViewQty}</span>
                    <button
                      onClick={() => setQuickViewQty((q) => q + 1)}
                      className="px-3 py-2.5 hover:bg-gray-50 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <Button className="flex-1 !py-3">
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-primary-500" />
                    <span className="text-xs text-secondary-600 font-medium">
                      Free Shipping
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary-500" />
                    <span className="text-xs text-secondary-600 font-medium">
                      Cash on Delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 📱 Mobile Filters Drawer */}
      {showFilters && (
        <div
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={() => setShowFilters(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-heading font-bold">Filters</h2>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-bold text-secondary-900 mb-3">
                Category
              </h3>
              <div className="space-y-5">
                {categories.map((cat) => (
                  <div key={cat.value}>
                    <button
                      onClick={() => {
                        setSelectedCategory(cat.value);
                        setSelectedSubcategory("all");
                      }}
                      className={`block w-full text-left text-sm font-bold mb-2 pb-1 border-b-2 transition-colors ${
                        selectedCategory === cat.value
                          ? "text-primary-600 border-primary-300"
                          : "text-secondary-900 border-gray-100"
                      }`}
                    >
                      {cat.label}
                    </button>

                    {cat.subcategories.length > 0 && (
                      <div className="space-y-1 pl-3">
                        <button
                          onClick={() => {
                            setSelectedCategory(cat.value);
                            setSelectedSubcategory("all");
                          }}
                          className={`block w-full text-left text-sm py-1 transition-colors ${
                            selectedCategory === cat.value &&
                            selectedSubcategory === "all"
                              ? "text-primary-600 font-semibold"
                              : "text-secondary-600"
                          }`}
                        >
                          All {cat.label}
                        </button>
                        {cat.subcategories.map((sub) => (
                          <button
                            key={sub}
                            onClick={() => {
                              setSelectedCategory(cat.value);
                              setSelectedSubcategory(sub);
                            }}
                            className={`block w-full text-left text-sm py-1 transition-colors ${
                              selectedCategory === cat.value &&
                              selectedSubcategory.toLowerCase() ===
                                sub.toLowerCase()
                                ? "text-primary-600 font-semibold"
                                : "text-secondary-600"
                            }`}
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-bold mb-3">Price</h3>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([+e.target.value, priceRange[1]])
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                />
                <span>-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], +e.target.value])
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                />
              </div>
            </div>

            <Button
              onClick={() => setShowFilters(false)}
              fullWidth
              className="!py-3"
            >
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}