
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: "ai",
    number: "01",
    title: "AI & GenAI",
    desc: "Helping enterprises identify and seize opportunities to leverage AI/GenAI to automate, accelerate and transform business processes at scale.",
    highlights: ["Machine Learning", "NLP & LLMs", "Computer Vision", "Predictive Analytics"],
  },
  {
    id: "cloud",
    number: "02",
    title: "Cloud & Infrastructure",
    desc: "Our CloudSMART offerings drive enterprise cloud optimization through accelerated innovation, seamless migration, and infrastructure agility at scale.",
    highlights: ["Multi-Cloud", "Cloud Migration", "DevOps", "Edge Computing"],
  },
  {
    id: "engineering",
    number: "03",
    title: "Digital Engineering",
    desc: "Services designed to accelerate product development, streamline time-to-profit, and maximize return on innovation for next-gen digital products.",
    highlights: ["Product Development", "IoT & Embedded", "Platform Engineering", "Quality Assurance"],
  },
  {
    id: "cybersecurity",
    number: "04",
    title: "Cybersecurity",
    desc: "End-to-end security services that protect your enterprise with zero-trust architecture, threat intelligence, and compliance-driven frameworks.",
    highlights: ["Zero Trust", "Threat Intelligence", "GRC", "Identity & Access"],
  },
  {
    id: "data",
    number: "05",
    title: "Data & Analytics",
    desc: "Transforming raw data into strategic assets through advanced analytics, data platforms, and real-time insights that drive decision-making.",
    highlights: ["Data Platforms", "Business Intelligence", "Real-time Analytics", "Data Governance"],
  },
];

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="relative z-10 px-6 py-32 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(262,83%,58%)]"
        >
          What We Do
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-3xl font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
        >
          Driving Your Growth:{" "}
          <span className="bg-gradient-to-r from-[hsl(262,83%,58%)] via-[hsl(220,80%,56%)] to-[hsl(330,80%,60%)] bg-clip-text text-transparent">
            Technology is Our Engine
          </span>
        </motion.h2>

        <div className="mt-16 flex flex-col gap-0">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 * i }}
              onHoverStart={() => setActiveId(service.id)}
              onHoverEnd={() => setActiveId(null)}
              className="group relative cursor-pointer border-t border-zinc-300 py-8 px-4 transition-colors duration-300 last:border-b md:py-10"
            >
              {/* Hover background */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-[hsl(262,83%,58%)]/[0.03] via-[hsl(220,80%,56%)]/[0.02] to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeId === service.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                {/* Number */}
                <span className="shrink-0 font-display text-sm font-bold text-[hsl(262,83%,58%)]/50 transition-colors duration-300 group-hover:text-[hsl(262,83%,58%)] md:w-16 md:text-base">
                  {service.number}
                </span>

                {/* Title */}
                <h3 className="shrink-0 font-display text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-[hsl(262,83%,58%)] md:w-64 md:text-3xl">
                  {service.title}
                </h3>

                {/* Description + Tags */}
                <div className="flex flex-1 flex-col gap-4">
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {service.desc}
                  </p>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={false}
                    animate={{
                      opacity: activeId === service.id ? 1 : 0,
                      y: activeId === service.id ? 0 : 8,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    {service.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full border border-[hsl(262,83%,58%)]/15 bg-[hsl(262,83%,58%)]/5 px-3 py-1 text-xs font-medium text-[hsl(262,83%,58%)]"
                      >
                        {h}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* Arrow */}
                <motion.div
                  className="hidden shrink-0 md:block"
                  animate={{
                    x: activeId === service.id ? 0 : -10,
                    opacity: activeId === service.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <svg
                    className="h-6 w-6 text-[hsl(262,83%,58%)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
