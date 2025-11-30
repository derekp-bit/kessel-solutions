import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactFormModal } from "@/components/ContactFormModal";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { useState } from "react";

export const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen md:min-h-[100vh] flex items-center justify-center overflow-hidden px-4 md:px-6 lg:px-12 py-24 md:py-32">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-[10%] w-64 h-64 border-2 border-primary/20 rotate-45"
        animate={{
          y: [0, -30, 0],
          rotate: [45, 60, 45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-[15%] w-40 h-40 border-2 border-primary/30"
        animate={{
          y: [0, 40, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 left-[5%] w-3 h-3 bg-primary rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-[20%] w-2 h-2 bg-primary rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-primary/50 bg-primary/5 mb-8 backdrop-blur-sm"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-montserrat font-semibold tracking-wider text-primary">
              DIGITAL ACCELERATION AGENCY
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-montserrat font-black leading-[1.05] mb-8 max-w-5xl"
          >
            BUILD. <span className="text-primary">SCALE.</span>
            <br />
            DOMINATE.
          </motion.h1>

          {/* Subheadline with gradient */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mb-12 font-inter font-light leading-relaxed"
          >
            We engineer <span className="text-foreground font-semibold">conversion-optimized digital systems</span> that transform ambitious brands into market leaders.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button
              size="lg"
              onClick={() => setIsContactModalOpen(true)}
              className="group relative bg-primary hover:bg-primary text-black font-montserrat font-bold text-base md:text-lg px-10 py-7 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                START YOUR PROJECT
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-primary text-foreground hover:bg-primary hover:text-black font-montserrat font-bold text-base md:text-lg px-10 py-7 transition-all duration-300"
            >
              VIEW CAPABILITIES
            </Button>
          </motion.div>

          {/* Stats/Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 md:gap-16 max-w-3xl w-full"
          >
            {[
              { value: "247%", label: "Avg Growth" },
              { value: "24/7", label: "Support" },
              { value: "100%", label: "Dedicated" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-inter font-light tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Animated decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-primary to-transparent"
      />

      {/* Contact Form Modal */}
      <ContactFormModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
    </section>
  );
};
