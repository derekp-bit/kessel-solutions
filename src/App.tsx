import { useState, useCallback } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LoadingScreen } from "@/components/LoadingScreen";
import { CustomCursor } from "@/components/CustomCursor";
import { PageTransition } from "@/components/PageTransition";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Index from "./pages/Index";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import WebDesign from "./pages/services/WebDesign";
import Development from "./pages/services/Development";
import PerformanceMarketing from "./pages/services/PerformanceMarketing";
import Analytics from "./pages/services/Analytics";
import BrandStrategy from "./pages/services/BrandStrategy";
import AutomationSystems from "./pages/services/AutomationSystems";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  useSmoothScroll();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
        <Route path="/services/web-design" element={<PageTransition><WebDesign /></PageTransition>} />
        <Route path="/services/development" element={<PageTransition><Development /></PageTransition>} />
        <Route path="/services/performance-marketing" element={<PageTransition><PerformanceMarketing /></PageTransition>} />
        <Route path="/services/analytics" element={<PageTransition><Analytics /></PageTransition>} />
        <Route path="/services/brand-strategy" element={<PageTransition><BrandStrategy /></PageTransition>} />
        <Route path="/services/automation-systems" element={<PageTransition><AutomationSystems /></PageTransition>} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LoadingScreen onComplete={handleLoadingComplete} />
        {!isLoading && <CustomCursor />}
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
