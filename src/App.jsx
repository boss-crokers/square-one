import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import InteractiveHouse from './components/InteractiveHouse';
import MaintenanceResources from './components/MaintenanceResources';
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

function App() {
  return (
    <div className="app">
      <Header />
      <main id="main-content">
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
    </div >
  )
}

export default App;
