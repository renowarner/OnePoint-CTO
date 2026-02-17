import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BlogPage.css';

const BlogPage = () => {
  const navigate = useNavigate();
  const [highlightedId, setHighlightedId] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 7,
      title: "The Invisible Hemorrhage: Why 'Set It and Forget It' IT Costs More Than You Think",
      excerpt: "Neglecting system maintenance isn't saving you money—it's likely costing you thousands in hidden fees and lost revenue.",
      date: "February 20, 2026",
      category: "Risk Management"
    },
    {
      id: 3,
      title: "Technical Debt: The Silent Growth Killer",
      excerpt: "Unused SaaS subscriptions and fragmented data aren't just annoying—they are an anchor on your business's scalability.",
      date: "January 14, 2026",
      category: "Operations"
    },
    {
      id: 2,
      title: "How AI Chatbots Can Qualify Leads While You Sleep",
      excerpt: "Lead capture is only half the battle. Discover how to use intelligent agents to qualify prospects before they ever reach your inbox.",
      date: "December 15, 2025",
      category: "AI & Automation"
    },
    {
      id: 1,
      title: "The 'Three Expert' Problem: Why Disconnected Systems Kill Profit",
      excerpt: "Hiring separate web, IT, and marketing specialists often leads to technical friction. Here is how a unified roadmap saves you thousands.",
      date: "November 17, 2025",
      category: "Strategy"
    },
    {
      id: 6,
      title: "AI as an Implementation Layer: The New Secret to Business Agility",
      excerpt: "Instead of rigid code, use intelligent agents to bridge the gaps between your tools and create a truly unified engine.",
      date: "October 19, 2025",
      category: "AI & Automation"
    },
    {
      id: 5,
      title: "The Hidden Cost of SaaS Sprawl: Are You Overpaying for Friction?",
      excerpt: "Most businesses overspend on software by 20–30%. Learn how to identify and eliminate the 'Friction Tax'.",
      date: "September 20, 2025",
      category: "Cost Optimization"
    },
    {
      id: 4,
      title: "Why I started OnePoint CTO: Bridging the Small Business Tech Gap",
      excerpt: "Small businesses are being left behind in the technical arms race. Here is how we provide high-level leadership for everyone.",
      date: "August 21, 2025",
      category: "Vision"
    }
  ];

  const handleCardClick = (id: number) => {
    if (highlightedId === id) {
      // Second click - navigate
      navigate(`/blog/${id}`);
    } else {
      // First click - highlight
      setHighlightedId(id);
    }
  };

  return (
    <div className="blog-page-container">
      <section className="blog-hero">
        <div className="container">
          <h2 className="section-title">The V-CTO Blog</h2>
          <p className="blog-intro">
            Insights on technical leadership, AI implementation, and scaling 
            small business operations.
          </p>
        </div>
      </section>

      <section className="blog-list-section">
        <div className="container">
          <div className="blog-grid">
            {/* Featured Post (First Item) */}
            {blogPosts.length > 0 && (
              <article 
                key={blogPosts[0].id} 
                className={`featured-blog-card ${highlightedId === blogPosts[0].id ? 'highlighted' : ''}`}
                onClick={() => handleCardClick(blogPosts[0].id)}
              >
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="blog-category">{blogPosts[0].category}</span>
                    <span className="blog-date">{blogPosts[0].date}</span>
                  </div>
                  <h3>{blogPosts[0].title}</h3>
                  <p>{blogPosts[0].excerpt}</p>
                  <span className="read-more">
                    {highlightedId === blogPosts[0].id ? 'Click again to read →' : 'Read Feature Story →'}
                  </span>
                </div>
              </article>
            )}

            {/* Remaining Posts */}
            {blogPosts.slice(1).map(post => (
              <article 
                key={post.id} 
                className={`blog-card ${highlightedId === post.id ? 'highlighted' : ''}`}
                onClick={() => handleCardClick(post.id)}
              >
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="read-more">
                    {highlightedId === post.id ? 'Click again to read →' : 'Read Article →'}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-cta">
        <div className="container">
          <div className="cta-box">
            <h4>Want technical insights delivered to your inbox?</h4>
            <p>Join other business owners staying ahead of the technical curve.</p>
            <Link to="/contact" className="btn btn-tier">Subscribe to Updates</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
