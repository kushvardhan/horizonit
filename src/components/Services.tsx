import { useState, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
    Code2,
    Globe,
    Layout,
    ShoppingCart,
    Share2,
    Search,
    Smartphone,
    Server,
    ArrowUpRight,
} from 'lucide-react';

const services = [
    {
        icon: Code2,
        title: 'Software Solutions',
        short: 'Custom enterprise software engineered for scale.',
        description:
            'We architect and build bespoke software systems — from ERP platforms to microservices — designed to handle enterprise-grade complexity, integrate seamlessly with existing infrastructure, and scale with your business growth.',
        tag: 'Enterprise Dev',
        number: '01',
    },
    {
        icon: Globe,
        title: 'Web Solutions',
        short: 'High-performance web applications that convert.',
        description:
            'From corporate portals to complex web platforms, we deliver pixel-perfect, blazing-fast web experiences built on modern frameworks. Every project is optimized for performance, accessibility, and measurable business outcomes.',
        tag: 'Web Engineering',
        number: '02',
    },
    {
        icon: Layout,
        title: 'CMS Development',
        short: 'Powerful content management built for your team.',
        description:
            'We implement and customize enterprise CMS platforms — WordPress, Contentful, Strapi, and headless architectures — giving your team full editorial control while maintaining developer-grade performance and security.',
        tag: 'Content Systems',
        number: '03',
    },
    {
        icon: ShoppingCart,
        title: 'E-Commerce',
        short: 'Revenue-driving commerce platforms at scale.',
        description:
            'We build high-converting e-commerce ecosystems on Shopify, WooCommerce, Magento, and custom stacks. From product catalog architecture to checkout optimization and payment gateway integration — built to sell.',
        tag: 'Commerce',
        number: '04',
    },
    {
        icon: Share2,
        title: 'Social Media Services',
        short: 'Strategic social presence that builds authority.',
        description:
            'Our social media specialists craft data-driven content strategies, manage brand presence across all major platforms, and execute paid social campaigns that generate qualified leads and measurable ROI.',
        tag: 'Digital Marketing',
        number: '05',
    },
    {
        icon: Search,
        title: 'SEO',
        short: 'Organic growth engineered with precision.',
        description:
            'We deploy technical SEO audits, content architecture strategies, and authority-building link programs that move the needle on search rankings. Our SEO engagements are tied to traffic, leads, and revenue — not vanity metrics.',
        tag: 'Search Optimization',
        number: '06',
    },
    {
        icon: Smartphone,
        title: 'Mobile App Development',
        short: 'Native and cross-platform apps users love.',
        description:
            'From iOS and Android native apps to React Native and Flutter cross-platform solutions, we build mobile experiences that are fast, intuitive, and deeply integrated with your backend systems and business workflows.',
        tag: 'Mobile',
        number: '07',
    },
    {
        icon: Server,
        title: 'Web Hosting',
        short: 'Enterprise hosting with 99.9% uptime SLA.',
        description:
            'We provide managed cloud hosting, dedicated server infrastructure, and CDN-accelerated delivery on AWS, Azure, and GCP. Our DevOps team handles deployment pipelines, monitoring, security patching, and 24/7 incident response.',
        tag: 'Infrastructure',
        number: '08',
    },
];

