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
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.2) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.2) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Minimal geometric accents */}
      <motion.div
        className="absolute top-20 right-[10%] w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[104px] border-b-primary/10"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-32 left-[15%] w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-t-[70px] border-t-primary/10"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-card/50 mb-8 backdrop-blur-sm"
          >
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-montserrat font-semibold tracking-wider text-muted-foreground">
              FULL-SERVICE DIGITAL AGENCY
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-montserrat font-black leading-[1.05] mb-8 max-w-5xl"
          >
            STRATEGY. <span className="text-primary">DESIGN.</span>
            <br />
            RESULTS.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mb-12 font-inter font-light leading-relaxed"
          >
            We build <span className="text-foreground font-semibold">high-performing digital solutions</span> that help established businesses grow sustainably.
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
              asChild
              className="group relative bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-bold text-base md:text-lg px-10 py-7 transition-all duration-300"
            >
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1Q62q6hWYC6wXM7nuhPdX10KbTUX0q4M4oNWZqlMS3L6PfTPUup43kqWlSYcHU-0GG3sSb29Ot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center">
                  SCHEDULE A CONSULTATION
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-border text-foreground hover:bg-card hover:border-primary font-montserrat font-bold text-base md:text-lg px-10 py-7 transition-all duration-300"
            >
              VIEW OUR SERVICES
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 md:gap-16 max-w-3xl w-full"
          >
            {[
              { value: "8+", label: "Years Experience" },
              { value: "50+", label: "Projects Delivered" },
              { value: "24/7", label: "Client Support" },
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
