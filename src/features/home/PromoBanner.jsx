import Link from "next/link";
import { Package, ShoppingBag, ShieldCheck, Truck } from "lucide-react";
import Button from "@/components/ui/Button";
import PageContainer from "@/components/layout/PageContainer";

const PromoBanner = () => {
  const features = [
    {
      icon: Truck,
      title: "Cash on Delivery",
      description: "Pay When You Receive",
    },
    {
      icon: ShoppingBag,
      title: "Free Shipping",
      description: "Orders Above Rs. 2000",
    },
    {
      icon: ShieldCheck,
      title: "100% Original",
      description: "Authentic Products",
    },
  ];

  return (
    <section className="py-8 lg:py-10 bg-white">
      <PageContainer>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0f2e26] to-[#1a4d3f]">
          {/* Decorative Blur */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 lg:p-12">
            {/* 📝 Left — Heading */}
            <div className="lg:col-span-4">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white leading-tight mb-3">
                Premium Shopping
                <br />
                <span className="text-primary-400">Made Simple</span>
              </h2>
              <p className="text-white/70 text-sm lg:text-base">
                Discover our collection, delivered to your doorstep with Cash on Delivery.
              </p>
            </div>

            {/* 🎯 Middle — Features */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-3"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <p className="text-primary-400 font-bold text-sm lg:text-base">
                        {feature.title}
                      </p>
                      <p className="text-white/60 text-xs lg:text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 🔘 Right — CTA */}
            <div className="lg:col-span-2 flex justify-start lg:justify-end">
              <Link href="/shop">
                <Button className="!bg-primary-500 hover:!bg-primary-600 !text-white !px-6 !py-3.5 !text-sm !font-semibold !rounded-lg whitespace-nowrap">
                  Start Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default PromoBanner;