import { useState } from 'react';
import { Mail, Users, BookOpen, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import authorsData from '../data/authors.json';
import blogsData from '../data/blogs.json';

export default function Writers() {
  const navigate = useNavigate();
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const getAuthorBlogs = (authorId) => {
    return blogsData.blogs.filter(blog => blog.author.id === authorId);
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        style={{
          background: 'linear-gradient(135deg, #1a365d 0%, #2d3748 100%)',
          color: 'white',
          padding: '4rem 1.5rem'
        }}
      >
        <div className="container-lg text-center">
          <h1 className="display-4 fw-900 mb-3">Meet Our Writers</h1>
          <p className="lead text-white-50">
            Talented creators sharing their expertise and insights
          </p>
        </div>
      </section>

      {/* Writers Grid */}
      <section className="section-padding bg-light">
        <div className="container-lg">
          <div className="row g-4">
            {authorsData.authors.map((author, index) => {
              const authorBlogs = getAuthorBlogs(author.id);

              return (
                <div 
                  key={author.id} 
                  className="col-md-6"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${index * 0.2}s both`
                  }}
                >
                  <div className="card h-100 overflow-hidden">
                    {/* Header Gradient */}
                    <div 
                      style={{
                        height: '150px',
                        background: 'linear-gradient(135deg, #2d3748 0%, #1a365d 100%)'
                      }}
                    />

                    {/* Author Info - Overlapped */}
                    <div className="card-body text-center" style={{ marginTop: '-80px', position: 'relative', zIndex: 1 }}>
                      {/* Avatar */}
                      <div className="mb-3">
                        <img 
                          src={author.avatar}
                          alt={author.name}
                          style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '5px solid white',
                            boxShadow: '0 4px 20px rgba(26, 54, 93, 0.2)'
                          }}
                        />
                      </div>

                      {/* Name */}
                      <h4 className="fw-900 mb-2" style={{ color: '#1a365d', fontSize: '1.5rem' }}>
                        {author.name}
                      </h4>

                      {/* Specialization */}
                      <p className="text-muted small mb-3" style={{ fontSize: '0.95rem' }}>
                        {author.specialization}
                      </p>

                      {/* Bio */}
                      <p className="text-muted mb-4" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                        {author.bio}
                      </p>

                      {/* Stats */}
                      <div className="row g-2 mb-4">
                        <div className="col-6">
                          <div 
                            style={{
                              background: '#ebf2f7',
                              padding: '1rem',
                              borderRadius: '12px',
                              textAlign: 'center'
                            }}
                          >
                            <p className="fw-900 mb-0" style={{ color: '#1a365d', fontSize: '1.5rem' }}>
                              {authorBlogs.length}
                            </p>
                            <p className="text-muted small mb-0">Articles</p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div 
                            style={{
                              background: '#ebf2f7',
                              padding: '1rem',
                              borderRadius: '12px',
                              textAlign: 'center'
                            }}
                          >
                            <p className="fw-900 mb-0" style={{ color: '#f97316', fontSize: '1.5rem' }}>
                              {author.stats.followers}
                            </p>
                            <p className="text-muted small mb-0">Followers</p>
                          </div>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="d-flex justify-content-center gap-2 mb-4">
                        <a 
                          href={author.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-link p-2"
                          style={{ color: '#1a365d' }}
                          title="Twitter"
                        >
                          𝕏
                        </a>
                        <a 
                          href={author.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-link p-2"
                          style={{ color: '#1a365d' }}
                          title="LinkedIn"
                        >
                          👔
                        </a>
                        <a 
                          href={`mailto:${author.email}`}
                          className="btn btn-link p-2"
                          style={{ color: '#1a365d' }}
                          title="Email"
                        >
                          ✉️
                        </a>
                      </div>

                      {/* View Articles Button */}
                      <button
                        onClick={() => {
                          navigate(`/blogs?author=${author.id}`);
                        }}
                        className="btn btn-primary w-100 fw-bold mb-2"
                      >
                        View Articles
                      </button>

                      {/* Toggle Details Button */}
                      <button
                        onClick={() => setSelectedAuthor(selectedAuthor?.id === author.id ? null : author)}
                        className="btn btn-outline-primary w-100 fw-bold"
                      >
                        {selectedAuthor?.id === author.id ? 'Hide Details' : 'View Details'}
                      </button>
                    </div>

                    {/* Expanded Details */}
                    {selectedAuthor?.id === author.id && (
                      <div 
                        style={{
                          background: '#f3f4f6',
                          padding: '1.5rem',
                          borderTop: '1px solid #e5e7eb'
                        }}
                        className="animate-slide-down"
                      >
                        <h6 className="fw-900 mb-3" style={{ color: '#1a365d' }}>
                          Recent Articles
                        </h6>
                        <div className="d-flex flex-column gap-2">
                          {authorBlogs.length > 0 ? (
                            authorBlogs.slice(0, 3).map(blog => (
                              <div 
                                key={blog.id}
                                className="p-2 bg-white rounded-lg cursor-pointer"
                                onClick={() => navigate(`/blog/${blog.id}`)}
                                style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = '#e5e7eb';
                                  e.currentTarget.style.transform = 'translateX(5px)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = '#ffffff';
                                  e.currentTarget.style.transform = 'translateX(0)';
                                }}
                              >
                                <p className="fw-600 small mb-1" style={{ color: '#1a365d' }}>
                                  {blog.title}
                                </p>
                                <p className="text-muted small mb-0">
                                  {new Date(blog.publishDate).toLocaleDateString()}
                                </p>
                              </div>
                            ))
                          ) : (
                            <p className="text-muted small">No articles yet</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Writers Stats */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #1a365d 0%, #2d3748 100%)', color: 'white' }}>
        <div className="container-lg">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-900 text-white mb-3">Writer Statistics</h2>
            <p className="lead text-white-50">
              Our community of talented creators
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div 
                className="text-center p-4 rounded-lg animate-glow"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👥</div>
                <h3 className="display-6 fw-900 text-white mb-2">
                  {authorsData.authors.length}
                </h3>
                <p className="text-white-50 mb-0">Active Writers</p>
              </div>
            </div>

            <div className="col-md-4">
              <div 
                className="text-center p-4 rounded-lg animate-glow"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📚</div>
                <h3 className="display-6 fw-900 text-white mb-2">
                  {blogsData.blogs.length}
                </h3>
                <p className="text-white-50 mb-0">Total Articles</p>
              </div>
            </div>

            <div className="col-md-4">
              <div 
                className="text-center p-4 rounded-lg animate-glow"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⭐</div>
                <h3 className="display-6 fw-900 text-white mb-2">
                  {(blogsData.blogs.reduce((sum, b) => sum + (b.likes / b.views), 0) / blogsData.blogs.length * 100).toFixed(1)}%
                </h3>
                <p className="text-white-50 mb-0">Avg. Engagement</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}