import { useParams, Link } from 'react-router-dom';
import {
    BookOpen,
    Clock,
    Calendar,
    ArrowLeft,
    ArrowRight,
    Phone,
    AlertTriangle,
    Layers
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import MobileFloatingCTA from '../components/MobileFloatingCTA';
import BackToTop from '../components/BackToTop';
import NotFound from '../components/NotFound';
import SEOHead from '../components/SEOHead';
import vinnyImg from '../assets/vinny.jpg';
import { getBlogPostBySlug, blogPosts } from '../data/blogData';
import './PillarStyles.css';

const BlogPost = () => {
    const { slug } = useParams();
    const post = getBlogPostBySlug(slug);

    if (!post) {
        return <NotFound />;
    }

    const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

    return (
        <div className="pillar-page">
            <SEOHead
                title={`${post.title} | Square One Home Inspection Blog`}
                description={post.excerpt}
                canonicalPath={`/blog/${post.slug}`}
            />
            <Header />

            <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
                <section className="pillar-hero">
                    <div className="container pillar-hero-inner">
                        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
                            <ol className="breadcrumb-list">
                                <li><Link to="/">Home</Link></li>
                                <li className="breadcrumb-separator" aria-hidden="true">/</li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li className="breadcrumb-separator" aria-hidden="true">/</li>
                                <li className="breadcrumb-current" aria-current="page">{post.title}</li>
                            </ol>
                        </nav>

                        <div className="pillar-badge-row">
                            <span className="pillar-badge">{post.category}</span>
                            <span className="pillar-badge pillar-badge-secondary">
                                <Calendar size={13} aria-hidden="true" />
                                {post.date}
                            </span>
                            <span className="pillar-badge pillar-badge-secondary">
                                <Clock size={13} aria-hidden="true" />
                                {post.readTime}
                            </span>
                        </div>

                        <h1 className="pillar-hero-title" style={{ maxInlineSize: '900px' }}>
                            {post.title}
                        </h1>

                        <p className="pillar-hero-subtitle">
                            {post.excerpt}
                        </p>

                        <div className="pillar-hero-actions">
                            <Link to="/blog" className="btn btn-outline-white">
                                <ArrowLeft size={18} aria-hidden="true" style={{ marginRight: '8px' }} />
                                All Blog Articles
                            </Link>
                            <Link to={post.relatedPillar.path} className="btn btn-primary">
                                Explore {post.relatedPillar.title}
                                <ArrowRight size={18} aria-hidden="true" style={{ marginLeft: '8px' }} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Topic Cluster Connection Bar */}
                <div className="cluster-connection-bar">
                    <div className="container cluster-connection-inner">
                        <div className="cluster-connection-label">
                            <Layers size={18} aria-hidden="true" />
                            <span>Connected Pillar &amp; Service Guides:</span>
                        </div>
                        <div className="cluster-pill-links">
                            <Link to={post.relatedPillar.path} className="cluster-pill-link">
                                Pillar: {post.relatedPillar.title} →
                            </Link>
                            {post.relatedClusters.map((cluster) => (
                                <Link key={cluster.path} to={cluster.path} className="cluster-pill-link">
                                    {cluster.title} →
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main 2-Column Article Layout */}
                <div className="container pillar-layout">
                    {/* Sidebar */}
                    <aside className="pillar-sidebar" aria-label="Article table of contents and related guides">
                        <div className="toc-card">
                            <h2 className="toc-title">
                                <BookOpen size={18} aria-hidden="true" />
                                Article Sections
                            </h2>
                            <nav aria-label="Table of contents">
                                <ul className="toc-list">
                                    {post.sections.map((sec) => (
                                        <li key={sec.id}>
                                            <a href={`#${sec.id}`} className="toc-link">
                                                {sec.heading}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <div className="sidebar-cluster-box">
                            <h3>Core Inspection Guides</h3>
                            <div className="sidebar-cluster-links">
                                <Link to={post.relatedPillar.path} className="sidebar-cluster-item">
                                    <span>{post.relatedPillar.title}</span>
                                    <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                                {post.relatedClusters.map((cluster) => (
                                    <Link key={cluster.path} to={cluster.path} className="sidebar-cluster-item">
                                        <span>{cluster.title}</span>
                                        <ArrowRight size={16} aria-hidden="true" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="sidebar-cta-card">
                            <h3>Schedule Your Inspection</h3>
                            <p>
                                Buying or selling in Long Island or NYC? Get same-day digital reports from a Certified Master Inspector.
                            </p>
                            <a href="tel:5162429556" className="btn btn-primary" style={{ width: '100%' }}>
                                <Phone size={18} aria-hidden="true" style={{ marginRight: '8px' }} />
                                (516) 242-9556
                            </a>
                        </div>
                    </aside>

                    {/* Article Body */}
                    <article className="pillar-article">
                        <figure className="pillar-section" style={{ padding: '1rem' }}>
                            <img
                                src={post.image}
                                alt={post.imageAlt}
                                width="900"
                                height="480"
                                style={{
                                    display: 'block',
                                    inlineSize: '100%',
                                    maxBlockSize: '420px',
                                    objectFit: 'cover',
                                    borderRadius: '8px'
                                }}
                            />
                        </figure>

                        {post.sections.map((sec) => (
                            <section key={sec.id} className="pillar-section" id={sec.id}>
                                <h2>{sec.heading}</h2>
                                {sec.paragraphs.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                                {sec.keyTakeaway && (
                                    <div className="inspector-callout">
                                        <div className="inspector-callout-title">
                                            <AlertTriangle size={18} aria-hidden="true" />
                                            <span>Master Inspector Key Takeaway</span>
                                        </div>
                                        <p>{sec.keyTakeaway}</p>
                                    </div>
                                )}
                            </section>
                        ))}

                        {/* Author Box & Pillar Backlink */}
                        <section className="pillar-section" aria-label="About the author">
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
                                <img
                                    src={vinnyImg}
                                    alt="Vinny Fundaro - Certified Master Inspector"
                                    width="90"
                                    height="90"
                                    loading="lazy"
                                    style={{ borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 20%', border: '3px solid var(--color-accent)' }}
                                />
                                <div style={{ flex: '1 1 260px', minInlineSize: 0 }}>
                                    <h2 style={{ fontSize: '1.35rem', border: 'none', padding: 0, marginBlockEnd: '0.25rem' }}>
                                        Written by {post.author}
                                    </h2>
                                    <p style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-accent-dark)', marginBlockEnd: '0.5rem' }}>
                                        {post.authorRole} • NYS License #16000066020
                                    </p>
                                    <p style={{ marginBlockEnd: '0.75rem', fontSize: '0.95rem' }}>
                                        Want the full breakdown of what we inspect across Nassau, Suffolk, Queens, and Brooklyn? Read our <Link to="/services/home-inspection-long-island" className="inline-link">Complete Long Island Home Inspection Pillar Guide</Link>, or explore our <Link to="/services/termite-inspection-long-island" className="inline-link">Termite &amp; WDI Guide</Link> and <Link to="/services/radon-testing-long-island" className="inline-link">Radon Testing Guide</Link>.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* More Articles */}
                        <section className="pillar-section">
                            <h2>More Long Island Inspection Articles</h2>
                            <div className="cluster-cards-grid">
                                {otherPosts.map((related) => (
                                    <div key={related.slug} className="cluster-card">
                                        <div className="cluster-card-header">
                                            <span className="cluster-card-icon">
                                                <BookOpen size={20} aria-hidden="true" />
                                            </span>
                                            <h3>{related.title}</h3>
                                        </div>
                                        <p>{related.excerpt}</p>
                                        <Link to={`/blog/${related.slug}`} className="cluster-card-link">
                                            Read Article <ArrowRight size={16} aria-hidden="true" />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </article>
                </div>

                <Contact />
            </main>

            <Footer />
            <MobileFloatingCTA />
            <BackToTop />
        </div>
    );
};

export default BlogPost;
