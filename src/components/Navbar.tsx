import React, { useEffect, useState, type JSX } from "react";
import { X, ArrowRight, Github, Linkedin, Twitter, Menu as MenuIcon, Globe, Mail } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-100 transition-all duration-500 ${
          scrolled 
            ? "py-3 bg-white/60 dark:bg-black/80 backdrop-blur-2xl border-b border-black/5 dark:border-white/10 shadow-sm" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <NavLink to="/" className="relative z-110 flex items-center">
            <img
              src="/new_hitcsLogo.png"
              alt="Company logo"
              className={`h-8 md:h-10 transition-all duration-300 ${
                !scrolled ? "brightness-90 invert" : "brightness-100"
              }`}
            />
          </NavLink>

          <nav className="hidden md:flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    isActive 
                      ? "bg-white text-blue-600 shadow-md" 
                      : scrolled 
                        ? "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                        : "text-white/90 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4 relative z-110">
            <NavLink
              to="/contact"
              className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:-translate-y-1 shadow-[0_4px_0_0_rgba(0,0,0,0.1)] active:shadow-none active:translate-y-0 ${
                scrolled 
                ? "bg-blue-600 text-white shadow-blue-800/40" 
                : "bg-white text-black shadow-zinc-300"
              }`}
            >
              Start Project <ArrowRight size={16} />
            </NavLink>

            <button
              onClick={() => setMobileOpen(true)}
              className={`p-2 rounded-lg md:hidden border ${
                scrolled ? "bg-black/5 border-black/10 text-black" : "bg-white/10 border-white/20 text-white"
              }`}
            >
              <MenuIcon size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-200 bg-zinc-50 dark:bg-zinc-950 flex flex-col h-screen overflow-hidden"
          >
            {/* 1. STICKY TOP HEADER */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-black/3 dark:border-white/3 bg-white dark:bg-zinc-950">
              <img src="/new_hitcsLogo.png" alt="Logo" className="h-7 brightness-100" />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2.5 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full shadow-lg active:scale-90 transition-transform"
              >
                <X size={20} />
              </button>
            </div>

            {/* 2. SCROLLABLE BODY (THE NAV) */}
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-12">
              <nav>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6 ml-1">Menu</p>
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link, i) => {
                    const isActive = location.pathname === link.to;
                    return (
                      <motion.li
                        key={link.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <NavLink
                          to={link.to}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center justify-between py-3.5 px-4 rounded-2xl text-2xl font-bold tracking-tight transition-all active:scale-[0.98] ${
                            isActive 
                            ? "text-blue-600 " 
                            : "text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
                          }`}
                        >
                          {link.label}
                          {isActive && <motion.div layoutId="arrow" ><ArrowRight size={20} /></motion.div>}
                        </NavLink>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* 3. REFINED BENTO FOOTER */}
              <div className="flex flex-col gap-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Connect</p>
                
                {/* 3D START PROJECT BUTTON - SLEEK VERSION */}
                <NavLink
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between w-full px-6 py-5 bg-blue-600 text-white rounded-2xl shadow-[0_5px_0_0_#1e40af] active:shadow-none active:translate-y-1 transition-all group"
                >
                  <span className="text-lg font-bold">Start Project</span>
                  <div className="bg-white/10 p-2 rounded-full group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={18} />
                  </div>
                </NavLink>

                {/* INFO TILES */}
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900/50 border border-black/3 dark:border-white/3 rounded-2xl">
                    <div className="p-2.5 bg-blue-50 dark:bg-blue-500/10 text-blue-600 rounded-xl">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Email</p>
                      <p className="text-sm font-semibold dark:text-zinc-100">hello@hitcs.in</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900/50 border border-black/3 dark:border-white/3 rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 bg-zinc-100 dark:bg-white/5 text-zinc-500 rounded-xl">
                        <Globe size={18} />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Follow</p>
                        <div className="flex gap-4 mt-0.5">
                          <Twitter size={16} className="text-zinc-400 hover:text-blue-600" />
                          <Linkedin size={16} className="text-zinc-400 hover:text-blue-600" />
                          <Github size={16} className="text-zinc-400 hover:text-blue-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. MINIMAL LEGAL STRIP */}
            <div className="px-6 py-5 border-t border-black/3 dark:border-white/3 flex justify-between items-center bg-white dark:bg-zinc-950">
              <span className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase">© 2026 HITCS</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-zinc-500 uppercase">System Active</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}