import { motion } from "framer-motion";
import { Shield, Lock } from "lucide-react";

const badges = [
  {
    icon: Lock,
    title: "SSL/TLS Encryption",
    description: "End-to-end data security for all projects",
  },
  {
    icon: Shield,
    title: "PCI DSS Compliant",
    description: "Payment card industry security standards",
  },
];

const badgeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export const SecurityCompliance = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16"
        >
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-inter font-semibold text-primary/60 mb-5 tracking-[0.2em] uppercase"
          >
            Security
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat max-w-2xl">
            <span className="font-bold text-foreground">Enterprise-grade</span>{" "}
            <span className="font-light text-muted-foreground">security</span>{" "}
            <span className="font-semibold text-primary">standards.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={badgeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="group relative flex items-start gap-4 p-6 bg-background border border-border/60 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-card"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative p-3 bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300 border border-border/30">
                  <Icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="relative">
                  <h3 className="text-lg font-montserrat font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-1 group-hover:from-primary group-hover:to-primary/70 transition-all duration-300">
                    {badge.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-inter font-light">
                    {badge.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
