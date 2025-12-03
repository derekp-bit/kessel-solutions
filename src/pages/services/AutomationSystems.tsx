import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ContactFormModal } from "@/components/ContactFormModal";

const features = [
  "Workflow automation design",
  "CRM & marketing automation",
  "API integrations & webhooks",
  "Data synchronization systems",
  "Email automation sequences",
  "Custom business logic",
  "Process optimization consulting",
  "Documentation & training",
];

const AutomationSystems = () => {
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
                <Zap className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-black">
                AUTOMATION SYSTEMS
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-primary font-montserrat font-bold mb-6">
              Intelligent workflows that streamline operations and multiply efficiency.
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
                WORK SMARTER, NOT HARDER
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-inter font-light leading-relaxed">
                Manual processes are revenue killers. Every repetitive task is time and money wasted on work a machine could handle better. We build intelligent automation systems that eliminate busywork, reduce errors, and free your team to focus on what actually grows your business. The result? Operations that scale without adding headcount.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-montserrat font-black mb-4">
                CUSTOM INTEGRATIONS, SEAMLESS FLOWS
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-inter font-light leading-relaxed mb-6">
                Your tools should work together, not against each other. We connect your existing systems—CRM, marketing platforms, databases, APIs—into unified workflows that eliminate data silos and manual data entry. From lead capture to customer onboarding, we automate the tedious so you can focus on the strategic.
              </p>
              <p className="text-base md:text-lg text-muted-foreground font-inter font-light leading-relaxed">
                Whether it's email sequences, data synchronization, custom business logic, or complex multi-step workflows, we engineer automation that just works. Set it once, benefit forever.
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
              READY TO MULTIPLY YOUR EFFICIENCY?
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

export default AutomationSystems;
