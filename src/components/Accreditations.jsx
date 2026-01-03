import React from 'react';
import './Accreditations.css';
import nytLogo from '../assets/nyt_logo.png';
import yelpLogo from '../assets/yelp_logo.png';
import electricalLogo from '../assets/electrical_inspector.png';
import honorLogo from '../assets/honor_guarantee.png';
import structureLogo from '../assets/structure_foundation.png';
import cmiLogoV2 from '../assets/certified_master_inspector_v2.png';

const Accreditations = () => {
    console.log("Accreditations component rendering - V2");
    const items = [
        {
            label: "Certified Master Inspector",
            url: "https://www.nachi.org/certified-inspectors/vincent-fundaro-nys-16000066020-41515",
            src: cmiLogoV2,
            className: "cmi-logo"
        },
        {
            label: "The New York Times",
            url: "https://www.nytimes.com/2017/03/24/realestate/home-inspectors-on-their-weirdest-discoveries.html",
            src: nytLogo
        },
        {
            label: "Yelp Reviews",
            url: "https://www.yelp.com/biz/square-one-professional-home-inspectors-levittown",
            src: yelpLogo
        },
        {
            label: "InterNACHI Certified Electrical Inspector",
            url: "https://www.nachi.org/verify",
            src: electricalLogo
        },
        {
            label: "Honor Guarantee",
            url: "https://www.nachi.org/honor.htm",
            src: honorLogo
        },
        {
            label: "Structure & Foundation Inspector",
            url: "https://www.nachi.org/verify",
            src: structureLogo
        }
    ];

    return (
        <section className="accreditations-section">
            <div className="accreditations-container">
                {items.map((item, index) => (
                    <a
                        key={index}
                        href={item.url}
                        className={`accreditation-item ${item.className || ''}`}
                        aria-label={item.label}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={item.src} alt={item.label} className="accreditation-img" />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Accreditations;
