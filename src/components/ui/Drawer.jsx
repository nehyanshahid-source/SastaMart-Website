"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

const Drawer = ({
  isOpen,
  onClose,
  title,
  children,
  position = "right",
  size = "md",
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizes = {
    sm: "w-80",
    md: "w-96",
    lg: "w-[500px]",
  };

  const positions = {
    right: "right-0 top-0 h-full",
    left: "left-0 top-0 h-full",
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className={`fixed ${positions[position]} ${sizes[size]} bg-white shadow-strong animate-slide-in flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="text-lg font-serif text-secondary-900">{title}</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-secondary-600" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">{children}</div>
      </div>
    </div>
  );
};

export default Drawer;