import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'About', to: '/about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
                    scrolled
                        ? 'bg-white shadow-[0_2px_24px_rgba(11,61,145,0.10)] border-b border-hitcs-gray-mid'
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="flex items-center justify-between h-18 md:h-20">
                        {/* Logo */}
                        <a
                            href="#"
                            className="flex items-center gap-2 group"
                            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        >
                            <img src="/new_hitcsLogo.png" alt="HITCS Logo" className="h-8 md:h-10" />
                        </a>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) =>
                                link.to ? (
                                    <NavLink
                                        key={link.label}
                                        to={link.to}
                                        className={({ isActive }) =>
                                            `relative text-sm font-medium tracking-wide transition-colors duration-200 group ${
                                                scrolled
                                                    ? 'text-hitcs-black hover:text-hitcs-accent'
                                                    : 'text-white/90 hover:text-white'
                                            } ${isActive ? 'font-black' : ''}`
                                        }
                                    >
                                        {link.label}
                                        <span
                                            className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                                                scrolled ? 'bg-hitcs-accent' : 'bg-white'
                                            }`}
                                        />
                                    </NavLink>
                                ) : (
                                    <button
                                        key={link.label}
                                        onClick={() => handleNavClick(link.href!)}
                                        className={`relative text-sm font-medium tracking-wide transition-colors duration-200 group ${
                                            scrolled
                                                ? 'text-hitcs-black hover:text-hitcs-accent'
                                                : 'text-white/90 hover:text-white'
                                        }`}
                                    >
                                        {link.label}
                                        <span
                                            className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                                                scrolled ? 'bg-hitcs-accent' : 'bg-white'
                                            }`}
                                        />
                                    </button>
                                )
                            )}
                        </div>

                        {/* CTA + Hamburger */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => handleNavClick('#contact')}
                                className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 ${
                                    scrolled
                                        ? 'bg-hitcs-blue text-white hover:bg-hitcs-accent shadow-blue'
                                        : 'bg-white text-hitcs-blue hover:bg-hitcs-accent hover:text-white'
                                }`}
                            >
                                Get Started
                            </button>
                            <button
                                className={`md:hidden p-2 transition-colors duration-200 ${
                                    scrolled ? 'text-hitcs-black' : 'text-white'
                                }`}
                                onClick={() => setMobileOpen(!mobileOpen)}
                                aria-label="Toggle menu"
                            >
                                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div
                        className="absolute inset-0 bg-hitcs-black/60 backdrop-blur-sm"
                        onClick={() => setMobileOpen(false)}
                    />
                    <div className="absolute top-0 right-0 w-72 h-full bg-white shadow-2xl animate-slide-down flex flex-col">
                        <div className="flex items-center justify-between px-6 h-20 border-b border-hitcs-gray-mid">
                            <span className="text-xl font-black tracking-tighter">
                                <span className="text-hitcs-blue">HIT</span>
                                <span className="text-hitcs-accent">CS</span>
                            </span>
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="p-2 text-hitcs-black hover:text-hitcs-accent transition-colors"
                            >
                                <X size={22} />
                            </button>
                        </div>
                        <nav className="flex flex-col px-6 py-8 gap-1 flex-1">
                            {navLinks.map((link, i) =>
                                link.to ? (
                                    <NavLink
                                        key={link.label}
                                        to={link.to}
                                        onClick={() => setMobileOpen(false)}
                                        className="text-left text-base font-medium text-hitcs-black hover:text-hitcs-accent hover:pl-2 transition-all duration-200 py-3 border-b border-hitcs-gray-light"
                                        style={{ animationDelay: `${i * 60}ms` }}
                                    >
                                        {link.label}
                                    </NavLink>
                                ) : (
                                    <button
                                        key={link.label}
                                        onClick={() => { handleNavClick(link.href!); setMobileOpen(false); }}
                                        className="text-left text-base font-medium text-hitcs-black hover:text-hitcs-accent hover:pl-2 transition-all duration-200 py-3 border-b border-hitcs-gray-light"
                                        style={{ animationDelay: `${i * 60}ms` }}
                                    >
                                        {link.label}
                                    </button>
                                )
                            )}
                        </nav>
                        <div className="px-6 pb-8">
                            <button
                                onClick={() => handleNavClick('#contact')}
                                className="w-full bg-hitcs-blue text-white py-3 text-sm font-semibold tracking-wide hover:bg-hitcs-accent transition-colors duration-300"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
