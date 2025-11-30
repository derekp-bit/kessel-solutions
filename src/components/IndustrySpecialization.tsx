import { motion } from "framer-motion";
import { ShoppingCart, Laptop, DollarSign, HeartPulse, Briefcase } from "lucide-react";

const industries = [
  {
    icon: ShoppingCart,
    title: "E-Commerce & DTC",
    description: "Scaling online retail with conversion-optimized experiences",
  },
  {
    icon: Laptop,
    title: "SaaS & Tech",
    description: "Product-led growth and user acquisition systems",
  },
  {
    icon: DollarSign,
    title: "Financial Services",
    description: "Fintech platforms and trading solutions",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Wellness",
    description: "HIPAA-aware digital health solutions",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "B2B lead generation and enterprise platforms",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const IndustrySpecialization = () => {
  return (
    <section id="industries" className="py-20 md:py-32 px-4 md:px-6 lg:px-12 relative overflow-hidden">
      {/* Subtle triangle overlay */}
      <div className="absolute top-20 right-0 w-96 h-96 opacity-[0.02]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black mb-6 max-w-4xl">
            INDUSTRY <span className="text-primary">EXPERTISE</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-inter font-light max-w-3xl">
            Deep specialization across high-stakes verticals where precision and performance matter most.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group relative bg-background border border-border p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]"
              >
                {/* Triangle accent */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon points="100,0 100,100 0,0" fill="currentColor" className="text-primary" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary mb-6 transition-transform duration-500 group-hover:scale-110" />
                  <h3 className="text-xl md:text-2xl font-montserrat font-bold mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground font-inter font-light leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
