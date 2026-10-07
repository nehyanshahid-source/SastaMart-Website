"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-24 lg:bottom-8 right-6 z-50 w-12 h-12 rounded-full bg-primary-500 hover:bg-primary-600 text-white shadow-strong flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-gold animate-fade-in"
    >
      <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
    </button>
  );
};

export default ScrollToTop;