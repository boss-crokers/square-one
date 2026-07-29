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
            label: "InterNACHI Certified Master Inspector profile",
            url: "https://www.nachi.org/certified-inspectors/vincent-fundaro-nys-16000066020-41515",
            src: cmiLogoV2,
            className: "cmi-logo"
        },
        {
            label: "The New York Times feature article: Home Inspectors on Their Weirdest Discoveries",
            url: "https://www.nytimes.com/2017/03/24/realestate/home-inspectors-on-their-weirdest-discoveries.html",
            src: nytLogo
        },
        {
            label: "Square One 5-star reviews on Yelp",
            url: "https://www.yelp.com/biz/square-one-professional-home-inspectors-levittown",
            src: yelpLogo
        },
        {
            label: "InterNACHI Certified Electrical Inspector verification page",
            url: "https://www.nachi.org/verify",
            src: electricalLogo
        },
        {
            label: "InterNACHI Honor Guarantee details",
            url: "https://www.nachi.org/honor.htm",
            src: honorLogo
        },
        {
            label: "Structure and Foundation Inspector Certification verification page",
            url: "https://www.nachi.org/verify",
            src: structureLogo
        },
        {
            label: "Square One Chamber of Commerce member page",
            url: "https://www.chamberofcommerce.com/business-directory/new-york/levittown/home-inspector/2034328730-square-one-professional-home-inspectors-inc?source=memberwebsite",
            src: "https://coc.codes/images/badge/2034328730",
            id: "COCBadgeURL",
            imgId: "COCBadgeIMG",
            target: "_tab",
            className: "coc-badge"
        }
    ];

    return (
        <section className="accreditations-section">
            <div className="accreditations-container">
                {items.map((item, index) => (
                    <a
                        key={index}
                        id={item.id}
                        href={item.url}
                        className={`accreditation-item ${item.className || ''}`}
                        target={item.target || "_blank"}
                        rel="noopener noreferrer"
                    >
                        <img 
                            id={item.imgId}
                            src={item.src} 
                            alt={item.label} 
                            className="accreditation-img" 
                            width="150" 
                            height="150" 
                            loading="lazy" 
                        />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Accreditations;
