import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-32 pb-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-inter font-medium text-muted-foreground mb-6 tracking-wide">
              Digital Strategy & Design Agency
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-semibold leading-[1.1] mb-8 text-foreground">
              We build digital experiences that drive business growth.
            </h1>
            
            <p className="text-lg text-muted-foreground font-inter font-light leading-relaxed mb-10 max-w-lg">
              Strategic design and development for established businesses ready to elevate their digital presence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-foreground/20 hover:border-foreground/40 hover:bg-transparent text-foreground font-inter font-medium text-sm px-8 py-6 rounded-none"
              >
                View Our Work
              </Button>
            </div>
          </motion.div>

          {/* Right stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-8 lg:gap-12"
          >
            {[
              { value: "8+", label: "Years of Experience" },
              { value: "50+", label: "Projects Delivered" },
              { value: "4", label: "States Served" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="border-l-2 border-border pl-6">
                <div className="text-4xl md:text-5xl font-montserrat font-semibold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-inter">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
};
