import { Facebook, Instagram, Mail } from 'lucide-react';
import { YelpIcon } from './Icons';
import './TopBar.css';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="container top-bar-content">
                <div className="social-hidden"></div> {/* Spacer to center if needed, or just justify-center */}
                <div className="social-icons">
                    <a href="https://www.yelp.com/biz/square-one-professional-home-inspectors-levittown" target="_blank" rel="noopener noreferrer" aria-label="Yelp">
                        <YelpIcon size={20} />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100012851312623" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <Facebook size={20} />
                    </a>
                    <a href="https://www.instagram.com/squareone_inspectors/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <Instagram size={20} />
                    </a>
                    <a href="mailto:squareoneinspect@aol.com" aria-label="Email">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
