import { useEffect, useState, useRef } from 'react';
import './TrustStats.css';

const StatCounter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return <span ref={countRef}>{count}{suffix}</span>;
};

const TrustStats = () => {
    return (
        <div className="trust-stats bg-white">
            <div className="container">
                <div className="stats-grid">
                    <div className="stat-item" aria-label="15+ Years Experience">
                        <span className="stat-number" aria-hidden="true">
                            <StatCounter end={15} suffix="+" />
                        </span>
                        <span className="stat-label" aria-hidden="true">Years Experience</span>
                    </div>
                    <div className="stat-item" aria-label="2000+ Inspections Done">
                        <span className="stat-number" aria-hidden="true">
                            <StatCounter end={2000} suffix="+" />
                        </span>
                        <span className="stat-label" aria-hidden="true">Inspections Done</span>
                    </div>
                    <div className="stat-item" aria-label="5.0 Google Rating">
                        <span className="stat-number" style={{ color: '#b45309' }} aria-hidden="true">
                            5.0
                        </span>
                        <span className="stat-label" aria-hidden="true">Google Rating</span>
                    </div>
                    <div className="stat-item" aria-label="100% Client Focus">
                        <span className="stat-number" aria-hidden="true">
                            <StatCounter end={100} suffix="%" />
                        </span>
                        <span className="stat-label" aria-hidden="true">Client Focus</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustStats;
