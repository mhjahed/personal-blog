import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitted(true);
    setLoading(false);

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
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
          <h1 className="display-4 fw-900 mb-3">Get In Touch</h1>
          <p className="lead text-white-50">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-light">
        <div className="container-lg">
          <div className="row g-5">
            {/* Contact Information */}
            <div className="col-lg-4">
              {/* Email */}
              <div className="mb-4 animate-slide-left" style={{ animationDelay: '0s' }}>
                <div 
                  className="d-flex align-items-center gap-3 mb-3"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #f97316, #d4af37)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Mail size={28} style={{ color: 'white' }} />
                </div>
                <h5 className="fw-900 mb-2" style={{ color: '#1a365d' }}>Email</h5>
                <p className="text-muted">info@theopenblogs.com</p>
                <a 
                  href="mailto:info@myblog.com"
                  className="btn btn-link p-0 fw-700"
                  style={{ color: '#f97316' }}
                >
                  Send Email →
                </a>
              </div>

              {/* Phone */}
              <div className="mb-4 animate-slide-left" style={{ animationDelay: '0.1s' }}>
                <div 
                  className="d-flex align-items-center gap-3 mb-3"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #f97316, #d4af37)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Phone size={28} style={{ color: 'white' }} />
                </div>
                <h5 className="fw-900 mb-2" style={{ color: '#1a365d' }}>Phone</h5>
                <p className="text-muted">Coming Soon</p>
                <a 
                  href="tel:+1234567890"
                  className="btn btn-link p-0 fw-700"
                  style={{ color: '#f97316' }}
                >
                  Call Us →
                </a>
              </div>

              {/* Location */}
              <div className="animate-slide-left" style={{ animationDelay: '0.2s' }}>
                <div 
                  className="d-flex align-items-center gap-3 mb-3"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #f97316, #d4af37)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <MapPin size={28} style={{ color: 'white' }} />
                </div>
                <h5 className="fw-900 mb-2" style={{ color: '#1a365d' }}>Location</h5>
                <p className="text-muted">New York, USA</p>
                <a 
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-link p-0 fw-700"
                  style={{ color: '#f97316' }}
                >
                  View Map →
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="card border-0 animate-slide-right" style={{ animationDelay: '0s' }}>
                <div className="card-body p-5">
                  {submitted ? (
                    <div className="text-center py-5">
                      <div 
                        className="d-inline-flex align-items-center justify-content-center mb-3"
                        style={{
                          width: '80px',
                          height: '80px',
                          background: 'rgba(34, 197, 94, 0.1)',
                          borderRadius: '50%'
                        }}
                      >
                        <CheckCircle size={48} style={{ color: '#22c55e' }} />
                      </div>
                      <h4 className="fw-900 mb-2" style={{ color: '#1a365d' }}>
                        Message Sent Successfully!
                      </h4>
                      <p className="text-muted mb-4">
                        Thank you for getting in touch. We'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      {/* Name Field */}
                      <div className="mb-4">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      {/* Email Field */}
                      <div className="mb-4">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      {/* Subject Field */}
                      <div className="mb-4">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          required
                        />
                      </div>

                      {/* Message Field */}
                      <div className="mb-4">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="6"
                          placeholder="Tell us more about your inquiry..."
                          required
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary btn-lg w-100 fw-bold"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        {loading ? (
                          <>
                            <span 
                              className="spinner-border spinner-border-sm me-2" 
                              style={{ width: '18px', height: '18px' }}
                            ></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section 
        style={{
          background: 'linear-gradient(135deg, #1a365d 0%, #2d3748 100%)',
          color: 'white',
          padding: '4rem 1.5rem'
        }}
      >
        <div className="container-lg" style={{ maxWidth: '600px' }}>
          <div className="text-center">
            <h2 className="display-5 fw-900 mb-3">Subscribe to Our Newsletter</h2>
            <p className="lead text-white-50 mb-4">
              Get the latest articles delivered to your inbox
            </p>

            <div className="d-flex gap-2">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                style={{
                  borderRadius: '12px',
                  padding: '1rem',
                  fontSize: '1rem',
                  fontWeight: 500
                }}
              />
              <button
                className="btn btn-warning fw-bold px-5"
                style={{ borderRadius: '12px', whiteSpace: 'nowrap' }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}