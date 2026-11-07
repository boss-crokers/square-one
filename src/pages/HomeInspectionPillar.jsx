import { Link } from 'react-router-dom';
import {
    ShieldCheck,
    CheckCircle,
    Phone,
    ArrowRight,
    Home,
    Droplets,
    Wind,
    Activity,
    ThermometerSun,
    BookOpen,
    FileCheck,
    Award,
    Clock,
    AlertTriangle,
    Layers
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import MobileFloatingCTA from '../components/MobileFloatingCTA';
import BackToTop from '../components/BackToTop';
import SEOHead from '../components/SEOHead';
import cmiBadge from '../assets/certified_master_inspector_v2.png';
import { blogPosts } from '../data/blogData';
import './PillarStyles.css';

const HomeInspectionPillar = () => {
    const tocItems = [
        { id: 'overview', label: '1. Why a Comprehensive NY Inspection Matters' },
        { id: '10-point-checklist', label: '2. 10-Point Home Inspection Breakdown' },
        { id: 'regional-challenges', label: '3. Long Island & NYC Property Risks' },
        { id: 'specialty-clusters', label: '4. Termite (WDI) & Radon Cluster Guides' },
        { id: 'costs-and-standards', label: '5. NY Licensing, Costs & Timeline' },
        { id: 'inspection-day', label: '6. What Happens on Inspection Day' },
        { id: 'pillar-faq', label: '7. Frequently Asked Questions' }
    ];

    return (
        <div className="pillar-page">
            <SEOHead
                title="Complete Long Island Home Inspection Guide (2026) | Square One NY"
                description="The definitive guide to home inspections in Long Island, Nassau, Suffolk, Queens & Brooklyn. Learn what our 500+ point NY State licensed inspection covers, typical costs, and local red flags."
                canonicalPath="/services/home-inspection-long-island"
            />
            <Header />

            <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
                {/* Pillar Hero Section */}
                <section className="pillar-hero">
                    <div className="container pillar-hero-inner">
                        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
                            <ol className="breadcrumb-list">
                                <li><Link to="/">Home</Link></li>
                                <li className="breadcrumb-separator" aria-hidden="true">/</li>
                                <li><Link to="/#services">Services</Link></li>
                                <li className="breadcrumb-separator" aria-hidden="true">/</li>
                                <li className="breadcrumb-current" aria-current="page">Complete Long Island Home Inspection Guide</li>
                            </ol>
                        </nav>

                        <div className="pillar-hero-grid">
                            <div>
                                <div className="pillar-badge-row">
                                    <span className="pillar-badge">
                                        <Layers size={14} aria-hidden="true" />
                                        Core Pillar Guide
                                    </span>
                                    <span className="pillar-badge pillar-badge-secondary">
                                        NYS License #16000066020
                                    </span>
                                    <span className="pillar-badge pillar-badge-secondary">
                                        InterNACHI® Certified Master Inspector®
                                    </span>
                                </div>

                                <h1 className="pillar-hero-title">
                                    The Complete <span className="text-accent">Long Island &amp; NY Home Inspection</span> Guide
                                </h1>

                                <p className="pillar-hero-subtitle">
                                    Everything home buyers, sellers, and real estate attorneys in Nassau County, Suffolk County, Queens, and Brooklyn need to know before signing a contract—written by <strong>Vinny Fundaro</strong>, Certified Master Inspector® and NYC Licensed Operating Engineer.
                                </p>

                                <div className="pillar-hero-actions">
                                    <a href="tel:5162429556" className="btn btn-primary">
                                        <Phone size={18} aria-hidden="true" style={{ marginRight: '8px' }} />
                                        Call (516) 242-9556
                                    </a>
                                    <a href="#contact" className="btn btn-outline-white">
                                        Request Same-Day Quote
                                    </a>
                                </div>

                                <div className="pillar-meta-strip">
                                    <div className="pillar-meta-item">
                                        <Clock size={18} className="text-accent" aria-hidden="true" />
                                        <span><strong>Report Delivery:</strong> Same-Day Digital PDF</span>
                                    </div>
                                    <div className="pillar-meta-item">
                                        <FileCheck size={18} className="text-accent" aria-hidden="true" />
                                        <span><strong>Scope:</strong> 500+ Structural &amp; Mechanical Checkpoints</span>
                                    </div>
                                    <div className="pillar-meta-item">
                                        <Award size={18} className="text-accent" aria-hidden="true" />
                                        <span><strong>Coverage:</strong> Nassau, Suffolk &amp; NYC</span>
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
                                <h2>Master Inspector Authority</h2>
                                <p>
                                    Backed by NYC High-Pressure Operating Engineering experience—inspecting residential &amp; commercial structures to the highest standard in New York.
                                </p>
                                <a href="#specialty-clusters" className="btn btn-outline" style={{ width: '100%' }}>
                                    Explore Topic Clusters
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Topic Cluster Connection Bar */}
                <div className="cluster-connection-bar">
                    <div className="container cluster-connection-inner">
                        <div className="cluster-connection-label">
                            <BookOpen size={18} aria-hidden="true" />
                            <span>Topic Cluster Hub — Deep-Dive Specialty Guides:</span>
                        </div>
                        <div className="cluster-pill-links">
                            <Link to="/services/home-inspection-long-island" className="cluster-pill-link active">
                                Pillar: Full Home Inspection Guide
                            </Link>
                            <Link to="/services/termite-inspection-long-island" className="cluster-pill-link">
                                Cluster 1: Termite &amp; WDI Inspection →
                            </Link>
                            <Link to="/services/radon-testing-long-island" className="cluster-pill-link">
                                Cluster 2: Radon Testing Long Island →
                            </Link>
                            <Link to="/blog" className="cluster-pill-link">
                                Inspection Blog &amp; Resources →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Main 2-Column Content Layout */}
                <div className="container pillar-layout">
                    {/* Sticky Sidebar */}
                    <aside className="pillar-sidebar" aria-label="Guide navigation and quick contact">
                        <div className="toc-card">
                            <h2 className="toc-title">
                                <BookOpen size={18} aria-hidden="true" />
                                In This Pillar Guide
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
                            <h3>Specialized Cluster Guides</h3>
                            <div className="sidebar-cluster-links">
                                <Link to="/services/termite-inspection-long-island" className="sidebar-cluster-item">
                                    <span>Termite &amp; WDI Inspection</span>
                                    <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                                <Link to="/services/radon-testing-long-island" className="sidebar-cluster-item">
                                    <span>Radon Testing Long Island</span>
                                    <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                                <Link to="/blog" className="sidebar-cluster-item">
                                    <span>Home Buyer Blog Articles</span>
                                    <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            </div>
                        </div>

                        <div className="sidebar-cta-card">
                            <h3>Under Accepted Offer?</h3>
                            <p>
                                In New York, your inspection window moves fast. We offer 7-day scheduling and same-day photo &amp; thermal reports.
                            </p>
                            <a href="tel:5162429556" className="btn btn-primary" style={{ width: '100%' }}>
                                <Phone size={18} aria-hidden="true" style={{ marginRight: '8px' }} />
                                (516) 242-9556
                            </a>
                        </div>
                    </aside>

                    {/* Main Article */}
                    <article className="pillar-article">
                        {/* Section 1: Overview */}
                        <section className="pillar-section" id="overview">
                            <h2>1. Why a Comprehensive Home Inspection Is Critical in Long Island &amp; NYC</h2>
                            <p>
                                Buying a house in <strong>Nassau County, Suffolk County, Queens, or Brooklyn</strong> is likely the single largest financial commitment you will ever make. With median home prices across Long Island exceeding $700,000—and many properties dating back 60 to 100+ years—even a single overlooked structural, roofing, or mechanical failure can saddle a new homeowner with $15,000 to $50,000 in unexpected repairs immediately after closing.
                            </p>
                            <p>
                                In New York State, residential real estate transactions generally operate under the doctrine of <em>caveat emptor</em> (buyer beware) once the contract is signed and contingency periods expire. A thorough pre-purchase home inspection conducted before contract signing gives you and your real estate attorney complete transparency into the property’s true physical condition.
                            </p>

                            <div className="inspector-callout">
                                <div className="inspector-callout-title">
                                    <AlertTriangle size={18} aria-hidden="true" />
                                    <span>The Operating Engineer Advantage</span>
                                </div>
                                <p>
                                    Unlike cursory walk-through inspections, Square One is led by <strong>Vinny Fundaro</strong>, who pairs his <strong>InterNACHI® Certified Master Inspector®</strong> credential with hands-on expertise as an <strong>NYC Licensed Operating Engineer</strong>. We evaluate boilers, hydronic heating loops, electrical distribution panels, structural load paths, and moisture intrusion with engineering-grade rigor.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: 10-Point System Breakdown */}
                        <section className="pillar-section" id="10-point-checklist">
                            <h2>2. What Our 10-Point NY Home Inspection Covers</h2>
                            <p>
                                Every full house inspection adheres strictly to New York State Real Property Law Article 12-B Standards of Practice and InterNACHI’s comprehensive inspection protocols. Here is what we examine from rooftop to foundation:
                            </p>

                            <div className="checklist-grid">
                                <div className="checklist-box">
                                    <h3>
                                        <Home size={20} aria-hidden="true" />
                                        1. Structure &amp; Foundation
                                    </h3>
                                    <ul className="checklist-items">
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Poured concrete, block &amp; stone foundations</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Sill plates, rim joists, girders &amp; Lally columns</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Hydrostatic bowing &amp; differential settlement</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Load-bearing wall modifications &amp; dormers</span></li>
                                    </ul>
                                </div>

                                <div className="checklist-box">
                                    <h3>
                                        <ShieldCheck size={20} aria-hidden="true" />
                                        2. Roof, Chimney &amp; Exterior
                                    </h3>
                                    <ul className="checklist-items">
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Asphalt architectural shingles, slate &amp; flat roofs</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Step flashing, valleys, soffits &amp; fascia boards</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Chimney crowns, masonry pointing &amp; flues</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Site grading, retaining walls, decks &amp; drainage</span></li>
                                    </ul>
                                </div>

                                <div className="checklist-box">
                                    <h3>
                                        <Activity size={20} aria-hidden="true" />
                                        3. Electrical Systems
                                    </h3>
                                    <ul className="checklist-items">
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Main service drop, meter pan &amp; amperage capacity</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Panel interior inspection (dead-front removed)</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Detection of hazardous Federal Pacific / Zinsco panels</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>GFCI / AFCI protection &amp; grounding verification</span></li>
                                    </ul>
                                </div>

                                <div className="checklist-box">
                                    <h3>
                                        <Droplets size={20} aria-hidden="true" />
                                        4. Plumbing &amp; Water Heating
                                    </h3>
                                    <ul className="checklist-items">
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Main water service material (lead/galvanized check)</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Cast iron, PVC &amp; copper drain/waste/vent lines</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Functional flow, water pressure &amp; active leak checks</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Water heater age, TPR valve &amp; flue draft testing</span></li>
                                    </ul>
                                </div>

                                <div className="checklist-box">
                                    <h3>
                                        <Wind size={20} aria-hidden="true" />
                                        5. Heating, Boilers &amp; Central AC
                                    </h3>
                                    <ul className="checklist-items">
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Hydronic gas/oil boilers, steam &amp; forced-air furnaces</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>In-slab radiant heating coils &amp; circulator zones</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Central AC condensers, air handlers &amp; heat pumps</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Combustion gas safety &amp; oil tank evaluation</span></li>
                                    </ul>
                                </div>

                                <div className="checklist-box">
                                    <h3>
                                        <ThermometerSun size={20} aria-hidden="true" />
                                        6. Infrared Thermal Diagnostics
                                    </h3>
                                    <ul className="checklist-items">
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Concealed plumbing &amp; roof moisture detection</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Electrical breaker &amp; bus-bar hotspot scanning</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Missing wall/attic insulation &amp; thermal bridging</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Sub-slab radiant heating loop verification</span></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Regional Challenges Table */}
                        <section className="pillar-section" id="regional-challenges">
                            <h2>3. Regional Property Risks Across Long Island &amp; NYC</h2>
                            <p>
                                Every county in our service area has distinct construction eras, soil conditions, and architectural vulnerabilities. Here is what our inspectors watch closely in each region:
                            </p>

                            <div className="table-responsive">
                                <table className="comparison-table">
                                    <caption>Common Home Inspection Issues by New York Region</caption>
                                    <thead>
                                        <tr>
                                            <th scope="col">Region</th>
                                            <th scope="col">Common Home Styles</th>
                                            <th scope="col">Primary Structural &amp; Mechanical Risks</th>
                                            <th scope="col">Recommended Add-Ons</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <Link to="/areas-served/nassau-county" className="inline-link">Nassau County</Link> (Levittown, Garden City, Great Neck, Massapequa)
                                            </th>
                                            <td>Post-War Capes, Expanded Ranches, Split-Levels, Tudors</td>
                                            <td>Leaking in-slab copper radiant heat coils, buried/abandoned oil tanks, unpermitted 2nd-story dormers, Federal Pacific panels</td>
                                            <td>Thermal Imaging, <Link to="/services/termite-inspection-long-island" className="inline-link">Termite (WDI)</Link>, <Link to="/services/radon-testing-long-island" className="inline-link">Radon Testing</Link></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <Link to="/areas-served/suffolk-county" className="inline-link">Suffolk County</Link> (Huntington, Commack, Babylon, Islip)
                                            </th>
                                            <td>Colonials, High-Ranches, Waterfront Contemporaries</td>
                                            <td>High Eastern Subterranean Termite activity in sandy soils, elevated basement radon, private cesspool/septic wear, coastal salt corrosion</td>
                                            <td><Link to="/services/termite-inspection-long-island" className="inline-link">Termite (WDI) NPMA-33</Link>, <Link to="/services/radon-testing-long-island" className="inline-link">48-Hr Radon Monitor</Link>, Mold/Water Testing</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <Link to="/areas-served/nyc-queens-brooklyn" className="inline-link">Queens &amp; Brooklyn</Link> (Forest Hills, Flushing, Park Slope, Bay Ridge)
                                            </th>
                                            <td>Brick Attached Multi-Family, Pre-War Brownstones, Semi-Detached</td>
                                            <td>Flat roof ponding &amp; parapet flashing leaks, aging steam boilers, cloth/knob-and-tube wiring, shared party-wall moisture</td>
                                            <td>Infrared Roof/Wall Scan, Sewer/Drain Check, Lead Water Testing</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 4: Specialty Cluster Guides */}
                        <section className="pillar-section" id="specialty-clusters">
                            <h2>4. Specialized &amp; Environmental Testing Cluster Guides</h2>
                            <p>
                                While a standard NY home inspection evaluates visible structural and mechanical components, <strong>wood-destroying insects</strong> and <strong>radioactive radon gas</strong> require dedicated testing protocols. Explore our in-depth cluster guides below:
                            </p>

                            <div className="cluster-cards-grid">
                                <div className="cluster-card">
                                    <div className="cluster-card-header">
                                        <span className="cluster-card-icon">
                                            <ShieldCheck size={22} aria-hidden="true" />
                                        </span>
                                        <h3>Termite &amp; WDI Inspection Long Island</h3>
                                    </div>
                                    <p>
                                        Learn how we detect Eastern Subterranean Termites, carpenter ants, and powderpost beetles across Nassau and Suffolk—plus official FHA/VA NPMA-33 clearance certifications.
                                    </p>
                                    <Link to="/services/termite-inspection-long-island" className="cluster-card-link">
                                        Read the Complete Termite &amp; WDI Guide <ArrowRight size={16} aria-hidden="true" />
                                    </Link>
                                </div>

                                <div className="cluster-card">
                                    <div className="cluster-card-header">
                                        <span className="cluster-card-icon">
                                            <Activity size={22} aria-hidden="true" />
                                        </span>
                                        <h3>Radon Testing Long Island &amp; NY</h3>
                                    </div>
                                    <p>
                                        Understand EPA action levels (4.0 pCi/L), why continuous electronic radon monitors outperform charcoal kits, and how NY buyers negotiate radon mitigation credits.
                                    </p>
                                    <Link to="/services/radon-testing-long-island" className="cluster-card-link">
                                        Read the Complete Radon Testing Guide <ArrowRight size={16} aria-hidden="true" />
                                    </Link>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Licensing & Costs */}
                        <section className="pillar-section" id="costs-and-standards">
                            <h2>5. NY State Licensing, Standards &amp; Home Inspection Costs</h2>
                            <p>
                                New York State enforces some of the strictest home inspector licensing laws in the country (Real Property Law Article 12-B), requiring 140 hours of approved classroom and field training, passing the National Home Inspector Examination, and carrying mandatory liability insurance.
                            </p>
                            <h3>What Does a Home Inspection Cost on Long Island?</h3>
                            <p>
                                On Long Island and in NYC, a professional home inspection typically ranges between <strong>$450 and $850+</strong> depending on the square footage, age of the structure, foundation type, and whether it is a single-family home, condo, or multi-family investment property.
                            </p>
                            <p>
                                Beware of "budget" inspectors charging rock-bottom rates who rush through a property in 45 minutes. A thorough inspection takes <strong>2.5 to 3.5+ hours on-site</strong> and routinely uncovers $3,000 to $20,000+ in legitimate seller repair credits—paying for itself many times over.
                            </p>
                        </section>

                        {/* Section 6: What Happens on Inspection Day */}
                        <section className="pillar-section" id="inspection-day">
                            <h2>6. Step-by-Step: What Happens on Inspection Day</h2>
                            <p>
                                We strongly encourage buyers to attend the inspection in person so Vinny can walk you through the home’s systems, show you where main water and gas shut-offs are located, and answer your questions in plain English:
                            </p>
                            <ol className="step-timeline-list">
                                <li className="step-timeline-item">
                                    <span className="step-number-badge" aria-hidden="true">1</span>
                                    <div className="step-timeline-content">
                                        <strong>Exterior, Roof &amp; Site Walk (45–60 mins):</strong> We evaluate grading, drainage, siding, masonry, decks, detached garages, roof coverings, flashings, and chimney structure.
                                    </div>
                                </li>
                                <li className="step-timeline-item">
                                    <span className="step-number-badge" aria-hidden="true">2</span>
                                    <div className="step-timeline-content">
                                        <strong>Attic, Basement &amp; Structural Framing (45 mins):</strong> We inspect roof sheathing, insulation depth, ventilation, foundation walls, sill plates, floor joists, and probe for <Link to="/services/termite-inspection-long-island" className="inline-link">termite/WDI damage</Link>.
                                    </div>
                                </li>
                                <li className="step-timeline-item">
                                    <span className="step-number-badge" aria-hidden="true">3</span>
                                    <div className="step-timeline-content">
                                        <strong>Mechanical, Electrical &amp; Plumbing Systems (45–60 mins):</strong> We open the main electrical panel, test boilers/furnaces/AC units, check plumbing supply/drain lines, and deploy <Link to="/services/radon-testing-long-island" className="inline-link">radon monitoring</Link> or thermal cameras.
                                    </div>
                                </li>
                                <li className="step-timeline-item">
                                    <span className="step-number-badge" aria-hidden="true">4</span>
                                    <div className="step-timeline-content">
                                        <strong>Interior Room-by-Room &amp; Summary Walkthrough (30 mins):</strong> We test windows, doors, outlets, appliances, and review our key findings with you on-site before delivering your full illustrated digital report the same day.
                                    </div>
                                </li>
                            </ol>
                        </section>

                        {/* Section 7: Native FAQ Accordion */}
                        <section className="pillar-section" id="pillar-faq">
                            <h2>7. Frequently Asked Questions About NY Home Inspections</h2>
                            <div className="native-faq-list">
                                <details className="native-faq-item" name="pillar-faq" open>
                                    <summary>How fast will I receive my home inspection report?</summary>
                                    <div className="native-faq-body">
                                        We deliver our comprehensive, high-resolution photo-documented digital inspection report the <strong>same day</strong>—allowing you and your real estate attorney to move forward immediately without losing leverage in a competitive Long Island market.
                                    </div>
                                </details>

                                <details className="native-faq-item" name="pillar-faq">
                                    <summary>Should I bundle Termite (WDI) and Radon testing with my home inspection?</summary>
                                    <div className="native-faq-body">
                                        Yes. Bundling <Link to="/services/termite-inspection-long-island" className="inline-link">Termite/WDI inspection</Link> and <Link to="/services/radon-testing-long-island" className="inline-link">Radon testing</Link> during your primary inspection saves both time and money, and ensures all results arrive within your contract contingency period.
                                    </div>
                                </details>

                                <details className="native-faq-item" name="pillar-faq">
                                    <summary>Can a house "pass" or "fail" a New York home inspection?</summary>
                                    <div className="native-faq-body">
                                        A home inspection is not a municipal code pass/fail exam. Instead, it is an objective technical assessment of the property’s physical condition, separating minor maintenance items from material defects, safety hazards, and near-end-of-life systems so you can make an informed buying decision.
                                    </div>
                                </details>

                                <details className="native-faq-item" name="pillar-faq">
                                    <summary>Do you inspect homes on weekends across Nassau, Suffolk, and NYC?</summary>
                                    <div className="native-faq-body">
                                        Yes! We operate 7 days a week from 8:00 AM to 8:00 PM across Nassau County, Suffolk County, Queens, Brooklyn, and Manhattan.
                                    </div>
                                </details>
                            </div>
                        </section>

                        {/* Section 8: Supporting Cluster Blog Posts */}
                        <section className="pillar-section" id="related-blog-clusters">
                            <h2>Related Inspection Guides from Our Blog</h2>
                            <p>
                                Continue exploring specific Long Island home buying and maintenance topics in our cluster articles:
                            </p>
                            <div className="cluster-cards-grid">
                                {blogPosts.slice(0, 3).map((post) => (
                                    <div key={post.slug} className="cluster-card">
                                        <div className="cluster-card-header">
                                            <span className="cluster-card-icon">
                                                <BookOpen size={20} aria-hidden="true" />
                                            </span>
                                            <h3>{post.title}</h3>
                                        </div>
                                        <p>{post.excerpt}</p>
                                        <Link to={`/blog/${post.slug}`} className="cluster-card-link">
                                            Read Article <ArrowRight size={16} aria-hidden="true" />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </article>
                </div>

                {/* Contact Section */}
                <Contact />
            </main>

            <Footer />
            <MobileFloatingCTA />
            <BackToTop />
        </div>
    );
};

export default HomeInspectionPillar;
