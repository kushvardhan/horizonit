import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/About/AboutPage';
import Footer from './components/Footer';
import ClientsPage from './pages/ClientPage';
import ContactPage from './pages/ContactPage';
import CareerPage from './pages/CareerPage';

function App() {
    return (
        <div className="min-h-screen bg-white text-hitcs-black font-inter overflow-x-hidden">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/clients" element={<ClientsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/careers" element={<CareerPage />} />
                
                <Route path="*" element={<HomePage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;