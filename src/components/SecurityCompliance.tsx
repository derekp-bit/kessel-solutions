import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Lock } from "lucide-react";
import { useRef } from "react";

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
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export const SecurityCompliance = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const shieldY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const shieldRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const shieldScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, hsl(220 10% 96% / 0.4) 0%, hsl(220 10% 96% / 0.6) 50%, hsl(220 10% 96% / 0.3) 100%)' }}
      />
      
      {/* Honeycomb/hex pattern - security inspired */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='49' viewBox='0 0 28 49' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9z'/%3E%3Cpath d='M0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Radial security glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 50%, hsl(220 60% 25% / 0.04) 0%, transparent 50%)' }}
      />
      
      {/* Angled top divider */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-background" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0%)' }} 
      />
      
      {/* Animated decorative shield pattern with parallax */}
      <motion.div 
        style={{ y: shieldY, rotate: shieldRotate, scale: shieldScale }}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 opacity-[0.04] pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-primary">
          <path d="M50 5 L90 25 L90 50 C90 75 50 95 50 95 C50 95 10 75 10 50 L10 25 Z" />
        </svg>
      </motion.div>
      
      {/* Floating lock icon */}
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-20 w-8 h-8 text-primary/10 pointer-events-none"
      >
        <Lock className="w-full h-full" />
      </motion.div>
      
      {/* Corner triangle accent */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.02, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none"
        style={{
          clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)',
          background: 'hsl(var(--primary))'
        }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-inter font-semibold text-primary/70 mb-4 tracking-widest uppercase"
          >
            Security
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat max-w-2xl">
            <span className="font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">Enterprise-grade</span>{" "}
            <span className="font-light text-muted-foreground">security</span>{" "}
            <span className="font-semibold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent">standards.</span>
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
                viewport={{ once: true }}
                whileHover={{ y: -4, x: 4, scale: 1.02 }}
                className="group relative flex items-start gap-4 p-6 bg-background border border-border hover:border-primary/30 transition-all duration-300"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div 
                  className="relative p-3 bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                </motion.div>
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
