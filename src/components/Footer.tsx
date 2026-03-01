import { useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ShieldCheck,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";

const letters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const ScrambleText: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  const [display, setDisplay] = useState(text);

  const scramble = () => {
    let iterations = 0;

    const interval = setInterval(() => {
      setDisplay((prev) =>
        prev
          .split("")
          .map((_, i) =>
            i < iterations
              ? text[i]
              : letters[Math.floor(Math.random() * letters.length)],
          )
          .join(""),
      );

      iterations += 1 / 3;

      if (iterations >= text.length) clearInterval(interval);
    }, 40);
  };

  return (
    <span className={`${className} cursor-pointer`} onMouseEnter={scramble}>
      {display}
    </span>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [newspaper, setNewspaper] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function submitNewspaper(e) {
    e.preventDefault();
    console.log("submitting", newspaper);

    setNewspaper(""); // clears input
    setSubmitted(true); // show message

    setTimeout(() => {
      setSubmitted(false); // hide message after 3s (optional)
    }, 2000);
  }

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // const brandY = useTransform(scrollYProgress, [0, 1], [80, -80]); // reserved for future animation

  const footerLinks = {
    Solutions: [
      "Software Solutions",
      "Web Design",
      "Development",
      "E-Commerce",
      "Mobile Apps",
    ],
    Growth: ["SEO & Branding", "Domain & Hosting", "Social Media", "Guarantee"],
    Company: ["About Us", "Careers", "Blog", "Privacy Policy", "Terms"],
  };

  const socials = [
    { Icon: Facebook, hover: "hover:bg-[#1877F2]" },
    { Icon: Instagram, hover: "hover:bg-pink-500" },
    { Icon: Twitter, hover: "hover:bg-[#1DA1F2]" },
    { Icon: Youtube, hover: "hover:bg-red-500" },
  ];

  return (
    <footer
      ref={ref}
      className="relative w-full bg-[#f8fafc] pt-8 md:pt-12 pb-2 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, black 1px, transparent 1px),
              linear-gradient(to bottom, black 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[200px] md:h-[300px] bg-purple-200 blur-[120px] opacity-20" />

      {/* MAIN CONTAINER */}
      <div className="max-w-[2400px] mx-auto px-4 md:px-4 relative z-10">
        <div
          className="
          bg-white
          rounded-2xl md:rounded-3xl
          border
          border-slate-200
          shadow-[0_20px_60px_rgba(0,0,0,0.06)]
          p-6
          sm:p-8
          md:p-12
          lg:p-16
        "
        >
          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
            {/* LEFT */}
            <div className="lg:col-span-5 space-y-6 md:space-y-8">
              <img src="/new_hitcsLogo.png" className="h-12 md:h-16" />

              <p className="mt-3 text-sm md:text-base text-black max-w-md">
                Delivering end-to-end software solutions and technology-driven
                business transformation for India's top organizations,
                empowering growth through innovation and efficiency.
              </p>

              {/* CONTACT */}
              <div className="space-y-3 text-sm md:text-base text-black">
                <div className="flex items-center gap-3">
                  <Mail size={16} />
                  info@hitcs.com
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={16} />
                  +91 93081 99900
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={16} />
                  Ranchi, Jharkhand
                </div>
              </div>

              {/* SOCIAL */}
              <div className="flex gap-3 pt-2 flex-wrap">
                {socials.map(({ Icon, hover }, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2 }}
                    className={`
                      w-10 h-10 md:w-11 md:h-11
                      flex items-center justify-center
                      rounded-lg md:rounded-xl
                      bg-white
                      border
                      border-slate-400
                      text-slate-900
                      transition
                      ${hover}
                      hover:text-white
                      cursor-pointer
                    `}
                  >
                    <Icon size={18} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-7">
              {/* LINKS */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-10">
                {Object.entries(footerLinks).map(([title, links]) => (
                  <div key={title}>
                    <h4 className="text-sm font-bold tracking-widest text-purple-600 mb-3">
                      {title}
                    </h4>

                    <ul className="space-y-3">
                      {links.map((link) => {
                        // simple routing map based on label
                        let dest = "/";
                        switch (link) {
                          case "About Us":
                            dest = "/about";
                            break;
                          case "Careers":
                            dest = "/careers";
                            break;
                          case "Blog":
                            dest = "/blog";
                            break;
                          case "Privacy Policy":
                            dest = "/privacy";
                            break;
                          case "Terms":
                            dest = "/terms";
                            break;
                          default:
                            // anything else goes to services overview for now
                            dest = "/services";
                        }

                        return (
                          <li key={link}>
                            <Link
                              to={dest}
                              className="text-slate-800 hover:text-purple-600 text-sm md:text-base"
                            >
                              <ScrambleText text={link} />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              {/* NEWSLETTER */}
              <div className="p-5 md:p-8 rounded-xl md:rounded-2xl bg-white border border-slate-200">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="font-semibold flex items-center gap-2 text-sm md:text-base text-slate-700">
                      <CheckCircle2 size={18} />
                      Stay ahead
                    </h4>

                    <p className="text-xs md:text-sm text-slate-500 mt-1">
                      Monthly technology insights
                    </p>
                  </div>

                  <form
                    onSubmit={submitNewspaper}
                    className="relative w-full md:w-[320px]"
                  >
                    <input
                      value={newspaper}
                      onChange={(e) => setNewspaper(e.target.value)}
                      placeholder="Work email"
                      type="email"
                      className="
          w-full
          h-12
          pl-4
          pr-14
          border
          border-black/20
          rounded-lg
          outline-none
          text-sm md:text-base
          text-slate-700
          placeholder:text-slate-400
          focus:border-purple-300
          focus:ring-1
          focus:ring-black/20
          transition
        "
                    />

                    <button
                      type="submit"
                      className="
          absolute
          right-2
          top-1/2
          -translate-y-1/2
          h-9 w-9
          flex
          items-center
          justify-center
          rounded-md
          bg-black
          text-white
          transition
          hover:scale-105
        "
                    >
                      <Send size={16} />
                    </button>

                    {/* Success Popup */}
                    {submitted && (
                      <div
                        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-green-50
          border
          border-green-200
          rounded-lg
          animate-in
          fade-in
          duration-300
        "
                      >
                        <div className="flex items-center gap-2 text-green-700 font-semibold text-sm">
                          <CheckCircle2 size={18} />
                          Submitted
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* TRUST */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center pt-8 border-t border-slate-100">
            <div>
              <div className="flex gap-2 items-center font-semibold text-sm md:text-base text-purple-700">
                <ShieldCheck size={18} />
                Enterprise Compliance
              </div>

              <p className="text-xs md:text-sm text-slate-500 mt-1">
                ISO • SOC2 • GDPR
              </p>
            </div>

            <img
              title="Globally Trusted Certifications"
              src="/badges/badge.png"
              className="h-9 md:h-11 opacity-80 hover:scale-105 cursor-pointer hover:opacity-100 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-10 pt-5 pb-3">
        <div className="h-px bg-linear-to-r from-transparent via-slate-200 to-transparent mb-4" />

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-xs md:text-sm text-slate-500">
          <div>© {currentYear} HITCS Technologies</div>

          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-purple-600">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-purple-600">
              Terms
            </Link>
            <Link to="/security" className="hover:text-purple-600">
              Security
            </Link>
          </div>

          <div className="font-medium text-slate-700">info@hitcs.com</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
