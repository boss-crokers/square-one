import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import '../pages/PillarStyles.css';

const BlogPreview = () => {
    const featuredPosts = blogPosts.slice(0, 3);

    return (
        <section className="section bg-background" id="blog-preview">
            <div className="container">
                <div className="section-header text-center" style={{ marginBlockEnd: '2.5rem' }}>
                    <span
                        className="pillar-badge"
                        style={{
                            backgroundColor: 'rgba(10, 25, 47, 0.08)',
                            color: 'var(--color-primary)',
                            borderColor: 'rgba(10, 25, 47, 0.2)',
                            marginBlockEnd: '0.75rem'
                        }}
                    >
                        <BookOpen size={14} aria-hidden="true" />
                        Inspector Knowledge Hub
                    </span>
                    <h2 className="text-primary">Latest From Our Inspection Blog</h2>
                    <p className="text-light section-subtitle">
                        Expert Long Island &amp; NY home buyer checklists, red flags, and maintenance insights from Certified Master Inspector Vinny Fundaro.
                    </p>
                </div>

                <div className="blog-grid">
                    {featuredPosts.map((post) => (
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

                                <h3 className="blog-card-title">
                                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                </h3>

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

                <div className="text-center" style={{ marginBlockStart: '2.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                    <Link to="/blog" className="btn btn-primary">
                        View All Blog Articles
                        <ArrowRight size={18} aria-hidden="true" style={{ marginLeft: '8px' }} />
                    </Link>
                    <Link
                        to="/services/home-inspection-long-island"
                        className="btn"
                        style={{
                            border: '2px solid var(--color-primary)',
                            color: 'var(--color-primary)',
                            backgroundColor: 'var(--color-white)'
                        }}
                    >
                        Read Complete Home Inspection Pillar Guide
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
