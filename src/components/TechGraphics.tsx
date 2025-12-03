import { motion } from "framer-motion";

// Gentle float animation
const floatAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

const floatAnimationSlow = {
  y: [0, -6, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay: 0.5,
  },
};

const floatAnimationFast = {
  y: [0, -10, 0],
  transition: {
    duration: 3.5,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay: 1,
  },
};

export const TechGraphics = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating dashboard card - far top right corner */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-24 right-4 lg:right-8 xl:right-12 hidden xl:block"
      >
        <motion.div animate={floatAnimation}>
          <div className="w-44 bg-background/90 backdrop-blur-sm border border-border/40 p-3 shadow-card rounded-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <div className="h-1.5 bg-muted rounded-full w-12" />
            </div>
            {/* Mini chart bars */}
            <div className="flex items-end gap-0.5 h-10 mb-2">
              {[40, 65, 45, 80, 55, 70, 90, 60].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.6, delay: 1.5 + i * 0.05 }}
                  className="flex-1 bg-gradient-to-t from-primary/30 to-primary/15 rounded-t-sm"
                />
              ))}
            </div>
            <div className="flex justify-between text-[8px] text-muted-foreground/50 font-inter">
              <span>Mon</span>
              <span>Sun</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating metric card - bottom right, below stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-28 right-8 lg:right-16 hidden lg:block"
      >
        <motion.div animate={floatAnimationSlow}>
          <div className="w-36 bg-background/80 backdrop-blur-sm border border-border/30 p-3 shadow-card rounded-sm">
            <div className="text-[9px] text-muted-foreground/60 font-inter uppercase tracking-wider mb-1">Conversion</div>
            <div className="text-lg font-montserrat font-bold text-foreground/80">+24.5%</div>
            <div className="mt-2 h-1 bg-muted/50 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '72%' }}
                transition={{ duration: 1, delay: 1.8 }}
                className="h-full bg-primary/50 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Code snippet - far bottom right corner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-8 right-4 lg:right-8 hidden xl:block"
      >
        <motion.div animate={floatAnimationFast}>
          <div className="w-44 bg-foreground/[0.02] backdrop-blur-sm border border-border/20 p-2.5 font-mono text-[8px] text-muted-foreground/40 rounded-sm">
            <div className="flex gap-1 mb-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-destructive/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/30" />
            </div>
            <div><span className="text-primary/40">const</span> growth = <span className="text-primary/30">await</span></div>
            <div className="pl-2">optimize(strategy);</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Abstract data nodes - far left side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-1/3 left-4 lg:left-8 hidden lg:block"
      >
        <motion.div animate={floatAnimationSlow}>
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="15" cy="50" r="3" fill="hsl(var(--primary))" />
            <circle cx="50" cy="20" r="4" fill="hsl(var(--primary))" />
            <circle cx="85" cy="40" r="3" fill="hsl(var(--primary))" />
            <circle cx="60" cy="75" r="3.5" fill="hsl(var(--primary))" />
            <path d="M18 48 L46 24" stroke="hsl(var(--primary))" strokeWidth="0.5" />
            <path d="M54 22 L82 38" stroke="hsl(var(--primary))" strokeWidth="0.5" />
            <path d="M52 26 L58 70" stroke="hsl(var(--primary))" strokeWidth="0.5" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Decorative ring - bottom left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute bottom-16 left-16 hidden xl:block"
      >
        <motion.div animate={floatAnimation}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="25" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="4 3" />
            <circle cx="30" cy="30" r="18" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.3" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};
