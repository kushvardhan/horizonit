import { motion } from "framer-motion";

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "AI/ML" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "Orchestration" },
  { name: "PostgreSQL", category: "Database" },
  { name: "GraphQL", category: "API" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "Go", category: "Backend" },
  { name: "Rust", category: "Systems" },
  { name: "Redis", category: "Cache" },
  { name: "Kafka", category: "Streaming" },
  { name: "Terraform", category: "IaC" },
];

const row1 = technologies.slice(0, 9);
const row2 = technologies.slice(9);

export function TechSection() {
  return (
    <section className="relative z-10 overflow-hidden py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(262,83%,58%)]"
        >
          Tech Stack
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 mb-16 max-w-xl font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
        >
          Powered by{" "}
          <span className="bg-gradient-to-r from-[hsl(262,83%,58%)] via-[hsl(220,80%,56%)] to-[hsl(330,80%,60%)] bg-clip-text text-transparent">
            modern tech
          </span>
        </motion.h2>
      </div>

      {/* Row 1 - scrolls left */}
      <div className="relative mb-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <motion.div
          className="flex gap-7"
          animate={{ x: [0, -900] }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {[...row1, ...row1, ...row1].map((tech, index) => (
            <motion.div
              key={`r1-${tech.name}-${index}`}
              whileHover={{
                scale: 1.08,
                y: -6,
                transition: { duration: 0.25 },
              }}
              className="flex shrink-0 cursor-default items-center gap-3 rounded-2xl border border-zinc-200/40 bg-white/50 px-6 py-4 backdrop-blur-2xl transition-all duration-300 hover:border-[hsl(262,83%,58%)]/20 hover:bg-white/70 hover:shadow-xl hover:shadow-[hsl(262,83%,58%)]/5"
            >
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(220,80%,56%)]" />
              <div>
                <p className="font-display text-md font-bold text-foreground">
                  {tech.name}
                </p>
                <p className="text-[13px] text-muted-foreground">
                  {tech.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <motion.div
          className="flex gap-4"
          animate={{ x: [-900, 0] }}
          transition={{
            duration: 45,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {[...row2, ...row2, ...row2].map((tech, index) => (
            <motion.div
              key={`r2-${tech.name}-${index}`}
              whileHover={{
                scale: 1.08,
                y: -6,
                transition: { duration: 0.25 },
              }}
              className="flex shrink-0 cursor-default items-center gap-3 rounded-2xl border border-white/40 bg-white/50 px-6 py-4 backdrop-blur-2xl transition-all duration-300 hover:border-[hsl(330,80%,60%)]/20 hover:bg-white/70 hover:shadow-xl hover:shadow-[hsl(330,80%,60%)]/5"
            >
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[hsl(330,80%,60%)] to-[hsl(262,83%,58%)]" />
              <div>
                <p className="font-display text-md font-bold text-foreground">
                  {tech.name}
                </p>
                <p className="text-[13px] text-muted-foreground">
                  {tech.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
