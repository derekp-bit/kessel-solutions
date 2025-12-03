import { motion } from "framer-motion";

const states = ["Texas", "New York", "Florida", "Georgia"];

export const MultiStateOperations = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, hsl(220 10% 96% / 0.5) 0%, hsl(220 10% 98% / 0.3) 50%, hsl(220 10% 96% / 0.4) 100%)' }}
      />
      
      {/* Circle pattern - map inspired */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* Radial gradient accent */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 50%, hsl(220 60% 25% / 0.05) 0%, transparent 50%)' }}
      />
      
      {/* Decorative corner triangles */}
      <div className="absolute top-0 left-0 w-48 h-48 opacity-[0.025] pointer-events-none"
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
            <p className="text-sm font-inter font-medium text-muted-foreground mb-4 tracking-wide">
              Nationwide Reach
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-semibold text-foreground mb-6">
              Serving clients across the United States.
            </h2>
            <p className="text-muted-foreground font-inter leading-relaxed">
              Our team operates across multiple states, providing localized expertise with national capabilities. Remote collaboration available for all 50 states.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {states.map((state, index) => (
              <div
                key={state}
                className="p-6 bg-background border border-border"
              >
                <span className="text-lg font-montserrat font-medium text-foreground">
                  {state}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
