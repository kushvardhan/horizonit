import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const services = [
  {
    title: "Software Solution",
    desc: "Custom enterprise-grade software development tailored to streamline operations, enhance productivity, and scale business performance."
  },
  {
    title: "Web Solution",
    desc: "High-performance, secure, and scalable web platforms built using modern technologies and best-in-class architecture."
  },
  {
    title: "CMS Development",
    desc: "Flexible and robust content management systems enabling seamless digital publishing and operational efficiency."
  },
  {
    title: "E-Commerce",
    desc: "Full-scale e-commerce solutions including payment integration, analytics, and conversion optimization."
  },
  {
    title: "Social Media Services",
    desc: "Strategic digital brand positioning, engagement optimization, and growth-driven social campaigns."
  },
  {
    title: "SEO",
    desc: "Data-driven search engine optimization strategies that improve rankings, visibility, and organic growth."
  },
  {
    title: "Mobile Application Development",
    desc: "Cross-platform and native mobile apps engineered for performance, scalability, and user engagement."
  },
  {
    title: "Web Hosting",
    desc: "Secure, reliable, and high-availability hosting infrastructure with optimized uptime and performance monitoring."
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="pt-28 pb-24 bg-gradient-to-br from-blue-700 to-purple-700 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold mb-6"
          >
            Comprehensive Digital Solutions
          </motion.h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            From enterprise software to digital marketing ecosystems,
            HITCS delivers integrated technology solutions designed for scale and performance.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-700">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="mb-8 opacity-90">
            Partner with HITCS to build scalable, secure, and future-ready digital solutions.
          </p>
          <button className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition">
            Contact Our Experts
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}