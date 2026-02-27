import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Award, ShieldCheck, Users, Target, Zap } from 'lucide-react';

const stats = [
  { label: 'Global Delivery Centers', value: '30+' },
  { label: 'Enterprise Projects', value: '1,200+' },
  { label: 'Years of Excellence', value: '15+' },
  { label: 'Certified Experts', value: '500+' },
];

export default function AboutPage() {
  return (
    <main className="bg-white overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50/50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-100/30 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row gap-12 items-end justify-between"
          >
            <div className="max-w-3xl">
              <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Institutional Profile</span>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-8">
                ARCHITECTING THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">DIGITAL FUTURE.</span>
              </h1>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                Founded in 2009, Horizon IT Consultancy Services (HITCS) has evolved from a regional powerhouse in Ranchi to a global leader in enterprise-grade software implementation.
              </p>
            </div>
            <div className="hidden lg:block w-px h-64 bg-slate-200" />
          </motion.div>
        </div>
      </section>

      {/* --- VISION & PHILOSOPHY --- */}
      <section className="py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Our Philosophy: <br/>Global Sourcing, Local Context.</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              At HITCS, we combine world-class technologies with deep technical expertise. By bundling our services, we provide <strong>Integrated Sourcing</strong>—ensuring our clients receive a tailored mix of technology and service that surpasses standard industry expectations.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="border-l-2 border-blue-600 pl-4">
                  <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-slate-900 overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
                  className="object-cover w-full h-full opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" 
                  alt="Enterprise Office"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                    <p className="text-sm font-bold tracking-widest uppercase mb-2">Established 2009</p>
                    <h3 className="text-2xl font-black">A Decade of Trust.</h3>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- CORE PILLARS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-4xl font-black tracking-tight mb-4 text-slate-900">The Pillars of HITCS</h2>
             <div className="h-1 w-20 bg-blue-600 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Target, title: 'Strategic Planning', desc: 'Every line of code starts with a business objective. We align technology with your ROI.' },
              { icon: Zap, title: 'Agile Delivery', desc: 'With centers in 30+ countries, we follow a timezone-synced model for continuous development.' },
              { icon: ShieldCheck, title: 'Sovereign Security', desc: 'ISO 27001-aligned security practices protect your data at the atomic level.' }
            ].map((pillar, i) => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={i} 
                className="p-10 border border-slate-100 bg-white shadow-xl shadow-slate-200/20"
              >
                <pillar.icon className="text-blue-600 mb-6" size={40} />
                <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-slate-500 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}