import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "2012",
    title: "Founded",
    desc: "NovaTech Solutions was born with a vision to redefine enterprise IT services through innovation and deep technical expertise.",
  },
  {
    year: "2015",
    title: "Cloud Pioneer",
    desc: "Launched our CloudSMART offering, pioneering multi-cloud migration services for enterprise clients across financial services and healthcare.",
  },
  {
    year: "2018",
    title: "Global Expansion",
    desc: "Expanded operations to 30+ countries with major delivery centers in North America, Europe, and Asia-Pacific.",
  },
  {
    year: "2020",
    title: "AI-First Strategy",
    desc: "Pivoted to an AI-first approach, launching dedicated AI labs and partnering with leading hyperscalers to deliver intelligent automation at scale.",
  },
  {
    year: "2023",
    title: "Cybersecurity Leadership",
    desc: "Acquired a leading cybersecurity firm, establishing our zero-trust framework as an industry standard for enterprise security.",
  },
  {
    year: "2025",
    title: "Supercharging Progress",
    desc: "Crossed $14B in revenue with 226K+ professionals, recognized as one of the world's most admired technology companies.",
  },
];

export function TimelineSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative z-10 px-6 py-32 lg:py-40">
      <div className="mx-auto max-w-4xl">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(262,83%,58%)]"
        >
          Our Journey
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 mb-20 max-w-xl font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
        >
          A decade of{" "}
          <span className="bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(220,80%,56%)] bg-clip-text text-transparent">
            relentless innovation
          </span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line bg */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-border/40 md:left-1/2 md:-translate-x-1/2" />
          {/* Animated progress line */}
          <motion.div
            className="absolute left-6 top-0 w-[2px] bg-gradient-to-b from-[hsl(262,83%,58%)] via-[hsl(220,80%,56%)] to-[hsl(330,80%,60%)] md:left-1/2 md:-translate-x-1/2"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-16">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 top-2 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2">
                    <motion.div
                      className="h-4 w-4 rounded-full border-2 border-[hsl(262,83%,58%)] bg-background"
                      whileInView={{ scale: [0, 1.3, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-12 w-full md:ml-0 md:w-[calc(50%-3rem)] ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                  >
                    <motion.div
                      whileHover={{ y: -4, transition: { duration: 0.3 } }}
                      className="group rounded-3xl border border-white/40 bg-white/40 p-6 backdrop-blur-2xl transition-all duration-500 hover:border-[hsl(262,83%,58%)]/20 hover:bg-white/60 hover:shadow-2xl hover:shadow-[hsl(262,83%,58%)]/5"
                    >
                      <span className="font-display text-3xl font-bold text-[hsl(262,83%,58%)]/30 transition-colors duration-300 group-hover:text-[hsl(262,83%,58%)]/60">
                        {m.year}
                      </span>
                      <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                        {m.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {m.desc}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
