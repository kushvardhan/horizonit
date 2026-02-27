import React from 'react';
import WhoWeAre from '../components/WhoWeAre';
import Footer from '../components/Footer';

export default function AboutPage() {
    return (
        <main className="bg-white">
            <header className="pt-24 pb-16 bg-hitcs-accent text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
                        About HITCS
                    </h1>
                    <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                        Founded in 2009, HITCS is a global IT services and consulting firm
                        dedicated to helping enterprise organizations solve their most
                        complex technology challenges. With delivery centers across 30+ countries
                        and a team of certified experts, we combine global scale with local agility.
                    </p>
                </div>
            </header>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <WhoWeAre />
                </div>
            </section>

            <Footer />
        </main>
    );
}
