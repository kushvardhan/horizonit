import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function AnimatedStat({ value, suffix, label, delay }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 40, damping: 25 });
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        motionVal.set(value);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, value, delay, motionVal]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent =
          Math.round(latest).toLocaleString() + suffix;
      }
    });
    return unsubscribe;
  }, [spring, suffix]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay }}
      className="group relative text-center"
    >
      <div className="relative rounded-3xl border border-white/40 bg-white/40 p-8 backdrop-blur-2xl transition-all duration-500 hover:border-[hsl(262,83%,58%)]/20 hover:bg-white/60 hover:shadow-2xl hover:shadow-[hsl(262,83%,58%)]/5 md:p-10">
        {/* Hover glow */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[hsl(262,83%,58%)]/0 to-[hsl(220,80%,56%)]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.04]" />
        <span
          ref={displayRef}
          className="font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl"
        >
          {"0" + suffix}
        </span>
        <p className="mt-3 text-sm font-medium text-muted-foreground md:text-base">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

const stats = [
  { value: 226, suffix: "K+", label: "Technology Professionals", delay: 0 },
  { value: 60, suffix: "+", label: "Countries Worldwide", delay: 0.1 },
  { value: 18, suffix: "K+", label: "Enterprise Clients", delay: 0.2 },
  { value: 2200, suffix: "+", label: "Patents Driving Innovation", delay: 0.3 },
];

export function StatsSection() {
  return (
    <section className="relative z-10 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(262,83%,58%)]">
            Progress in Numbers
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
        >
          Powered by a global team delivering{" "}
          <span className="bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(220,80%,56%)] bg-clip-text text-transparent">
            smarter, better
          </span>{" "}
          outcomes
        </motion.h2>
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
