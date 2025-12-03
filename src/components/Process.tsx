import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={containerRef} id="process" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent 0%, hsl(220 10% 96% / 0.15) 50%, transparent 100%)' }}
      />
      
      {/* Cross-hatch pattern */}
      <div 
        className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(45deg, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(-45deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Radial accent glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, hsl(220 60% 25% / 0.04) 0%, transparent 40%)' }}
      />
      
      {/* Floating geometric elements */}
      <motion.div 
        style={{ y: floatingY }}
        className="absolute top-1/4 left-10 w-8 h-8 pointer-events-none"
      >
        <div className="w-full h-full border border-primary/10 rounded-full" />
      </motion.div>
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 40]) }}
        className="absolute bottom-1/4 right-20 w-16 h-16 pointer-events-none opacity-[0.06]"
      >
        <div 
          className="w-full h-full"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', background: 'hsl(var(--primary))' }}
        />
      </motion.div>
      
      {/* Large triangle watermark */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none"
        style={{
          clipPath: 'polygon(100% 0%, 30% 100%, 100% 100%)',
          background: 'linear-gradient(135deg, hsl(220 60% 25%), transparent)'
        }}
      />
      
      {/* Animated connecting line between steps */}
      <div className="absolute left-1/2 top-48 bottom-48 w-px hidden md:block">
        <div className="absolute inset-0 bg-border/30" />
        <motion.div 
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary/40 via-primary/20 to-transparent"
          style={{ height: lineHeight }}
        />
      </div>
      
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
              className="group relative"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Large step number watermark */}
              <span className="absolute -top-4 -left-2 text-6xl font-montserrat font-bold text-primary/5 select-none">
                {step.number}
              </span>
              
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
              
              {/* Animated underline on hover */}
              <motion.div 
                className="absolute -bottom-2 left-0 h-px bg-gradient-to-r from-primary/50 to-transparent"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
