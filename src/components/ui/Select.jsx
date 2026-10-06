"use client";

import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";

const Select = forwardRef(
  (
    {
      label,
      options = [],
      error,
      required = false,
      placeholder = "Select...",
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-secondary-800 mb-2">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          <select
            ref={ref}
            className={`
              w-full px-4 py-3 rounded-lg border-2 appearance-none
              transition-all duration-200 cursor-pointer
              ${
                error
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-primary-500 focus:ring-primary-100"
              }
              focus:outline-none focus:ring-4
              disabled:bg-gray-100 disabled:cursor-not-allowed
              pr-10
              ${className}
            `}
            {...props}
          >
            {placeholder && (
              <option value="">{placeholder}</option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400 pointer-events-none" />
        </div>

        {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;