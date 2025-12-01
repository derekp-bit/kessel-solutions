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
    <section className="py-20 md:py-32 px-4 md:px-6 lg:px-12 relative overflow-hidden bg-background/50">
      {/* Diagonal line accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Triangle overlay */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 opacity-[0.02]">
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
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black mb-6">
            ENTERPRISE <span className="text-primary">SECURITY</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-inter font-light max-w-3xl mx-auto">
            Built with compliance and security at the foundation, meeting the standards your organization demands.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group text-center"
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 mb-4 border-2 border-border rounded-full transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]">
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary transition-transform duration-500 group-hover:scale-110 relative z-10" />
                </div>
                <h3 className="text-base md:text-lg font-montserrat font-bold mb-2">
                  {badge.title}
                </h3>
                <p className="text-sm text-muted-foreground font-inter font-light">
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
