import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const ScrollIndicator = () => {
  const handleScroll = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer z-20"
      onClick={handleScroll}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-montserrat font-semibold tracking-widest text-muted-foreground">
          SCROLL
        </span>
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-6 h-6 text-primary" strokeWidth={2} />
        </motion.div>
      </div>
    </motion.div>
  );
};
