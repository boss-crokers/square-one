import './ServiceLocations.css';

const locations = [
    "Long Island", "Brooklyn", "Queens", "Manhattan",
    "Levittown", "Nassau County", "Suffolk County",
    "New York City", "Valley Stream", "Commack", "Jamaica",
    "Flushing", "Elmont", "Westbury", "Great Neck", "Glen Cove",
    "Long Beach", "Roosevelt", "Lynbrook", "Freeport",
    "Freshmeadows", "Forest Hills", "Parkslope", "Sheepshead Bay"
];

const ServiceLocations = () => {
    return (
        <section className="section bg-background" id="locations">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="text-primary">Areas We Serve</h2>
                    <p className="text-light section-subtitle">
                        Providing professional home inspections across New York and Long Island.
                    </p>
                </div>

                <div className="service-locations-wrapper grid-2-col">
                    <div className="locations-list-container">
                        <div className="locations-grid">
                            {locations.map((loc, index) => (
                                <a key={index} href={`#${loc.toLowerCase().replace(/\s+/g, '-')}`} className="location-link">
                                    {loc}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="map-container">
                        <iframe
                            title="Service Area Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.778648602685!2d-73.5159046845946!3d40.72290497933066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28056637372f5%3A0xe53a3d2422071068!2s11%20Starlight%20Ln%2C%20Levittown%2C%20NY%2011756!5e0!3m2!1sen!2sus!4v1622648567819!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '400px' }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceLocations;
