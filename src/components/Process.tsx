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
    <section id="process" className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto max-w-6xl">
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
            >
              <span className="text-sm font-inter text-muted-foreground mb-4 block">
                {step.number}
              </span>
              <h3 className="text-xl md:text-2xl font-montserrat font-medium text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
