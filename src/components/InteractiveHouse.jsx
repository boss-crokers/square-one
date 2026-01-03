import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import './InteractiveHouse.css';
import houseDiagram from '../assets/house-diagram.png';

const hotspots = [
    {
        id: 'roof',
        top: '15%',
        left: '50%',
        title: 'Roof & Attic',
        description: 'We inspect shingles, flashing, gutters, and ventilation to prevent leaks and ensure proper insulation.'
    },
    {
        id: 'bedroom',
        top: '35%',
        left: '30%',
        title: 'Interior Rooms',
        description: 'Checking walls, ceilings, floors, doors, and windows for structural damage and proper operation.'
    },
    {
        id: 'electrical',
        top: '35%',
        left: '70%', // Assuming logic/wiring might be visualized or just general area
        title: 'Electrical System',
        description: 'Testing outlets, panels, and wiring to ensure safety and code compliance.'
    },
    {
        id: 'living',
        top: '60%',
        left: '35%',
        title: 'Living Areas',
        description: 'Inspection of outlets, heat sources, and general structural integrity of main living spaces.'
    },
    {
        id: 'kitchen',
        top: '60%',
        left: '75%',
        title: 'Kitchen & Plumbing',
        description: 'Checking appliances, sinks, drains, and supply lines for leaks and proper function.'
    },
    {
        id: 'basement',
        top: '85%',
        left: '50%',
        title: 'Foundation & HVAC',
        description: 'Examining the foundation for cracks and inspecting the furnace, water heater, and main supports.'
    }
];

const InteractiveHouse = () => {
    const [activeHotspot, setActiveHotspot] = useState(null);

    return (
        <section className="section bg-secondary" id="process">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="text-primary">What We Inspect</h2>
                    <p className="text-light section-subtitle">
                        Interactive diagram: Click the hotspots to see exactly what we check during your inspection.
                    </p>
                </div>

                <div className="house-diagram-wrapper">
                    <div className="house-diagram-container">
                        <img src={houseDiagram} alt="House Inspection Diagram" className="house-image" />

                        {hotspots.map((spot) => (
                            <button
                                key={spot.id}
                                className={`hotspot ${activeHotspot === spot.id ? 'active' : ''}`}
                                style={{ top: spot.top, left: spot.left }}
                                onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                                aria-label={`View details for ${spot.title}`}
                                aria-expanded={activeHotspot === spot.id}
                                aria-controls={`hotspot-content-${spot.id}`}
                            >
                                <Plus size={16} />
                            </button>
                        ))}

                        {activeHotspot && (() => {
                            const spot = hotspots.find(h => h.id === activeHotspot);
                            // Simple logic: if in top half, show below. If in bottom half, show above.
                            const isTopHalf = parseInt(spot.top) < 50;
                            const style = {
                                top: spot.top,
                                left: spot.left,
                                transform: isTopHalf
                                    ? 'translate(-50%, 20px)' // Show below
                                    : 'translate(-50%, calc(-100% - 20px))' // Show above
                            };

                            return (
                                <div
                                    className={`hotspot-modal ${activeHotspot ? 'show' : ''}`}
                                    style={style}
                                    id={`hotspot-content-${spot.id}`}
                                    role="region"
                                    aria-labelledby={`hotspot-title-${spot.id}`}
                                >
                                    <div className="hotspot-content">
                                        <div className="hotspot-header">
                                            <h3 id={`hotspot-title-${spot.id}`}>{spot.title}</h3>
                                            <button
                                                className="close-btn"
                                                onClick={() => setActiveHotspot(null)}
                                                aria-label="Close details"
                                            >
                                                <X size={18} />
                                            </button>
                                        </div>
                                        <p>{spot.description}</p>
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveHouse;
