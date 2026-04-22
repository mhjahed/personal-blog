import { useState } from 'react';
import { Lock, Plus, Edit, Trash2, Download, Upload, LogOut } from 'lucide-react';
import AdminPanel from '../components/admin/AdminPanel';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  const ADMIN_PASSCODE = 'admin123';

  const handleLogin = () => {
    if (passcode === ADMIN_PASSCODE) {
      setIsAuthenticated(true);
      setError('');
      setPasscode('');
    } else {
      setError('Incorrect passcode. Try: admin123');
      setPasscode('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div 
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #1a365d 0%, #2d3748 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}
      >
        <div className="card" style={{ maxWidth: '450px', width: '100%' }}>
          <div className="card-body p-5">
            {/* Icon */}
            <div 
              className="d-flex align-items-center justify-content-center mb-4"
              style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #f97316, #d4af37)',
                borderRadius: '16px',
                margin: '0 auto'
              }}
            >
              <Lock size={40} style={{ color: 'white' }} />
            </div>

            {/* Title */}
            <h2 className="text-center fw-900 mb-2" style={{ color: '#1a365d', fontSize: '1.75rem' }}>
              Admin Access
            </h2>
            <p className="text-center text-muted mb-4">
              Enter your passcode to access the admin panel
            </p>

            {/* Form */}
            <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
              <div className="mb-3">
                <label className="form-label fw-700">Passcode</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="••••••••"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                />
              </div>

              {error && (
                <div className="alert alert-danger small mb-3" style={{ color: '#dc2626' }}>
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary w-100 fw-bold"
              >
                Login
              </button>
            </form>

            {/* Hint */}
            <p className="text-center text-muted small mt-4" style={{ fontSize: '0.85rem' }}>
              💡 Demo passcode: <strong>admin123</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f3f4f6', paddingY: '2rem' }}>
      {/* Header */}
      <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', marginBottom: '2rem' }}>
        <div className="container-lg d-flex align-items-center justify-content-between py-3">
          <h1 className="fw-900" style={{ color: '#1a365d', margin: 0, fontSize: '1.75rem' }}>
            Admin Dashboard
          </h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="btn btn-outline-danger fw-bold d-flex align-items-center gap-2"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      {/* Admin Panel */}
      <AdminPanel />
    </div>
  );
}