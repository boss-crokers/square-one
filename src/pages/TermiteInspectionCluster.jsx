import { Link } from 'react-router-dom';
import {
    ShieldCheck,
    CheckCircle,
    Phone,
    ArrowLeft,
    ArrowRight,
    AlertTriangle,
    FileCheck,
    BookOpen,
    Layers,
    Activity,
    Search
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import MobileFloatingCTA from '../components/MobileFloatingCTA';
import BackToTop from '../components/BackToTop';
import SEOHead from '../components/SEOHead';
import imgTermite from '../assets/service-termite.png';
import './PillarStyles.css';

const TermiteInspectionCluster = () => {
    const tocItems = [
        { id: 'why-long-island-hotspot', label: '1. Why Long Island Is a Termite Hotspot' },
        { id: 'wdi-comparison', label: '2. Termites vs. Carpenter Ants & Beetles' },
        { id: 'warning-signs', label: '3. 5 Signs of Termite Damage We Inspect For' },
        { id: 'npma-33-mortgage', label: '4. FHA, VA & Bank NPMA-33 Requirements' },
        { id: 'termite-faq', label: '5. Termite Inspection FAQs' }
    ];

    return (
        <div className="pillar-page">
            <SEOHead
                title="Termite & WDI Inspection Long Island | NPMA-33 Certified | Square One"
                description="Licensed Termite & Wood-Destroying Insect (WDI) inspections in Long Island, Nassau, Suffolk, Queens & Brooklyn. Official FHA/VA NPMA-33 reports delivered same day."
                canonicalPath="/services/termite-inspection-long-island"
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
                                <li className="breadcrumb-current" aria-current="page">Termite &amp; WDI Inspection Long Island</li>
                            </ol>
                        </nav>

                        <div className="pillar-hero-grid">
                            <div>
                                <div className="pillar-badge-row">
                                    <span className="pillar-badge">
                                        <ShieldCheck size={14} aria-hidden="true" />
                                        Topic Cluster Guide
                                    </span>
                                    <span className="pillar-badge pillar-badge-secondary">
                                        NPMA-33 WDI Reports
                                    </span>
                                    <span className="pillar-badge pillar-badge-secondary">
                                        Nassau, Suffolk &amp; NYC
                                    </span>
                                </div>

                                <h1 className="pillar-hero-title">
                                    Termite &amp; <span className="text-accent">Wood-Destroying Insect (WDI)</span> Inspection Long Island
                                </h1>

                                <p className="pillar-hero-subtitle">
                                    Protect your structural investment from silent subterranean termite colonies, carpenter ants, and wood-boring beetles. Thorough visual &amp; probing inspections across Nassau County, Suffolk County, Queens, and Brooklyn.
                                </p>

                                <div className="pillar-hero-actions">
                                    <a href="tel:5162429556" className="btn btn-primary">
                                        <Phone size={18} aria-hidden="true" style={{ marginRight: '8px' }} />
                                        Schedule Termite Inspection
                                    </a>
                                    <Link to="/services/home-inspection-long-island" className="btn btn-outline-white">
                                        <ArrowLeft size={18} aria-hidden="true" style={{ marginRight: '8px' }} />
                                        Back to Complete Inspection Pillar
                                    </Link>
                                </div>
                            </div>

                            <div className="pillar-hero-card">
                                <img
                                    src={imgTermite}
                                    alt="Wood-destroying insect and termite structural inspection"
                                    width="110"
                                    height="110"
                                    style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-accent)' }}
                                />
                                <h2>Same-Day WDI Reports</h2>
                                <p>
                                    Need an official NPMA-33 Wood-Destroying Insect clearance form for an FHA, VA, or conventional mortgage? We deliver complete documentation the same day.
                                </p>
                                <a href="#contact" className="btn btn-outline" style={{ width: '100%' }}>
                                    Book WDI Inspection
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
                            <Link to="/services/termite-inspection-long-island" className="cluster-pill-link active">
                                Cluster 1: Termite &amp; WDI Inspection
                            </Link>
                            <Link to="/services/radon-testing-long-island" className="cluster-pill-link">
                                Cluster 2: Radon Testing Long Island →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Main 2-Column Layout */}
                <div className="container pillar-layout">
                    {/* Sidebar */}
                    <aside className="pillar-sidebar" aria-label="Termite guide navigation">
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
                                <Link to="/services/radon-testing-long-island" className="sidebar-cluster-item">
                                    <span>Radon Testing Long Island</span>
                                    <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                                <Link to="/blog/do-you-need-radon-and-termite-inspection-ny" className="sidebar-cluster-item">
                                    <span>Why Bundle Radon &amp; Termite?</span>
                                    <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            </div>
                        </div>

                        <div className="sidebar-cta-card">
                            <h3>Bundle &amp; Save</h3>
                            <p>
                                Add a full Wood-Destroying Insect (WDI) inspection to your <Link to="/services/home-inspection-long-island" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Complete Home Inspection</Link> for seamless same-day reporting.
                            </p>
                            <a href="tel:5162429556" className="btn btn-primary" style={{ width: '100%' }}>
                                <Phone size={18} aria-hidden="true" style={{ marginRight: '8px' }} />
                                (516) 242-9556
                            </a>
                        </div>
                    </aside>

                    {/* Article */}
                    <article className="pillar-article">
                        <section className="pillar-section" id="why-long-island-hotspot">
                            <h2>1. Why Long Island Is a High-Risk Zone for Subterranean Termites</h2>
                            <p>
                                Across the United States, termites cause more than $5 billion in structural property damage every year—and standard homeowners insurance policies <strong>never cover termite damage</strong>. On Long Island, the combination of sandy coastal glacial soils, high water tables, humid summers, and dense mature landscaping makes Nassau and Suffolk Counties prime habitats for <strong>Eastern Subterranean Termites</strong> (<em>Reticulitermes flavipes</em>).
                            </p>
                            <p>
                                Because subterranean termites live underground and dehydrate when exposed to open air, they construct concealed mud shelter tubes up foundation walls, inside concrete block cores, and behind porch steps—hollowing out structural sill plates, box headers, and floor joists without leaving obvious surface blemishes.
                            </p>

                            <div className="inspector-callout">
                                <div className="inspector-callout-title">
                                    <AlertTriangle size={18} aria-hidden="true" />
                                    <span>Inspector Field Note: Levittown Slabs &amp; Finished Basements</span>
                                </div>
                                <p>
                                    In concrete-slab homes (such as Levittown Capes and Ranches), termites routinely enter through tiny expansion joints around plumbing penetrations or partitioning walls resting on the slab. During our <Link to="/services/home-inspection-long-island" className="inline-link">comprehensive home inspection</Link>, we combine physical probing with moisture and thermal scanning to spot concealed activity.
                                </p>
                            </div>
                        </section>

                        <section className="pillar-section" id="wdi-comparison">
                            <h2>2. Wood-Destroying Insects We Inspect For in NY</h2>
                            <p>
                                A professional Wood-Destroying Insect (WDI) inspection looks beyond just termites. We evaluate your property for all four major wood-destroying organisms found in New York:
                            </p>

                            <div className="table-responsive">
                                <table className="comparison-table">
                                    <caption>Comparison of Wood-Destroying Insects in Long Island &amp; NYC</caption>
                                    <thead>
                                        <tr>
                                            <th scope="col">Organism</th>
                                            <th scope="col">How They Damage Wood</th>
                                            <th scope="col">Key Visual Evidence</th>
                                            <th scope="col">Common Long Island Locations</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Eastern Subterranean Termites</th>
                                            <td>Consume cellulose along the soft springwood grain, packing galleries with soil and mud</td>
                                            <td>Pencil-sized mud tubes on foundation walls, discarded translucent wings near windowsills, blistered wood</td>
                                            <td>Basement sill plates, rim joists, garage door frames, dirt crawlspaces</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Carpenter Ants</th>
                                            <td>Excavate smooth, sandpaper-like galleries inside damp or decaying wood to build nests (do not eat wood)</td>
                                            <td>Coarse sawdust-like piles ("frass") containing insect parts beneath baseboards or beams</td>
                                            <td>Leaking roof eaves, window headers, damp porch columns, rotted deck ledger boards</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Powderpost Beetles</th>
                                            <td>Larvae tunnel through seasoned hardwoods and structural framing over multiple years</td>
                                            <td>Tiny 1/16-inch "shotgun" exit holes accompanied by fine, talcum-powder-like wood dust</td>
                                            <td>Unfinished attic rafters, barn beams, older hardwood subfloors, crawlspace joists</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Carpenter Bees</th>
                                            <td>Bore perfectly round 1/2-inch holes into unpainted exterior trim and fascia boards</td>
                                            <td>Round entry holes on underside of soffits/fascia with yellowish staining below</td>
                                            <td>Cedar siding, wood pergolas, eaves, fascia boards, detached garage trim</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="pillar-section" id="warning-signs">
                            <h2>3. Five Critical Areas We Probe During a WDI Inspection</h2>
                            <p>
                                Our WDI inspection goes into the tightest corners of the property where wood meets masonry or soil:
                            </p>
                            <div className="checklist-grid">
                                <div className="checklist-box">
                                    <h3>
                                        <Search size={18} aria-hidden="true" />
                                        1. Sill Plates &amp; Rim Joists
                                    </h3>
                                    <ul className="checklist-items">
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Probing perimeter wood resting atop foundation walls</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Checking for previous chemical drill holes (bait/trench treatment)</span></li>
                                    </ul>
                                </div>

                                <div className="checklist-box">
                                    <h3>
                                        <Search size={18} aria-hidden="true" />
                                        2. Earth-to-Wood Contact
                                    </h3>
                                    <ul className="checklist-items">
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Wood siding, deck posts, and stairs touching soil or mulch</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Basement hatchways, Bilco doors, and window wells</span></li>
                                    </ul>
                                </div>

                                <div className="checklist-box">
                                    <h3>
                                        <Search size={18} aria-hidden="true" />
                                        3. Garage &amp; Porch Framing
                                    </h3>
                                    <ul className="checklist-items">
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Garage door jambs and concrete-to-framing transitions</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Concrete front steps poured against wood sheathing</span></li>
                                    </ul>
                                </div>

                                <div className="checklist-box">
                                    <h3>
                                        <Search size={18} aria-hidden="true" />
                                        4. Moisture-Prone Zones
                                    </h3>
                                    <ul className="checklist-items">
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Crawlspaces, bath traps, and beneath kitchen sinks</span></li>
                                        <li><CheckCircle size={16} aria-hidden="true" /><span>Attic rafters near roof valley or chimney leaks</span></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="pillar-section" id="npma-33-mortgage">
                            <h2>4. FHA, VA &amp; Conventional Mortgage NPMA-33 Requirements</h2>
                            <p>
                                If you are purchasing a home on Long Island or in NYC using a <strong>VA loan, FHA loan, or certain conventional mortgages</strong>, your lender will require an official <strong>NPMA-33 Wood-Destroying Insect Inspection Report</strong> prior to closing.
                            </p>
                            <p>
                                Our report clearly documents:
                            </p>
                            <ul className="checklist-items" style={{ marginBlockEnd: '1rem' }}>
                                <li><FileCheck size={18} aria-hidden="true" /><span>Whether visible evidence of active or previous wood-destroying insect infestation was observed.</span></li>
                                <li><FileCheck size={18} aria-hidden="true" /><span>Whether evidence of prior treatment (such as foundation drill marks from sub-slab termiticide injection) is present.</span></li>
                                <li><FileCheck size={18} aria-hidden="true" /><span>Whether any damaged structural wood members require repair or reinforcement by a qualified contractor.</span></li>
                            </ul>
                            <p>
                                For complete home buyer protection, we recommend pairing your WDI inspection with our <Link to="/services/home-inspection-long-island" className="inline-link">Complete Long Island Home Inspection</Link> and <Link to="/services/radon-testing-long-island" className="inline-link">Continuous Radon Testing</Link>.
                            </p>
                        </section>

                        <section className="pillar-section" id="termite-faq">
                            <h2>5. Termite &amp; WDI Inspection FAQs</h2>
                            <div className="native-faq-list">
                                <details className="native-faq-item" name="termite-faq" open>
                                    <summary>If drill holes are found in the basement floor, is that a bad sign?</summary>
                                    <div className="native-faq-body">
                                        Not necessarily! Evenly spaced 1/2-inch patched drill holes along a concrete basement apron, garage slab, or block wall indicate that the property received a professional liquid termiticide barrier treatment in the past. During our inspection, we carefully probe the framing above those areas to determine if any structural damage occurred and whether there is any current activity.
                                    </div>
                                </details>

                                <details className="native-faq-item" name="termite-faq">
                                    <summary>What happens if active termites are found during a pre-purchase inspection?</summary>
                                    <div className="native-faq-body">
                                        Finding termites does not mean you have to walk away from a house you love. In New York real estate transactions, when our report documents active termites or WDI damage, the buyer’s attorney typically requires the seller to pay for licensed extermination treatment (with a transferable warranty) and repair any compromised structural framing prior to closing—or issue a closing credit.
                                    </div>
                                </details>

                                <details className="native-faq-item" name="termite-faq">
                                    <summary>How can I prevent termites after moving into my Long Island home?</summary>
                                    <div className="native-faq-body">
                                        Keep soil and wood mulch at least 6 inches below exterior wood siding, extend gutter downspouts 4–6 feet away from the foundation, never stack firewood against the house or inside the garage, and ensure crawlspaces have proper vapor barriers and ventilation.
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

export default TermiteInspectionCluster;
