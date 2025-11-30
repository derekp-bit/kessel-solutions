import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const cases = [
  {
    title: "E-COMMERCE REVOLUTION",
    client: "Premium Retail Brand",
    metric: "+340%",
    description: "Conversion Rate Increase",
    tags: ["Web Design", "Development", "Optimization"],
  },
  {
    title: "FINTECH TRANSFORMATION",
    client: "Digital Banking Platform",
    metric: "2.5M+",
    description: "Users Acquired in 6 Months",
    tags: ["Marketing", "Analytics", "Automation"],
  },
  {
    title: "SaaS ACCELERATION",
    client: "B2B Software Company",
    metric: "$12M",
    description: "Annual Recurring Revenue",
    tags: ["Brand Strategy", "Growth Marketing"],
  },
];

export const CaseStudies = () => {
  return (
    <section className="relative py-32 px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-montserrat font-black mb-6">
            CASE STUDIES
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl font-inter font-light">
            Real results. Measurable impact. Transformative growth.
          </p>
        </motion.div>

        <div className="space-y-6">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.title}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative border-2 border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-8 lg:p-12 gap-8">
                {/* Left side */}
                <div className="flex-1">
                  <p className="text-sm font-montserrat font-bold text-primary mb-2 tracking-widest">
                    {caseStudy.client}
                  </p>
                  <h3 className="text-3xl md:text-5xl font-montserrat font-black mb-4 group-hover:text-primary transition-colors duration-300">
                    {caseStudy.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {caseStudy.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-montserrat font-bold text-muted-foreground border border-border px-3 py-1 tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right side - Metric */}
                <div className="text-left lg:text-right">
                  <div className="text-6xl md:text-7xl font-montserrat font-black text-primary mb-2">
                    {caseStudy.metric}
                  </div>
                  <p className="text-lg text-muted-foreground font-inter font-light">
                    {caseStudy.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <ArrowRight className="w-8 h-8 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 absolute right-8 bottom-8" />
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="group border-2 border-white hover:bg-white hover:text-black font-montserrat font-bold text-base px-8 py-6 transition-all duration-300"
          >
            VIEW ALL CASE STUDIES
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
