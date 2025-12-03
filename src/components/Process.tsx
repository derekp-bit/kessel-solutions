import { motion } from "framer-motion";

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

export const Process = () => {
  return (
    <section id="process" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
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
      
      {/* Large triangle watermark */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none"
        style={{
          clipPath: 'polygon(100% 0%, 30% 100%, 100% 100%)',
          background: 'linear-gradient(135deg, hsl(220 60% 25%), transparent)'
        }}
      />
      
      {/* Connecting line between steps */}
      <div className="absolute left-1/2 top-48 bottom-48 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden md:block opacity-50" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-sm font-inter font-medium text-muted-foreground mb-4 tracking-wide">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-semibold text-foreground max-w-2xl">
            A proven approach to delivering results.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
              whileHover={{ y: -4 }}
            >
              {/* Step number with glow on hover */}
              <span className="text-sm font-inter text-muted-foreground mb-4 block group-hover:text-primary transition-colors duration-300">
                {step.number}
              </span>
              <h3 className="text-xl md:text-2xl font-montserrat font-medium text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed">
                {step.description}
              </p>
              
              {/* Subtle underline on hover */}
              <div className="absolute -bottom-2 left-0 w-0 h-px bg-primary/30 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
