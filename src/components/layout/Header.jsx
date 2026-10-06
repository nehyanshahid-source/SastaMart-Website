"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
  X,
  Phone,
  LayoutGrid,
  Sparkles,
  Gem,
  Droplets,
  FlaskConical,
  Crown,
  ChevronDown,
} from "lucide-react";
import PageContainer from "./PageContainer";
import { categories } from "@/lib/categories";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 🖱️ Click Outside to Close Dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsCategoriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Perfumes", href: "/category/perfumes" },
    { name: "Jewelry", href: "/category/jewelry" },
    { name: "Skincare", href: "/category/skincare" },
    { name: "Contact Us", href: "/contact" },
    { name: "About Us", href: "/about" },
  ];

  // 🎨 Icon Map
  const iconMap = {
    Sparkles: Sparkles,
    Gem: Gem,
    Droplets: Droplets,
    ShoppingBag: ShoppingBag,
    FlaskConical: FlaskConical,
    Crown: Crown,
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
      {/* 🔝 Top Row: Logo + Search + Icons */}
      <PageContainer>
        <div className="flex items-center justify-between gap-6 py-4">
          {/* 🏷️ Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                <span className="text-white font-heading text-xl font-bold">
                  S
                </span>
              </div>
              <div className="leading-none">
                <h1 className="text-2xl font-heading font-bold text-secondary-900">
                  SastaMart
                </h1>
                <p className="text-[10px] text-primary-600 font-semibold tracking-widest uppercase">
                  Wholesale
                </p>
              </div>
            </div>
          </Link>

          {/* 🔍 Search */}
          <div className="hidden md:flex flex-1 max-w-2xl">
            <div className="relative w-full flex">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-5 py-3 border-2 border-gray-200 rounded-l-full focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button className="bg-secondary-900 hover:bg-primary-500 text-white px-8 rounded-r-full font-medium transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* 🎯 Icons */}
          <div className="flex items-center gap-2">
            <Link
              href="/account"
              className="hidden sm:flex p-2 hover:bg-primary-50 rounded-full transition-colors"
            >
              <User className="w-5 h-5 text-secondary-800" />
            </Link>

            <Link
              href="/wishlist"
              className="hidden sm:flex p-2 hover:bg-primary-50 rounded-full transition-colors"
            >
              <Heart className="w-5 h-5 text-secondary-800" />
            </Link>

            <Link
              href="/cart"
              className="p-2 hover:bg-primary-50 rounded-full transition-colors relative"
            >
              <ShoppingBag className="w-6 h-6 text-secondary-800" />
              <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </PageContainer>

      {/* 🔻 Bottom Row: All Categories Dropdown + Nav */}
      <div className="border-t border-gray-100">
        <PageContainer>
          <div className="flex items-center justify-between py-3">
            {/* 🎯 All Categories Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="hidden lg:flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
              >
                <LayoutGrid className="w-5 h-5" />
                <span>All Categories</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isCategoriesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* 📋 Dropdown Menu */}
              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-strong border border-gray-100 py-2 z-50 animate-fade-in">
                  {categories.map((cat) => {
                    const Icon = iconMap[cat.icon];
                    return (
                      <Link
                        key={cat.id}
                        href={`/category/${cat.slug}`}
                        onClick={() => setIsCategoriesOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-primary-50 text-secondary-800 hover:text-primary-600 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-primary-600" />
                        </div>
                        <p className="font-medium text-sm">{cat.name}</p>
                      </Link>
                    );
                  })}

                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link
                      href="/shop"
                      onClick={() => setIsCategoriesOpen(false)}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 text-primary-600 hover:bg-primary-50 font-semibold text-sm transition-colors"
                    >
                      View All Products →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Nav Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-secondary-800 hover:text-primary-600 font-medium transition-colors ${index === 0 ? "text-primary-600 border-b-2 border-primary-500" : ""
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Phone */}
            <div className="hidden lg:flex items-center gap-2 text-secondary-800">
              <Phone className="w-5 h-5 text-primary-500" />
              <span className="font-medium">Call To +92 300 1234567</span>
            </div>
          </div>
        </PageContainer>
      </div>

      {/* 📱 Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-fade-in">
          <PageContainer>
            <div className="py-4 space-y-4">
              <div className="relative flex">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-l-full focus:outline-none focus:border-primary-500"
                />
                <button className="bg-secondary-900 text-white px-5 rounded-r-full">
                  <Search className="w-5 h-5" />
                </button>
              </div>

              {/* Categories Mobile */}
              <div>
                <p className="text-xs font-bold text-secondary-400 uppercase tracking-wide mb-2">
                  Shop By Category
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/category/${cat.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 bg-primary-50 text-primary-700 rounded-lg font-medium text-sm text-center"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Nav Links Mobile */}
              <nav className="flex flex-col gap-1 pt-2 border-t border-gray-100">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-3 px-4 text-secondary-800 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </PageContainer>
        </div>
      )}
    </header>
  );
};

export default Header;