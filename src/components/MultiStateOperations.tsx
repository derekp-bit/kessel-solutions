import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const states = [
  "Texas", 
  "New York",
  "Florida",
  "Georgia",
];

export const MultiStateOperations = () => {
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-xs font-montserrat font-medium tracking-[0.2em] text-primary">
              NATIONWIDE REACH
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-5">
            Serving Clients <span className="italic">Across</span> the U.S.
          </h2>
          <p className="text-muted-foreground font-inter font-light max-w-xl mx-auto">
            Our team operates across multiple states, providing localized expertise with national capabilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 md:gap-5"
        >
          {states.map((state, index) => (
            <motion.div
              key={state}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="px-8 py-4 border border-border bg-card/30 hover:border-primary/50 hover:bg-primary/5 rounded-full transition-all duration-300"
            >
              <span className="font-montserrat font-medium text-sm tracking-wide">
                {state}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground text-sm font-inter mt-10"
        >
          Remote collaboration available for all 50 states
        </motion.p>
      </div>
    </section>
  );
};
