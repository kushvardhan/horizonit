import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
  useAnimationFrame,
  MotionValue,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { ArrowUpRight, Zap, Globe2, ShieldCheck, Cpu, ArrowRight, Globe, Layers, PlayCircle, Database, Server } from "lucide-react";

/* =========================================================
   UTILITIES
========================================================= */

// const wrap = (min: number, max: number, v: number): number => {
//   const rangeSize = max - min;
//   return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
// };
interface ServiceNode {
  id: number;
  icon: React.ElementType;
  label: string;
  x: number;
  y: number;
  delay: number;
}

const services: ServiceNode[] = [
  { id: 1, icon: ShieldCheck, label: "Cyber-Defense", x: 10, y: 20, delay: 0 },
  { id: 2, icon: Globe, label: "Global Edge", x: 70, y: 15, delay: 0.2 },
  { id: 3, icon: Database, label: "Data Lakes", x: 80, y: 60, delay: 0.4 },
  { id: 4, icon: Cpu, label: "AI Compute", x: 20, y: 70, delay: 0.6 },
  { id: 5, icon: Server, label: "Cloud Native", x: 45, y: 45, delay: 0.8 },
];

const NextLevelHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<number | null>(null);

  // Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), {
    stiffness: 50,
    damping: 20,
  });

  // Mouse Interaction (Magnetic Effect)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[110vh] w-full bg-[#FAFAFA] py-4 overflow-hidden flex flex-col justify-center pt-24 pb-12 lg:pt-0"
    >
      {/* ================= BACKGROUND ARCHITECTURE ================= */}
      
      {/* 1. The Grid (Blueprint Layer) */}
      <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none">
         <div 
           className="absolute inset-0" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)',
             backgroundSize: '60px 60px'
           }}
         />
      </div>

      {/* 2. Ambient Color Washes (Soft Glows) */}
      <motion.div 
        style={{ x: useTransform(mouseX, [-1, 1], [-50, 50]), y: useTransform(mouseY, [-1, 1], [-50, 50]) }}
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        style={{ x: useTransform(mouseX, [-1, 1], [50, -50]), y: useTransform(mouseY, [-1, 1], [50, -50]) }}
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-100/40 rounded-full blur-[120px] pointer-events-none"
      />

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-10 container mx-auto md:mt-15 lg:mt-16 xl:mt-16 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center h-full">

  {/* --- LEFT SIDE: The Authority (Content) --- */}
  <motion.div 
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "circOut" }}
    className="flex flex-col items-start justify-center lg:pt-0"
  >

    {/* Headline */}
    <h1 className="text-4xl sm:text-5xl md:text-2xl lg:text-[3.8rem] xl:text-[5.2rem] font-bold tracking-tight text-slate-900 leading-[1.1] lg:leading-[1.05] mb-5">
      Digital Scale <br />
      <span className=" text-4xl sm:text-5xl md:text-4xl lg:text-[5rem] xl:text-[5.8rem] text-transparent font-black bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-800 animate-gradient-x">
        Without Limits.
      </span>
    </h1>

    {/* Subtext */}
    <p className="text-lg sm:text-xl text-slate-600 max-w-lg leading-relaxed mb-8 font-light">
      We build the invisible infrastructure that powers visible success. 
      From <strong className="text-slate-900 font-medium">zero-trust security</strong> to 
      <strong className="text-slate-900 font-medium"> hyper-scale cloud architecture</strong>.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      <button className="group relative px-6 py-3 bg-slate-900 text-white rounded-xl overflow-hidden shadow-2xl shadow-blue-900/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 flex items-center gap-3 font-semibold tracking-wide">
          <span>Start Transformation</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </button>
      
      <button className="px-6 py-3 rounded-xl border border-slate-300 bg-white/30 backdrop-blur-sm text-slate-900 font-medium tracking-wide flex items-center gap-3 transition-all duration-300 
                     hover:scale-[1.02] hover:shadow-md hover:border-slate-400  hover:bg-black hover:text-zinc-100 active:scale-[0.98]">
    <PlayCircle size={20} className="text-slate-600 group-hover:text-blue-700 transition-colors duration-300" />
    <span>See How It Works</span>
  </button>
    </div>

  </motion.div>

  {/* --- RIGHT SIDE: The Interactive Neural Nexus --- */}
  <motion.div 
    style={{ y }} 
    className="hidden lg:flex relative h-[50vh] lg:h-[80vh] w-full items-center justify-center select-none"
  >
    <div className="relative w-full h-full max-w-lg mx-auto perspective-1000">
      
      {/* Connecting Lines (SVG Layer) */}
      <svg className="absolute inset-0 w-full h-full z-0 overflow-visible opacity-30">
        <motion.path 
          d="M 180 200 L 350 180" 
          stroke="url(#grad1)" strokeWidth="2" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.path 
          d="M 350 180 L 220 350" 
          stroke="url(#grad1)" strokeWidth="2" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.7 }}
        />
        <motion.path 
          d="M 180 200 L 220 350" 
          stroke="url(#grad1)" strokeWidth="2" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.9 }}
        />
        <motion.path 
          d="M 220 350 L 100 350" 
          stroke="url(#grad1)" strokeWidth="2" fill="none" 
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.1 }}
        />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* The Floating Nodes */}
      {services.map((node) => (
        <InteractiveNode 
          key={node.id}
          node={node}
          mouseX={mouseX}
          mouseY={mouseY}
          isActive={activeNode === node.id}
          onHover={() => setActiveNode(node.id)}
          onLeave={() => setActiveNode(null)}
        />
      ))}
      
      {/* Center Core (Pulsing Hub) */}
      <motion.div
        style={{
          x: useTransform(mouseX, [-1, 1], [-20, 20]),
          y: useTransform(mouseY, [-1, 1], [-20, 20]),
        }}
        className="absolute left-[40%] top-[40%] w-32 h-32 rounded-full border border-blue-100 bg-white/50 backdrop-blur-sm z-0 flex items-center justify-center shadow-xl"
      >
        <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-ping-slow" />
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 opacity-10 blur-2xl" />
      </motion.div>

    </div>
  </motion.div>

