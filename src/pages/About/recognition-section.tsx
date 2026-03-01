import { motion } from "framer-motion";

const awards = [
  {
    org: "Fortune",
    title: "World's Most Admired Companies",
    year: "2026",
  },
  {
    org: "Gartner",
    title: "Leader in Magic Quadrant for Cloud IT Transformation",
    year: "2025",
  },
  {
    org: "TIME",
    title: "World's Most Sustainable Companies",
    year: "2025",
  },
  {
    org: "Ethisphere",
    title: "World's Most Ethical Companies",
    year: "2025",
  },
  {
    org: "Forbes",
    title: "Top Employer in 26 Countries",
    year: "2025",
  },
  {
    org: "Brand Finance",
    title: "Fastest-growing IT Services Brand",
    year: "2025",
  },
];

export function RecognitionSection() {
  return (
    <section className="relative z-10 px-6 py-32 lg:py-40">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(220,80%,56%)]/[0.015] to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(262,83%,58%)]"
        >
          Global Recognition
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 mb-16 max-w-xl font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
        >
          Recognized for{" "}
          <span className="bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(220,80%,56%)] bg-clip-text text-transparent">
            sustained excellence
          </span>
        </motion.h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group flex flex-col justify-between rounded-3xl border border-white/40 bg-white/40 p-7 backdrop-blur-2xl transition-all duration-500 hover:border-[hsl(262,83%,58%)]/20 hover:bg-white/60 hover:shadow-2xl hover:shadow-[hsl(262,83%,58%)]/5"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-[hsl(262,83%,58%)]/5 px-3 py-1 text-xs font-bold text-[hsl(262,83%,58%)]">
                    {award.org}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {award.year}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold leading-snug text-foreground">
                  {award.title}
                </h3>
              </div>
              {/* Decorative line at bottom */}
              <div className="mt-6 h-[2px] w-full overflow-hidden rounded-full bg-border/30">
                <motion.div
                  className="h-full w-0 rounded-full bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(220,80%,56%)]"
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
