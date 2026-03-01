import { motion } from "framer-motion";

const values = [
  {
    title: "Integrity",
    desc: "We maintain the highest ethical standards and are committed to doing the right thing, every single time.",
    gradient: "from-[hsl(262,83%,58%)] to-[hsl(262,83%,68%)]",
  },
  {
    title: "Innovation",
    desc: "We challenge the status quo, embracing bold ideas and cutting-edge technology to solve the world's most complex problems.",
    gradient: "from-[hsl(220,80%,56%)] to-[hsl(220,80%,66%)]",
  },
  {
    title: "Inclusion",
    desc: "We create an environment where everyone succeeds and is encouraged to be their best and most authentic selves.",
    gradient: "from-[hsl(330,80%,60%)] to-[hsl(330,80%,70%)]",
  },
  {
    title: "Value Creation",
    desc: "We are obsessed with creating measurable value for our clients, always going the extra mile to deliver on commitments.",
    gradient: "from-[hsl(262,83%,58%)] to-[hsl(220,80%,56%)]",
  },
  {
    title: "People-Centricity",
    desc: "We empower people to be entrepreneurs and creators, encouraging them to find their spark and shape their career journeys.",
    gradient: "from-[hsl(220,80%,56%)] to-[hsl(330,80%,60%)]",
  },
];

export function ValuesSection() {
  return (
    <section className="relative z-10 overflow-hidden px-6 py-32 lg:py-40">
      {/* Full-bleed gradient bg for visual break */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(262,83%,58%)]/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(262,83%,58%)]"
            >
              Living Our Values
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 max-w-lg font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
            >
              Our core values offer a{" "}
              <span className="bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(330,80%,60%)] bg-clip-text text-transparent">
                nod to the past
              </span>{" "}
              with an eye to the future
            </motion.h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.35, ease: "easeOut" },
              }}
              className={`group relative overflow-hidden rounded-3xl border border-white/40 bg-white/40 p-8 backdrop-blur-2xl transition-all duration-500 hover:border-white/60 hover:bg-white/60 hover:shadow-2xl hover:shadow-[hsl(262,83%,58%)]/5 ${i >= 3 ? "lg:col-span-1 md:col-span-1" : ""} ${i === 3 ? "lg:col-span-1" : ""}`}
            >
              {/* Hover gradient overlay */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.04]`}
              />

              {/* Large background number */}
              <span className="pointer-events-none absolute -right-2 -top-4 font-display text-[80px] font-bold leading-none text-purple-200/30 transition-colors duration-500 group-hover:text-purple-300/60">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                {/* Gradient dot */}
                <div
                  className={`mb-6 h-3 w-3 rounded-full bg-gradient-to-r ${value.gradient}`}
                />
                <h3 className="mb-3 font-display text-xl font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