function FeatureBlock({ service }: { service: typeof services[0] }) {
    const [hovered, setHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const blockRef = useRef<HTMLDivElement>(null);
    const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!blockRef.current) return;
        const rect = blockRef.current.getBoundingClientRect();
        setMousePos({
            x: ((e.clientX - rect.left) / rect.width - 0.5) * 12,
            y: ((e.clientY - rect.top) / rect.height - 0.5) * 8,
        });
    };

    return (
        <div
            ref={(el) => {
                (ref as React.MutableRefObject<HTMLElement | null>).current = el;
                blockRef.current = el;
            }}
            className={`relative overflow-hidden cursor-default transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ minHeight: '520px' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => { setHovered(false); setMousePos({ x: 0, y: 0 }); }}
            onMouseMove={handleMouseMove}
        >
            {/* Background */}
            <div
                className="absolute inset-0 transition-all duration-700"
                style={{
                    background: hovered
                        ? 'oklch(0.18 0.08 255)'
                        : 'oklch(0.10 0.03 265)',
                }}
            />

            {/* Subtle grid texture */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: 'linear-gradient(oklch(1 0 0 / 0.15) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.15) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Animated accent line — draws on hover */}
            <div className="absolute top-0 left-0 h-0.5 bg-hitcs-accent transition-all duration-700 ease-out"
                style={{ width: hovered ? '100%' : '0%' }}
            />

            {/* Content */}
            <div
                className="relative z-10 h-full flex flex-col justify-between p-10 lg:p-14"
                style={{
                    transform: hovered ? `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)` : 'translate(0,0)',
                    transition: 'transform 0.4s ease',
                    minHeight: '520px',
                }}
            >
                <div>
                    <div className="flex items-start justify-between mb-10">
                        <span className="text-xs font-bold tracking-[0.25em] uppercase text-hitcs-accent-light opacity-70">
                            {service.tag}
                        </span>
                        <span className="text-7xl font-black text-white/5 leading-none select-none">
                            {service.number}
                        </span>
                    </div>

                    <div
                        className="w-16 h-16 border border-white/10 flex items-center justify-center mb-8 transition-all duration-500"
                        style={{
                            background: hovered ? 'oklch(0.50 0.22 255 / 0.2)' : 'oklch(1 0 0 / 0.04)',
                            borderColor: hovered ? 'oklch(0.50 0.22 255 / 0.5)' : 'oklch(1 0 0 / 0.1)',
                        }}
                    >
                        <service.icon
                            size={28}
                            style={{ color: hovered ? 'oklch(0.62 0.20 255)' : 'oklch(1 0 0 / 0.5)' }}
                            className="transition-colors duration-500"
                        />
                    </div>

                    {/* Title with parallax */}
                    <h3
                        className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.05] mb-6 transition-transform duration-400"
                        style={{
                            transform: hovered ? `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.3}px)` : 'translate(0,0)',
                        }}
                    >
                        {service.title}
                    </h3>

                    {/* Description — clip reveal from below */}
                    <div className="overflow-hidden">
                        <p
                            className="text-base text-white/60 leading-relaxed max-w-md transition-all duration-500"
                            style={{
                                transform: hovered ? 'translateY(0)' : 'translateY(100%)',
                                opacity: hovered ? 1 : 0,
                            }}
                        >
                            {service.description}
                        </p>
                    </div>

                    {/* Short text — hides on hover */}
                    <p
                        className="text-base text-white/50 leading-relaxed max-w-md transition-all duration-300 absolute"
                        style={{
                            opacity: hovered ? 0 : 1,
                            transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
                        }}
                    >
                        {service.short}
                    </p>
                </div>

                <div
                    className="flex items-center gap-3 mt-16 transition-all duration-500"
                    style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'translateY(0)' : 'translateY(10px)' }}
                >
                    <span className="text-sm font-semibold text-hitcs-accent-light tracking-wide">Explore Capability</span>
                    <ArrowUpRight size={16} className="text-hitcs-accent" />
                </div>
            </div>
        </div>
    );
}

function SecondaryBlock({ service, tall = false }: { service: typeof services[0]; tall?: boolean }) {
    const [hovered, setHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const blockRef = useRef<HTMLDivElement>(null);
    const { ref, isVisible } = useScrollReveal({ threshold: 0.08 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!blockRef.current) return;
        const rect = blockRef.current.getBoundingClientRect();
        setMousePos({
            x: ((e.clientX - rect.left) / rect.width - 0.5) * 10,
            y: ((e.clientY - rect.top) / rect.height - 0.5) * 6,
        });
    };

    return (
        <div
            ref={(el) => {
                (ref as React.MutableRefObject<HTMLElement | null>).current = el;
                blockRef.current = el;
            }}
            className={`relative overflow-hidden cursor-default transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ minHeight: tall ? '320px' : '240px' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => { setHovered(false); setMousePos({ x: 0, y: 0 }); }}
            onMouseMove={handleMouseMove}
        >
            {/* Background shift */}
            <div
                className="absolute inset-0 transition-all duration-600"
                style={{
                    background: hovered
                        ? 'oklch(0.32 0.18 255)'
                        : 'oklch(0.97 0.003 255)',
                }}
            />

            {/* Accent line */}
            <div
                className="absolute bottom-0 left-0 h-0.5 transition-all duration-600 ease-out"
                style={{
                    width: hovered ? '100%' : '0%',
                    background: 'oklch(0.50 0.22 255)',
                }}
            />

            {/* Left accent bar */}
            <div
                className="absolute top-0 left-0 w-0.5 transition-all duration-500 ease-out"
                style={{
                    height: hovered ? '100%' : '0%',
                    background: 'oklch(0.50 0.22 255 / 0.5)',
                    transitionDelay: hovered ? '0.1s' : '0s',
                }}
            />

            <div
                className="relative z-10 h-full flex flex-col justify-between p-7 lg:p-8"
                style={{
                    transform: hovered ? `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)` : 'translate(0,0)',
                    transition: 'transform 0.4s ease',
                    minHeight: 'inherit',
                }}
            >
                <div className="flex items-start justify-between">
                    <service.icon
                        size={20}
                        className="transition-colors duration-400"
                        style={{ color: hovered ? 'oklch(0.85 0.12 255)' : 'oklch(0.50 0.22 255)' }}
                    />
                    <span
                        className="text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-400"
                        style={{ color: hovered ? 'oklch(0.75 0.15 255)' : 'oklch(0.55 0.02 255)' }}
                    >
                        {service.tag}
                    </span>
                </div>

                <div>
                    {/* Title with parallax */}
                    <h3
                        className="text-2xl lg:text-3xl font-black tracking-tighter leading-tight mb-3 transition-all duration-400"
                        style={{
                            color: hovered ? 'oklch(1 0 0)' : 'oklch(0.08 0.01 265)',
                            transform: hovered ? `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.25}px)` : 'translate(0,0)',
                        }}
                    >
                        {service.title}
                    </h3>

                    {/* Description clip reveal */}
                    <div className="overflow-hidden">
                        <p
                            className="text-sm leading-relaxed transition-all duration-500"
                            style={{
                                color: hovered ? 'oklch(1 0 0 / 0.65)' : 'oklch(0.55 0.02 255)',
                                transform: hovered ? 'translateY(0)' : 'translateY(110%)',
                                opacity: hovered ? 1 : 0,
                                maxHeight: hovered ? '120px' : '0',
                            }}
                        >
                            {service.short}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Services() {
    const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.1 });

    const featured = services[0];
    const secondary = services.slice(1);

    return (
        <section id="services" className="bg-white section-padding overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Editorial Header */}
                <div
                    ref={titleRef as React.RefObject<HTMLDivElement>}
                    className={`mb-20 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-px bg-hitcs-accent" />
                        <span className="text-hitcs-accent text-xs font-bold tracking-[0.3em] uppercase">
                            Capabilities
                        </span>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-hitcs-black tracking-tighter leading-[0.95] max-w-3xl">
                            What We
                            <br />
                            <span className="text-hitcs-accent">Build</span> &amp; Deliver
                        </h2>
                        <div className="max-w-xs">
                            <p className="text-base text-hitcs-gray-cool leading-relaxed">
                                Eight specialized practice areas. One integrated delivery model. Engineered for enterprise outcomes.
                            </p>
                            <div className="mt-4 w-8 h-px bg-hitcs-gray-mid" />
                        </div>
                    </div>
                </div>

                {/* Asymmetric Editorial Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-hitcs-gray-mid">

                    {/* DOMINANT FEATURE BLOCK — spans 5 cols, 2 rows */}
                    <div className="lg:col-span-5 lg:row-span-2 bg-white">
                        <FeatureBlock service={featured} />
                    </div>

                    {/* Secondary row 1 — 3 blocks across 7 cols */}
                    <div className="lg:col-span-3 bg-white">
                        <SecondaryBlock service={secondary[0]} tall />
                    </div>
                    <div className="lg:col-span-4 bg-white">
                        <SecondaryBlock service={secondary[1]} tall />
                    </div>

                    {/* Secondary row 2 — 2 blocks */}
                    <div className="lg:col-span-4 bg-white">
                        <SecondaryBlock service={secondary[2]} tall />
                    </div>
                    <div className="lg:col-span-3 bg-white">
                        <SecondaryBlock service={secondary[3]} tall />
                    </div>

                    {/* Bottom row — 3 blocks spanning full width */}
                    <div className="lg:col-span-4 bg-white">
                        <SecondaryBlock service={secondary[4]} />
                    </div>
                    <div className="lg:col-span-4 bg-white">
                        <SecondaryBlock service={secondary[5]} />
                    </div>
                    <div className="lg:col-span-4 bg-white">
                        <SecondaryBlock service={secondary[6]} />
                    </div>
                </div>

                {/* Bottom editorial note */}
                <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-hitcs-gray-mid">
                    <p className="text-sm text-hitcs-gray-cool max-w-md">
                        Every engagement is scoped, staffed, and delivered by senior practitioners — not junior teams.
                    </p>
                    <div className="flex items-center gap-3 text-hitcs-accent text-sm font-semibold group cursor-pointer">
                        <span>View All Capabilities</span>
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </div>
                </div>
            </div>
        </section>
    );
}
