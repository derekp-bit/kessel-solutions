import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Zap, Users, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision-Driven",
    description: "Every decision backed by data, every design optimized for conversion."
  },
  {
    icon: Zap,
    title: "Speed & Agility",
    description: "We move fast without sacrificing quality. Your timeline is our priority."
  },
  {
    icon: Users,
    title: "Partnership Mentality",
    description: "We're not just a vendor—we're an extension of your team."
  },
  {
    icon: Award,
    title: "Excellence Standard",
    description: "We don't settle for good enough. We push for exceptional, every time."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-6 lg:px-12 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-black mb-6 md:mb-8">
              WE BUILD SYSTEMS THAT
              <br />
              <span className="text-primary">ACCELERATE GROWTH</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-inter font-light leading-relaxed max-w-3xl">
              Kessel Solutions is a digital agency obsessed with one thing: building forward-pushing systems that transform brands into market leaders. No fluff. No mediocrity. Just relentless execution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20 md:mb-32"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black mb-8 md:mb-12">
              OUR APPROACH
            </h2>
            <div className="space-y-6 md:space-y-8 text-base md:text-lg text-muted-foreground font-inter font-light leading-relaxed">
              <p>
                We don't do cookie-cutter solutions. Every project starts with deep research into your business, your audience, and your market. We identify opportunities others miss and build strategies that capitalize on them.
              </p>
              <p>
                Our process is ruthlessly efficient: discovery, design, development, and optimization. Each phase engineered to move you forward faster. We combine cutting-edge technology with conversion-focused design to create digital experiences that don't just look good—they perform.
              </p>
              <p>
                We work with brands that refuse to settle. Companies that understand digital isn't just a channel—it's the engine of modern business. If you're ready to accelerate, we're ready to build.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black mb-12 md:mb-16">
              WHAT DRIVES US
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="border-2 border-border bg-card p-6 md:p-8 hover:border-primary transition-colors duration-300 group"
                >
                  <value.icon className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl md:text-2xl font-montserrat font-bold mb-3 md:mb-4">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground font-inter font-light leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
