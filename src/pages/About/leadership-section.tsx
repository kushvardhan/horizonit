import { motion } from "framer-motion";
import { useState } from "react";

const leaders = [
  {
    name: "Sarah Chen",
    role: "Chief Executive Officer",
    initials: "SC",
    bio: "20+ years driving digital transformation across Fortune 500 enterprises. Previously led global operations at a top-tier technology consultancy.",
    gradient: "from-[hsl(262,83%,58%)] to-[hsl(220,80%,56%)]",
  },
  {
    name: "Marcus Williams",
    role: "Chief Technology Officer",
    initials: "MW",
    bio: "Former VP of Engineering at a hyperscale cloud provider. Pioneered AI-driven infrastructure automation serving millions of users globally.",
    gradient: "from-[hsl(220,80%,56%)] to-[hsl(262,83%,68%)]",
  },
  {
    name: "Priya Sharma",
    role: "Chief AI Officer",
    initials: "PS",
    bio: "PhD in Machine Learning from MIT. Led research teams at two leading AI labs before joining NovaTech to scale enterprise AI adoption.",
    gradient: "from-[hsl(330,80%,60%)] to-[hsl(262,83%,58%)]",
  },
  {
    name: "David Park",
    role: "Chief Operating Officer",
    initials: "DP",
    bio: "Scaled operations from 5 to 60 countries. Expert in building high-performance delivery centers and global service ecosystems.",
    gradient: "from-[hsl(262,83%,58%)] to-[hsl(330,80%,60%)]",
  },
];

export function LeadershipSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="relative z-10 px-6 py-32 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(262,83%,58%)]"
        >
          Leadership
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 mb-16 max-w-xl font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
        >
          The minds{" "}
          <span className="bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(330,80%,60%)] bg-clip-text text-transparent">
            shaping tomorrow
          </span>
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onHoverStart={() => setHoveredIdx(i)}
              onHoverEnd={() => setHoveredIdx(null)}
              className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/40 backdrop-blur-2xl transition-all duration-500 hover:border-[hsl(262,83%,58%)]/20 hover:bg-white/60 hover:shadow-2xl hover:shadow-[hsl(262,83%,58%)]/5"
            >
              <div className="relative flex flex-col gap-5 p-8 md:flex-row md:items-start md:gap-6">
                {/* Avatar */}
                <motion.div
                  animate={{
                    scale: hoveredIdx === i ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${leader.gradient} text-lg font-bold text-white shadow-lg`}
                >
                  {leader.initials}
                </motion.div>

                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[hsl(262,83%,58%)]">
                    {leader.role}
                  </p>
                  <motion.p
                    initial={false}
                    animate={{
                      opacity: hoveredIdx === i ? 1 : 0.7,
                      y: hoveredIdx === i ? 0 : 4,
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    {leader.bio}
                  </motion.p>
                </div>

                {/* Decorative corner gradient */}
                <div
                  className={`pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-tl ${leader.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
