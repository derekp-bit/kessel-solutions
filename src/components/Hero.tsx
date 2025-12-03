import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "./AnimatedCounter";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-32 pb-20 overflow-hidden">
      {/* Decorative geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Triangle accents */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96"
          style={{
            clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)',
            background: 'linear-gradient(135deg, hsl(var(--primary)), transparent)'
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.02 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-40 left-0 w-48 h-48 md:w-72 md:h-72"
          style={{
            clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
            background: 'linear-gradient(45deg, hsl(var(--primary)), transparent)'
          }}
        />
        
        {/* Floating dots with animation */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-primary/20" 
        />
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-2/3 right-1/3 w-1 h-1 rounded-full bg-primary/15" 
        />
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-primary/10" 
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
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
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-semibold leading-[1.1] mb-8">
              <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                We build digital experiences that drive business growth.
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground font-inter font-light leading-relaxed mb-10 max-w-lg">
              Strategic design and development for established businesses ready to elevate their digital presence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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
                  <span className="relative">Schedule a Consultation</span>
                  <ArrowRight className="ml-2 w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
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

          {/* Right stats with animated counters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-8 lg:gap-12"
          >
            {[
              { value: 8, suffix: "+", label: "Years of Experience" },
              { value: 50, suffix: "+", label: "Projects Delivered" },
              { value: 4, suffix: "", label: "States Served" },
              { value: 100, suffix: "%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="border-l-2 border-border pl-6 hover:border-primary transition-colors duration-300"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl md:text-5xl font-montserrat font-semibold text-foreground mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground font-inter">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
};
