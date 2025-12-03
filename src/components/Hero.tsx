import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "./AnimatedCounter";
import { useRef } from "react";

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              custom={wordIndex * 5 + charIndex}
              variants={letterAnimation}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const triangleY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-32 pb-20 overflow-hidden">
      {/* Parallax radial gradient background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background: 'radial-gradient(ellipse at 70% 30%, hsl(220 60% 25% / 0.06) 0%, transparent 50%)',
          y: backgroundY 
        }}
      />
      
      {/* Secondary gradient wash */}
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
      
      {/* Decorative geometric elements with parallax */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ opacity: opacityFade }}>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Large triangle accent - top right with parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{ y: triangleY }}
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
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.04, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
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
        
        {/* Enhanced floating elements with varied animations */}
        <motion.div 
          animate={{ y: [0, -15, 0], x: [0, 5, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-primary/20 blur-[1px]" 
        />
        <motion.div 
          animate={{ y: [0, 12, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-2/3 right-1/3 w-2 h-2 bg-primary/15" 
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        <motion.div 
          animate={{ y: [0, -10, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-4 h-4 rounded-full bg-primary/10 blur-sm" 
        />
        <motion.div 
          animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-primary/15" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/5 w-6 h-6 rounded-full bg-primary/10 blur-md" 
        />
      </motion.div>

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
