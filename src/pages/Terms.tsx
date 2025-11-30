import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Terms = () => {
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
              TERMS OF SERVICE
            </h1>
            <p className="text-sm text-muted-foreground mb-12">Last updated: January 2025</p>

            <div className="space-y-8 text-muted-foreground font-inter font-light leading-relaxed">
              <section>
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                  Agreement to Terms
                </h2>
                <p>
                  By accessing or using Kessel Solutions' website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                  Services
                </h2>
                <p className="mb-4">
                  Kessel Solutions provides digital services including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Web design and development</li>
                  <li>Performance marketing and analytics</li>
                  <li>Brand strategy and consulting</li>
                  <li>Automation systems and integrations</li>
                </ul>
                <p className="mt-4">
                  Specific service details, deliverables, and timelines will be outlined in individual project agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                  Client Responsibilities
                </h2>
                <p className="mb-4">
                  Clients agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Respond to inquiries in a timely manner</li>
                  <li>Provide necessary access to systems and materials</li>
                  <li>Make timely payments as agreed</li>
                  <li>Provide feedback within agreed timeframes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                  Payment Terms
                </h2>
                <p>
                  Payment terms will be specified in individual project agreements. Generally:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Project deposits are non-refundable</li>
                  <li>Invoices are due within 30 days unless otherwise specified</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Work may be paused or suspended for overdue payments</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                  Intellectual Property
                </h2>
                <p className="mb-4">
                  Upon full payment:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Clients receive full rights to custom deliverables created specifically for their project</li>
                  <li>Kessel Solutions retains rights to reusable frameworks, methodologies, and tools</li>
                  <li>Third-party assets are subject to their respective licenses</li>
                  <li>Kessel Solutions may showcase completed work in portfolios unless otherwise agreed</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                  Project Changes
                </h2>
                <p>
                  Changes to project scope, timeline, or deliverables may require additional fees and timeline extensions. All changes must be agreed upon in writing before implementation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                  Warranties and Disclaimers
                </h2>
                <p>
                  We provide services with professional care and expertise. However, we cannot guarantee specific business results or outcomes. Services are provided "as is" without warranties beyond those specified in project agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                  Limitation of Liability
                </h2>
                <p>
                  Kessel Solutions' liability for any claim arising from our services is limited to the amount paid for those specific services. We are not liable for indirect, incidental, or consequential damages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                  Termination
                </h2>
                <p>
                  Either party may terminate services with written notice. Upon termination, clients are responsible for payment of all work completed to date. Refunds are subject to individual project agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                  Contact Information
                </h2>
                <p>
                  For questions about these Terms of Service, contact us at:
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

export default Terms;
