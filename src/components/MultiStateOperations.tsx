import { motion } from "framer-motion";

const states = ["Texas", "New York", "Florida", "Georgia"];

export const MultiStateOperations = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-inter font-medium text-muted-foreground mb-4 tracking-wide">
              Nationwide Reach
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-semibold text-foreground mb-6">
              Serving clients across the United States.
            </h2>
            <p className="text-muted-foreground font-inter leading-relaxed">
              Our team operates across multiple states, providing localized expertise with national capabilities. Remote collaboration available for all 50 states.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {states.map((state, index) => (
              <div
                key={state}
                className="p-6 bg-background border border-border"
              >
                <span className="text-lg font-montserrat font-medium text-foreground">
                  {state}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
