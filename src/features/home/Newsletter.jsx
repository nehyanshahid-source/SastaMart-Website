"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-[#0f2e26]">
      <PageContainer>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          {/* 📝 Left — Text */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white whitespace-nowrap">
              Subscribe Our Newsletter
            </h2>
            <div className="hidden sm:block w-px h-10 bg-white/20" />
            <p className="text-white/80 text-base lg:text-lg">
              Subscribe and get{" "}
              <span className="text-primary-400 font-bold">20% OFF</span> on
              your first order
            </p>
          </div>

          {/* 📧 Right — Form */}
          <form
            onSubmit={handleSubmit}
            className="flex w-full lg:w-auto max-w-lg"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full pl-12 pr-4 py-4 rounded-l-lg bg-white text-secondary-900 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
            </div>
            <button
              type="submit"
              className={`px-6 lg:px-8 py-4 rounded-r-lg font-bold text-sm lg:text-base transition-all ${
                subscribed
                  ? "bg-green-500 text-white"
                  : "bg-primary-500 hover:bg-primary-600 text-white"
              }`}
            >
              {subscribed ? (
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5" /> Subscribed!
                </span>
              ) : (
                "SUBMIT"
              )}
            </button>
          </form>
        </div>
      </PageContainer>
    </section>
  );
};

export default Newsletter;