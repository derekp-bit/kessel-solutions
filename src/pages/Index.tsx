import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { IndustrySpecialization } from "@/components/IndustrySpecialization";
import { Process } from "@/components/Process";
import { SecurityCompliance } from "@/components/SecurityCompliance";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <IndustrySpecialization />
      <Process />
      <SecurityCompliance />
      <Footer />
    </div>
  );
};

export default Index;
