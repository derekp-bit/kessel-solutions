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
    <section id="process" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto max-w-6xl">
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
