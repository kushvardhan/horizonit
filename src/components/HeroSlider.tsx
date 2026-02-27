import { useState, useEffect, useCallback } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop',
        tag: 'Enterprise Technology Partner',
        headline: 'Engineering Digital',
        headline2: 'Transformation at Scale',
        subheading:
            'HITCS delivers end-to-end IT solutions that power global enterprises — from custom software to cloud infrastructure, built for performance and built to last.',
        cta1: 'Explore Our Services',
        cta2: 'View Case Studies',
        cta1Href: '#services',
        cta2Href: '#projects',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop',
        tag: 'Web & Mobile Excellence',
        headline: 'Intelligent Solutions',
        headline2: 'For Modern Business',
        subheading:
            'From high-performance web applications to enterprise mobile platforms, we architect and deliver technology that drives measurable business outcomes.',
        cta1: 'Our Capabilities',
        cta2: 'Get In Touch',
        cta1Href: '#services',
        cta2Href: '#contact',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&h=1080&fit=crop',
        tag: 'Global IT Consulting',
        headline: 'Trusted by 500+',
        headline2: 'Enterprises Worldwide',
        subheading:
            'With 15+ years of proven delivery across 30+ countries, HITCS is the strategic technology partner that global organizations rely on for mission-critical systems.',
        cta1: 'Who We Are',
        cta2: 'Start a Project',
        cta1Href: '#about',
        cta2Href: '#contact',
    },
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [textVisible, setTextVisible] = useState(true);

    const goToSlide = useCallback(
        (index: number) => {
            if (animating || index === current) return;
            setAnimating(true);
            setTextVisible(false);
            setTimeout(() => {
                setCurrent(index);
                setTextVisible(true);
                setAnimating(false);
            }, 500);
        },
        [animating, current]
    );

    useEffect(() => {
        const timer = setInterval(() => {
            const next = (current + 1) % slides.length;
            goToSlide(next);
        }, 6000);
        return () => clearInterval(timer);
    }, [current, goToSlide]);

    const handleNavClick = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const slide = slides[current];

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Background Images */}
            {slides.map((s, i) => (
                <div
                    key={s.id}
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{ opacity: i === current ? 1 : 0 }}
                >
                    <img
                        src={s.image}
                        alt={`Slide ${s.id}`}
                        className="w-full h-full object-cover"
                        loading={i === 0 ? 'eager' : 'lazy'}
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-linear-to-r from-hitcs-black/85 via-hitcs-black/65 to-hitcs-black/40" />
                    <div className="absolute inset-0 bg-linear-to-t from-hitcs-black/60 via-transparent to-transparent" />
                </div>
            ))}

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center min-h-screen max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-32">
                <div
                    className="max-w-3xl"
                    style={{
                        opacity: textVisible ? 1 : 0,
                        transform: textVisible ? 'translateY(0)' : 'translateY(24px)',
                        transition: 'opacity 0.6s ease, transform 0.6s ease',
                    }}
                >
                    {/* Tag */}
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-8 h-px bg-hitcs-accent" />
                        <span className="text-hitcs-accent text-xs font-semibold tracking-[0.2em] uppercase">
                            {slide.tag}
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.02] tracking-tighter mb-4">
                        {slide.headline}
                        <br />
                        <span className="text-hitcs-accent">{slide.headline2}</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-base sm:text-lg text-white/75 font-light leading-relaxed max-w-xl mb-8">
                        {slide.subheading}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => handleNavClick(slide.cta1Href)}
                            className="inline-flex items-center justify-center gap-2 bg-hitcs-accent text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-white hover:text-hitcs-blue transition-all duration-300 group"
                        >
                            {slide.cta1}
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                        <button
                            onClick={() => handleNavClick(slide.cta2Href)}
                            className="inline-flex items-center justify-center gap-2 border border-white/50 text-white px-8 py-4 text-sm font-semibold tracking-wide hover:border-white hover:bg-white/10 transition-all duration-300"
                        >
                            {slide.cta2}
                        </button>
                    </div>
                </div>

                {/* Slide Dots */}
                <div className="absolute bottom-16 left-6 lg:left-10 flex items-center gap-3">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goToSlide(i)}
                            className={`transition-all duration-300 ${
                                i === current
                                    ? 'w-10 h-1 bg-hitcs-accent'
                                    : 'w-4 h-1 bg-white/40 hover:bg-white/70'
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                    <span className="ml-2 text-white/50 text-xs font-medium">
                        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                    </span>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-16 right-6 lg:right-10 flex flex-col items-center gap-2">
                    <span className="text-white/40 text-xs tracking-widest uppercase rotate-90 origin-center mb-4">
                        Scroll
                    </span>
                    <div className="animate-scroll-bounce">
                        <ChevronDown size={20} className="text-white/50" />
                    </div>
                </div>
            </div>

            {/* Bottom stats bar */}
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-hitcs-blue/90 backdrop-blur-sm border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                        {[
                            { value: '15+', label: 'Years Experience' },
                            { value: '500+', label: 'Global Clients' },
                            { value: '1200+', label: 'Projects Delivered' },
                            { value: '30+', label: 'Countries Served' },
                        ].map((stat) => (
                            <div key={stat.label} className="px-6 py-4 text-center">
                                <div className="text-xl md:text-2xl font-black text-white tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-white/60 font-medium tracking-wide mt-0.5">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
