import { motion } from "framer-motion";
import { ShoppingCart, Laptop, DollarSign, Briefcase } from "lucide-react";

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
    <section id="industries" className="py-20 md:py-28 px-4 md:px-6 lg:px-12 relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 md:mb-18"
        >
          <span className="text-xs font-montserrat font-medium tracking-[0.2em] text-primary mb-4 block">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5 max-w-4xl">
            Industry <span className="italic">Expertise</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-inter font-light max-w-xl">
            Deep specialization across verticals where precision and performance matter most.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group relative bg-card/30 border border-border p-6 md:p-8 rounded-2xl transition-all duration-500 hover:border-primary/30 hover:bg-card/50"
              >
                <div className="relative z-10">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary mb-5 transition-transform duration-500 group-hover:scale-110" />
                  <h3 className="text-lg md:text-xl font-display font-semibold mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-inter font-light leading-relaxed">
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
