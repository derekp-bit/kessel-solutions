import { motion } from "framer-motion";
import logo from "@/assets/kessel-logo.png";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 md:py-6"
    >
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        <Link 
          to="/" 
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={logo} alt="Kessel Solutions" className="h-12 md:h-16 lg:h-20 hover:opacity-80 transition-opacity" />
        </Link>
        
        <nav className="hidden lg:flex items-center gap-10">
          <a href="/#services" className="text-sm font-inter font-medium tracking-wide text-muted-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="/#process" className="text-sm font-inter font-medium tracking-wide text-muted-foreground hover:text-primary transition-colors">
            Process
          </a>
          <a href="/faq" className="text-sm font-inter font-medium tracking-wide text-muted-foreground hover:text-primary transition-colors">
            FAQ
          </a>
          <a href="/about" className="text-sm font-inter font-medium tracking-wide text-muted-foreground hover:text-primary transition-colors">
            About
          </a>
        </nav>

        <MobileMenu />
      </div>
    </motion.header>
  );
};
