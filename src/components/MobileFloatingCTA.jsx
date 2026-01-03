import { Phone, Calendar } from 'lucide-react';
import './MobileFloatingCTA.css';

const MobileFloatingCTA = () => {
    return (
        <div className="mobile-floating-cta">
            <a href="tel:5162429556" className="cta-button call-btn">
                <Phone size={20} />
                <span>Call Now</span>
            </a>
            <a href="#contact" className="cta-button schedule-btn">
                <Calendar size={20} />
                <span>Schedule</span>
            </a>
        </div>
    );
};

export default MobileFloatingCTA;
