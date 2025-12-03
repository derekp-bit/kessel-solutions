import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "./AnimatedCounter";

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
      {/* Static gradient backgrounds - no parallax for performance */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 30%, hsl(220 60% 25% / 0.06) 0%, transparent 50%)' }}
      />
      
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 80%, hsl(220 60% 25% / 0.03) 0%, transparent 40%)' }}
      />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-multiply"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px'
        }}
      />
      
      {/* Static decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Large triangle accent - top right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute top-20 right-10 w-64 h-64 md:w-[500px] md:h-[500px]"
        >
          <div 
            className="w-full h-full"
            style={{
              clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)',
              background: 'linear-gradient(135deg, hsl(220 60% 25% / 0.08), transparent)'
            }}
          />
        </motion.div>
        
        {/* Smaller triangle - bottom left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-20 left-0 w-48 h-48 md:w-80 md:h-80"
          style={{
            clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
            background: 'linear-gradient(45deg, hsl(220 60% 25% / 0.06), transparent)'
          }}
        />
        
        {/* Diagonal lines pattern */}
        <div 
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 30px,
              hsl(var(--foreground)) 30px,
              hsl(var(--foreground)) 31px
            )`
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left content with staggered animations */}
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm font-inter font-semibold text-primary/70 mb-6 tracking-widest uppercase"
            >
              Digital Strategy & Design Agency
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-montserrat leading-[1.1] mb-8"
            >
              <span className="font-bold bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                <AnimatedText text="We build digital" />
              </span>
              <br />
              <span className="font-light text-foreground/80">
                <AnimatedText text="experiences that" />
              </span>
              <br />
              <span className="font-bold bg-gradient-to-br from-primary via-primary/80 to-foreground bg-clip-text text-transparent">
                <AnimatedText text="drive business growth." />
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-muted-foreground font-inter font-light leading-relaxed mb-10 max-w-lg"
            >
              Strategic design and development for established businesses ready to elevate their digital presence.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
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
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-foreground/20 hover:border-foreground/40 hover:bg-transparent text-foreground font-inter font-medium text-sm px-8 py-6 rounded-none"
              >
                View Our Work
              </Button>
            </motion.div>
          </div>

          {/* Right stats with staggered counters */}
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
                className="group border-l-2 border-border pl-6 hover:border-primary transition-colors duration-300"
                whileHover={{ x: 4 }}
              >
                <div className="text-4xl md:text-5xl font-montserrat font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground font-inter font-medium tracking-wide">
                  {stat.label}
                </div>
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