</div>


      {/* --- SCROLL MOUSE INDICATOR --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <div className="w-5 h-9 rounded-full border-2 border-slate-300 flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-slate-400" 
          />
        </div>
      </motion.div>
    </section>
  );
};

// --- SUBCOMPONENT: INTERACTIVE NODE ---
const InteractiveNode = ({ 
  node, mouseX, mouseY, isActive, onHover, onLeave 
}: { 
  node: ServiceNode; 
  mouseX: any; 
  mouseY: any; 
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  // Calculate magnetic pull based on position
  const x = useTransform(mouseX, [-1, 1], [-1 * (node.x / 2), node.x / 2]);
  const y = useTransform(mouseY, [-1, 1], [-1 * (node.y / 2), node.y / 2]);

  return (
    <motion.div
      style={{ 
        left: `${node.x}%`, 
        top: `${node.y}%`,
        x, 
        y 
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: node.delay, 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      }}
      className="absolute z-10"
    >
      <motion.div
      title={node.label}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        whileHover={{ scale: 1.1 }}
        className={`
          relative flex items-center gap-3 p-4 rounded-2xl cursor-pointer transition-all duration-300
          ${isActive ? "bg-slate-900 text-white shadow-2xl scale-110 z-50" : "bg-white text-slate-600 shadow-lg border border-slate-100 hover:border-blue-200"}
        `}
      >
        {/* Icon Container */}
        <div className={`
          p-2 rounded-lg transition-colors
          ${isActive ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-500"}
        `}>
          <node.icon size={20} />
        </div>


        {/* Pulse Effect on Active */}
        {isActive && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};
/* =========================================================
   WORK SECTION
========================================================= */

interface Project {
  title: string;
  cat: string;
  color: string;
  img: string;
}

