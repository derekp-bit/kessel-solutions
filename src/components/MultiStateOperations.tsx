import { motion, useScroll, useTransform } from "framer-motion";
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
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const mapY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const mapOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, hsl(220 10% 96% / 0.5) 0%, hsl(220 10% 98% / 0.3) 50%, hsl(220 10% 96% / 0.4) 100%)' }}
      />
      
      {/* Circle pattern - map inspired with parallax */}
      <motion.div 
        style={{ y: mapY, opacity: mapOpacity }}
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.02 }}
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1.5px, transparent 1.5px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </motion.div>
      
      {/* Radial gradient accent */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 50%, hsl(220 60% 25% / 0.05) 0%, transparent 50%)' }}
      />
      
      {/* Floating location pins */}
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-primary/20 pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-primary/15 pointer-events-none"
      />
      
      {/* Decorative corner triangles */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.025, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-48 h-48 pointer-events-none"
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)',
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
