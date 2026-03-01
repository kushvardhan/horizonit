import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  /* Mouse tracking */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 35, stiffness: 120 });
  const smoothY = useSpring(mouseY, { damping: 35, stiffness: 120 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  /* Scroll */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-[#F8FAFC] px-6 pt-28"
    >
      {/* ===== BACKGROUND ARCHITECTURE ===== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Ultra-soft grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.25) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
            opacity: 0.25,
          }}
        />

        {/* Spotlight */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: useTransform(
              [smoothX, smoothY],
              ([x, y]) =>
                `radial-gradient(700px circle at ${x}px ${y}px, rgba(99,102,241,0.05), transparent 75%)`
            ),
          }}
        />

        {/* Ambient light */}
        <motion.div
          style={{
            x: useTransform(smoothX, (v) => v * 0.015),
            y: useTransform(smoothY, (v) => v * 0.015),
          }}
          className="absolute inset-0"
        >
          <div className="absolute left-[8%] top-[25%] h-72 w-72 rounded-full bg-indigo-300/10 blur-[120px]" />
          <div className="absolute right-[10%] bottom-[15%] h-96 w-96 rounded-full bg-cyan-300/10 blur-[140px]" />
        </motion.div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-7xl"
      >
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              About HITCS
            </span>
          </div>

          {/* Headline */}
          <h1 className="max-w-5xl text-balance text-[clamp(2.4rem,7vw,5.6rem)] font-extrabold leading-[0.95] tracking-tight text-slate-900">
            Engineering systems <br />
            <span className="bg-linear-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              businesses can rely on.
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-slate-500 md:text-xl">
            HITCS designs and delivers resilient digital platforms — built to
            scale, built to last, and built with the realities of production,
            security, and growth in mind.
          </p>
          
        </div>
      </motion.div>

    </section>
  );
}
