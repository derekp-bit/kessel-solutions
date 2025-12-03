import { motion } from "framer-motion";

const industries = [
  {
    title: "E-Commerce",
    description: "Scaling online retail with conversion-optimized experiences",
  },
  {
    title: "SaaS & Technology",
    description: "Product-led growth and user acquisition systems",
  },
  {
    title: "Financial Services",
    description: "Fintech platforms and secure trading solutions",
  },
  {
    title: "Professional Services",
    description: "B2B lead generation and enterprise platforms",
  },
];

export const IndustrySpecialization = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-muted/20 overflow-hidden">
      {/* Decorative corner triangle */}
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-[0.03] pointer-events-none"
        style={{
          clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%)',
          background: 'hsl(var(--primary))'
        }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-sm font-inter font-medium text-muted-foreground mb-4 tracking-wide">
            Industries
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-semibold text-foreground max-w-2xl">
            Deep expertise across key verticals.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              whileHover={{ x: 8 }}
            >
              <div className="relative border-l-2 border-border group-hover:border-primary pl-6 transition-colors duration-300">
                {/* Glow effect on hover */}
                <div className="absolute -left-px top-0 bottom-0 w-[2px] bg-primary opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                
                <h3 className="text-xl font-montserrat font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
