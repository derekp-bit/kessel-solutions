import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We begin by understanding your business, goals, and target audience through in-depth research and stakeholder interviews.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Based on our findings, we develop a comprehensive digital strategy aligned with your business objectives.",
  },
  {
    number: "03",
    title: "Design & Development",
    description: "Our team creates and builds your solution with meticulous attention to detail and quality.",
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description: "We launch your project and continuously monitor and refine performance based on real data.",
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export const Process = () => {
  return (
    <section id="process" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, hsl(220 10% 98%) 0%, hsl(220 10% 96% / 0.3) 100%)' }}
      />
      
      {/* Diagonal lines pattern */}
      <div 
        className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 50px,
            hsl(var(--foreground)) 50px,
            hsl(var(--foreground)) 51px
          )`
        }}
      />
      
      {/* Radial glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 80%, hsl(220 60% 25% / 0.03) 0%, transparent 50%)' }}
      />
      
      {/* Decorative numbered circles - faint */}
      <div className="absolute top-24 right-12 lg:right-24 opacity-[0.04] pointer-events-none hidden md:block">
        <svg width="120" height="120" viewBox="0 0 120 120" className="text-primary">
          <circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 4" />
          <circle cx="60" cy="60" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      
      {/* Corner accent */}
      <div 
        className="absolute bottom-0 left-0 w-40 h-40 pointer-events-none opacity-[0.025]"
        style={{
          clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%)',
          background: 'linear-gradient(45deg, hsl(var(--primary)), transparent)'
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
            Process
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat max-w-2xl">
            <span className="font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">A proven approach</span>{" "}
            <span className="font-light text-muted-foreground">to delivering</span>{" "}
            <span className="font-semibold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent">results.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {steps.map((step, index) => (
              <motion.div
                key={step.number}
                custom={index}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <TiltCard maxTilt={5} scale={1.02} className="h-full">
                  <div className="group relative h-full p-6 bg-background border border-border/50 shadow-sm hover:shadow-card hover:border-primary/30 transition-all duration-300">
                    {/* Step number */}
                    <span className="text-sm font-inter font-bold text-primary/60 mb-4 block relative">
                      Step {step.number}
                    </span>
                    <h3 className="text-xl md:text-2xl font-montserrat font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-3 group-hover:from-primary group-hover:to-primary/70 transition-all duration-300 relative">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground font-inter font-light leading-relaxed relative">
                      {step.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
