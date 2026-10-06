"use client";

import { Loader2 } from "lucide-react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled = false,
  className = "",
  ...props
}) => {
  // 🎨 Variants
  const variants = {
    primary:
      "bg-primary-500 hover:bg-primary-600 text-white shadow-soft hover:shadow-gold",
    secondary:
      "bg-secondary-900 hover:bg-secondary-800 text-white shadow-soft",
    outline:
      "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
    ghost:
      "text-primary-600 hover:bg-primary-50",
    danger:
      "bg-red-500 hover:bg-red-600 text-white shadow-soft",
    success:
      "bg-green-500 hover:bg-green-600 text-white shadow-soft",
  };

  // 📏 Sizes
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-7 py-3.5 text-lg",
  };

  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2";

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  );
};

export default Button;