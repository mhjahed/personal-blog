import { Clock, Eye, Heart, Calendar, TrendingUp, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BlogCard({ blog }) {
  const navigate = useNavigate();

  return (
    <div 
      className="card h-100 overflow-hidden cursor-pointer"
      onClick={() => navigate(`/blog/${blog.id}`)}
      style={{ cursor: 'pointer' }}
    >
      {/* Image Section with Fallback */}
      {blog.imageUrl ? (
        <div 
          style={{
            height: '240px',
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
              background: 'linear-gradient(135deg, rgba(26, 54, 93, 0.6) 0%, rgba(26, 54, 93, 0.3) 100%)',
              transition: 'all 0.3s ease'
            }}
            className="blog-image-overlay"
          />

          {/* Badges */}
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

          {/* View Count */}
          <div className="position-absolute bottom-0 end-0 p-3">
            <div className="d-flex align-items-center gap-2 small" style={{ background: 'rgba(0, 0, 0, 0.6)', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px' }}>
              <Eye size={14} />
              <span>{blog.views}</span>
            </div>
          </div>
        </div>
      ) : (
        <div 
          style={{
            height: '240px',
            background: 'linear-gradient(135deg, #2d3748 0%, #1a365d 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          <div style={{ fontSize: '3rem' }}>📖</div>
        </div>
      )}

      {/* Card Body */}
      <div className="card-body d-flex flex-column">
          {/* Category Badge */}
        <div className="mb-2">
          <span 
            className="badge badge-primary"
            style={{
              background: '#2d3748',
              color: 'white',
              fontWeight: 700
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
            overflow: 'hidden'
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
            overflow: 'hidden'
          }}
        >
          {blog.subHeading}
        </p>

        {/* Author Card - With Image */}
        <div 
          className="mb-3 p-2 rounded-lg d-flex align-items-center gap-2"
          style={{
            background: '#ebf2f7'
          }}
        >
          {/* Author Avatar */}
          <img 
            src={blog.author.avatar} 
            alt={blog.author.name}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid white',
              flexShrink: 0
            }}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/36?text=' + blog.author.name.charAt(0);
            }}
          />
          {/* Author Name */}
          <div className="flex-grow-1 min-width-0">
            <p className="fw-700 mb-0" style={{ color: '#1a365d', fontSize: '0.875rem' }}>
              {blog.author.name}
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
          <div className="d-flex gap-3 small">
            <span style={{ color: '#1a365d', fontWeight: 700 }}>
              ❤️ {blog.likes}
            </span>
            <span style={{ color: '#4b5563' }}>
              👁️ {blog.views}
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/blog/${blog.id}`);
            }}
            className="btn btn-sm"
            style={{
              background: 'linear-gradient(135deg, #1a365d 0%, #2d3748 100%)',
              color: 'white',
              fontSize: '0.875rem',
              fontWeight: 700,
              padding: '0.5rem 0.875rem',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
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
  );
}