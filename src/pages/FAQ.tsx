import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. A standard website typically takes 4-6 weeks from kickoff to launch, including design, development, and revisions. More complex applications with custom features may take 8-12 weeks. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes, we provide comprehensive support and maintenance packages. This includes regular updates, security patches, performance monitoring, content updates, and technical support. We offer flexible monthly retainer options tailored to your needs."
  },
  {
    question: "What technologies do you work with?",
    answer: "We specialize in modern, cutting-edge technologies including React, Next.js, TypeScript, Tailwind CSS, and Node.js. For backend solutions, we leverage cloud platforms like AWS, Supabase, and Firebase. We always choose the best tech stack based on your specific project requirements."
  },
  {
    question: "How much does a typical project cost?",
    answer: "Project costs vary significantly based on requirements, features, and complexity. Simple websites start around $5,000, while complex applications can range from $15,000 to $50,000+. We offer transparent pricing and will provide a detailed quote after understanding your specific needs."
  },
  {
    question: "What is your design process?",
    answer: "Our design process is collaborative and iterative. We start with discovery and research, followed by wireframing and prototyping. Once approved, we move to high-fidelity designs with multiple revision rounds. We ensure you're involved at every stage and deliver designs that align perfectly with your brand vision."
  },
  {
    question: "Can you help with marketing and SEO?",
    answer: "Absolutely. We offer comprehensive performance marketing services including SEO optimization, paid advertising campaigns, content strategy, and analytics implementation. Our data-driven approach ensures your site not only looks great but also drives measurable results."
  },
  {
    question: "Do you work with clients remotely?",
    answer: "Yes, we work with clients worldwide. Our fully remote workflow includes regular video calls, collaborative tools, and clear communication channels. We've successfully delivered projects for clients across different time zones and maintain the same high standards regardless of location."
  },
  {
    question: "What if I need changes after the project is complete?",
    answer: "We include a revision period after launch to address any issues or minor adjustments. For ongoing changes and updates, we offer flexible hourly rates or monthly retainer packages. We're committed to ensuring your complete satisfaction both during and after the project."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="relative pt-40 pb-32 px-6 md:px-12 overflow-hidden">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-montserrat font-black mb-6">
              FREQUENTLY ASKED
              <br />
              <span className="text-primary">QUESTIONS</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-inter font-light max-w-2xl">
              Everything you need to know about working with Kessel Solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 border-border bg-card px-8 py-2 cyan-glow-hover transition-all duration-500"
                >
                  <AccordionTrigger className="text-left text-lg md:text-xl font-montserrat font-bold hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-muted-foreground font-inter font-light leading-relaxed pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
