import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { Quote, Star, ArrowRight } from "lucide-react";

const reviews = [
  {
    name: "Michael Chen",
    role: "CTO",
    company: "FinCore Solutions",
    text: "HorizonIT transformed our outdated systems into a scalable digital platform. Their technical expertise made the entire process seamless.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Director",
    company: "BlueWave Logistics",
    text: "The team delivered a robust solution that improved our operational efficiency significantly. Their attention to detail stood out.",
    rating: 5,
  },
  {
    name: "David Kumar",
    role: "Founder",
    company: "NextGen Retail",
    text: "From planning to deployment, HorizonIT demonstrated exceptional technical capability and business understanding.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "VP of Engineering",
    company: "CloudScale AI",
    text: "The most creative UI/UX team we've worked with. They didn't just build an app; they built an experience that users love.",
    rating: 5,
  },
  {
    name: "James Sterling",
    role: "Head of Digital",
    company: "Global Trade Co.",
    text: "Scaling our e-commerce platform seemed impossible until HorizonIT stepped in. Their cloud-native approach is world-class.",
    rating: 5,
  },
];

// Triplicating to ensure infinite feel even during long drags
const duplicatedReviews = [...reviews, ...reviews, ...reviews];

export default function ClientReviews() {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();

  const startAnimation = async () => {
    await controls.start({
      x: -1800,
      transition: { duration: 50, ease: "linear", repeat: Infinity },
    });
  };

  useEffect(() => {
    if (!isPaused) startAnimation();
    else controls.stop();
  }, [isPaused]);

  return (
    <section className="py-32 bg-[#F8FAFF] relative overflow-hidden">
      
      {/* 1. ATMOSPHERIC BACKGROUND SHADES (Low Opacity) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Digital Blue Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-blue-200/20 rounded-full blur-[120px]" />
        
        {/* Soft Elegant Pink Glow */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-pink-100/30 rounded-full blur-[120px]" />
        
        {/* Subtle Engineering Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ASYMMETRICAL HEADING */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div className="flex items-center gap-3 text-blue-600 font-mono text-xs tracking-[0.3em] uppercase mb-4">
              <span className="w-8 h-px bg-blue-600"></span>
              Client Success Matrix
            </motion.div>
            <motion.h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter">
              Proven Impact. <br />
              <span className="text-slate-400">Industry Validated.</span>
            </motion.h2>
          </div>
          <div className="hidden md:block text-right">
             <div className="flex justify-end gap-2 text-blue-600 animate-pulse">
              <span className="text-xs font-bold uppercase tracking-widest">Grab to Explore</span>
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </div>

      {/* 2. INFINITE SCROLL & DRAGGABLE CONTAINER */}
      <div 
        className="relative cursor-grab active:cursor-grabbing mask-fade-horizontal py-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: -3000, right: 0 }}
          animate={controls}
          onDragStart={() => setIsPaused(true)}
          className="flex gap-8 pl-10"
        >
          {duplicatedReviews.map((review, i) => (
            <div key={i} className="w-[340px] md:w-[420px] flex-shrink-0">
  {/* --- PREMIUM GLASS CARD START --- */}
  <div className="group relative h-full p-8 rounded-3xl transition-all duration-700 hover:-translate-y-3">
    
    {/* 1. THE GLASS BASE: Dynamic transparency */}
    <div className="absolute inset-0 rounded-3xl bg-white/30 backdrop-blur-3xl transition-all duration-500 group-hover:bg-white/50 group-hover:backdrop-blur-2xl" />
    
    {/* 2. THE OUTER SHELL: Multi-layered shadow for depth */}
    <div className="absolute inset-0 rounded-3xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.03)] group-hover:shadow-[0_30px_60px_rgba(37,99,235,0.08)] transition-all duration-500" />

    {/* 3. THE "HCLTECH" EDGE: Double border logic */}
    <div className="absolute inset-[1px] rounded-[23px] border border-gradient-to-br from-white/80 to-transparent pointer-events-none" />

    {/* 4. CONTENT START */}
    <div className="relative z-10 flex flex-col h-full">
      
      {/* Rating & Action Icon */}
      <div className="flex justify-between items-start mb-10">
        <div className="flex gap-1">
          {[...Array(5)].map((_, idx) => (
            <Star key={idx} size={13} className="fill-blue-600 text-blue-600" />
          ))}
        </div>
        <div className="p-3 rounded-2xl bg-white/40 border border-white/60 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
          <Quote size={20} className="opacity-90" />
        </div>
      </div>

      {/* Main Quote Text */}
      <p className="text-slate-800 text-[17px] leading-[1.8] mb-12 font-medium tracking-tight italic">
        "{review.text}"
      </p>

      {/* User Branding Footer */}
      <div className="flex items-center gap-4 mt-auto border-t border-slate-900/5 pt-8">
        <div className="relative">
          {/* Square technical avatar */}
          <div className="w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center text-white text-sm font-bold shadow-2xl overflow-hidden group-hover:rotate-3 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-transparent" />
            <span className="relative z-10">{review.name.split(' ').map(n => n[0]).join('')}</span>
          </div>
          {/* Verification Badge */}
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md">
             <div className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse" />
          </div>
        </div>
        
        <div className="flex flex-col gap-1">
          <h4 className="text-[16px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
            {review.name}
          </h4>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
              {review.role}
            </span>
            <div className="w-1 h-1 bg-blue-400 rounded-full opacity-50" />
            <span className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-blue-600">
              {review.company}
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Subtle Hover Glow Layer */}
    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-blue-400/5 to-pink-400/5 pointer-events-none" />
  </div>
</div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .mask-fade-horizontal {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
}