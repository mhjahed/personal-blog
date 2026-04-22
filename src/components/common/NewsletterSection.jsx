import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    setSubscribed(true);
    setEmail('');

    // Reset after 3 seconds
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section 
      style={{
        background: 'linear-gradient(135deg, #1a365d 0%, #2d3748 100%)',
        color: 'white',
        padding: '4rem 1.5rem'
      }}
    >
      <div className="container-lg" style={{ maxWidth: '600px' }}>
        <div className="text-center">
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📧</div>
          <h2 className="display-5 fw-900 mb-3">Subscribe to Our Newsletter</h2>
          <p className="lead text-white-50 mb-4">
            Get the latest articles and insights delivered to your inbox every week
          </p>

          {subscribed ? (
            <div 
              className="d-flex align-items-center justify-content-center gap-2 p-4 rounded-lg"
              style={{
                background: 'rgba(34, 197, 94, 0.15)',
                border: '2px solid #22c55e'
              }}
            >
              <CheckCircle size={24} style={{ color: '#22c55e' }} />
              <span style={{ color: '#22c55e', fontWeight: 700, fontSize: '1.125rem' }}>
                Successfully subscribed!
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="d-flex gap-2 flex-wrap">
              <input
                type="email"
                className="form-control flex-grow-1"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  borderRadius: '12px',
                  padding: '1rem',
                  fontSize: '1rem',
                  fontWeight: 500,
                  border: 'none'
                }}
              />
              <button
                type="submit"
                disabled={loading}
                className="btn btn-warning fw-bold px-5"
                style={{ 
                  borderRadius: '12px', 
                  whiteSpace: 'nowrap',
                  minWidth: '150px'
                }}
              >
                {loading ? (
                  <>
                    <span 
                      className="spinner-border spinner-border-sm me-2" 
                      style={{ width: '16px', height: '16px' }}
                    ></span>
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Mail size={18} className="me-2" style={{ display: 'inline' }} />
                    Subscribe
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}