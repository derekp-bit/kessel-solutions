import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import kesselLogo from "@/assets/kessel-logo.png";

export const CTASection = () => {
  const calendarUrl = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1Q62q6hWYC6wXM7nuhPdX10KbTUX0q4M4oNWZqlMS3L6PfTPUup43kqWlSYcHU-0GG3sSb29Ot";

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Subtle diagonal gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
      
      {/* Triangle motif pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="absolute top-0 right-0 w-96 h-96 -translate-y-1/4 translate-x-1/4" viewBox="0 0 100 100" fill="none">
          <polygon points="50,10 90,90 10,90" stroke="currentColor" strokeWidth="1" className="text-primary-foreground" fill="none" />
          <polygon points="50,25 80,80 20,80" stroke="currentColor" strokeWidth="0.5" className="text-primary-foreground" fill="none" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-72 h-72 translate-y-1/4 -translate-x-1/4 rotate-180" viewBox="0 0 100 100" fill="none">
          <polygon points="50,10 90,90 10,90" stroke="currentColor" strokeWidth="1" className="text-primary-foreground" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Brand Summary with Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-16"
        >
          <img 
            src={kesselLogo} 
            alt="Kessel Solutions" 
            className="h-28 md:h-36 lg:h-44 w-auto"
          />
          <div className="text-center md:text-left max-w-xl">
            <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed">
              A full-service digital agency delivering enterprise-grade web design, performance marketing, and automation solutions for 8-9 figure businesses across the nation.
            </p>
          </div>
        </motion.div>

        {/* CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10">
            Let's discuss how we can help you achieve your growth objectives with tailored digital solutions.
          </p>
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-colors"
          >
            <Calendar className="w-5 h-5" />
            Book a Strategy Call
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
