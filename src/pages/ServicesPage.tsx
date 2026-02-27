import React from 'react';
import Services from '../components/Services';
import Footer from '../components/Footer';

export default function ServicesPage() {
    return (
        <main className="bg-white">
            <header className="pt-24 pb-16 bg-hitcs-blue text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
                        Our Services
                    </h1>
                    <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                        HITCS offers a comprehensive portfolio of enterprise-grade IT
                        services designed to accelerate digital transformation, optimize
                        operations, and deliver measurable business outcomes. Each practice
                        area is backed by senior experts and built on proven methodologies
                        to ensure predictable success for our clients.
                    </p>
                </div>
            </header>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <Services />
                </div>
            </section>

            <Footer />
        </main>
    );
}
