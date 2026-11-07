import { useParams, Link } from 'react-router-dom';
import {
    MapPin,
    Phone,
    ArrowRight,
    BookOpen,
    AlertTriangle,
    ShieldCheck,
    Activity,
    Layers,
    Clock,
    Award
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import MobileFloatingCTA from '../components/MobileFloatingCTA';
import BackToTop from '../components/BackToTop';
import NotFound from '../components/NotFound';
import SEOHead from '../components/SEOHead';
import cmiBadge from '../assets/certified_master_inspector_v2.png';
import { getRegionalPillar } from '../data/locationsData';
import './PillarStyles.css';

const RegionalLocationPillar = () => {
    const { regionSlug } = useParams();
    const region = getRegionalPillar(regionSlug);

    if (!region) {
        return <NotFound />;
    }

    const tocItems = [
        ...region.sections.map((sec) => ({ id: sec.id, label: sec.title })),
        { id: 'regional-comparison-table', label: `${region.name} Inspection Priorities` },
        { id: 'regional-services-cluster', label: 'Core Services in This Area' },
        { id: 'regional-faq', label: `${region.name} Inspection FAQs` }
    ];

    return (
        <div className="pillar-page">
            <SEOHead
                title={region.seoTitle}
                description={region.seoDescription}
                canonicalPath={`/areas-served/${region.slug}`}
            />
            <Header />

            <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
                <section className="pillar-hero">
                    <div className="container pillar-hero-inner">
                        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
                            <ol className="breadcrumb-list">
                                <li><Link to="/">Home</Link></li>
                                <li className="breadcrumb-separator" aria-hidden="true">/</li>
                                <li><Link to="/#locations">Areas We Serve</Link></li>
                                <li className="breadcrumb-separator" aria-hidden="true">/</li>
                                <li className="breadcrumb-current" aria-current="page">{region.name}</li>
                            </ol>
                        </nav>

                        <div className="pillar-hero-grid">
                            <div>
                                <div className="pillar-badge-row">
                                    <span className="pillar-badge">
                                        <MapPin size={14} aria-hidden="true" />
                                        {region.badge}
                                    </span>
                                    <span className="pillar-badge pillar-badge-secondary">
                                        {region.officeBadge}
                                    </span>
                                    <span className="pillar-badge pillar-badge-secondary">
                                        NYS License #16000066020
                                    </span>
                                </div>

                                <h1 className="pillar-hero-title">
                                    {region.heroTitle} <span className="text-accent">{region.heroAccent}</span>
                                </h1>

                                <p className="pillar-hero-subtitle">
                                    {region.heroSubtitle}
                                </p>

                                <div className="pillar-hero-actions">
                                    <a href="tel:5162429556" className="btn btn-primary">
                                        <Phone size={18} aria-hidden="true" style={{ marginRight: '8px' }} />
                                        Call (516) 242-9556
                                    </a>
                                    <a href="#contact" className="btn btn-outline-white">
                                        Schedule {region.name} Inspection
                                    </a>
                                </div>

                                <div className="pillar-meta-strip">
                                    <div className="pillar-meta-item">
                                        <Clock size={18} className="text-accent" aria-hidden="true" />
                                        <span><strong>Same-Day Reports:</strong> Digital PDF &amp; Photos</span>
                                    </div>
                                    <div className="pillar-meta-item">
                                        <Award size={18} className="text-accent" aria-hidden="true" />
                                        <span><strong>Credentials:</strong> CMI® &amp; NYC Operating Engineer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pillar-hero-card">
                                <img
                                    src={cmiBadge}
                                    alt="Certified Master Inspector Badge"
                                    width="110"
                                    height="110"
                                />
                                <h2>Local {region.name} Experts</h2>
                                <p>
                                    Available 7 days a week across {region.name} for Pre-Purchase, Pre-Listing, Termite (WDI), and Radon inspections.
                                </p>
                                <Link to="/services/home-inspection-long-island" className="btn btn-outline" style={{ width: '100%' }}>
                                    View 500+ Point Checklist
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Regional & Service Cluster Connection Bar */}
                <div className="cluster-connection-bar">
                    <div className="container cluster-connection-inner">
                        <div className="cluster-connection-label">
                            <MapPin size={18} aria-hidden="true" />
                            <span>Regional Service Hubs:</span>
                        </div>
                        <div className="cluster-pill-links">
                            <Link
                                to="/areas-served/nassau-county"
                                className={`cluster-pill-link ${region.slug === 'nassau-county' ? 'active' : ''}`}
                            >
                                Nassau County
                            </Link>
                            <Link
                                to="/areas-served/suffolk-county"
                                className={`cluster-pill-link ${region.slug === 'suffolk-county' ? 'active' : ''}`}
                            >
                                Suffolk County
                            </Link>
                            <Link
                                to="/areas-served/nyc-queens-brooklyn"
                                className={`cluster-pill-link ${region.slug === 'nyc-queens-brooklyn' ? 'active' : ''}`}
                            >
                                Queens, Brooklyn &amp; NYC
                            </Link>
                            <Link to="/services/home-inspection-long-island" className="cluster-pill-link">
                                Core Inspection Guide →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Main 2-Column Layout */}
                <div className="container pillar-layout">
                    {/* Sidebar */}
                    <aside className="pillar-sidebar" aria-label="Regional guide navigation">
                        <div className="toc-card">
                            <h2 className="toc-title">
                                <BookOpen size={18} aria-hidden="true" />
                                In This Area Guide
                            </h2>
                            <nav aria-label="Table of contents">
                                <ul className="toc-list">
                                    {tocItems.map((item) => (
                                        <li key={item.id}>
                                            <a href={`#${item.id}`} className="toc-link">
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <div className="sidebar-cluster-box">
                            <h3>Core Inspection Guides</h3>
                            <div className="sidebar-cluster-links">
                                <Link to="/services/home-inspection-long-island" className="sidebar-cluster-item">
                                    <span>Complete Home Inspection Guide</span>
                                    <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                                <Link to="/services/termite-inspection-long-island" className="sidebar-cluster-item">
                                    <span>Termite &amp; WDI Inspection</span>
                                    <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                                <Link to="/services/radon-testing-long-island" className="sidebar-cluster-item">
                                    <span>Radon Testing Long Island</span>
                                    <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            </div>
                        </div>

                        <div className="sidebar-cta-card">
                            <h3>Buying in {region.name}?</h3>
                            <p>
                                Speak directly with Vinny Fundaro to schedule your inspection and get same-day digital reports.
                            </p>
                            <a href="tel:5162429556" className="btn btn-primary" style={{ width: '100%' }}>
                                <Phone size={18} aria-hidden="true" style={{ marginRight: '8px' }} />
                                (516) 242-9556
                            </a>
                        </div>
                    </aside>

                    {/* Main Article */}
                    <article className="pillar-article">
                        {/* Towns & Neighborhoods Pill Cloud */}
                        <section className="pillar-section">
                            <h2>Communities &amp; Neighborhoods We Inspect in {region.name}</h2>
                            <p>
                                Square One provides 7-day-a-week licensed home inspections across all neighborhoods and townships in {region.name}, including:
                            </p>
                            <div className="pillar-badge-row" style={{ marginBlockEnd: 0 }}>
                                {region.townsCovered.map((town) => (
                                    <span
                                        key={town}
                                        style={{
                                            padding: '0.4rem 0.9rem',
                                            borderRadius: '999px',
                                            backgroundColor: 'var(--color-background)',
                                            color: 'var(--color-primary)',
                                            border: '1px solid rgba(10, 25, 47, 0.14)',
                                            fontSize: '0.88rem',
                                            fontWeight: 600
                                        }}
                                    >
                                        <MapPin size={13} aria-hidden="true" style={{ verticalAlign: 'middle', marginRight: '4px', color: 'var(--color-accent-dark)' }} />
                                        {town}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Local Sub-Region Sections */}
                        {region.sections.map((sec) => (
                            <section key={sec.id} className="pillar-section" id={sec.id}>
                                <h2>{sec.title}</h2>
                                {sec.paragraphs.map((p, idx) => (
                                    <p key={idx}>{p}</p>
                                ))}
                                {sec.calloutText && (
                                    <div className="inspector-callout">
                                        <div className="inspector-callout-title">
                                            <AlertTriangle size={18} aria-hidden="true" />
                                            <span>{sec.calloutTitle}</span>
                                        </div>
                                        <p>{sec.calloutText}</p>
                                    </div>
                                )}
                            </section>
                        ))}

                        {/* Regional Comparison Table */}
                        <section className="pillar-section" id="regional-comparison-table">
                            <h2>What We Watch For in {region.name} Homes</h2>
                            <p>
                                Local soil conditions, proximity to coastal water, and construction eras vary significantly across {region.name}. Here is how we tailor our inspection focus:
                            </p>
                            <div className="table-responsive">
                                <table className="comparison-table">
                                    <caption>{region.tableData.caption}</caption>
                                    <thead>
                                        <tr>
                                            <th scope="col">Towns / Neighborhoods</th>
                                            <th scope="col">Dominant Housing Stock</th>
                                            <th scope="col">Frequent Inspection Findings</th>
                                            <th scope="col">Recommended Inspection Package</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {region.tableData.rows.map((row) => (
                                            <tr key={row.area}>
                                                <th scope="row">{row.area}</th>
                                                <td>{row.era}</td>
                                                <td>{row.defects}</td>
                                                <td>{row.recommended}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Core Services Cluster Cards */}
                        <section className="pillar-section" id="regional-services-cluster">
                            <h2>Complete Inspection Services in {region.name}</h2>
                            <p>
                                Every {region.name} inspection can be customized with our specialized environmental and pest evaluations:
                            </p>
                            <div className="cluster-cards-grid">
                                <div className="cluster-card">
                                    <div className="cluster-card-header">
                                        <span className="cluster-card-icon">
                                            <Layers size={20} aria-hidden="true" />
                                        </span>
                                        <h3>Complete 500+ Point Home Inspection</h3>
                                    </div>
                                    <p>
                                        Full structural, roof, electrical, plumbing, boiler/HVAC, interior, and infrared thermal imaging evaluation with same-day digital report delivery.
                                    </p>
                                    <Link to="/services/home-inspection-long-island" className="cluster-card-link">
                                        Explore Full Inspection Guide <ArrowRight size={16} aria-hidden="true" />
                                    </Link>
                                </div>

                                <div className="cluster-card">
                                    <div className="cluster-card-header">
                                        <span className="cluster-card-icon">
                                            <ShieldCheck size={20} aria-hidden="true" />
                                        </span>
                                        <h3>Termite &amp; WDI Inspection (NPMA-33)</h3>
                                    </div>
                                    <p>
                                        Thorough probing and visual detection of subterranean termites, carpenter ants, and wood-boring beetles—including FHA/VA mortgage clearance forms.
                                    </p>
                                    <Link to="/services/termite-inspection-long-island" className="cluster-card-link">
                                        Explore Termite &amp; WDI Guide <ArrowRight size={16} aria-hidden="true" />
                                    </Link>
                                </div>

                                <div className="cluster-card">
                                    <div className="cluster-card-header">
                                        <span className="cluster-card-icon">
                                            <Activity size={20} aria-hidden="true" />
                                        </span>
                                        <h3>48-Hour Continuous Radon Testing</h3>
                                    </div>
                                    <p>
                                        Calibrated electronic radon monitoring with hourly data logging to verify indoor air safety below the EPA 4.0 pCi/L action threshold.
                                    </p>
                                    <Link to="/services/radon-testing-long-island" className="cluster-card-link">
                                        Explore Radon Testing Guide <ArrowRight size={16} aria-hidden="true" />
                                    </Link>
                                </div>
                            </div>
                        </section>

                        {/* Native FAQ Accordion */}
                        <section className="pillar-section" id="regional-faq">
                            <h2>{region.name} Home Inspection FAQs</h2>
                            <div className="native-faq-list">
                                {region.faqs.map((faq, idx) => (
                                    <details key={idx} className="native-faq-item" name={`faq-${region.slug}`} open={idx === 0}>
                                        <summary>{faq.q}</summary>
                                        <div className="native-faq-body">{faq.a}</div>
                                    </details>
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

export default RegionalLocationPillar;
