import { motion } from "framer-motion";
import { Lightbulb, Palette, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "DISCOVERY",
    description:
      "Deep dive into your business, audience, and objectives. We uncover opportunities and define success metrics.",
  },
  {
    number: "02",
    icon: Palette,
    title: "DESIGN",
    description:
      "Craft compelling visual systems and user experiences that align with your brand and drive conversions.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "DEVELOP",
    description:
      "Build lightning-fast, scalable solutions using modern technology stacks and best practices.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "OPTIMIZE",
    description:
      "Continuously analyze, test, and refine to maximize performance and accelerate growth.",
  },
];

export const Process = () => {
  return (
    <section id="process" className="relative py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 overflow-hidden">
      {/* Diagonal background accent - hidden on mobile */}
      <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-primary/5 to-transparent transform skew-x-12 translate-x-1/4" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 lg:mb-20"
        >
          <span className="text-xs font-montserrat font-medium tracking-[0.2em] text-primary mb-4 block">
            HOW WE WORK
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6">
            Our <span className="italic">Process</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl font-inter font-light">
            A proven methodology designed for exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Diagonal line connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-12 h-px bg-primary/30 transform -translate-y-1/2" />
              )}

              {/* Step number */}
              <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary/15 group-hover:text-primary/30 transition-colors duration-500 mb-4">
                {step.number}
              </div>

              <div className="flex items-start gap-4 md:gap-5">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 border border-primary/30 rounded-xl flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-300">
                    <step.icon className="w-5 h-5 md:w-6 md:h-6 text-primary transition-colors duration-300" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-inter font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Animated triangle accent - hidden on mobile */}
              <motion.div
                className="hidden md:block absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
