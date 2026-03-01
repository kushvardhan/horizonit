import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Zap, Users, Globe, Clock, Award, Plus, 
  ArrowUpRight, ChevronLeft, ChevronRight 
} from 'lucide-react';

const reasons = [
  { icon: Award, title: "Enterprise Delivery", desc: "1,200+ projects launched. We architect for the 1%, ensuring institutional reliability." },
  { icon: Users, title: "Senior Architects", desc: "Direct-to-engineer communication. No account managers, just L3 architects solving problems." },
  { icon: Globe, title: "Global Scale", desc: "Delivery nodes across 30+ countries. Local agility backed by the power of global enterprise." },
  { icon: Zap, title: "Full Ownership", desc: "We own the full lifecycle—from strategy to 24/7 post-deployment monitoring." },
  { icon: ShieldCheck, title: "Ironclad Security", desc: "ISO 27001 & SOC 2 compliant protocols. Digital fortresses for regulated sectors." },
  { icon: Clock, title: "Global Support", desc: "Mission-critical systems never sleep. Our global NOC ensures zero-latency response." }
];

const ReasonCard = ({ reason, index, isMobile }) => {
  const cardRef = useRef(null);
  const [isCenter, setIsCenter] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setIsCenter(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCenter(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '-0% -40% -0% -40%',
        threshold: 0
      }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <motion.div
      ref={cardRef}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`relative flex-shrink-0 w-[88vw] md:w-[45vw] lg:w-[400px] group snap-center snap-always ${isCenter ? 'is-active' : ''}`}
    >

      {/* Premium Glow */}
      <div className="
        absolute inset-0
        bg-gradient-to-br
        from-blue-500/20
        via-transparent
        to-purple-500/20
        blur-[120px]
        opacity-0
        group-hover:opacity-100
        group-[.is-active]:opacity-100
        transition-opacity
        duration-[2000ms]
        ease-out
      " />

      {/* Main Card */}
      <div className="
        relative
        h-[440px]
        rounded-[2rem]
        bg-white/40
        backdrop-blur-2xl
        border border-white/60
        overflow-hidden

        shadow-[0_20px_50px_rgba(0,0,0,0.04)]

        group-hover:border-blue-500/30
        group-[.is-active]:border-blue-500/30

        group-hover:shadow-[0_50px_140px_rgba(59,130,246,0.25)]
        group-[.is-active]:shadow-[0_50px_140px_rgba(59,130,246,0.25)]

        transition-all
        duration-[1800ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]
      ">

        {/* Expanding Dark Background */}
        <div className="
          absolute
          -top-[50%]
          -left-[50%]
          w-[200%]
          aspect-square
          bg-[#0B1121]
          rounded-full

          scale-0
          opacity-0

          group-hover:scale-100
          group-[.is-active]:scale-100

          group-hover:opacity-100
          group-[.is-active]:opacity-100

          transition-all
          duration-[2200ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]

          origin-top-left
          z-0
        " />

        {/* Light Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.05]

            group-hover:opacity-0
            group-[.is-active]:opacity-0

            transition-opacity
            duration-[1600ms]

            z-0
          "
          style={{
            backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Dark Grid */}
        <div
          className="
            absolute inset-0
            opacity-0

            group-hover:opacity-[0.05]
            group-[.is-active]:opacity-[0.05]

            transition-opacity
            duration-[2000ms]
            delay-200

            z-0
          "
          style={{
            backgroundImage: `radial-gradient(#fff 0.5px, transparent 0.5px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Slow Cinematic Shutter */}
        <div className="
          absolute
          top-0
          left-[-150%]
          w-[60%]
          h-full

          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent

          skew-x-[-35deg]

          group-hover:left-[150%]
          group-[.is-active]:left-[150%]

          transition-all
          duration-[3500ms]
          ease-[cubic-bezier(0.19,1,0.22,1)]

          z-30
        " />

        {/* Content */}
        <div className="relative z-10 p-10 h-full flex flex-col justify-between">

          {/* Header */}
          <div className="flex justify-between items-start">

            <div className="relative">
              <div className="
                absolute inset-0
                bg-blue-400
                blur-2xl
                opacity-0

                group-hover:opacity-40
                group-[.is-active]:opacity-40

                transition-opacity
                duration-[2000ms]
              "/>

              <div className="
                w-14 h-14
                bg-slate-900
                rounded-2xl
                flex items-center justify-center

                group-hover:bg-blue-600
                group-[.is-active]:bg-blue-600

                group-hover:rotate-[8deg]
                group-[.is-active]:rotate-[8deg]

                transition-all
                duration-[1800ms]
                ease-out
              ">
                <reason.icon size={26} className="text-white" />
              </div>
            </div>

            <span className="
              font-mono
              text-[10px]
              tracking-[0.3em]
              uppercase
              font-bold

              text-slate-400

              group-hover:text-blue-400
              group-[.is-active]:text-blue-400

              transition-colors
              duration-[1600ms]
            ">
              Arch_Node // 0{index + 1}
            </span>

          </div>

          {/* Body */}
          <div>

            <h3 className="
              text-4xl
              font-black
              leading-[0.85]
              tracking-tighter
              mb-6

              text-slate-900

              group-hover:text-white
              group-[.is-active]:text-white

              transition-colors
              duration-[1800ms]
            ">
              {reason.title}.
            </h3>

            <p className="
              text-lg
              leading-relaxed
              font-medium

              text-slate-500

              group-hover:text-slate-300
              group-[.is-active]:text-slate-300

              transition-colors
              duration-[1800ms]
            ">
              {reason.desc}
            </p>

          </div>

          {/* Footer */}
          <div className="
            flex justify-between items-center pt-8
            border-t border-slate-200/50

            group-hover:border-white/10
            group-[.is-active]:border-white/10

            transition-colors
            duration-[1800ms]
          ">

            <div className="flex items-center gap-2">

              <div className="
                w-2 h-2
                rounded-full

                bg-blue-600

                group-hover:bg-blue-400
                group-[.is-active]:bg-blue-400

                transition-colors
                duration-[1200ms]
              "/>

              <span className="
                text-[10px]
                font-black
                tracking-widest
                uppercase

                text-slate-400

                group-hover:text-slate-300
                group-[.is-active]:text-slate-300

                transition-colors
                duration-[1200ms]
              ">
                Active System
              </span>

            </div>

            <div className="
              relative
              overflow-hidden
              w-12 h-12
              rounded-full
              border border-slate-200

              group-hover:border-blue-500
              group-[.is-active]:border-blue-500

              flex items-center justify-center

              transition-colors
              duration-[1500ms]
            ">

              <div className="
                absolute inset-0
                bg-blue-600

                translate-y-full

                group-hover:translate-y-0
                group-[.is-active]:translate-y-0

                transition-transform
                duration-[1200ms]
                ease-out
              "/>

              <ArrowUpRight
                size={20}
                className="
                  relative z-10

                  text-slate-900

                  group-hover:text-white
                  group-[.is-active]:text-white

                  transition-colors
                  duration-[1200ms]
                "
              />

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
};

export default function IridescentAdvantage() {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Keep track of window size to enable the scroll-center triggers only on mobile/tablet devices
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slide = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollWidth = el.scrollWidth / 2;

    if (el.scrollLeft >= scrollWidth) {
      el.scrollLeft -= scrollWidth;
    }

    if (el.scrollLeft <= 0) {
      el.scrollLeft += scrollWidth;
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-[#FAFBFF] pb-2 pt-20 lg:py-35 overflow-hidden">
      {/* Background Chromatic Shapes (Light Theme) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-12 bg-blue-600" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-600">The HITCS Advantage</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
              PREMIUM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">ENGINEERING.</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button 
              onClick={() => slide('left')}
              className="w-16 h-16 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => slide('right')}
              className="w-16 h-16 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Grid */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10 cursor-grab active:cursor-grabbing"
        >
          {[...reasons, ...reasons].map((reason, idx) => (
            <ReasonCard
              key={idx}
              reason={reason}
              index={idx % reasons.length}
              isMobile={isMobile}
            />
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-slate-200 py-12">
          {[
            { label: "Founded", val: "2018" },
            { label: "Uptime", val: "99.99%" },
            { label: "Global Hubs", val: "14+" },
            { label: "Tech Stack", val: "Modern" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</div>
              <div className="text-3xl font-black text-slate-900">{stat.val}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}