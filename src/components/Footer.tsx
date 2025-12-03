import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "./MagneticButton";
import { Link } from "react-router-dom";
import logo from "@/assets/kessel-logo.png";

const services = [
  { name: "Web Design", href: "/services/web-design" },
  { name: "Development", href: "/services/development" },
  { name: "Performance Marketing", href: "/services/performance-marketing" },
  { name: "Analytics", href: "/services/analytics" },
  { name: "Brand Strategy", href: "/services/brand-strategy" },
  { name: "Automation", href: "/services/automation-systems" },
];

const company = [
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export const Footer = () => {
  return (
    <footer className="relative py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-border overflow-hidden bg-muted/30">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        <div 
          className="absolute top-0 right-0 w-96 h-96 opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle at top right, hsl(var(--primary)), transparent 60%)'
          }}
        />
        {/* Triangle accent */}
        <div 
          className="absolute bottom-0 left-0 w-64 h-64 opacity-[0.02]"
          style={{
            clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%)',
            background: 'hsl(var(--primary))'
          }}
        />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* CTA Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mb-16 md:mb-20 pb-16 md:pb-20 border-b border-border/50">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="text-sm font-inter font-semibold text-primary/70 mb-4 tracking-widest uppercase">
              Start a Project
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat mb-6">
              <span className="font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">Ready to elevate</span>{" "}
              <span className="font-light text-muted-foreground">your</span>{" "}
              <span className="font-semibold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent">digital presence?</span>
            </h2>
            <p className="text-muted-foreground font-inter font-light leading-relaxed mb-8">
              Let's discuss how we can help transform your business with strategic digital solutions.
            </p>
            <MagneticButton strength={0.2}>
              <Button
                size="lg"
                asChild
                className="group relative bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium text-sm px-8 py-6 rounded-none overflow-hidden"
              >
                <a
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1Q62q6hWYC6wXM7nuhPdX10KbTUX0q4M4oNWZqlMS3L6PfTPUup43kqWlSYcHU-0GG3sSb29Ot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  <span className="relative flex items-center">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <img src={logo} alt="Kessel Solutions" className="h-28 xl:h-36 invert opacity-60" />
          </motion.div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-montserrat font-bold text-lg tracking-tight text-foreground uppercase">
                Kessel Solutions
              </span>
            </Link>
            <p className="text-sm text-muted-foreground font-inter font-light leading-relaxed mb-6">
              Strategic digital solutions for businesses ready to grow.
            </p>
            <div className="flex gap-4">
              <a 
                href="mailto:KesselSolutionsCo@gmail.com"
                className="text-xs text-muted-foreground hover:text-primary transition-colors font-inter"
              >
                KesselSolutionsCo@gmail.com
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-montserrat font-semibold text-foreground mb-5 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="group text-sm text-muted-foreground hover:text-foreground transition-colors font-inter font-light flex items-center gap-1"
                  >
                    {service.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-montserrat font-semibold text-foreground mb-5 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="group text-sm text-muted-foreground hover:text-foreground transition-colors font-inter font-light flex items-center gap-1"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-montserrat font-semibold text-foreground mb-5 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:KesselSolutionsCo@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-inter font-light"
                >
                  KesselSolutionsCo@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18453278025"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-inter font-light"
                >
                  845-327-8025
                </a>
              </li>
              <li className="pt-2">
                <p className="text-xs text-muted-foreground/60 font-inter">
                  Texas • New York • Florida • Georgia
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-border/50">
          <p className="text-xs text-muted-foreground/60 font-inter">
            © {new Date().getFullYear()} Kessel Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors font-inter">
              Privacy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors font-inter">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
