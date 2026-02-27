import { useRef, useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
    {
        number: '01',
        title: 'Discover',
        description: 'Deep-dive stakeholder workshops, technical audits, and competitive landscape analysis to define the problem space with precision.',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <circle cx="22" cy="22" r="10" stroke="currentColor" strokeWidth="2" />
                <line x1="29" y1="29" x2="40" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="22" y1="16" x2="22" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="16" y1="22" x2="28" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Architect',
        description: 'System design, technology selection, and delivery roadmap — every decision documented, justified, and aligned to business outcomes.',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <rect x="8" y="8" width="14" height="14" stroke="currentColor" strokeWidth="2" />
                <rect x="26" y="8" width="14" height="14" stroke="currentColor" strokeWidth="2" />
                <rect x="17" y="26" width="14" height="14" stroke="currentColor" strokeWidth="2" />
                <line x1="15" y1="15" x2="26" y2="15" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
                <line x1="24" y1="33" x2="24" y2="22" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Build',
        description: 'Agile sprints, CI/CD pipelines, and rigorous QA — engineering excellence at every layer of the stack, from infrastructure to interface.',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <polyline points="10,28 18,20 24,26 34,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="8" y1="36" x2="40" y2="36" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="34" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        number: '04',
        title: 'Deliver',
        description: 'Staged rollout, performance benchmarking, knowledge transfer, and ongoing SLA-backed support — we stay accountable post-launch.',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" />
                <polyline points="16,24 22,30 32,18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

function usePathAnimation(threshold = 0.3) {
    const ref = useRef<SVGPathElement | null>(null);
    const [drawn, setDrawn] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !drawn) {
                    setDrawn(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [drawn, threshold]);

    return { ref, drawn };
}

export default function BusinessProcess() {
    const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.1 });
    const { ref: pathRef, drawn: pathDrawn } = usePathAnimation(0.2);
    const containerRef = useRef<SVGSVGElement>(null);

    // Node positions for the wavy path (percentages of SVG width)
    // Path: left → right with wave
    const nodePositions = [
        { cx: 12.5, cy: 55 },
        { cx: 37.5, cy: 35 },
        { cx: 62.5, cy: 65 },
        { cx: 87.5, cy: 40 },
    ];

    // SVG wavy path connecting nodes
    const pathD = `
        M ${nodePositions[0].cx}% ${nodePositions[0].cy}%
        C ${nodePositions[0].cx + 8}% ${nodePositions[0].cy - 15}%,
          ${nodePositions[1].cx - 8}% ${nodePositions[1].cy + 15}%,
          ${nodePositions[1].cx}% ${nodePositions[1].cy}%
        C ${nodePositions[1].cx + 8}% ${nodePositions[1].cy - 15}%,
          ${nodePositions[2].cx - 8}% ${nodePositions[2].cy + 15}%,
          ${nodePositions[2].cx}% ${nodePositions[2].cy}%
        C ${nodePositions[2].cx + 8}% ${nodePositions[2].cy - 15}%,
          ${nodePositions[3].cx - 8}% ${nodePositions[3].cy + 15}%,
          ${nodePositions[3].cx}% ${nodePositions[3].cy}%
    `;

    return (
        <section id="process" className="bg-white section-padding overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Header */}
                <div
                    ref={titleRef as React.RefObject<HTMLDivElement>}
                    className="mb-20 transition-all duration-700"
                    style={{
                        opacity: titleVisible ? 1 : 0,
                        transform: titleVisible ? 'translateY(0)' : 'translateY(32px)',
                    }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-px bg-hitcs-accent" />
                        <span className="text-hitcs-accent text-xs font-bold tracking-[0.3em] uppercase">
                            How We Work
                        </span>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-hitcs-black tracking-tighter leading-[0.95]">
                            The Journey
                            <br />
                            <span className="text-hitcs-accent">From Idea</span> to Impact
                        </h2>
                        <p className="text-base text-hitcs-gray-cool max-w-xs leading-relaxed">
                            A proven four-phase delivery framework refined across 200+ enterprise engagements.
                        </p>
                    </div>
                </div>

                {/* Desktop: SVG wavy path + nodes */}
                <div className="hidden lg:block relative" style={{ height: '420px' }}>
                    {/* SVG wavy dashed path */}
                    <svg
                        ref={containerRef}
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        style={{ overflow: 'visible' }}
                    >
                        <defs>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Background path (faint) */}
                        <path
                            d={pathD}
                            fill="none"
                            stroke="oklch(0.85 0.008 255)"
                            strokeWidth="0.4"
                            strokeDasharray="2 2"
                            vectorEffect="non-scaling-stroke"
                        />

                        {/* Animated draw path */}
                        <path
                            ref={pathRef}
                            d={pathD}
                            fill="none"
                            stroke="oklch(0.50 0.22 255)"
                            strokeWidth="0.5"
                            strokeDasharray="2 1.5"
                            vectorEffect="non-scaling-stroke"
                            style={{
                                strokeDashoffset: pathDrawn ? '0' : '300',
                                transition: pathDrawn ? 'stroke-dashoffset 2.4s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                            }}
                        />
                    </svg>

                    {/* Step nodes */}
                    {steps.map((step, index) => {
                        const pos = nodePositions[index];
                        const isLeft = index % 2 === 0;

                        return (
                            <StepNode
                                key={step.number}
                                step={step}
                                index={index}
                                posX={pos.cx}
                                posY={pos.cy}
                                isLeft={isLeft}
                                pathDrawn={pathDrawn}
                            />
                        );
                    })}
                </div>

                {/* Mobile: vertical stacked layout */}
                <div className="lg:hidden flex flex-col gap-0">
                    {steps.map((step, index) => (
                        <MobileStepNode key={step.number} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StepNode({
    step,
    index,
    posX,
    posY,
    isLeft,
    pathDrawn,
}: {
    step: typeof steps[0];
    index: number;
    posX: number;
    posY: number;
    isLeft: boolean;
    pathDrawn: boolean;
}) {
    const [hovered, setHovered] = useState(false);
    const delay = index * 400 + 600;

    return (
        <div
            className="absolute"
            style={{
                left: `${posX}%`,
                top: `${posY}%`,
                transform: 'translate(-50%, -50%)',
                transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
                opacity: pathDrawn ? 1 : 0,
                zIndex: 10,
            }}
        >
            {/* Large faded step number — outside circle */}
            <div
                className="absolute font-black select-none pointer-events-none"
                style={{
                    fontSize: '5rem',
                    lineHeight: 1,
                    color: 'oklch(0.08 0.01 265)',
                    opacity: 0.06,
                    top: isLeft ? '-3.5rem' : 'auto',
                    bottom: isLeft ? 'auto' : '-3.5rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    whiteSpace: 'nowrap',
                }}
            >
                {step.number}
            </div>

            {/* Circle node */}
            <div
                className="relative flex items-center justify-center transition-all duration-400 cursor-default"
                style={{
                    width: '112px',
                    height: '112px',
                    borderRadius: '50%',
                    background: hovered ? 'oklch(0.32 0.18 255)' : 'oklch(1 0 0)',
                    border: `2px solid ${hovered ? 'oklch(0.50 0.22 255)' : 'oklch(0.85 0.008 255)'}`,
                    boxShadow: hovered
                        ? '0 0 0 8px oklch(0.50 0.22 255 / 0.08), 0 16px 40px oklch(0.32 0.18 255 / 0.25)'
                        : '0 4px 20px oklch(0.08 0.01 265 / 0.08)',
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* Inner ring */}
                <div
                    className="absolute inset-3 rounded-full transition-all duration-400"
                    style={{
                        border: `1px dashed ${hovered ? 'oklch(0.50 0.22 255 / 0.4)' : 'oklch(0.85 0.008 255)'}`,
                    }}
                />

                {/* Icon */}
                <div
                    className="relative z-10 transition-colors duration-400"
                    style={{ color: hovered ? 'oklch(0.85 0.12 255)' : 'oklch(0.50 0.22 255)' }}
                >
                    {step.icon}
                </div>
            </div>

            {/* Label below/above node */}
            <div
                className="absolute text-center"
                style={{
                    width: '200px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: isLeft ? '120px' : 'auto',
                    bottom: isLeft ? 'auto' : '120px',
                }}
            >
                <h4
                    className="text-lg font-black tracking-tight mb-1 transition-colors duration-300"
                    style={{ color: hovered ? 'oklch(0.32 0.18 255)' : 'oklch(0.08 0.01 265)' }}
                >
                    {step.title}
                </h4>
                <p className="text-xs text-hitcs-gray-cool leading-relaxed">
                    {step.description}
                </p>
            </div>
        </div>
    );
}

function MobileStepNode({ step, index }: { step: typeof steps[0]; index: number }) {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
    const [hovered, setHovered] = useState(false);
    const isLast = index === steps.length - 1;

    return (
        <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className="relative flex gap-6 pb-12 transition-all duration-700"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-32px)',
                transitionDelay: `${index * 120}ms`,
            }}
        >
            {/* Left column: number + circle + dashed line */}
            <div className="flex flex-col items-center shrink-0">
                {/* Faded number */}
                <div
                    className="font-black select-none mb-1"
                    style={{
                        fontSize: '2.5rem',
                        lineHeight: 1,
                        color: 'oklch(0.08 0.01 265)',
                        opacity: 0.08,
                    }}
                >
                    {step.number}
                </div>

                {/* Circle */}
                <div
                    className="flex items-center justify-center transition-all duration-400"
                    style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: hovered ? 'oklch(0.32 0.18 255)' : 'oklch(1 0 0)',
                        border: `2px solid ${hovered ? 'oklch(0.50 0.22 255)' : 'oklch(0.85 0.008 255)'}`,
                        boxShadow: hovered ? '0 8px 24px oklch(0.32 0.18 255 / 0.2)' : '0 2px 12px oklch(0.08 0.01 265 / 0.06)',
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <div
                        className="transition-colors duration-400"
                        style={{ color: hovered ? 'oklch(0.85 0.12 255)' : 'oklch(0.50 0.22 255)' }}
                    >
                        {step.icon}
                    </div>
                </div>

                {/* Dashed vertical connector */}
                {!isLast && (
                    <div
                        className="flex-1 mt-3"
                        style={{
                            width: '2px',
                            minHeight: '60px',
                            background: 'repeating-linear-gradient(to bottom, oklch(0.50 0.22 255 / 0.4) 0px, oklch(0.50 0.22 255 / 0.4) 6px, transparent 6px, transparent 12px)',
                        }}
                    />
                )}
            </div>

            {/* Right column: text */}
            <div className="pt-10 pb-2">
                <h4 className="text-xl font-black text-hitcs-black tracking-tight mb-2">
                    {step.title}
                </h4>
                <p className="text-sm text-hitcs-gray-cool leading-relaxed max-w-xs">
                    {step.description}
                </p>
            </div>
        </div>
    );
}
