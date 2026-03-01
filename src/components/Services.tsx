import { useState, useRef, useEffect } from 'react';
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
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    },
    {
        icon: Globe,
        title: 'Web Solutions',
        short: 'High-performance web applications that convert.',
        description:
            'From corporate portals to complex web platforms, we deliver pixel-perfect, blazing-fast web experiences built on modern frameworks. Every project is optimized for performance, accessibility, and measurable business outcomes.',
        tag: 'Web Engineering',
        number: '02',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    },
    {
        icon: Layout,
        title: 'CMS Development',
        short: 'Powerful content management built for your team.',
        description:
            'We implement and customize enterprise CMS platforms — WordPress, Contentful, Strapi, and headless architectures — giving your team full editorial control while maintaining developer-grade performance and security.',
        tag: 'Content Systems',
        number: '03',
        image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800',
    },
    {
        icon: ShoppingCart,
        title: 'E-Commerce',
        short: 'Revenue-driving commerce platforms at scale.',
        description:
            'We build high-converting e-commerce ecosystems on Shopify, WooCommerce, Magento, and custom stacks. From product catalog architecture to checkout optimization and payment gateway integration — built to sell.',
        tag: 'Commerce',
        number: '04',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    },
    {
        icon: Share2,
        title: 'Social Media Services',
        short: 'Strategic social presence that builds authority.',
        description:
            'Our social media specialists craft data-driven content strategies, manage brand presence across all major platforms, and execute paid social campaigns that generate qualified leads and measurable ROI.',
        tag: 'Digital Marketing',
        number: '05',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    },
    {
        icon: Search,
        title: 'SEO',
        short: 'Organic growth engineered with precision.',
        description:
            'We deploy technical SEO audits, content architecture strategies, and authority-building link programs that move the needle on search rankings. Our SEO engagements are tied to traffic, leads, and revenue — not vanity metrics.',
        tag: 'Search Optimization',
        number: '06',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
    },
    {
        icon: Smartphone,
        title: 'Mobile App Development',
        short: 'Native and cross-platform apps users love.',
        description:
            'From iOS and Android native apps to React Native and Flutter cross-platform solutions, we build mobile experiences that are fast, intuitive, and deeply integrated with your backend systems and business workflows.',
        tag: 'Mobile',
        number: '07',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    },
    {
        icon: Server,
        title: 'Web Hosting',
        short: 'Enterprise hosting with 99.9% uptime SLA.',
        description:
            'We provide managed cloud hosting, dedicated server infrastructure, and CDN-accelerated delivery on AWS, Azure, and GCP. Our DevOps team handles deployment pipelines, monitoring, security patching, and 24/7 incident response.',
        tag: 'Infrastructure',
        number: '08',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    },
];

