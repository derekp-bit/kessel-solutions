import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ContactFormModal } from "@/components/ContactFormModal";

export const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <footer className="relative py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-12 overflow-hidden">
      {/* Large faint triangle motifs in background */}
      <div className="absolute top-0 right-0 w-96 h-96 triangle-overlay opacity-[0.02]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-80 h-80 triangle-overlay opacity-[0.02]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-montserrat font-black mb-6 md:mb-8 max-w-4xl mx-auto">
            READY TO <span className="text-primary">ACCELERATE</span> YOUR
            DIGITAL PRESENCE?
          </h2>
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary/90 text-black font-montserrat font-bold text-sm md:text-base px-6 md:px-10 py-4 md:py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(0,229,255,0.5)]"
          >
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1Q62q6hWYC6wXM7nuhPdX10KbTUX0q4M4oNWZqlMS3L6PfTPUup43kqWlSYcHU-0GG3sSb29Ot"
              target="_blank"
              rel="noopener noreferrer"
            >
              SCHEDULE A CALL
            </a>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 pt-12 md:pt-16 border-t border-border">
          {/* Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground font-inter font-light leading-relaxed">
              Forward-pushing digital systems engineered for brands ready to
              transform their presence.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg md:text-xl font-montserrat font-bold mb-4 md:mb-6">CONTACT</h3>
            <div className="space-y-3 md:space-y-4">
              <a
                href="mailto:KesselSolutionsCo@gmail.com"
                className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="font-inter break-all">KesselSolutionsCo@gmail.com</span>
              </a>
              <a
                href="tel:+18453278025"
                className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="font-inter">845-327-8025</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-inter"
        >
          <p>&copy; 2024 Kessel Solutions. All rights reserved.</p>
          <div className="flex gap-6 md:gap-8">
            <a href="/privacy" className="hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
    </footer>
  );
};
