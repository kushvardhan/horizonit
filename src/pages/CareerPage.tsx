import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Clock,
  MapPin,
  Search,
  Sparkles,
  Heart,
  Laptop,
  TrendingUp,
  Award,
  Coffee,
  Users,
  Zap,
  CheckCircle2,
  Globe2,
  Upload,
} from "lucide-react";

/* ======================================================
   TYPES
====================================================== */


const CareersHero: React.FC = () => {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();

    setMouse({
      x: (e.clientX - left) / width,
      y: (e.clientY - top) / height,
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex items-center bg-white overflow-hidden py-[60px]"
    >
      {/* ================= BACKGROUND EFFECTS ================= */}

      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Floating blobs */}
        <div className="absolute w-[500px] h-[500px] top-[-10%] right-[-5%] blur-[80px] animate-[float_20s_infinite_alternate] bg-[radial-gradient(circle,rgba(109,93,252,0.1)_0%,transparent_70%)]"></div>

        <div className="absolute w-[500px] h-[500px] bottom-[-10%] left-[-5%] blur-[80px] animate-[float_20s_infinite_alternate] [-animation-delay:-5s] bg-[radial-gradient(circle,rgba(109,93,252,0.1)_0%,transparent_70%)]"></div>

        {/* Interactive mesh */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            WebkitMaskImage:
              "radial-gradient(circle, black, transparent 80%)",
            maskImage: "radial-gradient(circle, black, transparent 80%)",
          }}
        />

        {/* Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[4px] h-[4px] rounded-full opacity-20 bg-[#6d5dfc] transition-transform duration-200 ease-out"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translate(${(mouse.x - 0.5) * 50}px, ${
                (mouse.y - 0.5) * 50
              }px)`,
            }}
          />
        ))}
      </div>

      {/* ================= HERO CONTAINER ================= */}

      <div className="relative z-[10] w-full max-w-[1400px] mx-auto px-[5%] grid grid-cols-[1.2fr_0.8fr] items-center gap-0 max-[1100px]:grid-cols-1 max-[1100px]:text-center max-[1100px]:gap-[80px]">

        {/* ================= LEFT CONTENT ================= */}

        <div className="max-[1100px]:flex max-[1100px]:flex-col max-[1100px]:items-center max-[1100px]:p-8">
          <h1 className="font-black tracking-[-0.05em] leading-[1.14] text-black mb-6 text-[clamp(2.5rem,5.9vw,4.9rem)] drop-shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
            Exceptional Work <br />
            for{" "}
            <span className="bg-gradient-to-r from-[#6d5dfc] to-[#3b82f6] bg-clip-text text-transparent text-[clamp(2.5rem,6.2vw,5.2rem)]">
              Elite Minds.
            </span>
          </h1>

          <p className="text-[clamp(1rem,1.2vw,1.2rem)] text-[#333] max-w-[45ch] leading-[1.6] mb-12">
            We bridge the gap between human potential and digital excellence.
            Join the most ambitious engineering team in the industry.
          </p>

          {/* ACTIONS */}
          <div className="flex flex-wrap items-center gap-5 w-[120%] px-8 max-[1100px]:justify-center max-[1100px]:w-full">

            {/* BUTTON */}
            <button className="bg-black text-white border-none py-[1.1rem] px-8 rounded-full font-bold text-[0.95rem] flex items-center gap-3 tracking-[1.3px] transition-all duration-300 hover:bg-[#6d5dfc] hover:-translate-y-[5px] hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(109,93,252,0.3)] whitespace-nowrap">
              EXPLORE ROLES
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12H19M19 12L12 5M19 12L12 19" />
              </svg>
            </button>

            {/* TRUST PILL */}
            <div className="flex items-center gap-3 px-5 py-[10px] rounded-full backdrop-blur-[10px] border border-[rgba(0,0,0,0.05)] shadow-[0_5px_15px_rgba(0,0,0,0.03)] bg-[rgba(255,255,255,0.7)]">

              <div className="flex">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 ml-[-12px] first:ml-0"
                  />
                ))}
              </div>

              <span className="text-black">
                Trusted by <strong>500+</strong> clients
              </span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT VISUAL ================= */}

        <div className="relative h-[600px] flex items-center justify-center max-[1100px]:h-[450px] max-[600px]:hidden">

          <div
            className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-100 linear"
            style={{
              transform: `perspective(1200px) rotateY(${
                (mouse.x - 0.5) * 20
              }deg) rotateX(${(mouse.y - 0.5) * -10}deg)`,
            }}
          >
            {/* CARD TOP */}
            <div className="absolute w-[300px] top-[10%] right-0 translate-z-[50px] rounded-[24px] p-8 backdrop-blur-[20px] bg-[rgba(255,255,255,0.7)] border border-white shadow-[0_40px_80px_rgba(0,0,0,0.08)] z-[5]">

              <div className="text-[0.7rem] text-[#6d5dfc] mb-4 tracking-[2px] font-mono">
                01 // FE_ARCHITECT
              </div>

              <h3 className="text-[1.3rem] mb-6 leading-[1.3]">
                Next-Gen Interface Engineering
              </h3>

              <div className="flex gap-2">
                <span className="text-[0.65rem] font-bold bg-[rgba(0,0,0,0.04)] px-[10px] py-1 rounded-md">
                  React
                </span>
                <span className="text-[0.65rem] font-bold bg-[rgba(0,0,0,0.04)] px-[10px] py-1 rounded-md">
                  Web3
                </span>
              </div>
            </div>

            {/* CARD BOTTOM */}
            <div className="absolute w-[300px] bottom-[10%] left-0 translate-z-[-50px] rounded-[24px] p-8 backdrop-blur-[20px] bg-[rgba(255,255,255,0.7)] border border-white shadow-[0_40px_80px_rgba(0,0,0,0.08)] z-[5]">

              <div className="text-[0.7rem] text-[#6d5dfc] mb-4 tracking-[2px] font-mono">
                02 // CLOUD_SEC
              </div>

              <h3 className="text-[1.3rem] mb-6 leading-[1.3]">
                Distributed System Intelligence
              </h3>

              <div className="flex gap-2">
                <span className="text-[0.65rem] font-bold bg-[rgba(0,0,0,0.04)] px-[10px] py-1 rounded-md">
                  Go
                </span>
                <span className="text-[0.65rem] font-bold bg-[rgba(0,0,0,0.04)] px-[10px] py-1 rounded-md">
                  AWS
                </span>
              </div>
            </div>

            {/* ORBIT RINGS */}
            <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] border border-[rgba(0,0,0,0.03)] rounded-full animate-[spin_30s_linear_infinite] -translate-x-1/2 -translate-y-1/2"></div>

            <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] border border-[rgba(0,0,0,0.03)] rounded-full animate-[spin_20s_linear_infinite_reverse] -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};



