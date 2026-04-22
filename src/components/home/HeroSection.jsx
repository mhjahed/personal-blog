import { useNavigate } from 'react-router-dom';
import { Search, ChevronDown, Zap } from 'lucide-react';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero position-relative">
      <div className="container-lg">
        <div className="hero-content">
          {/* Badge */}
          <div className="mb-4 animate-fade-in">
            <span className="badge badge-orange d-inline-block mb-3" style={{ animationDelay: '0s' }}>
              <Zap size={14} className="me-1" style={{ display: 'inline' }} /> Welcome to Our Blog
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="display-3 fw-900 mb-4 animate-slide-down" style={{ fontSize: '3.5rem', animationDelay: '0.1s', color: 'white' }}>
            Discover Inspiring <br />
            <span style={{ background: 'linear-gradient(135deg, #d4af37, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Stories & Insights
            </span>
          </h1>

          {/* Subheading */}
          <p className="lead mb-5 text-white-50 animate-slide-up" style={{ fontSize: '1.3rem', animationDelay: '0.2s' }}>
            Explore in-depth articles on technology, design, business and innovation. 
            Join thousands of readers discovering fresh perspectives.
          </p>

          {/* CTA Buttons */}
          <div className="d-flex gap-3 justify-content-center mb-5 flex-wrap animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <button 
              onClick={() => navigate('/blogs')}
              className="btn btn-light fw-bold px-5 py-3"
              style={{ 
                fontSize: '1rem',
                color: '#1a365d'
              }}
            >
              Explore All Blogs
            </button>
            <button 
              onClick={() => navigate('/writers')}
              className="btn btn-outline-light fw-bold px-5 py-3"
              style={{ 
                fontSize: '1rem',
                borderWidth: '2px'
              }}
            >
              Meet Our Writers
            </button>
          </div>

          {/* Search Bar */}
          <div className="search-container animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="search-wrapper">
              <Search className="search-icon" size={20} />
              <input 
                type="text"
                className="search-input"
                placeholder="Search blogs, authors, topics..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    navigate(`/blogs?search=${e.target.value}`);
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x pb-4 animate-float" style={{ left: '50%' }}>
          <ChevronDown size={28} className="text-white-50" />
        </div>
      </div>
    </section>
  );
}