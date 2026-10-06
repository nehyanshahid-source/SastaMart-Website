"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // 📋 FAQ — Products Related Questions
  const faqs = [
    {
      question: "Are your perfumes 100% original?",
      answer:
        "Yes, absolutely! All our perfumes are sourced directly from authorized distributors and are 100% authentic. We guarantee original products or your money back.",
    },
    {
      question: "Do you offer Cash on Delivery (COD)?",
      answer:
        "Yes! We offer Cash on Delivery across Pakistan. You can pay when you receive your order — no advance payment needed. COD is available on all orders.",
    },
    {
      question: "Are your jewelry pieces real gold or plated?",
      answer:
        "We offer both options! Our collection includes 22K gold plated, rose gold plated, and sterling silver jewelry. Each product description clearly mentions the material used.",
    },
    {
      question: "Is your skincare suitable for sensitive skin?",
      answer:
        "Yes! Our skincare collection includes products formulated for all skin types, including sensitive skin. Each product has detailed ingredient information and usage instructions.",
    },
    {
      question: "How long does delivery take within Pakistan?",
      answer:
        "Standard delivery takes 2-4 working days in major cities (Karachi, Lahore, Islamabad, etc.) and 4-6 working days for remote areas. You'll receive tracking details once dispatched.",
    },
    {
      question: "What is your return and exchange policy?",
      answer:
        "We offer a 7-day return policy for unused products in original packaging. For damaged, defective, or incorrect items, please contact us within 24 hours of delivery for a free replacement.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Currently, we only deliver within Pakistan. International shipping will be available soon. For bulk inquiries from overseas, please contact us directly.",
    },
    {
      question: "Are the ladies bags genuine branded?",
      answer:
        "We offer a mix of premium branded bags and high-quality replicas. Each product description clearly mentions the brand and authenticity status — no hidden surprises.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is dispatched, you'll receive a tracking number via SMS and email. You can also use the 'Track Order' option on our website to check the status anytime.",
    },
    {
      question: "Do you offer any discounts or promotions?",
      answer:
        "Yes! We regularly run seasonal sales, bundle deals, and first-order discounts. Subscribe to our newsletter and follow us on social media to stay updated on the latest offers.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <PageContainer>
        {/* 📝 Heading */}
        <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-4">
            Have Questions?
          </h2>
          <p className="text-base lg:text-lg text-secondary-600 leading-relaxed">
            We've answered the most common questions to help you shop with
            confidence.
          </p>
        </div>

        {/* 📋 FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-primary-300 bg-primary-50/30 shadow-soft"
                    : "border-gray-200 bg-white hover:border-primary-200"
                }`}
              >
                {/* 🎯 Question Row */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base lg:text-lg font-semibold transition-colors pr-2 ${
                      isOpen ? "text-primary-600" : "text-secondary-900"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-primary-500 text-white rotate-180"
                        : "bg-secondary-100 text-secondary-700"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-4 h-4" strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                {/* 📖 Answer — Expand / Collapse */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                      <div className="pt-2 border-t border-primary-100">
                        <p className="text-secondary-600 leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 📞 Contact CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-secondary-600 mb-5 text-base lg:text-lg">
            Still have questions? We're here to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-secondary-900 hover:bg-primary-500 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </PageContainer>
    </section>
  );
};

export default FAQ;