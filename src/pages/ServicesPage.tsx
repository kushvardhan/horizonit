import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Services from '../components/Services';
// icon imports kept in case the legacy `services` array is still used elsewhere (it isn't),
// but we can safely remove the unused items later if desired.


export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* page hero similar to home but with a dark overlay */}
      <section className="pt-32 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight mb-6"
          >
            Our Services
          </motion.h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto font-light">
            Deep domain expertise across eight core capabilities. Whatever your challenge,
            we partner end‑to‑end to design, build and run the digital platform that makes
            it real.
          </p>
        </div>
      </section>

      {/* reuse the full‑page capabilities component from the home page */}
      <Services />

      {/* call‑to‑action banner (kept from original page) */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight max-w-xl text-center lg:text-left">
            Ready to transform your technical infrastructure?
          </h2>
          <NavLink
            to="/contact"
            className="bg-white text-blue-600 px-10 py-4 text-sm font-black uppercase tracking-[0.3em] hover:bg-slate-900 hover:text-white transition-all"
          >
            Initiate Project
          </NavLink>
        </div>
      </section>
    </main>
  );
}