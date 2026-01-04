import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="section bg-white" id="contact">
            <div className="container">
                <div className="contact-wrapper grid">
                    <div className="contact-info">
                        <h2 className="text-primary">Get In Touch</h2>
                        <p className="mb-md text-light">
                            Ready to schedule your inspection or have questions? Contact us today. We're here to help you make a confident decision.
                        </p>

                        <ul className="contact-details">
                            <li>
                                <div className="icon-box"><Phone size={20} /></div>
                                <div>
                                    <h4>Phone</h4>
                                    <a href="tel:5162429556">(516) 242-9556</a>
                                </div>
                            </li>

                            <li>
                                <div className="icon-box"><MapPin size={20} /></div>
                                <div>
                                    <h4>Service Areas</h4>
                                    <p>Long Island, Queens, Brooklyn, Manhattan & Nassau County</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon-box"><Clock size={20} /></div>
                                <div>
                                    <h4>Hours</h4>
                                    <p>Mon - Sun: 8:00 AM - 8:00 PM</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="contact-form-wrapper">
                        <h3 className="text-primary mb-sm">Request a Call Back</h3>
                        <form className="contact-form" action="https://formspree.io/f/mzdzklbb" method="POST">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="tel" name="phone" placeholder="(555) 555-5555" required />
                            </div>
                            <div className="form-group">
                                <label>Service Needed</label>
                                <select name="service">
                                    <option>Home Inspection</option>
                                    <option>Commercial Inspection</option>
                                    <option>Mold Testing</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea name="message" rows="4" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary display-block width-100">Send Request</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