function FeatureBlock({ service }: { service: typeof services[0] }) {
    const [hovered, setHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const blockRef = useRef<HTMLDivElement>(null);
    const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

    // Auto-activate on mobile when visible
    const isActive = hovered || (isVisible && typeof window !== 'undefined' && window.innerWidth < 1024);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!blockRef.current || window.innerWidth < 1024) return;
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
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img src={service.image} alt="" className="w-full h-full object-cover grayscale opacity-20" />
            </div>

            {/* Shutter Animation Overlay */}
            <div 
                className="absolute inset-0 z-[1] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]"
                style={{ 
                    background: 'oklch(0.10 0.03 265)',
                    transform: isActive ? 'translateY(-100%)' : 'translateY(0%)'
                }} 
            />
            
            {/* Active Dark Overlay (revealed by shutter) */}
            <div className="absolute inset-0 z-[1] bg-black/60 transition-opacity duration-700" style={{ opacity: isActive ? 1 : 0 }} />

            {/* Subtle grid texture */}
            <div
                className="absolute inset-0 opacity-5 z-[2]"
                style={{
                    backgroundImage: 'linear-gradient(oklch(1 0 0 / 0.15) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.15) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Animated accent line */}
            <div className="absolute top-0 left-0 h-0.5 bg-hitcs-accent transition-all duration-700 ease-out z-[10]"
                style={{ width: isActive ? '100%' : '0%' }}
            />

            {/* Rotating Arrow Top-Right */}
            <div className="absolute top-8 right-8 z-[10] transition-all duration-500"
                style={{ 
                    transform: isActive ? 'rotate(45deg) scale(1.2)' : 'rotate(0deg) scale(1)',
                    opacity: isActive ? 1 : 0.3
                }}
            >
                <ArrowUpRight size={32} className="text-hitcs-accent" />
            </div>

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
                            background: isActive ? 'oklch(0.50 0.22 255 / 0.2)' : 'oklch(1 0 0 / 0.04)',
                            borderColor: isActive ? 'oklch(0.50 0.22 255 / 0.5)' : 'oklch(1 0 0 / 0.1)',
                        }}
                    >
                        <service.icon
                            size={28}
                            style={{ color: isActive ? 'oklch(0.62 0.20 255)' : 'oklch(1 0 0 / 0.5)' }}
                            className="transition-colors duration-500"
                        />
                    </div>

                    <h3
                        className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.05] mb-6 transition-transform duration-400"
                        style={{
                            transform: hovered ? `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.3}px)` : 'translate(0,0)',
                        }}
                    >
                        {service.title}
                    </h3>

                    <div className="overflow-hidden">
                        <p
                            className="text-base text-white/80 leading-relaxed max-w-md transition-all duration-500"
                            style={{
                                transform: isActive ? 'translateY(0)' : 'translateY(100%)',
                                opacity: isActive ? 1 : 0,
                            }}
                        >
                            {service.description}
                        </p>
                    </div>

                    <p
                        className="text-base text-white/50 leading-relaxed max-w-md transition-all duration-300 absolute"
                        style={{
                            opacity: isActive ? 0 : 1,
                            transform: isActive ? 'translateY(-8px)' : 'translateY(0)',
                        }}
                    >
                        {service.short}
                    </p>
                </div>

                <div
                    className="flex items-center gap-3 mt-16 transition-all duration-500"
                    style={{ opacity: isActive ? 1 : 0, transform: isActive ? 'translateY(0)' : 'translateY(10px)' }}
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
    const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

    const isActive = hovered || (isVisible && typeof window !== 'undefined' && window.innerWidth < 1024);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!blockRef.current || window.innerWidth < 1024) return;
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
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img src={service.image} alt="" className="w-full h-full object-cover grayscale opacity-30" />
            </div>

            {/* Shutter Overlay */}
            <div 
                className="absolute inset-0 z-[1] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]"
                style={{ 
                    background: 'oklch(0.97 0.003 255)',
                    transform: isActive ? 'translateY(100%)' : 'translateY(0%)'
                }} 
            />

            {/* Active Dark Overlay */}
            <div className="absolute inset-0 z-[1] bg-black/70 transition-opacity duration-600" style={{ opacity: isActive ? 1 : 0 }} />

            <div
                className="absolute bottom-0 left-0 h-0.5 transition-all duration-600 ease-out z-[10]"
                style={{
                    width: isActive ? '100%' : '0%',
                    background: 'oklch(0.50 0.22 255)',
                }}
            />

            {/* Top Right Arrow Rotating */}
            <div className={`absolute bottom-6 cursor-pointer bg-zinc-700 ${isActive ? "bg-zinc-500" : "bg-zinc-700"} p-2 rounded-full right-6 z-[10] transition-all duration-500`}
                style={{ 
                    transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)',
                    opacity: isActive ? 1 : 0.2
                }}
            >
                <ArrowUpRight size={20} className={isActive ? "text-blue-500" : "text-black"} />
            </div>

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
                        style={{ color: isActive ? 'oklch(0.85 0.12 255)' : 'oklch(0.50 0.22 255)' }}
                    />
                    <span
                        className="text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-400"
                        style={{ color: isActive ? 'oklch(0.75 0.15 255)' : 'oklch(0.55 0.02 255)' }}
                    >
                        {service.tag}
                    </span>
                </div>

                <div>
                    <h3
                        className="text-2xl lg:text-3xl font-black tracking-tighter leading-tight mb-3 transition-all duration-400"
                        style={{
                            color: isActive ? 'oklch(1 0 0)' : 'oklch(0.08 0.01 265)',
                            transform: hovered ? `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.25}px)` : 'translate(0,0)',
                        }}
                    >
                        {service.title}
                    </h3>

                    <div className="overflow-hidden">
                        <p
                            className="text-sm leading-relaxed transition-all duration-500"
                            style={{
                                color: isActive ? 'oklch(1 0 0 / 0.85)' : 'oklch(0.55 0.02 255)',
                                transform: isActive ? 'translateY(0)' : 'translateY(110%)',
                                opacity: isActive ? 1 : 0,
                                maxHeight: isActive ? '120px' : '0',
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

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-hitcs-gray-mid border border-hitcs-gray-mid">
                    <div className="lg:col-span-5 lg:row-span-2 bg-white">
                        <FeatureBlock service={featured} />
                    </div>
                    <div className="lg:col-span-3 bg-white">
                        <SecondaryBlock service={secondary[0]} tall />
                    </div>
                    <div className="lg:col-span-4 bg-white">
                        <SecondaryBlock service={secondary[1]} tall />
                    </div>
                    <div className="lg:col-span-4 bg-white">
                        <SecondaryBlock service={secondary[2]} tall />
                    </div>
                    <div className="lg:col-span-3 bg-white">
                        <SecondaryBlock service={secondary[3]} tall />
                    </div>
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