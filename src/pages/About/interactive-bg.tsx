import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

const COLORS = [
  "rgba(139, 92, 246, 0.3)",
  "rgba(59, 130, 246, 0.25)",
  "rgba(236, 72, 153, 0.2)",
  "rgba(139, 92, 246, 0.15)",
  "rgba(59, 130, 246, 0.12)",
];

export function InteractiveBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animRef = useRef<number>(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const initParticles = (w: number, h: number) => {
      const count = Math.min(Math.floor((w * h) / 15000), 80);
      const particles: Particle[] = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
      particlesRef.current = particles;
    };

    const resize = () => {
      const w = window.innerWidth;
      const h = document.documentElement.scrollHeight;
      canvas.width = w;
      canvas.height = h;
      initParticles(w, h);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY + window.scrollY };
      mouseX.set(e.clientX);
      mouseY.set(e.clientY + window.scrollY);
    };

    const handleClick = (e: MouseEvent) => {
      const cx = e.clientX;
      const cy = e.clientY + window.scrollY;
      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8;
        particlesRef.current.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * 2,
          vy: Math.sin(angle) * 2,
          radius: Math.random() * 3 + 1.5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    };

    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("click", handleClick);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          const force = (200 - dist) / 200;
          p.vx += (dx / dist) * force * 0.02;
          p.vy += (dy / dist) * force * 0.02;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;
        p.vy *= 0.99;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ddx = p.x - p2.x;
          const ddy = p.y - p2.y;
          const ddist = Math.sqrt(ddx * ddx + ddy * ddy);
          if (ddist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.06 * (1 - ddist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      if (particles.length > 200) {
        particlesRef.current = particles.slice(-200);
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(animRef.current);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0"
        style={{ width: "100%", height: "100%" }}
      />
      <motion.div
        className="pointer-events-none fixed z-0 h-[600px] w-[600px] rounded-full opacity-[0.07]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, hsl(262, 83%, 58%) 0%, transparent 70%)",
        }}
      />
      <motion.div
        className="pointer-events-none fixed z-0 h-[400px] w-[400px] rounded-full opacity-[0.05]"
        style={{
          x: springX,
          y: springY,
          translateX: "-30%",
          translateY: "-70%",
          background:
            "radial-gradient(circle, hsl(220, 80%, 56%) 0%, transparent 70%)",
        }}
      />
    </>
  );
}
