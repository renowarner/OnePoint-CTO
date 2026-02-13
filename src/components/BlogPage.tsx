import './BlogPage.css';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 3,
      title: "Technical Debt: The Silent Growth Killer",
      excerpt: "Unused SaaS subscriptions and fragmented data aren't just annoying—they are an anchor on your business's scalability.",
      date: "February 12, 2026",
      category: "Operations"
    },
    {
      id: 2,
      title: "How AI Chatbots Can Qualify Leads While You Sleep",
      excerpt: "Lead capture is only half the battle. Discover how to use intelligent agents to qualify prospects before they ever reach your inbox.",
      date: "January 15, 2026",
      category: "AI & Automation"
    },
    {
      id: 1,
      title: "The 'Three Expert' Problem: Why Disconnected Systems Kill Profit",
      excerpt: "Hiring separate web, IT, and marketing specialists often leads to technical friction. Here is how a unified roadmap saves you thousands.",
      date: "December 10, 2025",
      category: "Strategy"
    }
  ];

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
            {blogPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="read-more">Read Article →</Link>
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
