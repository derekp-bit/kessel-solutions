import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "./AnimatedCounter";
import { MagneticButton } from "./MagneticButton";
import { TiltCard } from "./TiltCard";

// Simplified word-level animation for better performance
const wordAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
};

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          custom={wordIndex}
          variants={wordAnimation}
          initial="hidden"
          animate="visible"
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-32 pb-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 30%, hsl(220 60% 25% / 0.04) 0%, transparent 50%)' }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left content with staggered animations */}
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs font-inter font-semibold text-primary/60 mb-8 tracking-[0.2em] uppercase"
            >
              Digital Strategy & Design Agency
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-montserrat leading-[1.05] mb-10"
            >
              <span className="font-bold text-foreground block">
                <AnimatedText text="We build digital" />
              </span>
              <span className="font-light text-foreground/70 block">
                <AnimatedText text="experiences that" />
              </span>
              <span className="font-bold text-primary block">
                <AnimatedText text="drive growth." />
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-base md:text-lg text-muted-foreground font-inter font-light leading-relaxed mb-12 max-w-md"
            >
              Strategic design and development for established businesses ready to elevate their digital presence.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
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
                    <span className="relative">Schedule a Consultation</span>
                  </a>
                </Button>
              </MagneticButton>
              
              <MagneticButton strength={0.15}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-foreground/20 hover:border-foreground/40 hover:bg-transparent text-foreground font-inter font-medium text-sm px-8 py-6 rounded-none"
                >
                  View Our Work
                </Button>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right stats with TiltCard */}
          <div className="grid grid-cols-2 gap-8 lg:gap-12">
            {[
              { value: 8, suffix: "+", label: "Years of Experience" },
              { value: 50, suffix: "+", label: "Projects Delivered" },
              { value: 4, suffix: "", label: "States Served" },
              { value: 100, suffix: "%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              >
                <TiltCard maxTilt={8} scale={1.03} className="h-full">
                  <div className="group border-l-2 border-border pl-6 hover:border-primary transition-colors duration-300 h-full">
                    <div className="text-4xl md:text-5xl font-montserrat font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent mb-2">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-muted-foreground font-inter font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
};
