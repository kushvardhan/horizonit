import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="relative z-10 px-6 py-32 lg:py-40">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative overflow-hidden rounded-[2rem] border border-white/30"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(262,83%,58%)] via-[hsl(220,80%,56%)] to-[hsl(330,80%,60%)]" />
          {/* Glass overlay */}
          <div className="absolute inset-0 bg-white/[0.08] backdrop-blur-sm" />

          {/* Floating decorative elements */}
          <motion.div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/[0.08]"
            animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/[0.06]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute right-1/4 top-1/3 h-24 w-24 rounded-full bg-white/[0.05]"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative px-8 py-16 text-center md:px-16 md:py-24">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/70"
            >
              Let{"'"}s Build the Future Together
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mx-auto max-w-2xl font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl"
            >
              Ready to supercharge your digital progress?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
            >
              Partner with NovaTech Solutions and discover how our expertise,
              experience, and ecosystem of innovation can accelerate your
              enterprise transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[hsl(262,83%,58%)] shadow-xl shadow-black/10 transition-all hover:shadow-2xl"
                type="button"
              >
                Get in Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition-all hover:bg-white/20"
                type="button"
              >
                Explore Careers
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom subtle copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-xs text-muted-foreground/50"
        >
          NovaTech Solutions. Supercharging Progress.
        </motion.p>
      </div>
    </section>
  );
}
