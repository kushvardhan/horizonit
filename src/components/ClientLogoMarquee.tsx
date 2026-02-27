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
    damping: 60,
    stiffness: 300,
    mass: 1,
  });

  const contentWidth = 2520;

  const wrappedX = useTransform(springX, (value) => {
    const wrapped = ((value % contentWidth) - contentWidth) % contentWidth;
    return wrapped;
  });

  useAnimationFrame((_, delta) => {
    const moveBy = delta * 0.05;
    x.set(x.get() - moveBy);
  });

  const list = useMemo(() => [...CLIENTS, ...CLIENTS], []);

  const path1 =
    "M-200,200 C200,-150 600,550 1000,200 C1400,-150 1800,550 2200,200";
  const path2 =
    "M-200,100 C400,600 800,-200 1200,300 C1600,700 2000,-100 2400,200";

  return (
    <section className="relative py-28 overflow-hidden bg-linear-to-b from-slate-100 via-white to-slate-50">

      {/* ===== PREMIUM BACKGROUND WAVES ===== */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg
          viewBox="0 0 1400 400"
          className="w-full h-full"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Wave 1 */}
          <motion.path
            d={path1}
            stroke="url(#grad1)"
            strokeWidth="5"
            opacity="0.8"
            style={{
              filter: "drop-shadow(0 0 15px rgba(99,102,241,0.5))",
            }}
            animate={{ x: [0, -400, 0] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Wave 2 */}
          <motion.path
            d={path2}
            stroke="url(#grad2)"
            strokeWidth="5"
            opacity="0.8"
            style={{
              filter: "drop-shadow(0 0 15px rgba(168,85,247,0.5))",
            }}
            animate={{ x: [-200, 200, -200] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="1" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ===== FOREGROUND CONTENT ===== */}
      <div className="relative z-20">
        <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-16">
          Trusted by 60+ Global Enterprises
        </h2>

        <div className="relative w-full overflow-hidden">
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white to-transparent pointer-events-none z-10" />

          <motion.div
            className="flex gap-10 px-6"
            drag="x"
            dragConstraints={{ left: -10000, right: 10000 }}
            dragElastic={0.2}
            onDrag={(_, info) => x.set(x.get() + info.delta.x)}
            style={{ x: wrappedX }}
          >
            {list.map((client, idx) => (
              <div
                key={`${client.id}-${idx}`}
                className="flex-none w-64 h-24 flex items-center justify-center 
                           bg-white/60 backdrop-blur-xl 
                           rounded-3xl shadow-xl 
                           border border-white/40 
                           cursor-grab 
                           hover:scale-110 hover:shadow-2xl
                           transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  draggable={false}
                  className="max-h-16 object-contain"
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