import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-black mb-8">
              PRIVACY POLICY
            </h1>
            <p className="text-sm text-muted-foreground mb-12">Last updated: January 2025</p>

            <div className="space-y-8 text-muted-foreground font-inter font-light leading-relaxed">
              <section>
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                  Information We Collect
                </h2>
                <p className="mb-4">
                  When you use our website or services, we may collect the following information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Company information you provide through contact forms</li>
                  <li>Website usage data through analytics tools</li>
                  <li>Communication preferences and project details</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                  How We Use Your Information
                </h2>
                <p className="mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to your inquiries and provide requested services</li>
                  <li>Improve our website and service offerings</li>
                  <li>Send you relevant updates about your projects</li>
                  <li>Analyze website performance and user behavior</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                  Information Sharing
                </h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Service providers who assist in operating our business</li>
                  <li>Legal authorities when required by law</li>
                  <li>Third parties with your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                  Data Security
                </h2>
                <p>
                  We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                  Your Rights
                </h2>
                <p className="mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Object to processing of your information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                  Cookies and Tracking
                </h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have questions about this Privacy Policy or how we handle your information, please contact us at:
                </p>
                <p className="mt-4">
                  Email: <a href="mailto:KesselSolutionsCo@gmail.com" className="text-primary hover:underline">KesselSolutionsCo@gmail.com</a><br />
                  Phone: <a href="tel:+18453278025" className="text-primary hover:underline">845-327-8025</a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
