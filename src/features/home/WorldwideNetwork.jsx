"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle, MapPin } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";

const WorldwideNetwork = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  // 🌍 Country Markers — positions match with real map
  const countries = [
    { name: "USA", top: "38%", left: "22%" },
    { name: "UK", top: "28%", left: "46%" },
    { name: "UAE", top: "48%", left: "60%" },
    { name: "Pakistan", top: "44%", left: "64%" },
    { name: "Brazil", top: "68%", left: "34%" },
    { name: "South Africa", top: "72%", left: "55%" },
    { name: "Australia", top: "75%", left: "84%" },
  ];

  const features = [
    "Trusted Manufacturing Partners",
    "Nationwide Delivery Network",
    "Cash on Delivery Available",
    "Safe & Secure Packaging",
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#0f2e26]">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* 📝 Left — Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-6">
              Nationwide Delivery,
              <br />
              <span className="text-primary-400">Trusted Service</span>
            </h2>

            <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed">
              We deliver across Pakistan with reliable courier partners —
              ensuring your products reach you safely and on time, every single
              time.
            </p>

            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 🗺️ Right — World Map Image */}
          <div className="relative w-full aspect-[3/2]">
            {/* Map Image */}
            <Image
              src="/assets/images/map/world-map.png"
              alt="Worldwide Delivery Network"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain opacity-90"
              priority
            />

            {/* 📍 Location Markers */}
            {countries.map((country) => (
              <div
                key={country.name}
                className="absolute group cursor-pointer z-10"
                style={{
                  top: country.top,
                  left: country.left,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={() => setHoveredCountry(country.name)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 -m-4 rounded-full bg-primary-500/30 animate-ping" />
                <div className="absolute inset-0 -m-3 rounded-full bg-primary-500/40 blur-md" />

                {/* Marker Icon */}
                <div className="relative w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-primary-500 flex items-center justify-center shadow-lg ring-2 ring-white/30 group-hover:scale-125 transition-transform">
                  <MapPin
                    className="w-4 h-4 lg:w-5 lg:h-5 text-white"
                    fill="white"
                  />
                </div>

                {/* Tooltip */}
                {hoveredCountry === country.name && (
                  <div className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-secondary-900 text-xs lg:text-sm font-bold px-3 py-2 rounded-lg shadow-strong z-20">
                    {country.name}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rotate-45" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default WorldwideNetwork;