import { ShoppingBag, Search, CreditCard, Package } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Find Products",
      description: "Browse our premium collection.",
    },
    {
      icon: ShoppingBag,
      title: "Add to Cart",
      description: "Select your favorite items.",
    },
    {
      icon: CreditCard,
      title: "Place Order",
      description: "Confirm your purchase securely.",
    },
    {
      icon: Package,
      title: "Get Delivered",
      description: "Receive at your doorstep.",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <PageContainer>
        {/* 📝 Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-3">
            How It Works
          </h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Simple steps to get your favorite products delivered
          </p>
        </div>

        {/* 📦 Steps Grid */}
        <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-soft">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="flex items-start gap-4 relative">
                  {/* Icon Circle */}
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#0f2e26] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>

                  {/* Text */}
                  <div className="pt-1">
                    <h3 className="text-lg lg:text-xl font-heading font-bold text-secondary-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-secondary-600 leading-snug">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow — Desktop Only (last item ke baad nahi) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 xl:-right-6">
                      <svg
                        width="40"
                        height="20"
                        viewBox="0 0 40 20"
                        fill="none"
                        className="text-secondary-300"
                      >
                        <path
                          d="M0 10H38M38 10L30 3M38 10L30 17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default HowItWorks;