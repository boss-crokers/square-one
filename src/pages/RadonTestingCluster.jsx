import { Link } from 'react-router-dom';
import {
    Activity,
    CheckCircle,
    Phone,
    ArrowLeft,
    ArrowRight,
    AlertTriangle,
    ShieldCheck,
    BookOpen,
    Layers,
    Clock
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import MobileFloatingCTA from '../components/MobileFloatingCTA';
import BackToTop from '../components/BackToTop';
import SEOHead from '../components/SEOHead';
import imgRadon from '../assets/service-radon.png';
import './PillarStyles.css';

const RadonTestingCluster = () => {
    const tocItems = [
        { id: 'what-is-radon', label: '1. What Is Radon & Why Test in Long Island?' },
        { id: 'epa-action-levels', label: '2. Understanding EPA Radon Action Levels' },
        { id: 'crm-vs-charcoal', label: '3. Continuous Monitors vs. Charcoal Kits' },
        { id: 'ny-testing-protocol', label: '4. NY Real Estate 48-Hour Testing Protocol' },
        { id: 'radon-mitigation', label: '5. How Radon Mitigation Systems Work' },
        { id: 'radon-faq', label: '6. Radon Testing FAQs' }
    ];

    return (
        <div className="pillar-page">
            <SEOHead
                title="Radon Testing Long Island & NY | 48-Hr Continuous Monitoring | Square One"
                description="Professional EPA-compliant Radon Testing in Long Island, Nassau, Suffolk, Queens & Brooklyn. Continuous electronic radon monitoring with hourly data for NY home buyers."
                canonicalPath="/services/radon-testing-long-island"
            />
            <Header />

            <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
                {/* Cluster Hero */}
                <section className="pillar-hero">
                    <div className="container pillar-hero-inner">
                        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
                            <ol className="breadcrumb-list">
                                <li><Link to="/">Home</Link></li>
                                <li className="breadcrumb-separator" aria-hidden="true">/</li>
                                <li><Link to="/services/home-inspection-long-island">Complete Home Inspection Guide</Link></li>
                                <li className="breadcrumb-separator" aria-hidden="true">/</li>
                                <li className="breadcrumb-current" aria-current="page">Radon Testing Long Island &amp; NY</li>
                            </ol>
                        </nav>

                        <div className="pillar-hero-grid">
                            <div>
                                <div className="pillar-badge-row">
                                    <span className="pillar-badge">
                                        <Activity size={14} aria-hidden="true" />
                                        Topic Cluster Guide
                                    </span>
                                    <span className="pillar-badge pillar-badge-secondary">
                                        EPA &amp; NYSDOH Compliant
                                    </span>
                                    <span className="pillar-badge pillar-badge-secondary">
                                        Continuous Electronic Monitors
                                    </span>
                                </div>

                                <h1 className="pillar-hero-title">
                                    Professional <span className="text-accent">Radon Testing</span> in Long Island &amp; NY
                                </h1>

                                <p className="pillar-hero-subtitle">
                                    Radon is an invisible, odorless radioactive soil gas and the #2 leading cause of lung cancer in the United States. Protect your family with calibrated Continuous Radon Monitoring (CRM) across Nassau, Suffolk, Queens, and Brooklyn.
                                </p>

                                <div className="pillar-hero-actions">
                                    <a href="tel:5162429556" className="btn btn-primary">
                                        <Phone size={18} aria-hidden="true" style={{ marginRight: '8px' }} />
                                        Schedule Radon Test
                                    </a>
                                    <Link to="/services/home-inspection-long-island" className="btn btn-outline-white">
                                        <ArrowLeft size={18} aria-hidden="true" style={{ marginRight: '8px' }} />
                                        Back to Complete Inspection Pillar
                                    </Link>
                                </div>
                            </div>

                            <div className="pillar-hero-card">
                                <img
                                    src={imgRadon}
                                    alt="Electronic Continuous Radon Monitor deployed in a New York basement"
                                    width="110"
                                    height="110"
                                    style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-accent)' }}
                                />
                                <h2>48-Hour Digital Results</h2>
                                <p>
                                    No waiting weeks for a mail-in lab canister. Our digital continuous radon monitors log hourly readings, temperature, and tamper data for immediate results.
                                </p>
                                <a href="#contact" className="btn btn-outline" style={{ width: '100%' }}>
                                    Book Radon Monitor
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Topic Cluster Connection Bar */}
                <div className="cluster-connection-bar">
                    <div className="container cluster-connection-inner">
                        <div className="cluster-connection-label">
                            <Layers size={18} aria-hidden="true" />
                            <span>Part of the Square One Home Inspection Topic Cluster:</span>
                        </div>
                        <div className="cluster-pill-links">
                            <Link to="/services/home-inspection-long-island" className="cluster-pill-link">
                                ← Pillar: Complete Home Inspection Guide
                            </Link>
                            <Link to="/services/termite-inspection-long-island" className="cluster-pill-link">
                                Cluster 1: Termite &amp; WDI Inspection
                            </Link>
                            <Link to="/services/radon-testing-long-island" className="cluster-pill-link active">
                                Cluster 2: Radon Testing Long Island
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Main 2-Column Layout */}
                <div className="container pillar-layout">
                    {/* Sidebar */}
                    <aside className="pillar-sidebar" aria-label="Radon guide navigation">
                        <div className="toc-card">
                            <h2 className="toc-title">
                                <BookOpen size={18} aria-hidden="true" />
                                In This Cluster Guide
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
                            <h3>Explore Related Guides</h3>
                            <div className="sidebar-cluster-links">
                                <Link to="/services/home-inspection-long-island" className="sidebar-cluster-item">
                                    <span>Complete NY Inspection Pillar</span>
                                    <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                                <Link to="/services/termite-inspection-long-island" className="sidebar-cluster-item">
                                    <span>Termite &amp; WDI Inspection</span>
                                    <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                                <Link to="/blog/do-you-need-radon-and-termite-inspection-ny" className="sidebar-cluster-item">
                                    <span>Why Bundle Radon &amp; Termite?</span>
                                    <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            </div>
                        </div>

                        <div className="sidebar-cta-card">
                            <h3>Testing for a Home Purchase?</h3>
                            <p>
                                We deploy our radon monitor during your <Link to="/services/home-inspection-long-island" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Full Home Inspection</Link> so you get certified results before signing contracts.
                            </p>
                            <a href="tel:5162429556" className="btn btn-primary" style={{ width: '100%' }}>
                                <Phone size={18} aria-hidden="true" style={{ marginRight: '8px' }} />
                                (516) 242-9556
                            </a>
                        </div>
                    </aside>

                    {/* Article */}
                    <article className="pillar-article">
                        <section className="pillar-section" id="what-is-radon">
                            <h2>1. What Is Radon Gas &amp; Why Test Homes in Long Island &amp; NY?</h2>
                            <p>
                                <strong>Radon</strong> is a naturally occurring radioactive gas created by the decay of uranium and radium in soil, rock, and glacial deposits beneath a home’s foundation. Because a house operates under slightly negative air pressure compared to the soil (known as the "stack effect," especially when heating or air conditioning systems run), radon gas is drawn upward into the home through:
                            </p>
                            <ul className="checklist-items" style={{ marginBlockEnd: '1rem' }}>
                                <li><CheckCircle size={16} aria-hidden="true" /><span>Hairline cracks in poured concrete basement slabs and foundation walls</span></li>
                                <li><CheckCircle size={16} aria-hidden="true" /><span>Hollow concrete block foundation cores and unsealed top courses</span></li>
                                <li><CheckCircle size={16} aria-hidden="true" /><span>Unsealed sump pump pits, floor drains, and dirt crawlspaces</span></li>
                                <li><CheckCircle size={16} aria-hidden="true" /><span>Expansion joints and utility pipe penetrations in slab-on-grade homes</span></li>
                            </ul>
                            <p>
                                Both the <strong>U.S. Environmental Protection Agency (EPA)</strong> and the <strong>U.S. Surgeon General</strong> recommend that <em>all</em> homes below the third floor be tested for radon during a real estate point-of-sale transaction, regardless of geographic radon zone designation. Two adjacent homes on the same street in Huntington, Great Neck, or Levittown can have vastly different indoor radon levels due to soil permeability and ventilation differences.
                            </p>
                        </section>

                        <section className="pillar-section" id="epa-action-levels">
                            <h2>2. Understanding EPA Radon Action Levels (pCi/L)</h2>
                            <p>
                                Radon concentration in air is measured in <strong>picocuries per liter (pCi/L)</strong>. Here is how the EPA categorizes test results during a home inspection:
                            </p>

                            <div className="table-responsive">
                                <table className="comparison-table">
                                    <caption>EPA Radon Test Result Guidelines for Real Estate Transactions</caption>
                                    <thead>
                                        <tr>
                                            <th scope="col">Radon Level (pCi/L)</th>
                                            <th scope="col">Risk Classification</th>
                                            <th scope="col">EPA Recommended Action</th>
                                            <th scope="col">Typical NY Real Estate Negotiation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Below 2.0 pCi/L</th>
                                            <td>Low / Normal Indoor Level</td>
                                            <td>No action required; re-test every 2–5 years or after major renovations</td>
                                            <td>Clear to proceed with transaction</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2.0 to 3.9 pCi/L</th>
                                            <td>Moderate / Caution Range</td>
                                            <td>EPA advises considering mitigation if levels can be lowered below 2.0 pCi/L</td>
                                            <td>Seal sump pit / foundation cracks; re-test after seasonal HVAC changes</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4.0 pCi/L or Higher</th>
                                            <td><strong>Elevated — Action Level</strong></td>
                                            <td><strong>Install an active radon mitigation system</strong> to reduce indoor concentration</td>
                                            <td>Buyer requests seller-paid sub-slab depressurization system or closing credit ($1,200–$2,200)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="pillar-section" id="crm-vs-charcoal">
                            <h2>3. Continuous Radon Monitors (CRM) vs. Passive Charcoal Canisters</h2>
                            <p>
                                When hiring a home inspector for radon testing, the equipment used matters tremendously. Some inspectors leave behind inexpensive mail-in charcoal canisters that must be shipped to an out-of-state lab.
                            </p>
                            <div className="inspector-callout">
                                <div className="inspector-callout-title">
                                    <AlertTriangle size={18} aria-hidden="true" />
                                    <span>Why Square One Uses Calibrated Continuous Radon Monitors</span>
                                </div>
                                <p>
                                    We utilize commercial-grade <strong>electronic Continuous Radon Monitors (CRMs)</strong> that record hour-by-hour radon concentrations, barometric pressure, temperature, relative humidity, and tilt/tamper sensors. If a window is opened to artificially dilute the air, our hourly graph detects the drop—giving you an accurate, tamper-evident report as soon as the 48-hour test concludes.
                                </p>
                            </div>
                        </section>

                        <section className="pillar-section" id="ny-testing-protocol">
                            <h2>4. New York 48-Hour Closed-Building Testing Protocol</h2>
                            <p>
                                To comply with EPA real estate testing standards, short-term radon tests follow strict placement and house-condition rules:
                            </p>
                            <div className="checklist-grid">
                                <div className="checklist-box">
                                    <h3>
                                        <Clock size={18} aria-hidden="true" />
                                        Closed-House Conditions
                                    </h3>
                                    <ul className="checklist-items">
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Exterior windows and doors kept closed (except normal entry/exit) 12 hours prior and during the 48-hour test</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Whole-house exhaust fans and window AC dampers closed</span></li>
                                    </ul>
                                </div>

                                <div className="checklist-box">
                                    <h3>
                                        <ShieldCheck size={18} aria-hidden="true" />
                                        Lowest Livable Level Placement
                                    </h3>
                                    <ul className="checklist-items">
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Placed in the lowest level suitable for occupancy (such as a finished or finishable basement)</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Positioned away from drafts, sump pits, direct sunlight, and high-humidity bathrooms</span></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="pillar-section" id="radon-mitigation">
                            <h2>5. What If My Long Island Home Tests High for Radon?</h2>
                            <p>
                                The good news about radon is that it is one of the most straightforward environmental issues to fix permanently. An active <strong>Sub-Slab Depressurization (SSD)</strong> system uses a PVC extraction pipe sealed into the gravel bed beneath the basement slab and connected to a quiet, continuously running inline radon fan that vents soil gas safely above the roofline—before it can ever enter your living space.
                            </p>
                            <p>
                                Pair your radon evaluation with our <Link to="/services/home-inspection-long-island" className="inline-link">Complete Long Island Home Inspection</Link> and <Link to="/services/termite-inspection-long-island" className="inline-link">Termite &amp; WDI Inspection</Link> for total peace of mind before signing your purchase contract.
                            </p>
                        </section>

                        <section className="pillar-section" id="radon-faq">
                            <h2>6. Radon Testing Frequently Asked Questions</h2>
                            <div className="native-faq-list">
                                <details className="native-faq-item" name="radon-faq" open>
                                    <summary>Can slab-on-grade homes (like Levittown houses) have elevated radon?</summary>
                                    <div className="native-faq-body">
                                        Yes. Any home in direct contact with the ground—whether built over a full basement, a crawlspace, or a concrete slab—can draw in soil gas through plumbing penetrations, perimeter expansion joints, and sub-slab utility trenches.
                                    </div>
                                </details>

                                <details className="native-faq-item" name="radon-faq">
                                    <summary>How long does a real estate radon test take?</summary>
                                    <div className="native-faq-body">
                                        Our electronic Continuous Radon Monitor runs for a minimum of <strong>48 hours</strong>. We typically deploy the monitor at the start of your home inspection, return 48 hours later to retrieve it, and generate your certified hourly report immediately upon pickup.
                                    </div>
                                </details>

                                <details className="native-faq-item" name="radon-faq">
                                    <summary>Does granite countertop material cause a home to fail a radon test?</summary>
                                    <div className="native-faq-body">
                                        While natural stone countertops can emit trace amounts of radiation, the overwhelming majority of indoor radon gas comes from the soil beneath the foundation.
                                    </div>
                                </details>
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

export default RadonTestingCluster;
