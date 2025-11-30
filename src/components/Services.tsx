import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Palette,
  Code,
  TrendingUp,
  BarChart3,
  Sparkles,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description:
      "Premium, conversion-focused interfaces that command attention and drive action.",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Lightning-fast, scalable solutions built with cutting-edge technology stacks.",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "Data-driven campaigns engineered to maximize ROI and accelerate growth.",
  },
  {
    icon: BarChart3,
    title: "Analytics Implementation",
    description:
      "Deep insights and tracking systems that illuminate the path to optimization.",
  },
  {
    icon: Sparkles,
    title: "Brand Strategy",
    description:
      "Distinctive positioning and visual identity that sets you apart from the noise.",
  },
  {
    icon: Zap,
    title: "Automation Systems",
    description:
      "Intelligent workflows that streamline operations and multiply efficiency.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-40 px-6 md:px-12 overflow-hidden">
      {/* Diagonal divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-montserrat font-black mb-8">
            CAPABILITIES
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl font-inter font-light">
            Full-spectrum digital services engineered to propel your brand
            forward.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group relative border-2 border-border bg-card p-10 transition-all duration-500 cyan-glow-hover cursor-pointer"
            >
              {/* Triangle corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <service.icon className="w-14 h-14 mb-8 text-primary transition-transform duration-500 group-hover:scale-110" />
              <h3 className="text-3xl font-montserrat font-bold mb-5 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-lg text-muted-foreground font-inter font-light leading-relaxed">
                {service.description}
              </p>

              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
