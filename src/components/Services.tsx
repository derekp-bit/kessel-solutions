import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
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
      "User-centered interfaces designed to improve engagement and support business goals.",
    link: "/services/web-design",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Reliable, scalable applications built with modern technology and best practices.",
    link: "/services/development",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "Strategic campaigns focused on measurable results and sustainable growth.",
    link: "/services/performance-marketing",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Comprehensive tracking and reporting to inform data-driven decisions.",
    link: "/services/analytics",
  },
  {
    icon: Sparkles,
    title: "Brand Strategy",
    description:
      "Clear positioning and cohesive visual identity that resonates with your audience.",
    link: "/services/brand-strategy",
  },
  {
    icon: Zap,
    title: "Automation Systems",
    description:
      "Streamlined workflows that reduce manual work and improve operational efficiency.",
    link: "/services/automation-systems",
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
    <section id="services" className="relative py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 overflow-hidden">
      {/* Diagonal divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 lg:mb-20"
        >
          <span className="text-xs font-montserrat font-medium tracking-[0.2em] text-primary mb-4 block">
            WHAT WE DO
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6">
            Our <span className="italic">Capabilities</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl font-inter font-light">
            Comprehensive digital services tailored to meet your business objectives.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {services.map((service) => (
            <Link key={service.title} to={service.link}>
            <motion.div
              variants={item}
              className="group relative border border-border bg-card/30 hover:bg-card/60 p-6 md:p-8 rounded-2xl transition-all duration-500 hover:border-primary/30 cursor-pointer h-full"
            >
              <div className="absolute top-6 right-6 w-8 h-8 border border-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <service.icon className="w-8 h-8 md:w-10 md:h-10 mb-5 text-primary transition-transform duration-500 group-hover:scale-110" />
              <h3 className="text-lg md:text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground font-inter font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
