import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';
import cmiBadge from '../assets/certified_master_inspector_v2.png';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <img src={heroBg} alt="Modern home exterior in Long Island" width="1920" height="1080" fetchPriority="high" />
                <div className="hero-overlay"></div>
            </div>
            <img src={cmiBadge} alt="Certified Master Inspector" className="hero-cmi-badge" width="400" height="400" loading="lazy" />

            <div className="container hero-content">
                <h1 className="hero-title">
                    Best <span className="text-accent">Home Inspector</span> Long Island & NY
                </h1>
                <p className="hero-subtitle">
                    Recognized as the <strong>best home inspection company Long Island</strong> has to offer. Hire the <strong>best home inspector Long Island</strong> trusts for professional, licensed, and thorough services across New York. Don't buy without Square One.
                </p>

                <div className="hero-actions">
                    <a href="tel:5162429556" className="btn btn-primary">
                        Schedule Inspection
                        <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                    </a>
                    <a href="#services" className="btn btn-outline-white">
                        View Services
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
