import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-primary text-white">
            <div className="container">
                <div className="footer-content text-center">
                    <div className="footer-info">
                        <h3 className="footer-name">Vincent Fundaro <a href="tel:5162429556" className="footer-link">(516)242-9556</a></h3>
                        <p className="footer-address">
                            <a href="https://maps.google.com/?q=11+Starlight+Lane,+Levittown,+NY+11756" target="_blank" rel="noopener noreferrer" className="footer-link">11 Starlight Lane, Levittown, NY 11756</a><br />
                            <a href="https://maps.google.com/?q=510+Drew+Street,+Brooklyn,+NY+11208" target="_blank" rel="noopener noreferrer" className="footer-link">510 Drew Street, Brooklyn, NY 11208</a>
                        </p>
                        <p className="footer-license">NY State Home Inspector License #16000066020</p>
                        <p className="footer-nachi">InterNACHI Certified Professional Home Inspector &reg;</p>
                    </div>

                    <nav className="footer-pillar-nav" aria-label="Footer">
                        <ul className="footer-nav-list">
                            <li><Link to="/" className="footer-link">Home</Link></li>
                            <li><Link to="/services/home-inspection-long-island" className="footer-link">Complete Home Inspection Guide</Link></li>
                            <li><Link to="/services/termite-inspection-long-island" className="footer-link">Termite &amp; WDI Inspection</Link></li>
                            <li><Link to="/services/radon-testing-long-island" className="footer-link">Radon Testing Long Island</Link></li>
                            <li><Link to="/areas-served/nassau-county" className="footer-link">Nassau County</Link></li>
                            <li><Link to="/areas-served/suffolk-county" className="footer-link">Suffolk County</Link></li>
                            <li><Link to="/areas-served/nyc-queens-brooklyn" className="footer-link">Queens &amp; Brooklyn</Link></li>
                            <li><Link to="/blog" className="footer-link">Inspection Blog</Link></li>
                        </ul>
                    </nav>

                    <div className="footer-legal mt-lg">
                        <p>Square One Professional Home Inspectors is licensed by the NYS Department of State. Home Inspectors may only report on readily accessible and observed conditions as outlined in Article 12 B of the Real Property Law and the regulations promulgated thereunder including the Code of Ethics and Regulations and the Standards of Practice as provided in Title 19 NYCRR Subparts 197-4 and 197-5 et seq.</p>
                        <p className="mt-xs">Home inspectors are not permitted to provide engineering or architectural services. A home inspection is a visual assessment and is not a warranty or guarantee of the home's future condition.</p>
                    </div>

                    <div className="footer-bottom mt-lg">
                        <p>&copy; {new Date().getFullYear()} <Link to="/" className="footer-link">Square One Professional Home Inspectors</Link></p>
                        <p className="footer-credit mt-xs">
                            <a
                                href="https://musicpanemedia.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-credit-link"
                            >
                                Website by MusicPane Media
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
