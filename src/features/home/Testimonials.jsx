"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Khan",
      role: "Regular Customer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      text: "Excellent product quality and fast delivery. The perfume I ordered was 100% original. Will definitely order again!",
      rating: 5,
    },
    {
      name: "Fatima Ali",
      role: "Lahore",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      text: "Amazing jewelry collection at unbeatable prices. Cash on Delivery made it super easy. Highly recommend SastaMart!",
      rating: 5,
    },
    {
      name: "Bilal Ahmed",
      role: "Karachi",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      text: "The skincare products are genuine and effective. Customer service is very responsive. Very satisfied!",
      rating: 5,
    },
    {
      name: "Ayesha Malik",
      role: "Islamabad",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      text: "Bought a ladies bag — quality is top-notch! Packaging was excellent. Delivery was faster than expected.",
      rating: 5,
    },
    {
      name: "Hassan Raza",
      role: "Faisalabad",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      text: "Trusted online store for premium products. I've ordered 5 times — never disappointed. Recommended!",
      rating: 5,
    },
    {
      name: "Sara Ahmed",
      role: "Rawalpindi",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
      text: "The jewelry exceeded my expectations. Prices are reasonable and COD makes shopping risk-free!",
      rating: 5,
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <PageContainer>
        {/* 📝 Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-4">
            Trusted by Customers Nationwide
          </h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            See why thousands of customers trust us for premium products, competitive prices, and fast delivery.
          </p>
        </div>

        {/* 📦 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentTestimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-medium transition-shadow"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-primary-100">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Name + Role */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-heading font-bold text-secondary-900">
                  {t.name}
                </h3>
                <p className="text-sm text-secondary-500">{t.role}</p>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary-500 text-primary-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-secondary-600 text-center leading-relaxed">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>

        {/* 🎯 Pagination */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {/* Prev */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            className="p-2 rounded-full hover:bg-white disabled:opacity-30 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-secondary-700" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentPage === i
                    ? "bg-primary-500 w-8"
                    : "bg-secondary-300 hover:bg-secondary-400"
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={currentPage === totalPages - 1}
            className="p-2 rounded-full hover:bg-white disabled:opacity-30 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-secondary-700" />
          </button>
        </div>
      </PageContainer>
    </section>
  );
};

export default Testimonials;