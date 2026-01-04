import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Home, Droplets, Wind, Search, FlaskConical, ShieldCheck, X, Activity, ThermometerSun } from 'lucide-react';
import './Services.css';

import imgHome from '../assets/service-home.png';
import imgPlumbing from '../assets/service-plumbing.png';
import imgHvac from '../assets/service-hvac.png';
import imgMold from '../assets/service-mold.png';
import imgWater from '../assets/service-water.png';
import imgTermite from '../assets/service-termite.png';
import imgRadon from '../assets/service-radon.png';
import imgThermal from '../assets/service-thermal.png';

const services = [
    {
        icon: <Home size={40} />,
        title: 'Structural Inspection',
        description: 'Comprehensive evaluation of the building structure, ensuring everything from foundation to roof is sound.',
        fullText: "Before buying a building, it is natural to carry out a thorough inspection of the building and all other aspects of the building, because you will pay a lot of money and you would like it to be the best. Most buildings look beautiful only to deceive people into believing they are getting the best. Cracks in beams are the most common things that often go unnoticed unless you look for the right places in detail. An experienced professional would be able to spot those mistakes that may seem like a flaw in the paint line.",
        image: imgHome
    },
    {
        icon: <Droplets size={40} />,
        title: 'Plumbing Inspection',
        description: 'Check of supply lines, drains, vents, and water heating equipment to prevent leaks and damage.',
        fullText: "One basic thing needed in the house continuously is water. It is very essential and is required constantly throughout the day and night. The use and need of water in the house cannot be overemphasized. This is why home inspectors do not take the issue of checking and ensuring that the plumbing system is in good working condition lightly. Checking that there is no leakage as this can bring great discomfort to the house users. We inspect the functionality of incoming and outgoing water systems.",
        image: imgPlumbing
    },
    {
        icon: <Wind size={40} />,
        title: 'HVAC Inspection',
        description: 'Thorough assessment of heating, ventilation, and air conditioning systems for year-round comfort.',
        fullText: "One of the worst things that can happen to you is being stuck during winter in a house where the heat supply source or furnace is not in good working condition. The reverse case is also true. Buying a house whose air conditioning or furnace and heating supply source are faulty is disastrous. This is why HVAC inspection is very vital and Square One Home Inspectors covers this area squarely. We access the air conditioning, ductwork, furnace, filtration, and condensation units just to ensure that it is perfect enough to maintain the required temperature of your home.",
        image: imgHvac
    },
    {
        icon: <Activity size={40} />, /* Re-using Wind or generic for Radon if no specific icon, maybe Activity? using Wind for air quality aspect */
        title: 'Radon Testing',
        description: 'Testing for invisible, odorless radon gas to ensure your home is safe from this health hazard.',
        fullText: "I’m buying a house. Should I have it tested for radon? The EPA recommends that all houses, regardless of what radon zone the house is located in, be tested for radon during point of sale. Radon is a colorless, tasteless and odorless gas that causes lung cancer. Radon can build up to dangerous levels inside homes, schools and other buildings. Exposure to radon is the second leading cause of lung cancer in the United States, after smoking.",
        image: imgRadon
    },
    {
        icon: <Search size={40} />,
        title: 'Mold Testing',
        description: 'Identification of potential mold growth and moisture issues affecting air quality.',
        fullText: "Mold can be a silent health hazard in any home. Our comprehensive mold testing identifies potential growth areas and moisture sources that could lead to infestation. We use advanced sampling techniques to ensure the air quality in your potential new home is safe for you and your family.",
        image: imgMold
    },
    {
        icon: <FlaskConical size={40} />,
        title: 'Water Testing',
        description: 'Analysis of water quality to ensure safety from contaminants.',
        fullText: "Water quality is crucial for your health. Our water testing services analyze for contaminants, bacteria, lead, and other harmful substances. Whether you are on city water or a private well, knowing your water is clean and safe is a fundamental part of our inspection process.",
        image: imgWater
    },
    {
        icon: <ShieldCheck size={40} />,
        title: 'Insect Inspection',
        description: 'Detection of wood-destroying insects that can compromise structural integrity.',
        fullText: "Don’t let bugs ruin your summer. Now that it’s warmer out, these little critters are going to be coming out of the woodwork and your home is the perfect place to make a nest. With an inspection from Square One Professional Home Inspectors, you could save thousands of dollars in repairs with preventative maintenance inspections. We check for termites, carpenter ants, and other wood-destroying organisms.",
        image: imgTermite
    },
    {
        icon: <ThermometerSun size={40} />,
        title: 'Thermal Imaging',
        description: 'Advanced infrared technology to detect hidden moisture, missing insulation, and electrical hotspots.',
        fullText: "See what the naked eye cannot. Our thermal imaging services use state-of-the-art infrared cameras to detect temperature variations behind walls and ceilings. This advanced technology helps us identify hidden water leaks, missing insulation, electrical overheating, and energy loss areas that traditional inspection methods might miss. It provides a deeper level of insight into the home's condition, giving you greater peace of mind.",
        image: imgThermal
    },
];

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    // Handle Escape key to close modal
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setSelectedService(null);
            }
        };

        if (selectedService) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto'; // or 'unset'
        }

        // Cleanup function
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto';
        };
    }, [selectedService]);

    return (
        <section className="section bg-white" id="services">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="text-primary">Our Services</h2>
                    <p className="text-light section-subtitle">
                        Click on any service below to learn more about how we protect your investment.
                    </p>
                </div>

                <div className="services-grid grid">
                    {services.map((service, index) => (
                        <div
                            className="service-card cursor-pointer"
                            key={index}
                            onClick={() => setSelectedService(service)}
                            tabIndex={0}
                            role="button"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setSelectedService(service);
                                }
                            }}
                        >
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <span className="learn-more text-accent mt-sm block font-medium text-sm">Read More →</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay - Portaled to body to avoid z-index/transform issues from parents */}
            {selectedService && createPortal(
                <div
                    className="modal-overlay"
                    onClick={() => setSelectedService(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedService(null)} aria-label="Close modal">
                            <X size={24} />
                        </button>
                        <div className="modal-body grid">
                            <div className="modal-image">
                                <img src={selectedService.image} alt={selectedService.title} loading="lazy" />
                            </div>
                            <div className="modal-text">
                                <div className="modal-icon-wrapper mb-sm text-accent">
                                    {selectedService.icon}
                                </div>
                                <h3 id="modal-title" className="text-primary mb-sm">{selectedService.title}</h3>
                                <p className="text-light">{selectedService.fullText}</p>
                                <a href="#contact" className="btn btn-primary mt-md" onClick={() => setSelectedService(null)}>
                                    Schedule This Inspection
                                </a>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
};

export default Services;
