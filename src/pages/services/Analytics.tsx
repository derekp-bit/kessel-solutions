import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { BarChart3, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ContactFormModal } from "@/components/ContactFormModal";

const features = [
  "Custom analytics implementation",
  "Google Analytics 4 setup",
  "Conversion tracking systems",
  "Custom dashboard creation",
  "Heat mapping & session recording",
  "Funnel analysis & optimization",
  "Attribution modeling",
  "Automated reporting & insights",
];

const Analytics = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-primary flex items-center justify-center">
                <BarChart3 className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-black">
                ANALYTICS
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-primary font-montserrat font-bold mb-6">
              Deep insights and tracking systems that illuminate the path to optimization.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 mb-16"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-montserrat font-black mb-4">
                MEASURE WHAT MATTERS
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-inter font-light leading-relaxed">
                You can't optimize what you don't measure. We build comprehensive analytics systems that track every critical touchpoint in your user journey. From initial visit to final conversion, we capture the data that reveals what's working, what's not, and exactly where to focus your optimization efforts for maximum impact.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-montserrat font-black mb-4">
                INSIGHTS THAT DRIVE ACTION
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-inter font-light leading-relaxed mb-6">
                Data without insight is just noise. We transform raw numbers into actionable intelligence. Our analytics implementations go beyond basic tracking—we build custom dashboards, set up advanced conversion funnels, and create automated reports that surface the insights you need to make confident decisions.
              </p>
              <p className="text-base md:text-lg text-muted-foreground font-inter font-light leading-relaxed">
                Whether you need Google Analytics 4 configured correctly, custom event tracking, heat mapping, or advanced attribution modeling, we ensure you have complete visibility into your digital performance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-montserrat font-black mb-6">
                WHAT'S INCLUDED
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 p-4 border border-border bg-card hover:border-primary transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm md:text-base font-inter">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-t-2 border-border pt-12"
          >
            <h2 className="text-2xl md:text-3xl font-montserrat font-black mb-6 text-center">
              READY TO UNLOCK YOUR DATA?
            </h2>
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={() => setIsContactModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-foreground hover:text-background font-montserrat font-bold text-base md:text-lg px-10 py-6 transition-all duration-300 hover:scale-105"
              >
                START YOUR PROJECT
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      <ContactFormModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
    </div>
  );
};

export default Analytics;
