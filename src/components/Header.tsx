import { motion } from "framer-motion";
import { MobileMenu } from "./MobileMenu";
import { Link } from "react-router-dom";
import { ScrollProgressIndicator } from "./ScrollProgressIndicator";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="relative text-sm font-inter text-muted-foreground hover:text-foreground transition-colors group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
  </a>
);

export const Header = () => {
  return (
    <>
      <ScrollProgressIndicator />
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
            <NavLink href="/#services">Services</NavLink>
            <NavLink href="/#process">Process</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
            <NavLink href="/about">About</NavLink>
          </nav>

          <MobileMenu />
        </div>
      </motion.header>
    </>
  );
};
