import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Trust } from "@/components/Trust";
import { CaseStudies } from "@/components/CaseStudies";
import { Process } from "@/components/Process";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Services />
      <Trust />
      <CaseStudies />
      <Process />
      <Footer />
    </div>
  );
};

export default Index;
