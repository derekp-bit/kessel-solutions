import { motion } from "framer-motion";

export const TechGraphics = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating dashboard card - top right */}
      <motion.div
        initial={{ opacity: 0, y: 40, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-32 right-8 md:right-16 lg:right-24 hidden md:block"
      >
        <div className="w-48 lg:w-56 bg-background/80 backdrop-blur-sm border border-border/50 p-4 shadow-card rounded-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <div className="h-2 bg-muted rounded-full w-16" />
          </div>
          {/* Mini chart bars */}
          <div className="flex items-end gap-1 h-12 mb-3">
            {[40, 65, 45, 80, 55, 70, 90, 60].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.05 }}
                className="flex-1 bg-gradient-to-t from-primary/40 to-primary/20 rounded-t-sm"
              />
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-muted-foreground/60 font-inter">
            <span>Mon</span>
            <span>Sun</span>
          </div>
        </div>
      </motion.div>

      {/* Floating metric card - middle right */}
      <motion.div
        initial={{ opacity: 0, y: 30, x: 30 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/2 right-4 md:right-12 transform -translate-y-1/2 hidden lg:block"
      >
        <div className="w-40 bg-background/70 backdrop-blur-sm border border-border/40 p-3 shadow-card rounded-sm">
          <div className="text-[10px] text-muted-foreground/70 font-inter uppercase tracking-wider mb-1">Conversion</div>
          <div className="text-xl font-montserrat font-bold text-foreground">+24.5%</div>
          <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '72%' }}
              transition={{ duration: 1, delay: 1 }}
              className="h-full bg-primary/60 rounded-full"
            />
          </div>
        </div>
      </motion.div>

      {/* Floating code snippet - bottom right */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: 40 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-32 right-12 md:right-20 hidden md:block"
      >
        <div className="w-52 bg-foreground/[0.03] backdrop-blur-sm border border-border/30 p-3 font-mono text-[9px] text-muted-foreground/50 rounded-sm">
          <div className="flex gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-destructive/40" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
            <div className="w-2 h-2 rounded-full bg-green-500/40" />
          </div>
          <div><span className="text-primary/50">const</span> growth = <span className="text-primary/40">await</span></div>
          <div className="pl-2">optimize(strategy);</div>
        </div>
      </motion.div>

      {/* Abstract data nodes - left side */}
      <div className="absolute top-1/3 left-8 md:left-16 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-[0.08]">
          {/* Nodes */}
          <motion.circle 
            cx="20" cy="60" r="4" 
            fill="hsl(var(--primary))"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2 }}
          />
          <motion.circle 
            cx="60" cy="30" r="6" 
            fill="hsl(var(--primary))"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.3 }}
          />
          <motion.circle 
            cx="100" cy="50" r="4" 
            fill="hsl(var(--primary))"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.4 }}
          />
          <motion.circle 
            cx="70" cy="90" r="5" 
            fill="hsl(var(--primary))"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5 }}
          />
          {/* Connecting lines */}
          <motion.path 
            d="M24 58 L54 34" 
            stroke="hsl(var(--primary))" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          />
          <motion.path 
            d="M66 32 L96 48" 
            stroke="hsl(var(--primary))" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          />
          <motion.path 
            d="M62 36 L68 84" 
            stroke="hsl(var(--primary))" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          />
        </svg>
      </div>

      {/* Floating ring element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.04, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="absolute bottom-20 left-1/4 hidden lg:block"
      >
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="35" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="6 4" />
          <circle cx="40" cy="40" r="25" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        </svg>
      </motion.div>
    </div>
  );
};
