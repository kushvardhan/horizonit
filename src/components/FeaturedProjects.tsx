import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "FinCore Banking Platform",
    type: "Software Solution",
    description:
      "Enterprise-grade banking platform serving millions of users with secure real-time transaction processing.",
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
    stats: ["2M+ Users", "99.99% Uptime", "10M+ Txns"],
    image:
      "https://cdn.dribbble.com/userupload/8234668/file/original-28291b97893c4f81ca435ece2d394ae5.png?resize=1024x768&vertical=center?q=80&w=1400&auto=format&fit=crop",
    gradient: "from-blue-500/50 to-indigo-500/50",
  },
  {
    title: "MediTrack Health Portal",
    type: "Web Application",
    description:
      "Advanced patient management platform enabling healthcare providers to manage patient records securely.",
    stack: ["Next.js", "MongoDB", "Docker", "AWS"],
    stats: ["500K+ Patients", "99.9% Uptime", "1M+ Records"],
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/docmed-free-template.jpg?q=80&w=1400&auto=format&fit=crop",
    gradient: "from-emerald-500/50 to-teal-500/50",
  },
  {
    title: "ShopNest E-Commerce",
    type: "E-Commerce",
    description:
      "High-performance e-commerce platform with optimized conversions and seamless checkout.",
    stack: ["React", "Stripe", "Firebase", "Tailwind"],
    stats: ["300K+ Buyers", "$50M+ Sales", "99.98% Uptime"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1400&auto=format&fit=crop",
    gradient: "from-purple-500/50 to-violet-500/50",
  },
  {
    title: "TravelSync Mobile App",
    type: "Mobile Application",
    description:
      "Modern travel booking platform with real-time availability and seamless UX.",
    stack: ["React Native", "GraphQL", "Node.js", "AWS"],
    stats: ["500K+ Downloads", "200K+ Trips", "4.8★ Rating"],
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1400&auto=format&fit=crop",
    gradient: "from-orange-500/50 to-pink-500/50",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [activeIndex, setActiveIndex] = useState(0);

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const AUTO_TIME = 6000; // 8 sec rotation
  const RESTART_DELAY = 3000; // 4 sec after click

  // Stable auto rotation
  const startAutoRotate = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, AUTO_TIME);
  };

  // Restart after click
  const restartAutoRotate = () => {
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      startAutoRotate();
    }, RESTART_DELAY);
  };

  useEffect(() => {
    startAutoRotate();

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-28 bg-linear-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20"
        >
          {/* LEFT */}
          <div className="max-w-2xl">
            {/* Label */}
            <div
              className="inline-flex items-center gap-2 
                    px-3 py-1 rounded-full 
                    bg-blue-50 text-blue-600 
                    text-xs font-semibold 
                    tracking-wider mb-5"
            >
              Portfolio
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Designed to Impress
              <br />
              <span
                className="bg-linear-to-r 
                       from-blue-600 
                       to-indigo-600 
                       bg-clip-text 
                       text-transparent"
              >
                Engineered to Perform
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-500 mt-6 text-lg leading-relaxed max-w-xl">
              A curated collection of scalable platforms and high-performance
              applications built with modern technologies and exceptional user
              experience.
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <Link
            to="/clients"
            className="group relative inline-flex items-center gap-3 
               px-6 py-3 rounded-xl
               bg-white
               border border-gray-200
               text-gray-800
               font-medium
               shadow-sm
               hover:shadow-lg
               hover:border-gray-300
               transition-all duration-300"
          >
            View All Projects
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 
                 group-hover:translate-x-1 
                 group-hover:-translate-y-1"
            />
            {/* Glow on hover */}
            <div
              className="absolute inset-0 rounded-xl 
                    bg-linear-to-r 
                    from-blue-500/0 
                    via-blue-500/10 
                    to-indigo-500/0
                    opacity-0 
                    group-hover:opacity-100
                    transition-opacity"
            />
          </Link>
        </motion.div>

        {/* LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT CARDS */}
          <div className="grid sm:grid-cols-2 gap-6 flex-1">
            {projects.map((project, index) => (
              <div
                key={project.title}
                onClick={() => {
                  setActiveIndex(index);
                  restartAutoRotate();
                }}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500
                ${
                  activeIndex === index
                    ? "shadow-2xl scale-[1.03]"
                    : "shadow-md hover:shadow-xl"
                }`}
              >
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    className="w-full h-full object-cover"
                    alt=""
                  />

                  <div
                    className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-70`}
                  />
                </div>

                <div className="relative p-6 h-40 text-white flex flex-col justify-between">
                  <div className="flex justify-between">
                    <span className="text-xs uppercase">{project.type}</span>
                    <ArrowUpRight size={18} />
                  </div>

                  <h3 className="font-semibold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT PREVIEW */}
          <div className="flex-1 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.7 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="relative h-[500px]">
                  <img
                    src={projects[activeIndex].image}
                    className="w-full h-full object-cover"
                    alt=""
                  />

                  {/* BIG BLUR AREA */}
                  <div className="absolute bottom-0 left-0 right-0 h-[60%]">
                    {/* STRONG BLUR */}
                    <div
                      className="absolute inset-0 backdrop-blur-3xl"
                      style={{
                        maskImage:
                          "linear-gradient(to top, black 0%, black 30%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.3) 75%, transparent 100%)",
                        WebkitMaskImage:
                          "linear-gradient(to top, black 0%, black 30%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.3) 75%, transparent 100%)",
                      }}
                    />

                    {/* WHITE FADE */}
                    <div
                      className="absolute inset-0 bg-linear-to-t
                      from-white
                      via-white/60
                      to-transparent"
                    />

                    {/* CONTENT */}
                    <div className="relative p-10 flex flex-col justify-end h-full">
                      <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
                        {projects[activeIndex].type}
                      </span>

                      <h3 className="text-3xl font-bold text-gray-900 mt-1">
                        {projects[activeIndex].title}
                      </h3>

                      <p className="text-gray-800 mt-3 max-w-xl">
                        {projects[activeIndex].description}
                      </p>

                      <div className="flex gap-2 mt-5 flex-wrap">
                        {projects[activeIndex].stats.map((stat) => (
                          <div
                            key={stat}
                            className="bg-white/90 backdrop-blur rounded-lg px-3 py-1 border"
                          >
                            {stat}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
