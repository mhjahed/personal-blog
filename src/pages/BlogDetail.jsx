import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar, Heart, Share2, Eye, Lock } from 'lucide-react';
import blogsData from '../data/blogs.json';
import CommentsSection from '../components/blog/CommentsSection';


export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [adminMode, setAdminMode] = useState(false);

  const blog = blogsData.blogs.find(b => b.id === parseInt(id));

  // Scroll to top when blog changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h1 className="display-4 fw-900 mb-4">Article Not Found</h1>
          <p className="text-muted mb-4">The article you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/blogs')}
            className="btn btn-primary"
          >
            Back to Articles
          </button>
        </div>
      </div>
    );
  }

  // Check for secret blog access
  if (blog.features.secret && !adminMode) {
    return (
      <div 
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a365d 0%, #2d3748 100%)',
          color: 'white'
        }}
      >
        <div className="text-center">
          <Lock size={64} style={{ color: '#f97316', marginBottom: '1.5rem' }} />
          <h1 className="display-5 fw-900 mb-3">Access Restricted</h1>
          <p className="lead mb-4">This is a confidential article. Admin access required.</p>
          <button
            onClick={() => {
              const passcode = prompt('Enter admin passcode:');
              if (passcode === 'admin123') setAdminMode(true);
            }}
            className="btn btn-warning"
          >
            Admin Access
          </button>
        </div>
      </div>
    );
  }

  const handleRelatedBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
    // Scroll will happen automatically via useEffect
  };

  return (
    <>
      {/* Back Button & Meta */}
      <div style={{ background: '#f3f4f6', padding: '1.5rem 0' }}>
        <div className="container-lg">
          <button
            onClick={() => navigate('/blogs')}
            className="btn btn-link p-0 d-flex align-items-center gap-2 mb-3"
            style={{ color: '#1a365d', fontWeight: 700 }}
          >
            <ArrowLeft size={20} />
            Back to Articles
          </button>
        </div>
      </div>

      {/* Header with Image */}
      {blog.imageUrl && (
        <div 
          style={{
            height: '400px',
            backgroundImage: `url('${blog.imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}
        >
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(26, 54, 93, 0.3) 0%, rgba(26, 54, 93, 0.7) 100%)'
            }}
          />
        </div>
      )}

      {/* Article Content */}
      <article className="section-padding">
        <div className="container-lg" style={{ maxWidth: '800px' }}>
          {/* Category & Status Badges */}
          <div className="mb-4">
            <span 
              className="badge badge-primary me-2"
              style={{
                background: '#2d3748',
                color: 'white',
                fontWeight: 700
              }}
            >
              {blog.category}
            </span>
            {blog.features.trending && (
              <span className="badge badge-trending">🔥 Trending</span>
            )}
            {blog.features.secret && (
              <span className="badge badge-danger ms-2">🔒 Secret</span>
            )}
          </div>

          {/* Title */}
          <h1 className="display-5 fw-900 mb-3" style={{ color: '#1a365d' }}>
            {blog.title}
          </h1>

          {/* Subheading */}
          <p className="lead text-muted mb-4" style={{ fontSize: '1.25rem' }}>
            {blog.subHeading}
          </p>

          {/* Meta Information */}
          <div className="d-flex align-items-center gap-4 mb-5 flex-wrap" style={{ borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', paddingY: '1.5rem' }}>
            {/* Author */}
            <div className="d-flex align-items-center gap-3">
              <img 
                src={blog.author.avatar}
                alt={blog.author.name}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid white'
                }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/48?text=' + blog.author.name.charAt(0);
                }}
              />
              <div>
                <p className="fw-700 mb-0" style={{ color: '#1a365d' }}>{blog.author.name}</p>
                <p className="text-muted small mb-0">{blog.author.bio}</p>
              </div>
            </div>

            {/* Date */}
            <div className="d-flex align-items-center gap-2" style={{ color: '#4b5563' }}>
              <Calendar size={18} />
              <span className="fw-600">{new Date(blog.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>

            {/* Reading Time */}
            <div className="d-flex align-items-center gap-2" style={{ color: '#f97316' }}>
              <Clock size={18} />
              <span className="fw-600">{blog.readingTime} min read</span>
            </div>

            {/* Views */}
            <div className="d-flex align-items-center gap-2" style={{ color: '#4b5563' }}>
              <Eye size={18} />
              <span className="fw-600">{blog.views} views</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="mb-5" style={{ lineHeight: 1.8, fontSize: '1.0625rem', color: '#4b5563' }}>
            <p>{blog.body}</p>
          </div>

          {/* Highlight Quote/Analysis */}
          <div 
            style={{
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05) 0%, rgba(212, 175, 55, 0.05) 100%)',
              borderLeft: '4px solid #f97316',
              padding: '2rem',
              borderRadius: '8px',
              marginY: '2rem'
            }}
          >
            <p style={{ fontSize: '1.125rem', fontStyle: 'italic', color: '#1a365d', fontWeight: 600, marginBottom: 0 }}>
              "{blog.analysis}"
            </p>
          </div>

          {/* Article Ending */}
          <div className="mb-5" style={{ lineHeight: 1.8, fontSize: '1.0625rem', color: '#4b5563' }}>
            <p>{blog.ending}</p>
          </div>

          {/* Tags */}
          <div className="mb-5">
            <p className="fw-700 mb-3" style={{ color: '#1a365d' }}>Tags:</p>
            <div className="d-flex flex-wrap gap-2">
              {blog.tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => navigate(`/blogs?tag=${tag}`)}
                  className="tag"
                  style={{
                    background: '#ebf2f7',
                    color: '#1a365d',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    border: 'none',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#1a365d';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#ebf2f7';
                    e.currentTarget.style.color = '#1a365d';
                  }}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="d-flex gap-3 align-items-center flex-wrap" style={{ borderTop: '1px solid #e5e7eb', paddingTop: '2rem' }}>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="btn"
              style={{
                background: isLiked ? '#f97316' : '#ebf2f7',
                color: isLiked ? 'white' : '#1a365d',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem'
              }}
            >
              <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
              {isLiked ? 'Liked' : 'Like'} ({blog.likes + (isLiked ? 1 : 0)})
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied!');
              }}
              className="btn btn-outline-primary"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, padding: '0.75rem 1.5rem' }}
            >
              <Share2 size={18} />
              Share
            </button>
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="section-padding bg-light">
        <div className="container-lg">
          <h2 className="display-6 fw-900 mb-5" style={{ color: '#1a365d' }}>Related Articles</h2>
          <div className="row g-4">
            {blogsData.blogs
              .filter(b => b.category === blog.category && b.id !== blog.id)
              .slice(0, 3)
              .map((relatedBlog) => (
                <div key={relatedBlog.id} className="col-md-6 col-lg-4">
                  <div 
                    className="card h-100 overflow-hidden"
                    onClick={() => handleRelatedBlogClick(relatedBlog.id)}
                    style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 15px 35px rgba(26, 54, 93, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                    }}
                  >
                    {/* Featured Image */}
                    {relatedBlog.imageUrl ? (
                      <div 
                        style={{
                          height: '200px',
                          backgroundImage: `url('${relatedBlog.imageUrl}')`,
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
                      </div>
                    ) : (
                      <div 
                        style={{
                          height: '200px',
                          background: 'linear-gradient(135deg, #2d3748 0%, #1a365d 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '3rem'
                        }}
                      >
                        📖
                      </div>
                    )}

                    {/* Card Body */}
                    <div className="card-body d-flex flex-column">
                      {/* Category */}
                      <span className="badge badge-primary mb-2" style={{ width: 'fit-content' }}>
                        {relatedBlog.category}
                      </span>

                      {/* Title */}
                      <h6 
                        className="card-title mb-2" 
                        style={{ 
                          color: '#1a365d', 
                          fontWeight: 700,
                          fontSize: '1.125rem',
                          WebkitLineClamp: 2,
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {relatedBlog.title}
                      </h6>

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
                        {relatedBlog.subHeading}
                      </p>

                      {/* Author Card - With Image */}
                      <div 
                        className="mb-3 p-2 rounded-lg d-flex align-items-center gap-2"
                        style={{
                          background: '#ebf2f7',
                          marginTop: 'auto'
                        }}
                      >
                        {/* Author Avatar */}
                        <img 
                          src={relatedBlog.author.avatar}
                          alt={relatedBlog.author.name}
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '2px solid white',
                            flexShrink: 0
                          }}
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/36?text=' + relatedBlog.author.name.charAt(0);
                          }}
                        />
                        {/* Author Name */}
                        <div className="flex-grow-1 min-width-0">
                          <p className="fw-700 mb-0" style={{ color: '#1a365d', fontSize: '0.875rem' }}>
                            {relatedBlog.author.name}
                          </p>
                        </div>
                      </div>

                      {/* Metadata */}
                      <div className="d-flex align-items-center gap-2 small text-muted mb-3">
                        <span>{new Date(relatedBlog.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        <span>•</span>
                        <span style={{ color: '#f97316', fontWeight: 700 }}>
                          {relatedBlog.readingTime} min
                        </span>
                      </div>

                      {/* Read More Button */}
                      <button 
                        className="btn btn-primary w-100 fw-bold mt-auto"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRelatedBlogClick(relatedBlog.id);
                        }}
                        style={{
                          background: 'linear-gradient(135deg, #1a365d 0%, #2d3748 100%)',
                          border: 'none'
                        }}
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
            {/* Comments Section */}
      <CommentsSection blogId={blog.id} />
    </>
  );
}