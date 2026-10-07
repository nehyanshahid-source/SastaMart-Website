"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { products } from "@/lib/products";

const SearchBar = ({ mobile = false, onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const wrapperRef = useRef(null);
  const router = useRouter();

  // 🔍 Live Search
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const filtered = products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 6);

    setResults(filtered);
    setIsOpen(filtered.length > 0);
    setSelectedIndex(-1);
  }, [query]);

  // 🖱️ Click Outside to Close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ⌨️ Keyboard Navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && results[selectedIndex]) {
        router.push(`/product/${results[selectedIndex].slug}`);
        handleClose();
      } else if (query.trim()) {
        router.push(`/shop?q=${encodeURIComponent(query)}`);
        handleClose();
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleClose = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
    if (onClose) onClose();
  };

  const formatPrice = (price) => `Rs. ${price.toLocaleString()}`;

  return (
    <div ref={wrapperRef} className={`relative w-full ${mobile ? "" : "max-w-2xl"}`}>
      {/* 🔍 Input */}
      <div className="flex">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => query.trim().length >= 2 && setIsOpen(true)}
            placeholder="Search for products..."
            className="w-full pl-12 pr-10 py-3 border-2 border-gray-200 rounded-l-full focus:outline-none focus:border-primary-500 transition-colors"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-4 h-4 text-secondary-500" />
            </button>
          )}
        </div>
        <button
          onClick={() => {
            if (query.trim()) {
              router.push(`/shop?q=${encodeURIComponent(query)}`);
              handleClose();
            }
          }}
          className="bg-secondary-900 hover:bg-primary-500 text-white px-6 lg:px-8 rounded-r-full font-medium transition-colors"
        >
          Search
        </button>
      </div>

      {/* 📋 Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-strong border border-gray-100 py-2 z-50 max-h-96 overflow-y-auto animate-fade-in">
          <p className="px-4 py-2 text-xs font-bold text-secondary-400 uppercase tracking-wide">
            Products
          </p>
          {results.map((product, index) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              onClick={handleClose}
              className={`flex items-center gap-3 px-4 py-2.5 hover:bg-primary-50 transition-colors ${
                selectedIndex === index ? "bg-primary-50" : ""
              }`}
            >
              {/* Image */}
              <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-[#faf7f2] flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-secondary-900 truncate">
                  {product.name}
                </p>
                <p className="text-xs text-secondary-500 capitalize">
                  {product.category}
                </p>
              </div>

              {/* Price */}
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-bold text-primary-600">
                  {formatPrice(product.price)}
                </p>
              </div>
            </Link>
          ))}

          {/* View All */}
          <Link
            href={`/shop?q=${encodeURIComponent(query)}`}
            onClick={handleClose}
            className="block text-center px-4 py-3 mt-1 border-t border-gray-100 text-primary-500 hover:bg-primary-50 font-semibold text-sm transition-colors"
          >
            View all results for "{query}" →
          </Link>
        </div>
      )}

      {/* No Results */}
      {isOpen && results.length === 0 && query.trim().length >= 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-strong border border-gray-100 p-6 z-50 text-center">
          <p className="text-secondary-600">
            No products found for "{query}"
          </p>
          <p className="text-sm text-secondary-400 mt-1">
            Try searching "perfume", "jewelry", or "skincare"
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;