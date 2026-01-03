import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-primary text-white">
            <div className="container">
                <div className="footer-content text-center">
                    <div className="footer-info">
                        <h4 className="footer-name">Vincent Fundaro <a href="tel:5162429556" className="footer-link">(516)242-9556</a></h4>
                        <p className="footer-address">
                            <a href="https://maps.google.com/?q=11+Starlight+Lane,+Levittown,+NY+11756" target="_blank" rel="noopener noreferrer" className="footer-link">11 Starlight Lane, Levittown, NY 11756</a><br />
                            <a href="https://maps.google.com/?q=510+Drew+Street,+Brooklyn,+NY+11208" target="_blank" rel="noopener noreferrer" className="footer-link">510 Drew Street, Brooklyn, NY 11208</a>
                        </p>
                        <p className="footer-license">NY State Home Inspector License #16000066020</p>
                        <p className="footer-nachi">InterNACHI Certified Professional Home Inspector &reg;</p>
                    </div>

                    <div className="footer-legal mt-lg">
                        <p>Square One Professional Home Inspectors is licensed by the NYS Department of State. Home Inspectors may only report on readily accessible and observed conditions as outlined in Article 12 B of the Real Property Law and the regulations promulgated thereunder including the Code of Ethics and Regulations and the Standards of Practice as provided in Title 19 NYCRR Subparts 197-4 and 197-5 et seq.</p>
                        <p className="mt-xs">Home inspectors are not permitted to provide engineering or architectural services. A home inspection is a visual assessment and is not a warranty or guarantee of the home's future condition.</p>
                    </div>

                    <div className="footer-bottom mt-lg">
                        <p>&copy; {new Date().getFullYear()} Square One Professional Home Inspectors</p>
                        <p className="footer-credit mt-xs">Website by MusicPane Media</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
