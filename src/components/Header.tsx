import { motion } from "framer-motion";
import { MobileMenu } from "./MobileMenu";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto max-w-6xl px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="cursor-pointer hover:opacity-70 transition-opacity"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="font-montserrat font-bold text-lg md:text-xl tracking-tight text-foreground uppercase">
            Kessel Solutions
          </span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-10">
          <a href="/#services" className="text-sm font-inter text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="/#process" className="text-sm font-inter text-muted-foreground hover:text-foreground transition-colors">
            Process
          </a>
          <a href="/faq" className="text-sm font-inter text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
          <a href="/about" className="text-sm font-inter text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>

        <MobileMenu />
      </div>
    </motion.header>
  );
};
