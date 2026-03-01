import { useMemo } from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  useAnimationFrame,
  useTransform,
} from "framer-motion";

const CLIENTS = [
  { id: 1, logo: "/clients/fjcci.png", name: "FJCCI" },
  { id: 2, logo: "/clients/Group-728.png", name: "Group 728" },
  { id: 3, logo: "/clients/Group-730.png", name: "Group 730" },
  { id: 4, logo: "/clients/jbb.png", name: "JBB Enterprises" },
  { id: 5, logo: "/clients/jci.png", name: "JCI Corp" },
  { id: 6, logo: "/clients/jsmc.jpg", name: "JSMC Solutions" },
  { id: 7, logo: "/clients/nursing.png", name: "Nursing Council" },
  { id: 8, logo: "/clients/samitlal.png", name: "Samit Lal Group" },
  { id: 9, logo: "/clients/sjha.png", name: "SJHA Ltd." },
  { id: 10, logo: "/clients/skill.png", name: "Skill Builders" },
];

const ClientShowcase = () => {
  const x = useMotionValue(0);

  const springX = useSpring(x, {
    damping: 100,
    stiffness: 400,
    mass: 0.1,
  });

  const contentWidth = 2800;

  const wrappedX = useTransform(springX, (value) => {
    const wrapped = ((value % contentWidth) - contentWidth) % contentWidth;
    return wrapped;
  });

  useAnimationFrame((_, delta) => {
    const moveBy = delta * 0.12;
    x.set(x.get() - moveBy);
  });

  const list = useMemo(() => [...CLIENTS, ...CLIENTS, ...CLIENTS], []);

  const path1 = "M-200,250 C300,50 800,450 1300,250 C1800,50 2300,450 2800,250";
  const path2 = "M-200,150 C400,550 900,-50 1400,350 C1900,650 2400,50 2900,250";

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-white">
      
      {/* BACKGROUND WAVES */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          viewBox="0 0 2600 500"
          className="w-full h-full opacity-45"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>

            <filter id="dotGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Wave 1 */}
          <motion.path
            d={path1}
            stroke="url(#waveGrad)"
            strokeWidth="2.6"
            opacity="0.75"
            animate={{ x: [0, -150, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Wave 2 */}
          <motion.path
            d={path2}
            stroke="url(#waveGrad)"
            strokeWidth="2.6"
            opacity="0.5"
            animate={{ x: [-100, 100, -100] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Dots */}
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={i}
              r="5"
              fill={i % 2 === 0 ? "#6366f1" : "#d946ef"}
              opacity="0.65"
              filter="url(#dotGlow)"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2,
              }}
              style={{
                offsetPath: `path("${i % 2 === 0 ? path1 : path2}")`,
              }}
            />
          ))}
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-24 px-4">
          Trusted by 60+ Global Enterprises
        </h2>

        <div className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing">
          
          <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex gap-6 md:gap-12 px-4 py-10"
            drag="x"
            dragConstraints={{ left: -contentWidth, right: contentWidth }}
            dragElastic={0.1}
            dragTransition={{
              power: 0.2,
              timeConstant: 250,
              modifyTarget: (target) => Math.round(target / 100) * 100,
            }}
            onDrag={(_, info) => {
              x.set(x.get() + info.delta.x);
            }}
            style={{ x: wrappedX }}
          >
            {list.map((client, idx) => (
              <div
                key={`${client.id}-${idx}`}
                className="flex-none w-56 h-15 md:w-80 md:h-20 flex items-center justify-center 
                           bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-3xl 
                           shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]
                           hover:shadow-[0_20px_50px_-12px_rgba(99,102,241,0.15)] 
                           hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  draggable={false}
                  className="max-h-12 md:max-h-20 w-[85%] object-contain select-none filter contrast-[1.05]"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;