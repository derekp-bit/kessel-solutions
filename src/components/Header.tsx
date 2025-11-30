import { motion } from "framer-motion";
import logo from "@/assets/kessel-logo.png";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6"
    >
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        <img src={logo} alt="Kessel Solutions" className="h-16 md:h-24 lg:h-28" />
        
        <nav className="hidden lg:flex items-center gap-8">
          <a href="/#services" className="text-sm font-montserrat font-semibold tracking-wider hover:text-primary transition-colors">
            SERVICES
          </a>
          <a href="/#process" className="text-sm font-montserrat font-semibold tracking-wider hover:text-primary transition-colors">
            PROCESS
          </a>
          <a href="/faq" className="text-sm font-montserrat font-semibold tracking-wider hover:text-primary transition-colors">
            FAQ
          </a>
          <a href="/about" className="text-sm font-montserrat font-semibold tracking-wider hover:text-primary transition-colors">
            ABOUT
          </a>
        </nav>

        <MobileMenu />
      </div>
    </motion.header>
  );
};