const projects: Project[] = [
  {
    title: "Jharkhand Culture",
    cat: "Gov Portal",
    color: "#6366f1",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Sajha Ecosystem",
    cat: "Community",
    color: "#a855f7",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Medical Council",
    cat: "Healthcare",
    color: "#ec4899",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Royal Ranchi",
    cat: "Hospitality",
    color: "#14b8a6",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
  },
];

interface ProjectCardProps {
  project: Project;
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  progress,
  range,
}) => {
  const scale = useTransform(progress, range, [1, 0.8]);
  const opacity = useTransform(progress, range, [1, 0.6]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          opacity,
          backgroundColor: project.color,
        }}
        className="relative w-[90vw] md:w-[70vw] h-[60vh] md:h-[70vh] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 origin-top"
      >
        <img
          src={project.img}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 p-8 md:p-16 flex flex-col h-full justify-between text-white">
          <div className="flex justify-between items-start">
            <h2 className="text-4xl md:text-7xl font-black">
              {project.title}
            </h2>
            <ArrowUpRight size={32} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest font-bold mb-2 opacity-70">
              {project.cat}
            </p>
            <p className="text-lg md:text-2xl max-w-md">
              Revolutionizing digital infrastructure for {project.title}.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Work: React.FC = () => {
  const container = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="relative bg-white pb-[10vh]">
      {projects.map((project, i) => (
        <ProjectCard
          key={project.title}
          i={i}
          project={project}
          progress={scrollYProgress}
          range={[i * 0.25, 1]}
        />
      ))}
    </section>
  );
};

/* =========================================================
   MARQUEE
========================================================= */

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

interface MarqueeProps {
  items: Testimonial[];
  baseVelocity: number;
}

/* =========================
   DATA
========================= */

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "The engineering precision is unmatched. Our conversion rate tripled.",
    author: "Alex Rivers",
    role: "CEO @ Linear",
  },
  {
    id: 2,
    quote: "They didn't just build a site; they built a digital ecosystem.",
    author: "Sarah Chen",
    role: "Product @ Vercel",
  },
  {
    id: 3,
    quote: "Clean code, faster delivery, and incredible design sense.",
    author: "Marcus Thorne",
    role: "CTO @ Stripe",
  },
  {
    id: 4,
    quote: "Absolute game changers for our roadmap.",
    author: "Elena Rossi",
    role: "Design Lead @ Airbnb",
  },
  {
    id: 5,
    quote: "The most seamless partnership we've ever had.",
    author: "Jordan Wu",
    role: "Founder @ Sajha",
  },
];

/* =========================
   PREMIUM GLASS CARD
========================= */
const TestimonialCard = ({ item }: { item: Testimonial }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.01 }}
    transition={{ type: "spring", stiffness: 300, damping: 25 }}
    className="flex-shrink-0 
               w-[260px] md:w-[320px] 
               h-auto min-h-[180px] md:min-h-[220px]
               mx-4 p-4 md:p-6
               rounded-[2rem]
               bg-white/40 backdrop-blur-xl
               border border-purple-200/60 hover:border-purple-200
               shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]
               hover:shadow-[0_30px_60px_-20px_rgba(99,102,241,0.15)]
               transition-all duration-500
               flex flex-col justify-between
               relative overflow-hidden group"
  >
    {/* Subtle Decorative Gradient Flare */}
    <div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-100/30 rounded-full blur-3xl group-hover:bg-indigo-200/50 transition-colors duration-500" />

    {/* Quote Icon - Professional accent */}
    <div className="mb-4 text-indigo-500/20">
      <svg width="24" height="20" viewBox="0 0 24 20" fill="currentColor">
        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V11C21.017 9.89543 20.1216 9 19.017 9H15.017C13.9124 9 13.017 8.10457 13.017 7V4C13.017 2.89543 13.9124 2 15.017 2H20.017C21.1216 2 22.017 2.89543 22.017 4V14C22.017 17.866 18.883 21 15.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C7.12157 16 8.017 15.1046 8.017 14V11C8.017 9.89543 7.12157 9 6.017 9H2.017C0.912431 9 0.017 8.10457 0.017 7V4C0.017 2.89543 0.912431 2 2.017 2H7.017C8.12157 2 9.017 2.89543 9.017 4V14C9.017 17.866 5.883 21 2.017 21H1.017Z" />
      </svg>
    </div>

    {/* Quote Body */}
    <p className="text-slate-800 text-[14px] md:text-[16px] font-medium leading-[1.6] tracking-tight mb-6">
      “{item.quote}”
    </p>

    {/* Author Section - Cleaner & More Focused */}
    <div className="flex items-center gap-4">
      <div className="relative">
        <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-600/30 to-cyan-600/40 flex items-center justify-center text-sm font-black text-white shadow-md">
          {item.author.charAt(0)}
        </div>
        {/* Active Status Dot */}
        <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white" />
      </div>

      <div className="flex flex-col">
        <h4 className="text-sm font-bold text-slate-900 tracking-tight">
          {item.author}
        </h4>
        <div className="flex items-center gap-1.5">
          <span className="text-[7px] md:text-[9px] uppercase font-black text-indigo-600 tracking-wider">
            {item.role}
          </span>
        </div>
      </div>
    </div>

    {/* Bottom Border Accent (Visual Polish) */}
    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

