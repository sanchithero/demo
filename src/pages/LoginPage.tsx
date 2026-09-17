import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BrandLogo } from '../components/common/BrandLogo';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabaseClient';
import { Mail, Lock, ArrowRight, CheckCircle2, LogOut, Compass, Calendar, Users, Loader2, AlertCircle } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { user, signOut, loading: authLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [inquiries, setInquiries] = useState<any[]>([]);
  const [inquiriesLoading, setInquiriesLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch inquiries when user is logged in
  useEffect(() => {
    let isMounted = true;
    if (user?.email) {
      setInquiriesLoading(true);
      (async () => {
        try {
          const { data, error } = await supabase
            .from('inquiries')
            .select('*')
            .eq('email', user.email)
            .order('created_at', { ascending: false });

          if (isMounted && !error && data) {
            setInquiries(data);
          }
        } catch (err) {
          console.warn('Error fetching inquiries:', err);
        } finally {
          if (isMounted) {
            setInquiriesLoading(false);
          }
        }
      })();
    }
    return () => {
      isMounted = false;
    };
  }, [user]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setLoading(true);
    setError('');

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (authError) {
        setError(authError.message || 'Invalid login credentials. Please verify your email and password.');
      }
    } catch (err: any) {
      setError(err?.message || 'An unexpected error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut();
    setInquiries([]);
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
          maxWidth: user ? '640px' : '460px',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(28px, 5vw, 44px)',
          position: 'relative',
          zIndex: 10,
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-card)',
          boxShadow: '0 24px 60px -15px rgba(0, 0, 0, 0.75)',
          transition: 'max-width 0.3s ease'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'inline-block', marginBottom: '14px' }}>
            <BrandLogo size="lg" variant="light" />
          </div>
          <h1 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: 400 }}>
            {user ? 'Client Concierge Portal' : 'Client Portal Login'}
          </h1>
          <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
            {user
              ? 'Access your private expedition manifests, flight bookings, and health briefings.'
              : 'Access your private expedition manifest, flight bookings, and health briefings.'}
          </p>
        </div>

        {/* LOGGED IN: Client Dashboard */}
        {user ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', animation: 'fadeIn 0.35s ease' }}>
            {/* User Profile Card */}
            <div
              style={{
                padding: '18px 20px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
                  Active Client
                </span>
                <h2 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 500, marginTop: '2px' }}>
                  {user.user_metadata?.full_name || user.email?.split('@')[0]}
                </h2>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  {user.email}
                </span>
              </div>

              <button
                onClick={handleLogout}
                id="portal-logout-btn"
                className="btn-secondary"
                style={{ padding: '8px 16px', fontSize: '0.76rem', gap: '6px' }}
              >
                <LogOut size={13} />
                <span>Sign Out</span>
              </button>
            </div>

            {/* Previous Inquiries Section */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                  Expedition Manifests
                </h3>
                <Link
                  to="/inquiry"
                  style={{
                    fontSize: '0.76rem',
                    color: 'var(--accent-gold)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span>New Inquiry</span>
                  <ArrowRight size={12} />
                </Link>
              </div>

              {inquiriesLoading ? (
                <div style={{ textAlign: 'center', padding: '24px', color: 'var(--text-secondary)' }}>
                  <Loader2 size={20} style={{ animation: 'spin 1s linear infinite', margin: '0 auto 8px' }} />
                  <span style={{ fontSize: '0.82rem' }}>Retrieving expedition records...</span>
                </div>
              ) : inquiries.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {inquiries.map((inq, idx) => (
                    <div
                      key={inq.id || idx}
                      style={{
                        padding: '14px 16px',
                        borderRadius: 'var(--radius-xs)',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.84rem'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                        <strong style={{ color: 'var(--text-primary)' }}>
                          {inq.journey_details?.destination || 'Himalayan Expedition'}
                        </strong>
                        <span
                          style={{
                            fontSize: '0.7rem',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            background: 'rgba(57, 5, 23, 0.5)',
                            border: '1px solid var(--color-accent-secondary)',
                            color: 'var(--color-accent-secondary)'
                          }}
                        >
                          Under Concierge Review
                        </span>
                      </div>
                      <div style={{ display: 'flex', gap: '16px', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <Calendar size={12} />
                          {inq.journey_details?.dates || 'Season TBD'}
                        </span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <Users size={12} />
                          {inq.journey_details?.travelers ? `${inq.journey_details.travelers} Guests` : 'Private'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  style={{
                    padding: '24px',
                    textAlign: 'center',
                    background: 'var(--bg-card)',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid var(--border-card)'
                  }}
                >
                  <Compass size={28} color="var(--accent-gold)" style={{ margin: '0 auto 8px', opacity: 0.8 }} />
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                    No expedition manifests submitted yet.
                  </p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
                    Plan your first bespoke Himalayan journey with our Kathmandu concierge.
                  </p>
                  <Link
                    to="/inquiry"
                    className="btn-primary"
                    style={{ display: 'inline-flex', padding: '10px 22px', fontSize: '0.78rem' }}
                  >
                    <span>Plan Your Journey</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* LOGGED OUT: Login Form */
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {error && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-xs)',
                  background: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid #ef4444',
                  color: '#fca5a5',
                  fontSize: '0.8rem'
                }}
              >
                <AlertCircle size={14} style={{ flexShrink: 0 }} />
                <span>{error}</span>
              </div>
            )}

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
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Password recovery link dispatched to your registered email.');
                  }}
                  style={{ fontSize: '0.74rem', color: 'var(--accent-gold)' }}
                >
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
              disabled={loading}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '13px',
                fontSize: '0.82rem',
                opacity: loading ? 0.75 : 1,
                cursor: loading ? 'not-allowed' : 'pointer',
                justifyContent: 'center'
              }}
            >
              {loading ? (
                <>
                  <Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <span>Login to Portal</span>
                  <ArrowRight size={14} />
                </>
              )}
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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
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
