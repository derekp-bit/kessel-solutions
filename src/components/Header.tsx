import { motion } from "framer-motion";
import { MobileMenu } from "./MobileMenu";
import { Link } from "react-router-dom";
import { ScrollProgressIndicator } from "./ScrollProgressIndicator";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
        className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50"
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

          <div className="hidden lg:block">
            <Button
              size="sm"
              asChild
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium text-xs px-5 py-2 rounded-none"
            >
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1Q62q6hWYC6wXM7nuhPdX10KbTUX0q4M4oNWZqlMS3L6PfTPUup43kqWlSYcHU-0GG3sSb29Ot"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
                <ArrowRight className="ml-1.5 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Button>
          </div>

          <MobileMenu />
        </div>
      </motion.header>
    </>
  );
};
