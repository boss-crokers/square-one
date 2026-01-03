import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import TopBar from './TopBar';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            {/* Top Bar - hidden when scrolled/compact */}
            <div className={`header-top-bar ${isScrolled ? 'hidden' : ''}`}>
                <TopBar />
            </div>

            <div className="container header-content">
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt="Square One Professional Home Inspectors" className="logo-img" />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="desktop-nav hide-on-mobile">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="nav-link">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions hide-on-mobile">
                    <a href="tel:5162429556" className="btn btn-primary flex items-center gap-sm">
                        <Phone size={18} />
                        <span>(516) 242-9556</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation Overlay */}
                <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                    <nav>
                        <ul className="mobile-nav-list">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} onClick={() => setIsMenuOpen(false)}>{link.name}</a>
                                </li>
                            ))}
                            <li className="mobile-cta">
                                <a href="tel:5162429556" className="btn btn-primary">
                                    <Phone size={18} style={{ marginRight: '8px' }} />
                                    Call Now
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
