import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function WhoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="relative z-10 px-6 py-32 lg:py-40">
      <div className="mx-auto max-w-6xl">
        {/* Divider line that animates on scroll */}
        <div className="mb-20 h-[1px] w-full bg-border/50">
          <motion.div
            className="h-full bg-gradient-to-r from-[hsl(262,83%,58%)] via-[hsl(220,80%,56%)] to-[hsl(330,80%,60%)]"
            style={{ width: lineWidth }}
          />
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: label + heading */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(262,83%,58%)]"
            >
              Who We Are
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl"
            >
              Ready for Now.{" "}
              <span className="bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(330,80%,60%)] bg-clip-text text-transparent">
                Built for What{"'"}s Next.
              </span>
            </motion.h2>
          </div>

          {/* Right: description paragraphs */}
          <div className="flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              We are a global technology company, home to more than 226,000
              professionals across 60 countries, delivering industry-leading
              capabilities centered around AI, Digital, Engineering, Cloud and
              Software, powered by a broad portfolio of technology services and
              products.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              We harness the power of technology and our people to drive
              impactful outcomes at speed and scale -- now and for the long haul.
              From Fortune 500 enterprises to emerging businesses, we serve
              clients across Financial Services, Manufacturing, Healthcare, Tech,
              Telecom, Retail, and beyond.
            </motion.p>
          </div>
        </div>

        {/* Three pillars */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Our Mission",
              desc: "To empower enterprises on their digital transformation journey through relentless innovation and deep technology expertise.",
              icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
            },
            {
              title: "Our Vision",
              desc: "To be the most trusted partner for enterprises worldwide, delivering transformative technology solutions that create lasting value.",
              icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
            },
            {
              title: "Our Promise",
              desc: "We don't just paint visions of progress. We make them happen -- delivering measurable impact at speed and at scale.",
              icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 * i }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/40 p-8 backdrop-blur-2xl transition-all duration-500 hover:border-[hsl(262,83%,58%)]/20 hover:bg-white/60 hover:shadow-2xl hover:shadow-[hsl(262,83%,58%)]/5"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[hsl(262,83%,58%)]/0 to-[hsl(220,80%,56%)]/0 transition-opacity duration-500 group-hover:from-[hsl(262,83%,58%)]/[0.03] group-hover:to-[hsl(220,80%,56%)]/[0.03]" />
              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[hsl(262,83%,58%)] to-[hsl(220,80%,56%)] text-white">
                  {item.icon}
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
