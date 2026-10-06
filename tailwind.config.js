/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/features/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // 🎨 Brand Colors
      colors: {
        // Primary — Gold
        primary: {
          50:  "#fdf9f0",
          100: "#faf0d9",
          200: "#f4dfa8",
          300: "#edc96e",
          400: "#e5b140",
          500: "#d99a27",
          600: "#bc7a1e",
          700: "#965a1c",
          800: "#7a481e",
          900: "#663c1c",
        },
        // Secondary — Dark
        secondary: {
          50:  "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#1a1a1a",
        },
        // Accent — Soft Pink
        accent: {
          50:  "#fdf5f7",
          100: "#fbe8ee",
          200: "#f7d1dc",
          300: "#f0a9bf",
          400: "#e67a9c",
          500: "#d9527c",
          600: "#c43361",
          700: "#a5254d",
          800: "#892141",
          900: "#741f3b",
        },
      },

      // 🔤 Fonts
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
        serif: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },

      // 📦 Spacing
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },

      // 🌊 Border Radius
      borderRadius: {
        "4xl": "2rem",
      },

      // 🎭 Keyframes
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },

      // 🎬 Animations
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        "fade-in-up": "fade-in-up 0.4s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "marquee": "marquee 30s linear infinite",
        "pulse-slow": "pulse-slow 2s ease-in-out infinite",
      },

      // 🌑 Shadows
      boxShadow: {
        "soft": "0 2px 15px rgba(0, 0, 0, 0.06)",
        "medium": "0 4px 25px rgba(0, 0, 0, 0.10)",
        "strong": "0 10px 40px rgba(0, 0, 0, 0.15)",
        "gold": "0 4px 20px rgba(217, 154, 39, 0.25)",
      },

      // ⚡ Transitions
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
      },
    },
  },
  plugins: [],
};