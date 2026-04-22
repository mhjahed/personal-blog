import { 
  Mail, 
  MapPin, 
  Phone
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', emoji: '👔', href: 'https://linkedin.com' },
    { name: 'Twitter', emoji: '𝕏', href: 'https://twitter.com' },
    { name: 'GitHub', emoji: '💻', href: 'https://github.com' },
    { name: 'Email', emoji: '✉️', href: 'mailto:info@myblog.com' },
  ];

  return (
    <footer>
      <div className="container-lg">
        <div className="row mb-4">
          {/* About */}
          <div className="col-md-3 mb-4">
            <h5>About Blog</h5>
            <p className="text-white-50">
              A platform for sharing insights on technology, design, and innovation. Inspiring stories from creative minds.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/">Home</a></li>
              <li className="mb-2"><a href="/blogs">All Blogs</a></li>
              <li className="mb-2"><a href="/writers">Writers</a></li>
              <li className="mb-2"><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-md-3 mb-4">
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/blogs?cat=Technology">Technology</a></li>
              <li className="mb-2"><a href="/blogs?cat=Design">Design</a></li>
              <li className="mb-2"><a href="/blogs?cat=Business">Business</a></li>
              <li className="mb-2"><a href="/blogs?cat=Lifestyle">Lifestyle</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5>Contact Info</h5>
            <div className="d-flex align-items-center gap-2 mb-2">
              <Mail size={16} style={{ color: '#f97316', flexShrink: 0 }} />
              <a href="mailto:info@myblog.com">info@myblog.com</a>
            </div>
            <div className="d-flex align-items-center gap-2 mb-2">
              <Phone size={16} style={{ color: '#f97316', flexShrink: 0 }} />
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
            <div className="d-flex align-items-center gap-2">
              <MapPin size={16} style={{ color: '#f97316', flexShrink: 0 }} />
              <span>New York, USA</span>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Social Links - Using Emojis */}
        <div className="text-center mb-4">
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.name !== 'Email' ? '_blank' : '_self'}
                rel={social.name !== 'Email' ? 'noopener noreferrer' : ''}
                title={social.name}
                className="d-inline-flex align-items-center justify-content-center"
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: '20px',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f97316';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#f97316';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                {social.emoji}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} My Blog. All rights reserved. | Designed with for creators</p>
        </div>
      </div>
    </footer>
  );
}