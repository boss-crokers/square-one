import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    BookOpen,
    Clock,
    Calendar,
    ArrowRight,
    Layers,
    ShieldCheck,
    Activity,
    Phone
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import MobileFloatingCTA from '../components/MobileFloatingCTA';
import BackToTop from '../components/BackToTop';
import SEOHead from '../components/SEOHead';
import { blogPosts } from '../data/blogData';
import './PillarStyles.css';

const BlogIndex = () => {
    const categories = ['All', ...new Set(blogPosts.map((post) => post.category))];
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredPosts = activeCategory === 'All'
        ? blogPosts
        : blogPosts.filter((post) => post.category === activeCategory);

    return (
        <div className="pillar-page">
            <SEOHead
                title="Long Island Home Inspection Blog & Buyer Guides | Square One NY"
                description="Expert home inspection articles, checklists, and local Long Island property guides by Certified Master Inspector Vinny Fundaro. Serving Nassau, Suffolk, Queens & Brooklyn."
                canonicalPath="/blog"
            />
            <Header />

            <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
                <section className="pillar-hero">
                    <div className="container pillar-hero-inner">
                        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
                            <ol className="breadcrumb-list">
                                <li><Link to="/">Home</Link></li>
                                <li className="breadcrumb-separator" aria-hidden="true">/</li>
                                <li className="breadcrumb-current" aria-current="page">Inspection Blog &amp; Buyer Resources</li>
                            </ol>
                        </nav>

                        <div className="pillar-badge-row">
                            <span className="pillar-badge">
                                <BookOpen size={14} aria-hidden="true" />
                                Inspector Knowledge Hub
                            </span>
                            <span className="pillar-badge pillar-badge-secondary">
                                By Vinny Fundaro, CMI®
                            </span>
                        </div>

                        <h1 className="pillar-hero-title">
                            Long Island &amp; NY <span className="text-accent">Home Inspection Blog</span>
                        </h1>

                        <p className="pillar-hero-subtitle">
                            Field-tested advice, structural red flags, and local New York real estate checklists from an InterNACHI® Certified Master Inspector® and NYC Licensed Operating Engineer.
                        </p>

                        <div className="pillar-hero-actions">
                            <Link to="/services/home-inspection-long-island" className="btn btn-primary">
                                Read Our Complete Inspection Pillar Guide
                                <ArrowRight size={18} aria-hidden="true" style={{ marginLeft: '8px' }} />
                            </Link>
                            <a href="tel:5162429556" className="btn btn-outline-white">
                                <Phone size={18} aria-hidden="true" style={{ marginRight: '8px' }} />
                                Call (516) 242-9556
                            </a>
                        </div>
                    </div>
                </section>

                {/* Topic Cluster Connection Bar */}
                <div className="cluster-connection-bar">
                    <div className="container cluster-connection-inner">
                        <div className="cluster-connection-label">
                            <Layers size={18} aria-hidden="true" />
                            <span>Core Pillar &amp; Service Cluster Guides:</span>
                        </div>
                        <div className="cluster-pill-links">
                            <Link to="/services/home-inspection-long-island" className="cluster-pill-link">
                                <Layers size={15} aria-hidden="true" />
                                Complete Home Inspection Guide
                            </Link>
                            <Link to="/services/termite-inspection-long-island" className="cluster-pill-link">
                                <ShieldCheck size={15} aria-hidden="true" />
                                Termite &amp; WDI Inspection
                            </Link>
                            <Link to="/services/radon-testing-long-island" className="cluster-pill-link">
                                <Activity size={15} aria-hidden="true" />
                                Radon Testing Long Island
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Blog Listing Section */}
                <section className="section">
                    <div className="container">
                        <div className="blog-filter-bar" role="group" aria-label="Filter articles by category">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    className={`blog-filter-btn ${activeCategory === category ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(category)}
                                    aria-pressed={activeCategory === category}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className="blog-grid">
                            {filteredPosts.map((post) => (
                                <article key={post.slug} className="blog-card">
                                    <div className="blog-card-media">
                                        <Link to={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
                                            <img
                                                src={post.image}
                                                alt={post.imageAlt}
                                                width="600"
                                                height="375"
                                                loading="lazy"
                                            />
                                        </Link>
                                        <span className="blog-card-category">{post.category}</span>
                                    </div>

                                    <div className="blog-card-body">
                                        <div className="blog-card-meta">
                                            <span>
                                                <Calendar size={14} aria-hidden="true" style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                                                {post.date}
                                            </span>
                                            <span>
                                                <Clock size={14} aria-hidden="true" style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                                                {post.readTime}
                                            </span>
                                        </div>

                                        <h2 className="blog-card-title">
                                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                        </h2>

                                        <p className="blog-card-excerpt">{post.excerpt}</p>
                                    </div>

                                    <div className="blog-card-footer">
                                        <span style={{ fontSize: '0.82rem', color: 'var(--color-text-light)', fontWeight: 500 }}>
                                            {post.author}
                                        </span>
                                        <Link to={`/blog/${post.slug}`} className="cluster-card-link" style={{ paddingBlockStart: 0 }}>
                                            Read Article <ArrowRight size={16} aria-hidden="true" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <Contact />
            </main>

            <Footer />
            <MobileFloatingCTA />
            <BackToTop />
        </div>
    );
};

export default BlogIndex;
