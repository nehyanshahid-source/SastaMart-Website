"use client";

import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = forwardRef(
  (
    {
      label,
      type = "text",
      placeholder,
      error,
      helperText,
      required = false,
      icon: Icon,
      className = "",
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label className="block text-sm font-medium text-secondary-800 mb-2">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Input Wrapper */}
        <div className="relative">
          {/* Left Icon */}
          {Icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400">
              <Icon className="w-5 h-5" />
            </div>
          )}

          {/* Input Field */}
          <input
            ref={ref}
            type={inputType}
            placeholder={placeholder}
            className={`
              w-full px-4 py-3 rounded-lg border-2 transition-all duration-200
              ${Icon ? "pl-11" : ""}
              ${isPassword ? "pr-11" : ""}
              ${
                error
                  ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                  : "border-gray-300 focus:border-primary-500 focus:ring-primary-100"
              }
              focus:outline-none focus:ring-4
              disabled:bg-gray-100 disabled:cursor-not-allowed
              placeholder:text-secondary-400
              ${className}
            `}
            {...props}
          />

          {/* Password Toggle */}
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-400 hover:text-secondary-600"
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <p className="mt-1.5 text-sm text-red-500">{error}</p>
        )}

        {/* Helper Text */}
        {!error && helperText && (
          <p className="mt-1.5 text-sm text-secondary-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;