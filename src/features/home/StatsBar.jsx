import { Package, Users, Globe, ThumbsUp } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";

const StatsBar = () => {
  const stats = [
    {
      icon: Package,
      number: "5,000+",
      label: "Products Available",
    },
    {
      icon: Users,
      number: "10,000+",
      label: "Happy Customers",
    },
    {
      icon: Globe,
      number: "50+",
      label: "Cities Served",
    },
    {
      icon: ThumbsUp,
      number: "99%",
      label: "Customer Satisfaction",
    },
  ];

  return (
    <section className="py-10 lg:py-14 bg-white">
      <PageContainer>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0f2e26] to-[#1a4d3f]">
          {/* Decorative Blur */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 p-8 lg:p-12">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 lg:gap-4"
                >
                  {/* Icon Circle */}
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 lg:w-7 lg:h-7 text-primary-400" />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-2xl lg:text-4xl font-heading font-extrabold text-white leading-none mb-1">
                      {stat.number}
                    </p>
                    <p className="text-xs lg:text-sm text-white/70 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default StatsBar;