import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/kessel-logo.png";

export const Footer = () => {
  return (
    <footer className="py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        {/* CTA Section with Logo */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-semibold text-foreground mb-8 max-w-2xl">
              Ready to elevate your digital presence?
            </h2>
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium text-sm px-8 py-6 rounded-none"
            >
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1Q62q6hWYC6wXM7nuhPdX10KbTUX0q4M4oNWZqlMS3L6PfTPUup43kqWlSYcHU-0GG3sSb29Ot"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={logo} alt="Kessel Solutions" className="h-32 md:h-40 lg:h-48 invert opacity-70" />
          </motion.div>
        </div>

        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pt-12 border-t border-border">
          <div>
            <p className="text-sm text-muted-foreground font-inter leading-relaxed">
              Strategic digital solutions for businesses ready to grow.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-montserrat font-medium text-foreground mb-4">
              Contact
            </h3>
            <div className="space-y-2">
              <a
                href="mailto:KesselSolutionsCo@gmail.com"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-inter"
              >
                KesselSolutionsCo@gmail.com
              </a>
              <a
                href="tel:+18453278025"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-inter"
              >
                845-327-8025
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-montserrat font-medium text-foreground mb-4">
              Legal
            </h3>
            <div className="space-y-2">
              <a
                href="/privacy"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-inter"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-inter"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground font-inter">
            © 2024 Kessel Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
