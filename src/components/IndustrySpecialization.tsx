import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";

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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export const IndustrySpecialization = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20">
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
            Industries
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat max-w-2xl">
            <span className="font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">Deep expertise</span>{" "}
            <span className="font-light text-muted-foreground">across key</span>{" "}
            <span className="font-semibold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent">verticals.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <TiltCard maxTilt={5} scale={1.02} className="h-full">
                <div className="group h-full">
                  <div className="relative border-l-2 border-border group-hover:border-primary pl-6 transition-all duration-300 h-full bg-background/50 py-4 pr-4 shadow-sm hover:shadow-card">
                    {/* Glow effect on hover */}
                    <div className="absolute -left-px top-0 bottom-0 w-[2px] bg-primary opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                    
                    <h3 className="text-xl font-montserrat font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-2 group-hover:from-primary group-hover:to-primary/70 transition-all duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-muted-foreground font-inter font-light text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
