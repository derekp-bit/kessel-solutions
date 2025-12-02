import { motion } from "framer-motion";
import { FileCheck, CreditCard } from "lucide-react";

const badges = [
  {
    icon: FileCheck,
    title: "SSL/TLS Encryption",
    description: "End-to-end data security",
  },
  {
    icon: CreditCard,
    title: "PCI DSS",
    description: "Payment card industry standards",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

export const SecurityCompliance = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 lg:px-12 relative overflow-hidden">
      {/* Diagonal line accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-montserrat font-medium tracking-[0.2em] text-primary mb-4 block">
            TRUST & SECURITY
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-5">
            Enterprise-Grade <span className="italic">Security</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-inter font-light max-w-xl mx-auto">
            Built with compliance and security at the foundation.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group text-center"
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-4 border border-border rounded-2xl bg-card/30 transition-all duration-500 group-hover:border-primary/30 group-hover:bg-primary/5">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary transition-transform duration-500 group-hover:scale-110 relative z-10" />
                </div>
                <h3 className="text-sm md:text-base font-display font-semibold mb-1">
                  {badge.title}
                </h3>
                <p className="text-xs text-muted-foreground font-inter font-light">
                  {badge.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};
