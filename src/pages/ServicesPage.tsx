// src/pages/Services.tsx
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Services Page — upgraded per request
 * - Top spacing for navbar
 * - Hero: tighter left side, stronger bg visibility, floating badges
 * - Our Capabilities: glassmorphic cards with shutter hover animation
 * - Services: more entries, alternating light/dark bands, richer content
 * - Scroll animations using Framer Motion whileInView
 * - Parallax-ish image treatment and hover interactions
 *
 * Drop into src/pages/Services.tsx and tweak images / copy as desired.
 */

/* ----- Data ----- */
const SERVICES_QUICK = [
  { id: "s1", title: "Software Solution", tag: "Custom Platforms" },
  { id: "s2", title: "Web Solution", tag: "High-performance Sites" },
  { id: "s3", title: "CMS Development", tag: "Headless & WordPress" },
  { id: "s4", title: "E-Commerce", tag: "Secure Stores" },
  { id: "s5", title: "Social Media", tag: "Brand & Campaigns" },
  { id: "s6", title: "SEO", tag: "Organic Growth" },
  { id: "s7", title: "Mobile Apps", tag: "iOS & Android" },
  { id: "s8", title: "Web Hosting", tag: "Reliable Uptime" },
];

const services = [
  {
    number: "01",
    title: "Software Solution",
    description:
      "We engineer custom software systems tailored to your business flows — from domain modelling and microservice architecture to API-first platforms. We prioritize observability, testability and long-term operability.",
    features: [
      "Custom Enterprise Systems",
      "Workflow Automation",
      "API Integration & Governance",
      "Cloud-native Architecture",
      "Operational Observability",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600",
  },
  {
    number: "02",
    title: "Web Solution",
    description:
      "High-performance digital experiences built for accessibility, speed and conversion. We engineer frontends and platforms that preserve brand fidelity while ensuring measurable business KPIs.",
    features: [
      "Corporate Websites",
      "Landing Experiences",
      "Performance Optimization",
      "Accessibility & SEO",
      "Conversion Engineering",
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600",
  },
  {
    number: "03",
    title: "CMS Development",
    description:
      "Flexible content platforms — headless or traditional — that empower content teams without locking engineering. Strong editorial UX, structured content modelling and automated workflows.",
    features: ["Headless CMS", "WordPress at Scale", "Editorial Workflows", "Content APIs", "Localization"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600",
  },
  {
    number: "04",
    title: "E-Commerce",
    description:
      "Scalable, secure commerce platforms optimized for conversion and operational efficiency. We combine storefront UX with robust backend systems for catalogs, orders and payments.",
    features: ["Shopify & Headless", "Cart & Checkout", "Payment Integration", "Inventory Systems", "Performance"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600",
  },
  {
    number: "05",
    title: "Social Media & Content",
    description:
      "Data-driven social strategy, content production and campaign engineering to build brands and measurable engagement across channels.",
    features: ["Strategy", "Content Production", "Campaign Automation", "Paid Media Ops", "Analytics"],
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1600",
  },
  {
    number: "06",
    title: "SEO & Performance",
    description:
      "Technical SEO and performance engineering to increase organic visibility and page experience while improving conversion metrics.",
    features: ["Technical SEO", "On-Page & Content", "Performance KPIs", "Crawlability", "Analytics"],
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1600",
  },
  {
    number: "07",
    title: "Mobile Application Development",
    description:
      "Reliable, performant mobile apps engineered for platform conventions, delightful UX, and long-term release cadences. Native or cross-platform depending on need.",
    features: ["iOS & Android", "Cross-Platform", "API Integration", "Mobile CI/CD", "Store Strategy"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600",
  },
  {
    number: "08",
    title: "Web Hosting & Ops",
    description:
      "Secure, managed hosting and platform operations. We provide pragmatic SLAs, automated backups and monitoring for mission-critical services.",
    features: ["Cloud Hosting", "VPS & Baremetal", "SSL & Security", "Backups & DR", "Monitoring & Alerting"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600",
  },
  // Additional premium enterprise services:
  {
    number: "09",
    title: "DevOps & Automation",
    description:
      "Automate delivery pipelines, enforce policy-as-code and shorten feedback loops to ship faster and safer.",
    features: ["CI/CD", "Infrastructure as Code", "Policy & Security Automation", "Observability", "SRE Practices"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600",
  },
  {
    number: "10",
    title: "Data & Analytics",
    description:
      "From ingestion to insights: data platforms, event-driven architectures and analytics that turn raw data into strategic decisions.",
    features: ["Data Lakes & Warehouses", "ETL/ELT", "Real-time Pipelines", "Dashboards & BI", "ML Ops"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600",
  },
  {
    number: "11",
    title: "Cloud Migration & Architecture",
    description:
      "Planned re-platforming, lift-and-shift and cloud-native re-architectures that optimize cost, reliability and performance.",
    features: ["Cloud Strategy", "Migration Plans", "Cost Optimization", "Resiliency", "Cloud Security"],
    image: "https://images.unsplash.com/photo-1526378721589-7a72a0b79e63?q=80&w=1600",
  },
];

const heroServices = services.slice(0, 4);

/* ----- Animation Variants ----- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/* ----- animation variants ----- */
const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const SERVICES = [
  { id: '01', title: 'Cloud Transformation', desc: 'Hybrid and multi-cloud strategies engineered for maximum resilience.', tag: 'INFRASTRUCTURE' },
  { id: '02', title: 'AI & Data Engineering', desc: 'Transforming raw data into actionable intelligence with custom LLMs.', tag: 'INTELLIGENCE' },
  { id: '03', title: 'Cyber Security', desc: 'Zero-trust architecture protecting your most critical digital assets.', tag: 'SECURITY' },
  { id: '04', title: 'Digital Consulting', desc: 'Bridging the gap between legacy systems and future-ready platforms.', tag: 'STRATEGY' },
];


/* ----- Component ----- */
export default function ServicesPage() {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [expanded, setExpanded] = useState(0);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const reveal = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  // Auto-cycle accordion every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAccordion((prev) => (prev + 1) % heroServices.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-slate-950 text-slate-900 antialiased">
      {/* top spacing for navbar (assumes navbar is fixed) */}
      <div className="pt-20" />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000')" }}
        />
        {/* The "HCL" Deep Gradient: Dark top, transparent middle, white bottom */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-900/40 to-white" />
        
        {/* Subtle Grid overlay */}
        <div className="absolute inset-0 opacity-3 bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-size-[100px_100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full mt-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div 
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={reveal} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Digital Excellence
            </motion.div>

            <motion.h1 variants={reveal} className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                Digital Frontiers
              </span>
            </motion.h1>

            <motion.p variants={reveal} className="mt-8 text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed font-light">
              HorizonIT delivers enterprise-grade infrastructure. We architect scalable, secure, and measurable platforms for the world's leading modern businesses.
            </motion.p>

            <motion.div variants={reveal} className="mt-10 flex flex-wrap gap-5">
              <button className="px-8 py-4 bg-cyan-600 text-white font-semibold rounded-sm hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(8,145,178,0.4)] transition-all duration-300">
                Start a Consultation
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-sm hover:bg-white/10 transition-all backdrop-blur-sm">
                Explore Solutions
              </button>
            </motion.div>

            {/* Micro Stats */}
            <motion.div variants={reveal} className="mt-12 flex gap-10 border-t border-white/10 pt-8">
              <div>
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Uptime SLA</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">250+</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Deployments</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Global</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Operations</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: PREMIUM ACCORDION */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setExpanded(idx)}
                className={`cursor-pointer overflow-hidden rounded-lg border transition-all duration-500 ${
                  expanded === idx 
                  ? 'bg-white/15 border-white/30 shadow-2xl backdrop-blur-xl' 
                  : 'bg-white/5 border-white/10 hover:bg-white/10 backdrop-blur-md'
                }`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-mono transition-colors ${expanded === idx ? 'text-cyan-400' : 'text-slate-500'}`}>
                        {service.id}
                      </span>
                      <h3 className={`text-lg font-semibold transition-colors ${expanded === idx ? 'text-white' : 'text-slate-300'}`}>
                        {service.title}
                      </h3>
                    </div>
                    <div className={`w-6 h-6 flex items-center justify-center rounded-full border border-white/20 text-white transition-transform duration-500 ${expanded === idx ? 'rotate-45 bg-cyan-600 border-none' : ''}`}>
                      +
                    </div>
                  </div>

                  <AnimatePresence>
                    {expanded === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                      >
                        <div className="pt-4 text-slate-300 text-sm leading-relaxed">
                          <p className="mb-4">{service.desc}</p>
                          <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-500 uppercase">
                            Focus: {service.tag}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator with refined style */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-px h-12 bg-linear-to-b from-cyan-500 to-transparent" />
      </motion.div>
    </section>

      {/* Our Capabilities (glass cards) */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.h3 variants={reveal} className="text-2xl font-syne font-bold mb-4">Our Capabilities</motion.h3>
          <motion.p variants={reveal} className="text-slate-600 max-w-3xl leading-relaxed mb-8">
            We deliver a full stack of services covering enterprise software, web platforms, CMS, e-commerce and cloud infrastructure. Each engagement is tailored — outcome-driven, measurable, and built with long-term operability in mind.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card relative overflow-hidden group">
              <div className="p-6">
                <div className="text-xs font-space-mono text-slate-500 uppercase">Delivery</div>
                <div className="text-lg font-semibold mt-2">Managed teams & delivery</div>
                <p className="text-slate-500 mt-2">Agile squads, SLAs and continuous improvements to guarantee results.</p>
              </div>
              <div className="shutter absolute inset-0 pointer-events-none" />
            </div>

            <div className="glass-card relative overflow-hidden group">
              <div className="p-6">
                <div className="text-xs font-space-mono text-slate-500 uppercase">Security</div>
                <div className="text-lg font-semibold mt-2">Built-in compliance</div>
                <p className="text-slate-500 mt-2">Security-first architecture, audits and controls for enterprise needs.</p>
              </div>
              <div className="shutter absolute inset-0 pointer-events-none" />
            </div>

            <div className="glass-card relative overflow-hidden group">
              <div className="p-6">
                <div className="text-xs font-space-mono text-slate-500 uppercase">Scale</div>
                <div className="text-lg font-semibold mt-2">Architected to grow</div>
                <p className="text-slate-500 mt-2">Cloud-native patterns, autoscaling, and resilient design for uptime.</p>
              </div>
              <div className="shutter absolute inset-0 pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services list (alternating light/dark bands) */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-10">
            {services.map((svc, idx) => {
              const even = idx % 2 === 0;
              return (
                <motion.article
  key={svc.number}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative group"
>
  <div
    className={`
    relative
    overflow-hidden
    border
    ${even ? "bg-white border-slate-200" : "bg-slate-950 border-slate-800"}
    `}
  >
    
    {/* BIG NUMBER BACKGROUND */}
    <div className="absolute right-10 top-0 text-[140px] font-bold opacity-[0.04] select-none">
      {svc.number}
    </div>

    <div className="grid md:grid-cols-2 min-h-105">
      
      {/* TEXT SIDE */}
      <div className={`p-12 flex flex-col justify-center ${even ? "" : "md:order-2"}`}>
        
        {/* Number */}
        <div className={`text-sm font-mono mb-3 ${even ? "text-blue-600" : "text-blue-400"}`}>
          {svc.number}
        </div>

        {/* Title */}
        <h3 className={`text-3xl font-bold mb-4 ${even ? "" : "text-white"}`}>
          {svc.title}
        </h3>

        {/* Line animation */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.8 }}
          className={`h-0.5 mb-6 ${even ? "bg-blue-600" : "bg-blue-400"}`}
        />

        {/* Description */}
        <p className={`mb-6 leading-relaxed max-w-lg ${even ? "text-slate-600" : "text-slate-300"}`}>
          {svc.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3">
          {svc.features.map((f, i) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`flex items-center gap-2 text-sm ${
                even ? "text-slate-700" : "text-slate-300"
              }`}
            >
              <div className={`w-1.5 h-1.5 ${even ? "bg-blue-600" : "bg-blue-400"}`} />
              {f}
            </motion.div>
          ))}
        </div>

      </div>

      {/* IMAGE SIDE */}
      <div className={`relative ${even ? "" : "md:order-1"}`}>
        
        <div className="absolute inset-0 overflow-hidden">

          {/* Image */}
          <motion.img
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.8 }}
            src={svc.image}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent" />

          {/* Frame */}
          <div className="absolute inset-6 border border-white/20" />

          {/* Corner Accent */}
          <div className="absolute top-6 left-6 w-6 h-6 border-l-2 border-t-2 border-blue-400" />
          <div className="absolute bottom-6 right-6 w-6 h-6 border-r-2 border-b-2 border-blue-400" />

        </div>

      </div>

    </div>

    {/* Hover Glow */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
      <div className="absolute inset-0 border border-blue-400/40" />
    </div>

  </div>
</motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-syne font-bold mb-4">Let's build something powerful together</h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">Partner with HorizonIT on your next transformation — we bring engineering discipline, proven delivery and a commercial mindset.</p>
          <a href="#contact" className="inline-block bg-cyan-600 text-white px-8 py-3 rounded-sm shadow hover:shadow-cyan-glow transition">Start a Project</a>
        </div>
      </section>

      {/* Minimal footer-sentinel spacing */}
      <div className="h-20" />

      {/* ----- Styles for glass/shutter ----- */}
      <style>{`
        /* Glass card */
        .glass-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0.6));
          border: 1px solid rgba(15,23,42,0.06);
          backdrop-filter: blur(8px);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .glass-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(2,132,199,0.08);
        }
        /* shutter overlay */
        .glass-card .shutter {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.0) 100%);
          transform: translateX(-110%);
          transition: transform 0.7s cubic-bezier(.2,.9,.2,1);
          pointer-events: none;
        }
        .glass-card.group-hover .shutter,
        .glass-card:hover .shutter {
          transform: translateX(110%);
        }
        /* small helpers */
        .text-4.5xl { font-size: 2.5rem; line-height: 1.02; } /* small custom size if needed */
        @media (min-width: 1024px) {
          .text-4.5xl { font-size: 3.25rem; }
        }
      `}</style>
    </div>
  );
}