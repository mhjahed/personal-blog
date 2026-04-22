import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Bell } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-lg d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          <div 
            style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #1a365d 0%, #f97316 100%)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="fw-bold text-white"
          >
            AB
          </div>
          <span>My <span style={{ color: '#f97316' }}>Blog</span></span>
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler border-0"
          onClick={() => setIsOpen(!isOpen)}
          style={{ outline: 'none', boxShadow: 'none' }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/blogs"
                className={`nav-link ${isActive('/blogs') ? 'active' : ''}`}
              >
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/writers"
                className={`nav-link ${isActive('/writers') ? 'active' : ''}`}
              >
                Writers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/admin-secret"
                className={`nav-link ${isActive('/admin-secret') ? 'active' : ''}`}
              >
                <span>🔐 Admin</span>
              </Link>
            </li>
          </ul>

          {/* Right Side Icons */}
          <div className="d-flex align-items-center gap-3 ms-4 mt-3 mt-lg-0">
            <button className="btn btn-link p-0" style={{ color: '#1a365d' }}>
              <Search size={20} />
            </button>
            <button className="btn btn-link p-0 position-relative" style={{ color: '#1a365d' }}>
              <Bell size={20} />
              <span 
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                style={{ 
                  background: '#f97316',
                  fontSize: '0.65rem',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}