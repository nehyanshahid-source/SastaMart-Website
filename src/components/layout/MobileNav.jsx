"use client";

import Link from "next/link";
import { Home, ShoppingBag, Heart, User } from "lucide-react";

const MobileNav = () => {
  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Shop", href: "/shop", icon: ShoppingBag },
    { name: "Wishlist", href: "/wishlist", icon: Heart },
    { name: "Account", href: "/account", icon: User },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 shadow-strong">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center gap-1 px-4 py-2 text-secondary-600 hover:text-primary-600 transition-colors"
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;