import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Layout, Database, ShoppingCart, 
  Share2, Search, Smartphone, Cloud, ArrowUpRight 
} from 'lucide-react';

const services = [
  {
    title: "Software Solutions",
    icon: Code2,
    desc: "From standalone desktop applications to complex client-server architectures, we build proprietary software that drives competitive advantage. Our expertise spans .NET, Java, and Python ecosystems.",
    features: ["Custom ERP/CRM", "Legacy Migration", "Enterprise Integration"]
  },
  {
    title: "Web Solutions",
    icon: Layout,
    desc: "We deliver high-performance, responsive web platforms that serve as the digital cornerstone for India's finest organizations. Our focus is on UI/UX that converts visitors into loyal clients.",
    features: ["Progressive Web Apps", "Interactive Demos", "Portal Development"]
  },
  {
    title: "CMS Development",
    icon: Database,
    desc: "Empower your non-technical teams with robust Content Management Systems. We specialize in headless CMS and custom WordPress/Kentico architectures that make content updates seamless.",
    features: ["Role-based Access", "SEO Optimized Architecture", "Multi-language Support"]
  },
  {
    title: "E-Commerce",
    icon: ShoppingCart,
    desc: "Launch global-ready online stores with secure payment gateways, inventory sync, and conversion-optimized checkouts. We build on Shopify, WooCommerce, and custom frameworks.",
    features: ["Secure Payment Setup", "Inventory Management", "User Analytics"]
  },
  {
    title: "Social Media Services",
    icon: Share2,
    desc: "Move beyond 'likes.' We provide data-driven social media branding and marketplace integrations that place your products directly in the hands of your target audience.",
    features: ["Brand Storytelling", "Audience Growth", "Campaign Tracking"]
  },
  {
    title: "SEO Optimization",
    icon: Search,
    desc: "Search Engine Optimization is an investment, not a cost. We handle technical SEO, schema markup, and content strategy to ensure you dominate search rankings.",
    features: ["On-Page/Off-Page", "Technical Audits", "Core Web Vitals"]
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    desc: "Native and Cross-Platform (React Native/Flutter) applications designed for extreme usability. We build mobile tools that function flawlessly in low-connectivity environments.",
    features: ["iOS & Android", "Offline Capabilities", "User-Centric UI"]
  },
  {
    title: "Web Hosting",
    icon: Cloud,
    desc: "Institutional grade hosting with 99.9% uptime. From domain registration to managed cloud server administration, we ensure your digital assets are always live and secure.",
    features: ["SSL Certification", "24/7 Monitoring", "Global CDN"]
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="pt-32 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
          >
            END-TO-END <br/> <span className="text-blue-400 italic">SOLUTIONS.</span>
          </motion.h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light">
            Providing the technical backbone for India's most ambitious organizations since 2009.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ backgroundColor: '#F8FAFC' }}
                className="bg-white p-10 group transition-all duration-500 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-8">{service.desc}</p>
                </div>
                
                <ul className="space-y-3">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                       <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                       {feat}
                    </li>
                  ))}
                  <li className="pt-6">
                    <button className="flex items-center gap-2 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                        View Case Study <ArrowUpRight size={14} />
                    </button>
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-12">
            <h2 className="text-4xl font-black tracking-tight max-w-xl">
              Ready to transform your technical infrastructure?
            </h2>
            <button className="bg-white text-blue-600 px-12 py-5 text-xs font-black uppercase tracking-[0.3em] hover:bg-slate-900 hover:text-white transition-all">
                Initiate Project
            </button>
        </div>
      </section>
    </main>
  );
}