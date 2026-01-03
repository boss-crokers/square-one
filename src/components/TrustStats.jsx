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
        <section className="trust-stats bg-white">
            <div className="container">
                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-number">
                            <StatCounter end={15} suffix="+" />
                        </span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">
                            <StatCounter end={2000} suffix="+" />
                        </span>
                        <span className="stat-label">Inspections Done</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number" style={{ color: '#f59e0b' }}>
                            5.0
                        </span>
                        <span className="stat-label">Google Rating</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">
                            <StatCounter end={100} suffix="%" />
                        </span>
                        <span className="stat-label">Client Focus</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustStats;
