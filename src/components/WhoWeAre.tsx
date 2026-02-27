import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, Award, Globe, Users, TrendingUp } from 'lucide-react';

const stats = [
    { icon: Award, value: '15+', label: 'Years of Excellence', desc: 'Delivering enterprise IT since 2009' },
    { icon: Users, value: '500+', label: 'Clients Worldwide', desc: 'Trusted by SMEs to Fortune 500' },
    { icon: Globe, value: '30+', label: 'Countries Reached', desc: 'Global delivery, local expertise' },
    { icon: TrendingUp, value: '99.9%', label: 'Uptime Guarantee', desc: 'Mission-critical reliability' },
];

export default function WhoWeAre() {
    const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.1 });
    const { ref: imageRef, isVisible: imageVisible } = useScrollReveal({ threshold: 0.1 });
    const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.1 });

    return (
        <section id="about" className="bg-white section-padding overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Section Label */}
                <div
                    ref={sectionRef as React.RefObject<HTMLDivElement>}
                    className={`mb-16 ${sectionVisible ? 'reveal-visible' : 'reveal-hidden'}`}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-0.5 bg-hitcs-accent" />
                        <span className="text-hitcs-accent text-xs font-semibold tracking-[0.2em] uppercase">
                            Who We Are
                        </span>
                    </div>
                </div>

                {/* Main Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
                    {/* Image Side */}
                    <div
                        ref={imageRef as React.RefObject<HTMLDivElement>}
                        className={`relative ${imageVisible ? 'reveal-visible-x' : 'reveal-hidden-left'}`}
                        style={{ transition: 'opacity 0.8s ease, transform 0.8s ease' }}
                    >
                        {/* Main image */}
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-hitcs-accent/30 z-0" />
                            <div className="relative z-10 overflow-hidden">
                                <img
                                    src="https://mysterious-gold-ukj-draft.caffeine.xyz/assets/generated/whoweare-bg.dim_960x720.png?w=960&h=720&fit=crop"
                                    alt="HITCS — Who We Are"
                                    className="w-full h-auto object-cover"
                                    style={{ maxHeight: '520px', objectFit: 'cover' }}
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-hitcs-blue/40 to-transparent" />
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-6 -right-6 bg-hitcs-blue text-white p-6 z-20 shadow-blue">
                                <div className="text-3xl font-black tracking-tight">15+</div>
                                <div className="text-xs font-medium text-white/80 tracking-wide mt-1">
                                    Years of<br />Excellence
                                </div>
                            </div>
                        </div>

                        {/* Decorative block */}
                        <div className="absolute top-8 -right-8 w-16 h-16 bg-hitcs-accent/20 hidden xl:block" />
                    </div>

                    {/* Content Side */}
                    <div
                        ref={contentRef as React.RefObject<HTMLDivElement>}
                        className={`${contentVisible ? 'reveal-visible-x' : 'reveal-hidden-right'}`}
                        style={{ transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s' }}
                    >
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-hitcs-black tracking-tighter leading-[1.05] mb-6">
                            Engineering the
                            <span className="text-hitcs-accent block">Future of IT.</span>
                        </h2>

                        <p className="text-base text-hitcs-gray-cool leading-relaxed mb-6">
                            HITCS is a global IT services and consulting firm headquartered to serve enterprises across
                            every industry. Since 2009, we have been the trusted technology backbone for organizations
                            that demand precision, performance, and partnership.
                        </p>
                        <p className="text-base text-hitcs-gray-cool leading-relaxed mb-10">
                            From custom software architecture to full-scale digital transformation, our certified
                            engineers and strategists deliver solutions that are not just technically excellent — they
                            are built to create lasting competitive advantage for our clients.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-px bg-hitcs-gray-mid mb-10">
                            {stats.map((stat) => (
                                <div key={stat.label} className="bg-white p-5 group hover:bg-blue-800 transition-colors duration-300">
                                    <stat.icon
                                        size={20}
                                        className="text-hitcs-accent group-hover:text-white/80 mb-3 transition-colors duration-300"
                                    />
                                    <div className="text-2xl font-black text-hitcs-black group-hover:text-white tracking-tight transition-colors duration-300">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs font-semibold text-hitcs-black group-hover:text-white/90 tracking-wide mt-0.5 transition-colors duration-300">
                                        {stat.label}
                                    </div>
                                    <div className="text-xs text-hitcs-gray-cool group-hover:text-white/60 mt-1 transition-colors duration-300">
                                        {stat.desc}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => {
                                const el = document.querySelector('#contact');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-flex items-center gap-2 bg-hitcs-blue text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-hitcs-accent transition-colors duration-300 group"
                        >
                            Partner With Us
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
