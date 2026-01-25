import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { IndustrySpecialization } from "@/components/IndustrySpecialization";
import { MultiStateOperations } from "@/components/MultiStateOperations";
import { SecurityCompliance } from "@/components/SecurityCompliance";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const SectionDivider = () => (
  <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
    <div className="border-t border-border/40" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <IndustrySpecialization />
      <SectionDivider />
      <MultiStateOperations />
      <SectionDivider />
      <SecurityCompliance />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
