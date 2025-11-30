import { motion } from "framer-motion";
import { ArrowRight, Triangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactFormModal } from "@/components/ContactFormModal";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { useState } from "react";
import logo from "@/assets/kessel-logo.png";

export const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen md:min-h-[120vh] flex items-center justify-center overflow-hidden px-4 md:px-6 lg:px-12 py-24 md:py-32">
      {/* Animated triangle overlays - hidden on mobile for performance */}
      <motion.div
        className="hidden md:block absolute top-20 right-20 w-96 h-96 triangle-overlay"
        animate={{
          rotate: [0, 45, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Triangle className="w-full h-full stroke-white" strokeWidth={0.5} />
      </motion.div>

      <motion.div
        className="hidden md:block absolute bottom-40 left-20 w-64 h-64 triangle-overlay"
        animate={{
          rotate: [45, 90, 45],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Triangle className="w-full h-full stroke-cyan-400" strokeWidth={0.5} />
      </motion.div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-montserrat font-black leading-[1.1] mb-8 md:mb-12"
            >
              WE BUILD <span className="text-primary">FORWARD-PUSHING</span> DIGITAL
              SYSTEMS THAT TRANSFORM YOUR PRESENCE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-12 font-inter font-light tracking-wide"
            >
              Premium web design, conversion-focused development, and performance
              marketing engineered for brands ready to accelerate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                onClick={() => setIsContactModalOpen(true)}
                className="group bg-primary hover:bg-primary/90 text-black font-montserrat font-bold text-sm md:text-base px-6 md:px-8 py-4 md:py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(0,229,255,0.5)]"
              >
                START YOUR PROJECT
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center items-center"
          >
            <img 
              src={logo} 
              alt="Kessel Solutions" 
              className="w-full max-w-md hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Animated decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
      />

      {/* Contact Form Modal */}
      <ContactFormModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
    </section>
  );
};