/* =========================
   INFINITE MARQUEE ROW
========================= */
const MarqueeRow = ({ items, baseVelocity }: MarqueeProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 120,
  });

  const velocityFactor = useTransform(
    smoothVelocity,
    [-1000, 0, 1000],
    [-1.5, 0, 1.5],
    { clamp: false }
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useTransform(baseX, (v) => `${v}px`);

  useAnimationFrame((_, delta) => {
    if (isHovered) return;

    const moveBy = baseVelocity * (delta / 1000);
    const scrollBoost = moveBy * velocityFactor.get() * 0.15;
    baseX.set(baseX.get() + moveBy + scrollBoost);

    const width = containerRef.current?.scrollWidth ?? 0;
    if (width > 0) {
      if (baseX.get() <= -width / 2) baseX.set(0);
      if (baseX.get() >= 0) baseX.set(-width / 2);
    }
  });

  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        ref={containerRef}
        style={{ x }}
        className="flex w-max"
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <TestimonialCard item={item} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

/* =========================
   MAIN TESTIMONIAL SECTION
========================= */

const TestimonialSection = () => {
  return (
    <section className="relative bg-white w-full py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-10 w-72 h-72 bg-purple-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-blue-100 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 space-y-10">
        <div className="px-6 text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900">
            TRUSTED BY THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              BEST IN CLASS.
            </span>
          </h2>
        </div>

        <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <MarqueeRow items={TESTIMONIALS} baseVelocity={-50} />
          <MarqueeRow items={[...TESTIMONIALS].reverse()} baseVelocity={50} />
        </div>
      </div>
    </section>
  );
};



/* =========================================================
   MAIN PAGE
========================================================= */

const ClientsPage: React.FC = () => {
  return (
    <main className="bg-[#050505] antialiased selection:bg-purple-500 selection:text-white">
      <NextLevelHero />

      <div className="bg-white rounded-t-[3rem] -mt-10 relative z-20">
        <Work />

        <section className="bg-black text-white py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Clients WorldWide", val: "150+", icon: Globe2 },
              { label: "Uptime Guaranteed", val: "99.9%", icon: ShieldCheck },
              { label: "Projects Delivered", val: "400+", icon: Zap },
              { label: "Engineering Power", val: "24/7", icon: Cpu },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center"
              >
                <stat.icon
                  className="text-purple-500 mb-4"
                  size={32}
                />
                <h4 className="text-4xl md:text-6xl font-black mb-2">
                  {stat.val}
                </h4>
                <p className="text-gray-500 uppercase text-xs tracking-widest font-bold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <TestimonialSection />
      </div>
    </main>
  );
};

export default ClientsPage;
