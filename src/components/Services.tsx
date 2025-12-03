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

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-muted/30 overflow-hidden">
      {/* Angled top divider */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-background" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 100%)' }} 
      />
      
      {/* Decorative line accent */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-primary/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-px h-24 bg-gradient-to-t from-primary/15 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-sm font-inter font-medium text-muted-foreground mb-4 tracking-wide">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-semibold text-foreground max-w-2xl">
            Comprehensive digital services for growing businesses.
          </h2>
        </motion.div>

        <div ref={ref} className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={service.link} className="group block">
                <div className="relative py-8 border-t border-border flex items-start md:items-center justify-between gap-6 transition-all duration-300 hover:pl-4">
                  {/* Animated left border */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                  
                  {/* Subtle background on hover */}
                  <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-start md:items-center gap-6 md:gap-12 flex-1 relative">
                    <span className="text-sm font-inter text-muted-foreground w-8 group-hover:text-primary transition-colors">
                      {service.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-montserrat font-medium text-foreground mb-2 md:mb-0 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-inter md:hidden">
                        {service.description}
                      </p>
                    </div>
                    <p className="hidden md:block text-sm text-muted-foreground font-inter max-w-sm">
                      {service.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 relative" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Angled bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" 
        style={{ clipPath: 'polygon(0 100%, 100% 0%, 100% 100%, 0 100%)' }} 
      />
    </section>
  );
};
