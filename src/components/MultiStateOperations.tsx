import { motion } from "framer-motion";
import { useRef } from "react";

const states = ["Texas", "New York", "Florida", "Georgia"];

const stateVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export const MultiStateOperations = () => {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, hsl(220 10% 98%) 0%, hsl(220 10% 96% / 0.5) 100%)' }}
      />
      
      {/* Subtle cross pattern - map inspired */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Radial glow accent */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 30%, hsl(220 60% 25% / 0.03) 0%, transparent 50%)' }}
      />
      
      {/* Decorative corner triangles */}
      <div 
        className="absolute top-0 left-0 w-32 h-32 pointer-events-none opacity-[0.03]"
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)',
          background: 'hsl(var(--primary))'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none opacity-[0.02]"
        style={{
          clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)',
          background: 'hsl(var(--primary))'
        }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-inter font-semibold text-primary/70 mb-4 tracking-widest uppercase"
            >
              Nationwide Reach
            </motion.p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat mb-6">
              <span className="font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">Serving clients</span>{" "}
              <span className="font-light text-muted-foreground">across the</span>{" "}
              <span className="font-semibold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent">United States.</span>
            </h2>
            <p className="text-muted-foreground font-inter font-light leading-relaxed">
              Our team operates across multiple states, providing localized expertise with national capabilities. Remote collaboration available for all 50 states.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {states.map((state, index) => (
              <motion.div
                key={state}
                custom={index}
                variants={stateVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group p-6 bg-background border border-border hover:border-primary/30 transition-all duration-300 cursor-default"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
                
                <span className="text-lg font-montserrat font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/70 transition-all duration-300 relative">
                  {state}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
