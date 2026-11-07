import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import InteractiveHouse from './components/InteractiveHouse';
import MaintenanceResources from './components/MaintenanceResources';
import BlogPreview from './components/BlogPreview';
import About from './components/About';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import ServiceLocations from './components/ServiceLocations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Accreditations from './components/Accreditations';
import ScrollReveal from './components/ScrollReveal';
import TrustStats from './components/TrustStats';
import MobileFloatingCTA from './components/MobileFloatingCTA';
import BackToTop from './components/BackToTop';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import SEOHead from './components/SEOHead';

import HomeInspectionPillar from './pages/HomeInspectionPillar';
import TermiteInspectionCluster from './pages/TermiteInspectionCluster';
import RadonTestingCluster from './pages/RadonTestingCluster';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';

const HomePage = () => {
    return (
        <div className="app">
            <SEOHead
                title="Best Home Inspector Long Island & NY | Square One Home Inspection"
                description="Professional, licensed home inspection services in Long Island, NY. Square One offers expert inspections in Nassau, Suffolk, Queens & Brooklyn. Same-day reports & certified master inspectors."
                canonicalPath="/"
            />
            <Header />
            <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
                <Hero />

                <TrustStats />

                <ScrollReveal animation="fade-up">
                    <Services />
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={100}>
                    <InteractiveHouse />
                </ScrollReveal>

                <ScrollReveal animation="fade-up">
                    <MaintenanceResources />
                </ScrollReveal>

                <ScrollReveal animation="fade-up">
                    <BlogPreview />
                </ScrollReveal>

                <ScrollReveal animation="fade-up">
                    <About />
                </ScrollReveal>

                <ScrollReveal animation="fade-up">
                    <FAQ />
                </ScrollReveal>

                <ScrollReveal animation="fade-up">
                    <Testimonials />
                </ScrollReveal>

                <ScrollReveal animation="fade-up">
                    <ServiceLocations />
                </ScrollReveal>

                <ScrollReveal animation="fade-up">
                    <Contact />
                </ScrollReveal>

                <ScrollReveal animation="fade-up">
                    <Accreditations />
                </ScrollReveal>
            </main>
            <Footer />
            <MobileFloatingCTA />
            <BackToTop />
        </div>
    );
};

export const AppRoutes = () => (
    <>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/index.html" element={<HomePage />} />
            <Route path="/services/home-inspection-long-island" element={<HomeInspectionPillar />} />
            <Route path="/services/termite-inspection-long-island" element={<TermiteInspectionCluster />} />
            <Route path="/services/radon-testing-long-island" element={<RadonTestingCluster />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>
);

function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;
