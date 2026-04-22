import { Star, TrendingUp, Lock, Clock, User, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FeaturedSection({ blogs = [] }) {
  const navigate = useNavigate();
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <section className="section-padding bg-light">
      <div className="container-lg">
        {/* Section Title */}
        <div className="section-title animate-fade-in">
          <h2 className="display-5 fw-bold mb-3">
            <Star className="me-2" style={{ color: '#d4af37', display: 'inline' }} />
            Featured Articles
          </h2>
          <p className="text-muted fs-5">
            Handpicked stories that deserve your attention
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="row g-4">
          {featuredBlogs.length > 0 ? (
            featuredBlogs.map((blog, index) => (
              <div 
                key={blog.id} 
                className="col-md-6 col-lg-4 animate-slide-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card h-100 overflow-hidden" style={{ cursor: 'pointer' }}>
                  
                  {/* Featured Image */}
                  <div 
                    style={{
                      height: '200px',
                      backgroundImage: `url('${blog.imageUrl}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Overlay Gradient */}
                    <div 
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(26, 54, 93, 0.4) 0%, rgba(26, 54, 93, 0.2) 100%)',
                        transition: 'all 0.3s ease'
                      }}
                      className="blog-image-overlay"
                    />

                    {/* Badge Container */}
                    <div className="position-absolute top-0 start-0 p-3" style={{ zIndex: 2 }}>
                      <div className="d-flex gap-2 flex-wrap">
                        {blog.features.trending && (
                          <span className="badge badge-trending">
                            <TrendingUp size={12} className="me-1" style={{ display: 'inline' }} /> Trending
                          </span>
                        )}
                        {blog.features.secret && (
                          <span className="badge badge-danger">
                            <Lock size={12} className="me-1" style={{ display: 'inline' }} /> Secret
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="card-body d-flex flex-column">
                    {/* Category Badge */}
                    <div className="mb-2">
                      <span 
                        className="badge badge-primary"
                        style={{ 
                          fontSize: '0.85rem', 
                          fontWeight: 700, 
                          padding: '0.5rem 0.875rem',
                          background: '#2d3748',
                          color: 'white'
                        }}
                      >
                        {blog.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h5 
                      className="card-title mb-2 lh-base" 
                      style={{ 
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#1a365d',
                        WebkitLineClamp: 2,
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        minHeight: '60px'
                      }}
                    >
                      {blog.title}
                    </h5>

                    {/* Subheading */}
                    <p 
                      className="text-muted small mb-3" 
                      style={{
                        WebkitLineClamp: 2,
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        fontSize: '0.95rem',
                        minHeight: '45px'
                      }}
                    >
                      {blog.subHeading}
                    </p>

                    {/* Author Card - With Image */}
                    <div 
                      className="mb-3 p-2 rounded-lg"
                      style={{
                        background: '#ebf2f7',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem'
                      }}
                    >
                      {/* Author Avatar */}
                      <img 
                        src={blog.author.avatar} 
                        alt={blog.author.name}
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '2px solid white',
                          flexShrink: 0
                        }}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/40?text=' + blog.author.name.charAt(0);
                        }}
                      />
                      {/* Author Info */}
                      <div className="flex-grow-1 min-width-0">
                        <p className="fw-700 mb-0" style={{ color: '#1a365d', fontSize: '0.875rem' }}>
                          {blog.author.name}
                        </p>
                        <p className="text-muted mb-0" style={{ fontSize: '0.75rem' }}>
                          {blog.author.bio}
                        </p>
                      </div>
                    </div>

                    {/* Date & Reading Time */}
                    <div className="d-flex align-items-center gap-3 mb-3 small text-muted">
                      <span className="d-flex align-items-center gap-1">
                        <Calendar size={14} />
                        {new Date(blog.publishDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className="d-flex align-items-center gap-1" style={{ color: '#f97316' }}>
                        <Clock size={14} />
                        {blog.readingTime} min
                      </span>
                    </div>

                    {/* Divider */}
                    <div style={{ height: '1px', background: '#e5e7eb', margin: '0.75rem 0' }}></div>

                    {/* Stats & Read Button */}
                    <div className="mt-auto d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-2 small">
                        <span style={{ color: '#1a365d', fontWeight: 700 }}>
                          ❤️ {blog.likes}
                        </span>
                        <span style={{ color: '#4b5563' }}>
                          👁️ {blog.views}
                        </span>
                      </div>
                      <button
                        onClick={() => navigate(`/blog/${blog.id}`)}
                        className="btn btn-sm"
                        style={{
                          background: 'linear-gradient(135deg, #1a365d 0%, #2d3748 100%)',
                          color: 'white',
                          fontSize: '0.875rem',
                          fontWeight: 700,
                          padding: '0.5rem 1rem',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 10px 25px rgba(26, 54, 93, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        Read →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="text-muted">No featured blogs available yet.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}