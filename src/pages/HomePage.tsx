import HeroSlider from '../components/HeroSlider';
import WhoWeAre from '../components/WhoWeAre';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import ClientLogoMarquee from '../components/ClientLogoMarquee';
import FeaturedProjects from '../components/FeaturedProjects';
import BusinessProcess from '../components/BusinessProcess';
import DataImpact from '../components/DataImpact';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <>
            <HeroSlider />
            <WhoWeAre />
            <Services />
            <WhyChooseUs />
            <ClientLogoMarquee />
            <FeaturedProjects />
            <BusinessProcess />
            <DataImpact />
            <Contact />
            <Footer />
        </>
    );
}
