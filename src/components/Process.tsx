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
    <section id="process" className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Diagonal background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-primary/5 to-transparent transform skew-x-12 translate-x-1/4" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-montserrat font-black mb-6">
            OUR PROCESS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl font-inter font-light">
            A proven methodology engineered for exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
              <div className="text-8xl font-montserrat font-black text-primary/20 group-hover:text-primary/40 transition-colors duration-500 mb-4">
                {step.number}
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-8 h-8 text-primary group-hover:text-black transition-colors duration-300" />
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-montserrat font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-inter font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Animated triangle accent */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
