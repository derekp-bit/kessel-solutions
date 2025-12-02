import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const states = [
  "California",
  "Texas", 
  "New York",
  "Florida",
  "Illinois",
  "Washington",
  "Colorado",
  "Georgia",
];

export const MultiStateOperations = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 md:px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-montserrat font-semibold tracking-wider text-primary">
              NATIONWIDE REACH
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black mb-4">
            SERVING CLIENTS ACROSS THE U.S.
          </h2>
          <p className="text-muted-foreground font-inter font-light max-w-2xl mx-auto">
            Our team operates across multiple states, providing localized expertise with national capabilities. 
            Wherever your business is based, we're ready to partner with you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {states.map((state, index) => (
            <motion.div
              key={state}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="px-5 py-3 border border-border bg-card/50 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <span className="font-montserrat font-semibold text-sm tracking-wide">
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
          className="text-center text-muted-foreground text-sm font-inter mt-8"
        >
          Remote collaboration available for all 50 states
        </motion.p>
      </div>
    </section>
  );
};
