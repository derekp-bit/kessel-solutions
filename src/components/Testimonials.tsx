import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Kessel Solutions transformed our entire digital infrastructure. Their strategic approach and attention to security gave our board complete confidence in the project.",
    author: "Michael Chen",
    title: "Chief Technology Officer",
    company: "Meridian Financial Group"
  },
  {
    quote: "Working with Kessel was a game-changer for our e-commerce platform. They delivered a 340% increase in conversion rates within the first quarter.",
    author: "Sarah Williams",
    title: "VP of Digital Commerce",
    company: "Atlas Retail Holdings"
  },
  {
    quote: "The level of professionalism and technical expertise is unmatched. They understand enterprise requirements and deliver solutions that scale.",
    author: "David Morrison",
    title: "Director of Operations",
    company: "Pinnacle SaaS Solutions"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
            Client Success
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We partner with ambitious companies to deliver measurable results and lasting digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-card border border-border/50 rounded-lg p-8 hover:border-border transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-6" />
              <blockquote className="text-foreground/90 mb-8 leading-relaxed">
                {testimonial.quote}
              </blockquote>
              <div className="border-t border-border/50 pt-6">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.title}
                </p>
                <p className="text-sm text-primary/80 font-medium mt-1">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
