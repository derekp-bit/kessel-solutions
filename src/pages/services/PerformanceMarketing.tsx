import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ContactFormModal } from "@/components/ContactFormModal";

const features = [
  "Paid advertising (Google, Meta, LinkedIn)",
  "Conversion rate optimization",
  "A/B testing & experimentation",
  "Landing page optimization",
  "Email marketing campaigns",
  "Retargeting strategies",
  "Performance tracking & reporting",
  "ROI-focused budget allocation",
];

const PerformanceMarketing = () => {
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
                <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-black">
                PERFORMANCE MARKETING
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-primary font-montserrat font-bold mb-6">
              Data-driven campaigns engineered to maximize ROI and accelerate growth.
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
                ROI-OBSESSED GROWTH
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-inter font-light leading-relaxed">
                We don't chase vanity metrics. Every campaign is engineered with one goal: measurable business growth. Through rigorous testing, data analysis, and continuous optimization, we turn marketing spend into predictable revenue. No guesswork. No wasted budget. Just results that compound.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-montserrat font-black mb-4">
                DATA-DRIVEN PRECISION
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-inter font-light leading-relaxed mb-6">
                We build marketing machines that learn and improve with every interaction. From initial audience research to campaign launch and beyond, every decision is backed by data. We identify high-performing channels, optimize conversion paths, and scale what works while killing what doesn't.
              </p>
              <p className="text-base md:text-lg text-muted-foreground font-inter font-light leading-relaxed">
                Our approach combines paid advertising mastery across Google, Meta, and LinkedIn with sophisticated conversion optimization and testing frameworks. The result? Marketing that pays for itself and then some.
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
              READY TO ACCELERATE YOUR GROWTH?
            </h2>
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={() => setIsContactModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-bold text-base md:text-lg px-10 py-6 transition-all duration-300 hover:scale-105"
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

export default PerformanceMarketing;
