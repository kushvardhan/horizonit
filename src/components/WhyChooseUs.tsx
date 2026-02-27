// React import not required in modern React

import { motion } from 'framer-motion';
import { 
  ShieldCheck, Zap, Users, Globe, Clock, Award, Plus 
} from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: "Enterprise Delivery",
    desc: "1,200+ projects launched. We architect for the 1%, ensuring high-availability and institutional reliability.",
    accent: "bg-blue-600",
    text: "text-blue-600"
  },
  {
    icon: Users,
    title: "Senior Architects",
    desc: "Direct-to-engineer communication. No account managers, just L3 architects solving your complex problems.",
    accent: "bg-purple-600",
    text: "text-purple-600"
  },
  {
    icon: Globe,
    title: "Global Scale",
    desc: "Delivery nodes across 30+ countries. Local agility backed by the power of a global enterprise.",
    accent: "bg-blue-500",
    text: "text-blue-500"
  },
  {
    icon: Zap,
    title: "End-to-End Ownership",
    desc: "We own the full lifecycle—from the first line of strategy to 24/7 post-deployment monitoring.",
    accent: "bg-purple-500",
    text: "text-purple-500"
  },
  {
    icon: ShieldCheck,
    title: "Ironclad Security",
    desc: "ISO 27001 & SOC 2 compliant protocols. We build digital fortresses for highly regulated sectors.",
    accent: "bg-black",
    text: "text-black"
  },
  {
    icon: Clock,
    title: "Dedicated Support",
    desc: "Mission-critical systems never sleep. Our 24/7 global NOC ensures zero-latency incident response.",
    accent: "bg-blue-700",
    text: "text-blue-700"
  }
];

const ReasonCard = ({ reason, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative h-full"
    >
      {/* Dynamic Glass Container */}
      <div className="relative z-10 h-full bg-white/40 backdrop-blur-md border border-white p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(59,130,246,0.1)] transition-all duration-500">
        
        {/* Top Identification Layer */}
        <div className="flex justify-between items-start mb-12">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${reason.accent} group-hover:scale-110 shadow-lg`}>
            <reason.icon size={24} className="text-white" />
          </div>
          <span className="text-sm font-black text-slate-200 group-hover:text-blue-100 transition-colors">
            0{index + 1}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-4">
          {reason.title}
        </h3>
        <p className="text-slate-500 leading-relaxed font-medium">
          {reason.desc}
        </p>

        {/* The "Interaction" Hint */}
        <div className="mt-8 flex items-center gap-2 overflow-hidden">
          <div className={`h-[2px] w-0 group-hover:w-12 transition-all duration-500 ${reason.accent}`} />
          <span className={`text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 ${reason.text}`}>
            Explore Capability
          </span>
        </div>
      </div>

      {/* Aesthetic Offset Background (The "Creative" Element) */}
      <div className="absolute -bottom-2 -right-2 w-full h-full border border-slate-100 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500" />
    </motion.div>
  );
};

export default function IridescentAdvantage() {
  return (
    <section className="relative bg-white py-24 lg:py-44 overflow-hidden">
      
      {/* Background Chromatic Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-60" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Creative Header Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              Sovereign Advantage
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-[-0.05em] leading-[0.85]">
              TRUSTED <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500">
                ARCHITECTURE.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 border-l-2 border-slate-900 pl-8 pb-2">
            <p className="text-slate-500 text-xl font-medium leading-relaxed italic">
              "When mission-critical systems require absolute certainty, global enterprises turn to the HITCS protocol."
            </p>
          </div>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-x-8 lg:gap-x-12">
          {reasons.map((reason, idx) => (
            <ReasonCard key={idx} reason={reason} index={idx} />
          ))}
        </div>

        {/* Creative Bottom-Bar (Responsive) */}
        <div className="mt-32 pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex gap-16">
            <div className="text-center md:text-left">
              <div className="text-4xl font-black text-slate-900">2026</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Industry Standard</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl font-black text-slate-900">99.9%</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Success Rate</div>
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-8 bg-black text-white px-10 py-6 text-xs font-black uppercase tracking-[0.3em] overflow-hidden"
          >
            <span className="relative z-10">Request Institutional Audit</span>
            <Plus className="relative z-10 group-hover:rotate-90 transition-transform duration-500" size={18} />
            {/* Hover Background Slide */}
            <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}