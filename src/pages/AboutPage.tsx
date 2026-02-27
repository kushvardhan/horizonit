import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-24 bg-gradient-to-br from-blue-700 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6"
          >
            Engineering Digital Excellence Since 2009
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9 }}
            className="text-lg max-w-3xl mx-auto leading-relaxed opacity-90"
          >
            HITCS is a global IT services and consulting company helping enterprises
            modernize systems, scale securely, and innovate confidently across industries.
            We combine global expertise with local execution excellence.
          </motion.p>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Who We Are
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              HITCS delivers comprehensive IT solutions across software development,
              enterprise web systems, CMS platforms, e-commerce ecosystems,
              cloud hosting, and digital growth strategies.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              With operations across multiple regions and a strong focus on quality,
              scalability, and security, we serve startups, mid-sized firms, and
              large enterprises worldwide.
            </p>
          </motion.div>

          <motion.div
            className="bg-blue-50 p-10 rounded-3xl shadow-xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold text-blue-700">15+</h3>
                <p className="text-gray-600 mt-2">Years of Excellence</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-blue-700">30+</h3>
                <p className="text-gray-600 mt-2">Countries Served</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-blue-700">500+</h3>
                <p className="text-gray-600 mt-2">Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-blue-700">98%</h3>
                <p className="text-gray-600 mt-2">Client Retention</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-700">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower organizations with intelligent, scalable, and secure digital
              solutions that drive measurable business growth and operational excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4 text-indigo-700">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a globally trusted IT partner delivering innovation,
              reliability, and sustainable digital transformation for enterprises worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}