import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

export default function Contact() {
    const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.1 });
    const { ref: formRef, isVisible: formVisible } = useScrollReveal({ threshold: 0.1 });
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="contact" className="bg-white section-padding">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Header */}
                <div
                    ref={titleRef as React.RefObject<HTMLDivElement>}
                    className={`mb-16 ${titleVisible ? 'reveal-visible' : 'reveal-hidden'}`}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-0.5 bg-hitcs-accent" />
                        <span className="text-hitcs-accent text-xs font-semibold tracking-[0.2em] uppercase">
                            Get In Touch
                        </span>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-hitcs-black tracking-tighter leading-[1.05] max-w-2xl">
                            Start Your
                            <span className="text-hitcs-accent"> Project</span>
                        </h2>
                        <p className="text-base text-hitcs-gray-cool max-w-sm leading-relaxed">
                            Tell us about your challenge. Our team will respond within 24 hours with a tailored approach.
                        </p>
                    </div>
                </div>

                <div
                    ref={formRef as React.RefObject<HTMLDivElement>}
                    className={`grid grid-cols-1 lg:grid-cols-3 gap-px bg-hitcs-gray-mid ${
                        formVisible ? 'reveal-visible' : 'reveal-hidden'
                    }`}
                >
                    {/* Contact Info */}
                    <div className="bg-hitcs-blue p-10 lg:p-12 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                                Let's Build Something
                            </h3>
                            <p className="text-sm text-white/70 leading-relaxed mb-10">
                                Whether you're starting a new project or scaling an existing system, our team is ready to help.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Mail size={16} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-white/50 font-medium tracking-wide mb-1">Email</div>
                                        <div className="text-sm text-white font-medium">hello@hitcs.com</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Phone size={16} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-white/50 font-medium tracking-wide mb-1">Phone</div>
                                        <div className="text-sm text-white font-medium">+1 (800) HITCS-IT</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <MapPin size={16} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-white/50 font-medium tracking-wide mb-1">Headquarters</div>
                                        <div className="text-sm text-white font-medium">Global Delivery Centers<br />30+ Countries</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-white/10">
                            <div className="text-xs text-white/50 font-medium tracking-wide mb-3">Response Time</div>
                            <div className="text-2xl font-black text-white">{'< 24 Hours'}</div>
                            <div className="text-xs text-white/50 mt-1">Guaranteed business day response</div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2 bg-white p-10 lg:p-12">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center h-full text-center py-16">
                                <div className="w-16 h-16 bg-hitcs-gray-light flex items-center justify-center mb-6">
                                    <CheckCircle size={32} className="text-hitcs-accent" />
                                </div>
                                <h3 className="text-2xl font-black text-hitcs-black tracking-tight mb-3">
                                    Message Received
                                </h3>
                                <p className="text-hitcs-gray-cool text-sm max-w-sm leading-relaxed">
                                    Thank you for reaching out. A member of our team will contact you within 24 business hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-semibold text-hitcs-black tracking-wide uppercase mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Smith"
                                            className="w-full border border-hitcs-gray-mid bg-white px-4 py-3 text-sm text-hitcs-black placeholder:text-hitcs-gray-cool focus:outline-none focus:border-hitcs-accent transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-hitcs-black tracking-wide uppercase mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@company.com"
                                            className="w-full border border-hitcs-gray-mid bg-white px-4 py-3 text-sm text-hitcs-black placeholder:text-hitcs-gray-cool focus:outline-none focus:border-hitcs-accent transition-colors duration-200"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-hitcs-black tracking-wide uppercase mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-hitcs-gray-mid bg-white px-4 py-3 text-sm text-hitcs-black focus:outline-none focus:border-hitcs-accent transition-colors duration-200 appearance-none"
                                    >
                                        <option value="">Select a service area</option>
                                        <option value="software">Software Solutions</option>
                                        <option value="web">Web Solutions</option>
                                        <option value="cms">CMS Development</option>
                                        <option value="ecommerce">E-Commerce</option>
                                        <option value="social">Social Media Services</option>
                                        <option value="seo">SEO</option>
                                        <option value="mobile">Mobile App Development</option>
                                        <option value="hosting">Web Hosting</option>
                                        <option value="other">General Inquiry</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-hitcs-black tracking-wide uppercase mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell us about your project, timeline, and goals..."
                                        className="w-full border border-hitcs-gray-mid bg-white px-4 py-3 text-sm text-hitcs-black placeholder:text-hitcs-gray-cool focus:outline-none focus:border-hitcs-accent transition-colors duration-200 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-2 bg-hitcs-blue text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-hitcs-accent transition-colors duration-300 group w-full sm:w-auto justify-center"
                                >
                                    Send Message
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
