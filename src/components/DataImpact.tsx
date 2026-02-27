import { useScrollReveal, useCounterAnimation } from "../hooks/useScrollReveal";

const stats = [
    { value: 1200, suffix: '+', label: 'Projects Delivered', desc: 'Across all service lines' },
    { value: 500, suffix: '+', label: 'Global Clients', desc: 'SME to Fortune 500' },
    { value: 30, suffix: '+', label: 'Countries Served', desc: 'Worldwide delivery' },
    { value: 15, suffix: '+', label: 'Years of Excellence', desc: 'Since 2009' },
    { value: 99, suffix: '.9%', label: 'Uptime SLA', desc: 'Mission-critical reliability' },
];

function StatCounter({ stat, isActive }: { stat: typeof stats[0]; isActive: boolean }) {
    const count = useCounterAnimation(stat.value, 2200, isActive);

    return (
        <div className="text-center px-6 py-10 group border-b border-white/10 lg:border-b-0 lg:border-r last:border-r-0 last:border-b-0">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none mb-2">
                {isActive ? count : 0}
                <span className="text-hitcs-accent">{stat.suffix}</span>
            </div>
            <div className="text-sm font-bold text-white/90 tracking-wide mb-1">{stat.label}</div>
            <div className="text-xs text-white/45 font-medium">{stat.desc}</div>
        </div>
    );
}

export default function DataImpact() {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

    return (
        <section
            className="relative overflow-hidden"
            style={{ background: 'oklch(0.08 0.01 265)' }}
        >
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=600&fit=crop"
                    alt=""
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-linear-to-r from-hitcs-black/80 via-hitcs-black/60 to-hitcs-black/80" />
            </div>

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage:
                        'linear-gradient(oklch(1 0 0 / 0.15) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.15) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Blue accent top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-hitcs-accent" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
                {/* Header */}
                <div
                    ref={ref as React.RefObject<HTMLDivElement>}
                    className={`text-center mb-16 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-10 h-0.5 bg-hitcs-accent" />
                        <span className="text-hitcs-accent text-xs font-semibold tracking-[0.2em] uppercase">
                            Our Impact
                        </span>
                        <div className="w-10 h-0.5 bg-hitcs-accent" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05]">
                        Numbers That
                        <span className="text-hitcs-accent"> Define Us</span>
                    </h2>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-white/10">
                    {stats.map((stat) => (
                        <StatCounter key={stat.label} stat={stat} isActive={isVisible} />
                    ))}
                </div>
            </div>
        </section>
    );
}
