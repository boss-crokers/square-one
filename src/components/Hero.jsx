import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';
import cmiBadge from '../assets/certified_master_inspector_v2.png';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <img src={heroBg} alt="Modern home exterior" />
                <div className="hero-overlay"></div>
            </div>
            <img src={cmiBadge} alt="Certified Master Inspector" className="hero-cmi-badge" />

            <div className="container hero-content">
                <h1 className="hero-title">
                    Secure Your <span className="text-accent">Peace of Mind</span>
                </h1>
                <p className="hero-subtitle">
                    Professional, licensed, and thorough home inspection services in New York & Long Island.
                    Don't buy without Square One.
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