/* ======================================================
   MAIN PAGE
====================================================== */

export default function CareerPage() {
  return (
    <div className="w-full bg-slate-50 text-slate-900 overflow-x-hidden">
      <CareersHero />
      <CareerDashboard />
      <OpenPositions />
      <BenefitsSection />
      <CultureSection />
      <CareersCTA />
    </div>
  );
}

/* ======================================================
   MARKET DASHBOARD
====================================================== */

const CareerDashboard = () => {
  const [activeRole, setActiveRole] = useState<number | null>(null);

  const jobMarket = [
    {
      role: "AI/ML Engineer",
      pay: "$180k - $250k",
      growth: "+42%",
      color: "#0066FF",
      trend: true,
    },
    {
      role: "Solana Developer",
      pay: "$140k - $210k",
      growth: "+28%",
      color: "#9945FF",
      trend: true,
    },
    {
      role: "Full Stack Dev",
      pay: "$120k - $185k",
      growth: "+15%",
      color: "#00CC88",
      trend: false,
    },
  ];

  return (
    <section className="flex justify-center py-14">
      <div className="bg-white rounded-2xl shadow-xl border border-blue-200 p-6 w-full max-w-2xl">
        <h3 className="font-semibold text-lg">Market Pulse 2026</h3>
        <p className="text-sm text-slate-400 mb-6">
          Live recruitment velocity updates
        </p>

        <div className="flex flex-col gap-3">
          {jobMarket.map((item, index) => (
            <motion.div
              key={item.role}
              onMouseEnter={() => setActiveRole(index)}
              onMouseLeave={() => setActiveRole(null)}
              whileHover={{ x: 6 }}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                activeRole === index
                  ? "bg-blue-50 border-blue-400"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <div className="flex justify-between">
                <div>
                  <div className="font-semibold text-sm flex gap-2 items-center">
                    {item.role}
                    {item.trend && (
                      <span className="text-[10px] bg-red-100 text-red-500 px-1.5 rounded">
                        TRENDING
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500">Avg {item.pay}</p>
                </div>

                <div className="text-right">
                  <p
                    className="font-bold text-sm"
                    style={{ color: item.color }}
                  >
                    {item.growth}
                  </p>
                  <p className="text-xs text-slate-400">Annual YoY</p>
                </div>
              </div>

              <div className="w-full h-1 bg-slate-200 rounded mt-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: activeRole === index ? "100%" : "30%",
                  }}
                  className="h-full"
                  style={{ background: item.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole ?? "default"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 bg-blue-50 text-blue-700 text-sm p-3 rounded-lg flex gap-2 items-center"
          >
            💡
            {activeRole !== null ? (
              <span>High hiring demand detected globally.</span>
            ) : (
              <span>Hover role to view hiring insights.</span>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

/* ======================================================
   OPEN POSITIONS
====================================================== */

type Position = {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
};

type ApplicationForm = {
  fullName: string;
  email: string;
  phone: string;
  experienceYears: string;
  portfolio: string;
  coverLetter: string;
  resume: File | null;
  role: string;
};

const OpenPositions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const MAX_FILE_SIZE = 2 * 1024 * 1024;

  const [form, setForm] = useState<ApplicationForm>({
    fullName: "",
    email: "",
    phone: "",
    experienceYears: "",
    portfolio: "",
    coverLetter: "",
    resume: null,
    role: "",
  });

  // Validations
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{7,15}$/;

  const isFormValid =
    form.fullName.trim() !== "" &&
    emailRegex.test(form.email) &&
    phoneRegex.test(form.phone) &&
    form.experienceYears.trim() !== "" &&
    form.resume !== null;

  const handleResumeUpload = (file?: File) => {
    if (!file) return;
    if (file.size > MAX_FILE_SIZE) {
      alert("Resume must be under 2MB");
      return;
    }
    setForm({ ...form, resume: file });
  };

  const positions: Position[] = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      description: "Build scalable web platforms.",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Hybrid",
      type: "Full-time",
      experience: "3+ years",
      description: "Design beautiful product interfaces.",
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Build and maintain CI/CD pipelines, manage cloud infrastructure, and ensure system reliability.",
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Ranchi",
      type: "Full-time",
      experience: "2+ years",
      description:
        "Drive digital marketing campaigns, SEO strategies, and social media engagement.",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Ranchi / Hybrid",
      type: "Full-time",
      experience: "5+ years",
      description:
        "Define product vision, strategy, and roadmap for our digital solutions.",
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      description:
        "Build responsive, performant user interfaces using modern JavaScript frameworks.",
    },
  ];

  const departments = ["All", "Engineering", "Design", "Marketing", "Product"];

  const filtered = positions.filter(
    (p) =>
      (selectedDepartment === "All" || p.department === selectedDepartment) &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <section ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-extrabold">Find Your Perfect Role</h2>
        </motion.div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2 border rounded-xl px-4 py-3 bg-white">
            <Search size={18} />
            <input
              className="outline-none"
              placeholder="Search positions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-4 py-2 rounded-full border ${
                selectedDepartment === dept
                  ? "bg-indigo-600 text-white"
                  : "bg-white"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* JOB CARDS */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((pos) => (
            <motion.div
              key={pos.title}
              whileHover={{ y: -8 }}
              className="bg-white border rounded-2xl p-6 shadow-sm"
            >
              <div className="flex justify-between mb-3">
                <span className="text-indigo-600 text-sm font-semibold">
                  {pos.department}
                </span>
                <span className="text-sm text-slate-500">{pos.type}</span>
              </div>

              <h3 className="text-xl font-bold mb-2">{pos.title}</h3>
              <p className="text-slate-500 mb-4">{pos.description}</p>

              <div className="flex gap-4 text-sm text-slate-500 mb-6">
                <div className="flex items-center gap-1">
                  <MapPin size={14} /> {pos.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} /> {pos.experience}
                </div>
              </div>

              <button
                onClick={() => {
                  setForm((prev) => ({ ...prev, role: pos.title }));
                  setIsApplyOpen(true);
                }}
                className="w-full flex justify-center items-center gap-2 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Apply Now <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* APPLY MODAL */}
      <AnimatePresence>
        {isApplyOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden scrollbar-hide"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsApplyOpen(false)}
                className="
    absolute top-4 right-4 
    w-10 h-10 flex items-center justify-center 
    rounded-full bg-white/20 backdrop-blur-md 
    text-gray-600 hover:bg-zinc-300/50  cursor-pointer hover:text-gray-900 
    transition-all duration-300 ease-in-out 
    shadow-md hover:shadow-lg
    focus:outline-none focus:ring-2 focus:ring-indigo-500
  "
                aria-label="Close Modal"
              >
                <span className="text-2xl font-bold">×</span>
              </button>

              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Apply for {form.role}
              </h3>

              {/* Scrollable Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[75vh] overflow-y-auto pr-2 scrollbar-hide">
                {/* Full Name */}
                <div className="flex flex-col">
                  <label className="mb-1 text-gray-700 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={(e) =>
                      setForm({ ...form, fullName: e.target.value })
                    }
                    className={`px-4 py-3 border rounded-xl outline-none ${
                      form.fullName.trim() === ""
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="mb-1 text-gray-700 font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className={`px-4 py-3 border rounded-xl outline-none ${
                      form.email && !emailRegex.test(form.email)
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label className="mb-1 text-gray-700 font-medium">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className={`px-4 py-3 border rounded-xl outline-none ${
                      form.phone && !phoneRegex.test(form.phone)
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="+1234567890"
                  />
                </div>

                {/* Experience */}
                <div className="flex flex-col">
                  <label className="mb-1 text-gray-700 font-medium">
                    Experience (Years) *
                  </label>
                  <input
                    type="text"
                    value={form.experienceYears}
                    onChange={(e) =>
                      setForm({ ...form, experienceYears: e.target.value })
                    }
                    className={`px-4 py-3 border rounded-xl outline-none ${
                      form.experienceYears.trim() === ""
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="e.g. 3"
                  />
                </div>

                {/* Portfolio */}
                <div className="flex flex-col md:col-span-2">
                  <label className="mb-1 text-gray-700 font-medium">
                    Portfolio URL
                  </label>
                  <input
                    type="url"
                    value={form.portfolio}
                    onChange={(e) =>
                      setForm({ ...form, portfolio: e.target.value })
                    }
                    className="px-4 py-3 border rounded-xl outline-none border-gray-300"
                    placeholder="https://portfolio.com"
                  />
                </div>

                {/* Cover Letter */}
                <div className="flex flex-col md:col-span-2">
                  <label className="mb-1 text-gray-700 font-medium">
                    Cover Letter
                  </label>
                  <textarea
                    value={form.coverLetter}
                    onChange={(e) =>
                      setForm({ ...form, coverLetter: e.target.value })
                    }
                    className="px-4 py-3 border rounded-xl outline-none border-gray-300"
                    placeholder="Tell us why you are a great fit..."
                    rows={4}
                  />
                </div>

                {/* Resume Upload */}
                <div className="flex flex-col md:col-span-2">
                  <label className="mb-1 text-gray-700 font-medium">
                    Resume * (PDF, DOC, DOCX, Max 2MB)
                  </label>
                  <label className="cursor-pointer flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed rounded-xl text-gray-500 hover:border-indigo-600 hover:text-indigo-600 transition">
                    <Upload size={20} />
                    {form.resume ? form.resume.name : "Click or Drop file here"}
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => handleResumeUpload(e.target.files?.[0])}
                    />
                  </label>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 flex justify-end mt-4">
                  <button
                    disabled={!isFormValid}
                    onClick={() => {
                      setIsSubmitted(true);
                      setTimeout(() => {
                        setIsSubmitted(false);
                        setIsApplyOpen(false);
                        setForm({
                          fullName: "",
                          email: "",
                          phone: "",
                          experienceYears: "",
                          portfolio: "",
                          coverLetter: "",
                          resume: null,
                          role: "",
                        });
                      }, 1600); // 1.2s
                    }}
                    className={`px-6 py-3 rounded-xl font-semibold transition ${
                      isFormValid
                        ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                        : "bg-gray-300 cursor-not-allowed text-gray-600"
                    }`}
                  >
                    Submit Application
                  </button>
                </div>
              </div>
              <AnimatePresence>
                {" "}
                {isSubmitted && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-lg rounded-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {" "}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
             bg-white rounded-3xl shadow-2xl p-6 md:p-10 max-w-sm md:max-w-lg w-full
             text-center text-gray-900 font-semibold space-y-3"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <div className="text-4xl md:text-5xl">✅</div>
                      <h2 className="text-xl md:text-2xl font-bold">
                        Thank You!
                      </h2>
                      <p className="text-gray-700 text-sm md:text-base">
                        We've received your application for{" "}
                        <span className="font-semibold">{form.role}</span>.
                      </p>
                      <p className="text-gray-700 text-sm md:text-base">
                        Our recruitment team will review your submission and get
                        back to you shortly.
                      </p>
                    </motion.div>
                  </motion.div>
                )}{" "}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ======================================================
   BENEFITS
====================================================== */

type Benefit = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
};

const BenefitsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits: Benefit[] = [
    {
      icon: <Heart />,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance for you and your family, plus wellness programs.",
      color: "#ec4899",
    },
    {
      icon: <Laptop />,
      title: "Remote Flexibility",
      description:
        "Work from anywhere with flexible hours and remote-first culture.",
      color: "#6366f1",
    },
    {
      icon: <TrendingUp />,
      title: "Career Growth",
      description:
        "Continuous learning opportunities, mentorship, and clear career progression paths.",
      color: "#10b981",
    },
    {
      icon: <Award />,
      title: "Competitive Salary",
      description:
        "Industry-leading compensation packages with performance bonuses.",
      color: "#f59e0b",
    },
    {
      icon: <Coffee />,
      title: "Work-Life Balance",
      description:
        "Generous PTO, paid holidays, and a culture that respects your time.",
      color: "#a855f7",
    },
    {
      icon: <Users />,
      title: "Amazing Team",
      description:
        "Collaborate with talented, passionate people who love what they do.",
      color: "#3b82f6",
    },
  ];

  return (
    <section ref={ref} className="bg-white px-[8%] py-[100px]">
      <div className="max-w-[1200px] mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-[60px]"
        >
          <div className="inline-flex items-center gap-2 px-[18px] py-[8px] rounded-full bg-indigo-500/10 text-indigo-500 text-[0.85rem] font-semibold mb-[20px]">
            <Sparkles size={14} />
            <span>Benefits & Perks</span>
          </div>

          <h2
            className="font-black text-slate-900 leading-tight mb-4
                         text-[clamp(2.5rem,5vw,4rem)]"
          >
            Why Join HITCS?
          </h2>

          <p className="text-slate-500 text-[1.1rem] leading-[1.7] max-w-[700px] mx-auto">
            We invest in our people because they're our greatest asset
          </p>
        </motion.div>

        {/* GRID */}
        <div
          className="grid gap-[28px]
                        grid-cols-[repeat(auto-fit,minmax(320px,1fr))]"
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{ ["--benefit-color" as any]: benefit.color }}
              className="relative group bg-slate-50 border border-slate-200
                         rounded-[24px] px-[32px] py-[40px]
                         overflow-hidden cursor-pointer
                         transition-all duration-500
                         hover:bg-white
                         hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >
              {/* ICON */}
              <div
                className="w-[60px] h-[60px] flex items-center justify-center
                           rounded-[16px] mb-[24px]
                           transition-all duration-400
                           bg-indigo-500/10
                           group-hover:text-white
                           group-hover:scale-110
                           group-hover:rotate-[5deg]"
                style={{
                  color: benefit.color,
                  backgroundColor: `${benefit.color}1A`,
                }}
              >
                {benefit.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-[1.4rem] font-extrabold text-slate-900 mb-3">
                {benefit.title}
              </h3>

              {/* DESC */}
              <p className="text-[1rem] text-slate-500 leading-[1.7]">
                {benefit.description}
              </p>

              {/* GLOW */}
              <div
                className="absolute inset-0 opacity-0 pointer-events-none
                           transition-opacity duration-500
                           group-hover:opacity-[0.08]"
                style={{
                  background: `radial-gradient(circle at center, ${benefit.color}, transparent 70%)`,
                }}
              />

              {/* border color hover */}
              <div
                className="absolute inset-0 rounded-[24px] pointer-events-none
                           border transition-all duration-500"
                style={{
                  borderColor: "transparent",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ======================================================
   CULTURE
====================================================== */

type CultureValue = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const CultureSection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cultureValues: CultureValue[] = [
    {
      title: "Innovation First",
      description:
        "We encourage experimentation and embrace new technologies to stay ahead.",
      icon: <Zap size={20} />,
    },
    {
      title: "Collaborative Spirit",
      description:
        "Teamwork makes the dream work. We win together and support each other.",
      icon: <Users size={20} />,
    },
    {
      title: "Continuous Learning",
      description:
        "Growth mindset is in our DNA. We invest in learning and development.",
      icon: <TrendingUp size={20} />,
    },
    {
      title: "Customer Obsessed",
      description:
        "Our clients' success is our success. We go above and beyond.",
      icon: <Heart size={20} />,
    },
  ];

  return (
    <section ref={ref} className="bg-slate-50 px-[8%] py-[100px]">
      <div className="max-w-[1000px] mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-[60px]"
        >
          <div className="inline-flex items-center gap-2 px-[18px] py-[8px] rounded-full bg-indigo-500/10 text-indigo-500 text-[0.85rem] font-semibold mb-[20px]">
            <Globe2 size={14} />
            <span>Our Culture</span>
          </div>

          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-slate-900 leading-tight">
            Built on Strong Values
          </h2>

          <p className="text-slate-500 text-[1.1rem] leading-[1.7] max-w-[700px] mx-auto mt-4">
            Our culture is the foundation of everything we do
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-[24px]">
          {cultureValues.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group flex items-center gap-[24px] bg-white border border-slate-200 rounded-[20px] p-[32px] transition-all duration-500 hover:border-indigo-500 hover:shadow-[0_15px_50px_rgba(99,102,241,0.1)] hover:translate-x-[10px]"
            >
              {/* ICON */}
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[16px] bg-gradient-to-br from-indigo-500 to-purple-500 text-white shrink-0">
                {value.icon}
              </div>

              {/* CONTENT */}
              <div className="flex-1">
                <h3 className="text-[1.4rem] font-extrabold text-slate-900 mb-2">
                  {value.title}
                </h3>

                <p className="text-[1rem] text-slate-500 leading-[1.7]">
                  {value.description}
                </p>
              </div>

              {/* CHECK ICON */}
              <CheckCircle2 size={24} className="text-emerald-500 shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
/* ======================================================
   CTA
====================================================== */

const CareersCTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-16 text-center relative overflow-hidden">
        <Sparkles className="mx-auto mb-6 text-indigo-400" size={40} />

        <h2 className="text-3xl font-extrabold mb-4">
          Ready to Make an Impact?
        </h2>

        <p className="text-white/70 mb-8">
          Don't see your role? Send your resume anyway.
        </p>

        <button className="bg-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition">
          Contact Hiring Team
        </button>
      </div>
    </section>
  );
};
