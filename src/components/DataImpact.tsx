import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useCounterAnimation } from "../hooks/useScrollReveal";

const stats = [
  { value: 1200, suffix: '+', label: 'Projects', desc: 'Enterprise Delivery' },
  { value: 500, suffix: '+', label: 'Clients', desc: 'Fortune 500 Tech' },
  { value: 30, suffix: '+', label: 'Countries', desc: 'Global Presence' },
  { value: 99, suffix: '.9%', label: 'SLA', desc: 'Mission Critical' },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCounterAnimation(stat.value, 2500, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500"
    >
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
      
      <div className="relative z-10">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter">
            {count}
          </span>
          <span className="text-xl md:text-2xl font-bold text-blue-400">{stat.suffix}</span>
        </div>
        <h4 className="mt-4 text-sm font-bold uppercase tracking-widest text-slate-300 group-hover:text-blue-400 transition-colors">
          {stat.label}
        </h4>
        <p className="mt-2 text-xs font-medium text-slate-500 uppercase tracking-tighter">
          {stat.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function DataImpact() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-[#020617] py-24 lg:py-32 overflow-hidden flex items-center"
    >
      {/* --- HIGH-END BACKGROUND LAYER --- */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        {/* Abstract Tech Image / Video Placeholder */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070')] bg-cover bg-center opacity-10 grayscale" />
        
        {/* Geometric Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />
      </motion.div>

      {/* --- CONTENT --- */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Narrative */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                Global Performance 2024
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
                Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
                  Digital Sovereignty.
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                We empower Fortune 500 enterprises with mission-critical infrastructure and AI-driven operational excellence.
              </p>
              
              <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 opacity-60">
                <div className="h-12 w-px bg-gradient-to-b from-blue-500 to-transparent hidden lg:block" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Response Time</p>
                  <p className="text-white font-bold">&lt; 15 mins</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Global Hubs</p>
                  <p className="text-white font-bold">12 Cities</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Modern Stats Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, idx) => (
                <StatCard key={idx} stat={stat} index={idx} />
              ))}
              
              {/* Interactive CTA Card */}
              <motion.div 
                whileHover={{ scale: 0.98 }}
                className="group relative col-span-1 sm:col-span-2 p-8 rounded-2xl bg-blue-600 overflow-hidden cursor-pointer"
              >
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Ready to Scale?</h3>
                    <p className="text-blue-100/70 text-sm">Consult with our enterprise architects today.</p>
                  </div>
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                {/* Background Animation for CTA */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors" />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}