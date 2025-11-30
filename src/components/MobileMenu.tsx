import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 text-foreground hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-background border-l border-border z-40 p-8"
            >
              <nav className="flex flex-col gap-6 mt-20">
                <a
                  href="/#services"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-montserrat font-semibold tracking-wider hover:text-primary transition-colors"
                >
                  SERVICES
                </a>
                <a
                  href="/#process"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-montserrat font-semibold tracking-wider hover:text-primary transition-colors"
                >
                  PROCESS
                </a>
                <a
                  href="/faq"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-montserrat font-semibold tracking-wider hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
