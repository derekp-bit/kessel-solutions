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

export const SecurityCompliance = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-sm font-inter font-medium text-muted-foreground mb-4 tracking-wide">
            Security
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-semibold text-foreground max-w-2xl">
            Enterprise-grade security standards.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-background border border-border"
              >
                <Icon className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-montserrat font-medium text-foreground mb-1">
                    {badge.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-inter">
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
