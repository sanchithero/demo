import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BrandLogo } from '../components/common/BrandLogo';
import { Mail, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setLoggedIn(true);
      setTimeout(() => {
        navigate('/trips');
      }, 1400);
    }
  };

  return (
    <main
      id="login-page"
      className="theme-primary"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'calc(var(--nav-height) + 20px) 20px 40px',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        className="portal-card-wrapper"
        style={{
          width: '100%',
          maxWidth: '460px',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(32px, 5vw, 44px)',
          position: 'relative',
          zIndex: 10,
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-card)',
          boxShadow: '0 24px 60px -15px rgba(0, 0, 0, 0.75)'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{ display: 'inline-block', marginBottom: '14px' }}>
            <BrandLogo size="lg" variant="light" />
          </div>
          <h1 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: 400 }}>
            Client Portal Login
          </h1>
          <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
            Access your private expedition manifest, flight bookings, and health briefings.
          </p>
        </div>

        {loggedIn ? (
          <div style={{ textAlign: 'center', padding: '24px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <CheckCircle2 size={36} color="var(--accent-gold)" />
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.2rem' }}>Welcome Back</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Redirecting to your expedition dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                Client Email
              </label>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-xs)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)'
                }}
              >
                <Mail size={15} color="var(--accent-gold)" />
                <input
                  type="email"
                  required
                  placeholder="client@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    width: '100%',
                    fontFamily: 'inherit'
                  }}
                />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <label style={{ fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Password
                </label>
                <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('Password recovery sent to registered email.'); }} style={{ fontSize: '0.74rem', color: 'var(--accent-gold)' }}>
                  Forgot Password?
                </a>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-xs)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)'
                }}
              >
                <Lock size={15} color="var(--accent-gold)" />
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    width: '100%',
                    fontFamily: 'inherit'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ accentColor: 'var(--accent-primary)' }}
              />
              <label htmlFor="rememberMe" style={{ cursor: 'pointer' }}>Remember this device for 30 days</label>
            </div>

            <button
              type="submit"
              id="login-submit-btn"
              className="btn-primary"
              style={{ width: '100%', padding: '13px', fontSize: '0.82rem' }}
            >
              <span>Login to Portal</span>
              <ArrowRight size={14} />
            </button>

            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              <span>Do not possess a client profile? </span>
              <Link to="/register" style={{ color: 'var(--accent-gold)', fontWeight: 500 }}>
                Create Account
              </Link>
            </div>
          </form>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .portal-card-wrapper {
            min-height: calc(100svh - 100px) !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            padding-bottom: 2rem !important;
          }
        }
      `}</style>
    </main>
  );
};
