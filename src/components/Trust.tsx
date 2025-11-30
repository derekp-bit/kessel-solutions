import { motion } from "framer-motion";

const brands = [
  "BRAND A",
  "BRAND B",
  "BRAND C",
  "BRAND D",
  "BRAND E",
  "BRAND F",
];

export const Trust = () => {
  return (
    <section className="relative py-32 px-6 md:px-12">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-montserrat font-bold text-primary mb-4 tracking-widest">
            TRUSTED BY FORWARD-THINKING BRANDS
          </p>
          <h2 className="text-4xl md:text-6xl font-montserrat font-black">
            PARTNERSHIPS THAT ACCELERATE
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center justify-items-center"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-3xl md:text-4xl font-montserrat font-black text-muted-foreground/30 hover:text-foreground transition-colors duration-300 cursor-pointer"
            >
              {brand}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};
