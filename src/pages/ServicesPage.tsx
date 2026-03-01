// src/pages/Services.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/* ----- animation variants ----- */
const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };




/* ----- Component ----- */
export default function ServicesPage() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  // Auto-cycle accordion every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAccordion((prev) => (prev + 1) % heroServices.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-white text-slate-900 antialiased">
      {/* top spacing for navbar (assumes navbar is fixed) */}
      <div className="pt-20" />

      {/* HERO */}
      <section className="relative h-[88vh] min-h-[680px] flex items-center overflow-hidden">
        {/* stronger visible background image (less white overlay so image is crisper) */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.45), rgba(255,255,255,0.45)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000')",
          }}
        />

        {/* soft diagonal/blur to add blockiness */}
        <div aria-hidden className="absolute -right-48 -top-24 w-[720px] h-[720px] bg-gradient-to-tr from-cyan-100 to-transparent opacity-20 blur-[90px] rotate-[12deg]" />

        {/* grid overlay (very subtle) */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* LEFT content: reduced width to make it less heavy */}
            <div className="lg:col-span-6">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="">
                <motion.div variants={reveal} className="font-space-mono text-xs text-cyan-600 tracking-widest mb-3">[ SERVICES ]</motion.div>

                <motion.h1 variants={reveal} className="text-4xl md:text-4.5xl lg:text-5xl font-syne font-extrabold leading-tight max-w-xl">
                  Engineering{" "}
                  <span className="text-slate-900">Digital</span>
                  <br />
                  <span className="text-cyan-600">Infrastructure</span>
                  <br />
                  For Modern Business
                </motion.h1>

                <motion.div variants={reveal} className="mt-5 w-32 h-1 bg-cyan-600 origin-left" />

                <motion.p variants={reveal} className="mt-5 text-base md:text-lg text-slate-600 max-w-lg leading-relaxed">
                  HorizonIT partners with enterprises to architect and deliver scalable, secure and measurable digital platforms — combining domain expertise,
                  engineering rigor and operational excellence.
                </motion.p>

                <motion.div variants={reveal} className="mt-7 flex gap-4">
                  <a href="#contact" className="inline-flex items-center gap-3 bg-cyan-600 text-white px-5 py-3 rounded-sm shadow hover:shadow-cyan-glow transition">
                    Start a Project
                  </a>
                  <a href="#services" className="inline-flex items-center gap-2 px-4 py-3 border border-slate-200 rounded-sm hover:border-cyan-600 hover:text-cyan-600 transition">
                    View Services
                  </a>
                </motion.div>

                {/* Trust / capability micro-strip */}
                <motion.div variants={reveal} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3 p-3 rounded-sm">
                    <div className="w-9 h-9 rounded-sm bg-cyan-50 text-cyan-600 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                    </div>
                    <div>
                      <div className="text-xs font-space-mono text-slate-500 uppercase">Reliability</div>
                      <div className="text-sm font-medium text-slate-800">SLA-driven operations & 24/7 monitoring</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-sm">
                    <div className="w-9 h-9 rounded-sm bg-cyan-50 text-cyan-600 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3v18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                    </div>
                    <div>
                      <div className="text-xs font-space-mono text-slate-500 uppercase">Scale</div>
                      <div className="text-sm font-medium text-slate-800">Architectures built to grow with you</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-sm">
                    <div className="w-9 h-9 rounded-sm bg-cyan-50 text-cyan-600 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 4v6c0 5-7 8-7 8s-7-3-7-8V7l7-4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                    </div>
                    <div>
                      <div className="text-xs font-space-mono text-slate-500 uppercase">Security</div>
                      <div className="text-sm font-medium text-slate-800">Enterprise-grade controls & compliance</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT: quick grid (kept compact, visually rich) */}
            <div className="lg:col-span-6">
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
                {/* Large featured tile */}
                <div className="col-span-2 grid grid-cols-2 gap-3">
                  <div className="relative rounded-sm overflow-hidden border border-slate-100 shadow-sm">
                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200" alt="platform" className="w-full h-44 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/75 to-transparent p-4 flex items-end">
                      <div>
                        <div className="text-xs font-space-mono text-slate-500">Featured</div>
                        <div className="text-sm font-semibold text-slate-900">Platform Engineering</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="glass-card relative overflow-hidden">
                      <div className="p-4">
                        <div className="text-xs font-space-mono text-slate-500">Cloud</div>
                        <div className="font-medium text-slate-900">Scalable infra that reduces cost at scale</div>
                      </div>
                    </div>

                    <div className="glass-card relative overflow-hidden">
                      <div className="p-4">
                        <div className="text-xs font-space-mono text-slate-500">API</div>
                        <div className="font-medium text-slate-900">Connect systems with secure, versioned APIs</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* quick option tiles */}
                {SERVICES_QUICK.map((s) => (
                  <motion.button key={s.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.985 }} className="group relative rounded-sm border border-slate-200 p-3 flex flex-col items-start gap-2 text-left hover:border-cyan-600 transition bg-white">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-sm bg-cyan-50 text-cyan-600 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2v20M3 12h18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="text-sm font-semibold text-slate-900">{s.title}</div>
                    </div>
                    <div className="text-xs font-space-mono text-slate-500">{s.tag}</div>

                    {/* small shutter label */}
                    <span className="absolute right-3 top-3 text-xs px-2 py-0.5 rounded-sm border border-slate-100 bg-white/70 opacity-0 group-hover:opacity-100 transition">Explore</span>
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        {/* scroll hint */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-[2px] h-10 bg-slate-300 rounded-sm flex items-start">
            <div className="w-[2px] h-3 bg-cyan-600 animate-bounce" />
          </div>
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

    <div className="grid md:grid-cols-2 min-h-[420px]">
      
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
          className={`h-[2px] mb-6 ${even ? "bg-blue-600" : "bg-blue-400"}`}
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

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