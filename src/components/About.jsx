import { CheckCircle } from 'lucide-react';
import vinnyImg from '../assets/vinny.jpg';
import './About.css';

const About = () => {
    return (
        <section className="section bg-primary text-white" id="about">
            <div className="container">
                <div className="about-content grid">
                    <div className="about-image-wrapper">
                        {/* About Image */}
                        <img src={vinnyImg} alt="Vinny - Professional Inspector" className="about-image" />
                    </div>

                    <div className="about-text">
                        <h2 className="text-white">Meet Your Inspector</h2>
                        <h3 className="text-accent mb-md">Vinny - Square One Professional Home Inspectors</h3>

                        <p className="mb-md">
                            Vinny Fundaro combines the credentials of an InterNACHI® Certified Master Home Inspector® with the technical background of an NYC Licensed Operating Engineer. His inspections go beyond the surface, focusing on structural integrity, mechanical systems, and long-term performance. Clients choose Vinny for expertise, precision, and inspections they can trust.
                        </p>

                        <ul className="about-features">
                            <li className="flex items-center gap-sm">
                                <CheckCircle className="text-accent" size={20} />
                                <span>Licensed & Insured NY State Inspector</span>
                            </li>
                            <li className="flex items-center gap-sm">
                                <CheckCircle className="text-accent" size={20} />
                                <span>Detailed Reports Delivered Same Day</span>
                            </li>
                            <li className="flex items-center gap-sm">
                                <CheckCircle className="text-accent" size={20} />
                                <span>Weekend Appointments Available</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
