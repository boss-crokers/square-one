import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const GoogleLogo = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.21-1.19-.63z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const reviews = [
    {
        id: 1,
        name: "John & Sarah M.",
        location: "Massapequa, NY",
        text: "Vinny was incredibly thorough and explained everything clearly. He saved us from buying a money pit! The report was easy to read and delivered the same night.",
        stars: 5,
        time: "2 weeks ago"
    },
    {
        id: 2,
        name: "Michael R.",
        location: "Queens, NY",
        text: "Professional, punctual, and detailed. I've used Square One for two properties now and wouldn't trust anyone else. Highly recommended.",
        stars: 5,
        time: "1 month ago"
    },
    {
        id: 3,
        name: "Jessica T.",
        location: "Brooklyn, NY",
        text: "As a first-time home buyer, I was nervous. Vinny made the process smooth and answered all my questions. Great service!",
        stars: 5,
        time: "3 days ago"
    },
    {
        id: 4,
        name: "David K.",
        location: "Levittown, NY",
        text: "Excellent service. Vinny arrived early and checked every nook and cranny. His report was comprehensive and helped us negotiate repairs.",
        stars: 5,
        time: "1 week ago"
    },
    {
        id: 5,
        name: "Emily W.",
        location: "Hicksville, NY",
        text: "I was impressed by the level of detail in the inspection. Vinny took the time to walk me through the major findings. Very knowledgeable.",
        stars: 5,
        time: "3 weeks ago"
    },
    {
        id: 6,
        name: "Robert P.",
        location: "Wantagh, NY",
        text: "Great experience with Square One. The report was detailed with photos and delivered promptly. Will definitely recommend to friends.",
        stars: 5,
        time: "4 days ago"
    },
    {
        id: 7,
        name: "Lisa M.",
        location: "Farmingdale, NY",
        text: "Vinny is the best! He found issues that other inspectors might have missed. He's honest and trustworthy. Thank you for your help!",
        stars: 5,
        time: "1 month ago"
    },
    {
        id: 8,
        name: "Chris B.",
        location: "Merrick, NY",
        text: "Very professional and thorough inspection. The report was easy to understand. I feel much more confident about my home purchase now.",
        stars: 5,
        time: "2 days ago"
    },
    {
        id: 9,
        name: "Amanda S.",
        location: "Bellmore, NY",
        text: "Highly recommend Vinny! He was patient with all our questions and provided a very detailed report. Great value for the service.",
        stars: 5,
        time: "5 days ago"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 3) % reviews.length);
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    const displayedReviews = [
        reviews[currentIndex],
        reviews[(currentIndex + 1) % reviews.length],
        reviews[(currentIndex + 2) % reviews.length]
    ];

    return (
        <section className="section bg-background" id="reviews">
            <div className="container">
                <div className="google-header-wrapper text-center mb-lg">
                    <div className="google-badge">
                        <div className="google-logo-wrapper">
                            <GoogleLogo />
                        </div>
                        <div className="google-rating-info">
                            <span className="rating-score">5.0</span>
                            <div className="stars flex gap-xs">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                                ))}
                            </div>
                            <span className="review-count">Based on 150+ reviews</span>
                        </div>
                    </div>
                    <h2 className="text-primary mt-sm">Client Reviews</h2>
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Square+One+Professional+Home+Inspectors+Levittown+NY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline mt-sm"
                    >
                        Write a Review
                    </a>
                </div>

                <div className="reviews-grid grid">
                    {displayedReviews.map((review) => (
                        <div className="google-review-card" key={review.id}>
                            <div className="review-header mb-sm">
                                <div className="reviewer-avatar">
                                    {review.name.charAt(0)}
                                </div>
                                <div className="reviewer-info">
                                    <strong>{review.name}</strong>
                                    <span className="review-time">{review.time}</span>
                                </div>
                                <div className="google-icon-small">
                                    <GoogleLogo />
                                </div>
                            </div>
                            <div className="review-stars flex gap-xs mb-sm">
                                {[...Array(review.stars)].map((_, i) => (
                                    <Star key={i} size={14} fill="#FFD700" color="#FFD700" />
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
