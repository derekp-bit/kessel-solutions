import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Design",
    description: "User-centered interfaces designed to improve engagement and support business goals.",
    link: "/services/web-design",
  },
  {
    number: "02",
    title: "Development",
    description: "Reliable, scalable applications built with modern technology and best practices.",
    link: "/services/development",
  },
  {
    number: "03",
    title: "Performance Marketing",
    description: "Strategic campaigns focused on measurable results and sustainable growth.",
    link: "/services/performance-marketing",
  },
  {
    number: "04",
    title: "Analytics",
    description: "Comprehensive tracking and reporting to inform data-driven decisions.",
    link: "/services/analytics",
  },
  {
    number: "05",
    title: "Brand Strategy",
    description: "Clear positioning and cohesive visual identity that resonates with your audience.",
    link: "/services/brand-strategy",
  },
  {
    number: "06",
    title: "Automation",
    description: "Streamlined workflows that reduce manual work and improve operational efficiency.",
    link: "/services/automation-systems",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20">
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
            Services
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat max-w-2xl">
            <span className="font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">Comprehensive digital</span>{" "}
            <span className="font-light text-muted-foreground">services for</span>{" "}
            <span className="font-semibold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent">growing businesses.</span>
          </h2>
        </motion.div>

        <motion.div 
          ref={ref} 
          className="space-y-0"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              variants={itemVariants}
            >
              <Link to={service.link} className="group block">
                <div className="relative py-8 border-t border-border/60 flex items-start md:items-center justify-between gap-6 transition-all duration-300 hover:pl-4">
                  {/* Animated left border */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                  
                  {/* Subtle background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-start md:items-center gap-6 md:gap-12 flex-1 relative">
                    <span className="text-sm font-inter font-bold text-muted-foreground/60 w-8 group-hover:text-primary transition-colors duration-300">
                      {service.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-montserrat font-semibold text-foreground mb-2 md:mb-0 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-inter font-light md:hidden">
                        {service.description}
                      </p>
                    </div>
                    <p className="hidden md:block text-sm text-muted-foreground font-inter font-light max-w-sm group-hover:text-muted-foreground/80 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 relative" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
