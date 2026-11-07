import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import TopBar from './TopBar';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/' || location.pathname === '/index.html';

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
        { name: 'Home', to: isHomePage ? '#home' : '/', isRoute: !isHomePage },
        { name: 'Services', to: isHomePage ? '#services' : '/#services', isRoute: !isHomePage },
        { name: 'Inspection Guide', to: '/services/home-inspection-long-island', isRoute: true },
        { name: 'Blog', to: '/blog', isRoute: true },
        { name: 'About', to: isHomePage ? '#about' : '/#about', isRoute: !isHomePage },
        { name: 'Reviews', to: isHomePage ? '#reviews' : '/#reviews', isRoute: !isHomePage },
        { name: 'Contact', to: '#contact', isRoute: false },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''} ${!isHomePage ? 'subpage' : ''}`}>
            {/* Top Bar - hidden when scrolled/compact */}
            <div className={`header-top-bar ${isScrolled ? 'hidden' : ''}`}>
                <TopBar />
            </div>

            <div className="container header-content">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Square One Professional Home Inspectors" className="logo-img" width="345" height="265" fetchPriority="high" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="desktop-nav hide-on-mobile" aria-label="Primary">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                {link.isRoute ? (
                                    <Link
                                        to={link.to}
                                        className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a href={link.to} className="nav-link">{link.name}</a>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions hide-on-mobile">
                    <a href="tel:5162429556" className="btn btn-primary flex items-center gap-sm">
                        <Phone size={18} aria-hidden="true" />
                        <span>(516) 242-9556</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="mobile-menu-btn"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                </button>

                {/* Mobile Navigation Overlay */}
                <div
                    className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}
                    inert={!isMenuOpen}
                >
                    <nav aria-label="Mobile">
                        <ul className="mobile-nav-list">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    {link.isRoute ? (
                                        <Link to={link.to} onClick={() => setIsMenuOpen(false)}>
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <a href={link.to} onClick={() => setIsMenuOpen(false)}>
                                            {link.name}
                                        </a>
                                    )}
                                </li>
                            ))}
                            <li className="mobile-cta">
                                <a href="tel:5162429556" className="btn btn-primary">
                                    <Phone size={18} aria-hidden="true" style={{ marginRight: '8px' }} />
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
