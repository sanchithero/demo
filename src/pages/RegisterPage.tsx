import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BrandLogo } from '../components/common/BrandLogo';
import { supabase } from '../lib/supabaseClient';
import { Mail, Lock, User, ArrowRight, CheckCircle2, Phone, Globe, Loader2, AlertCircle } from 'lucide-react';

export const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('United States');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 6) {
      setError('Password must contain at least 6 characters.');
      return;
    }

    setError('');
    setLoading(true);

    console.log('[Supabase Auth] Attempting client profile registration for:', email, {
      full_name: name,
      phone,
      country
    });

    try {
      const { data, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
            phone: phone || '',
            country: country || 'United States'
          }
        }
      });

      if (authError) {
        console.error('[Supabase Auth] Registration failed:', authError.message);
        setError(authError.message || 'Unable to create client account. Please verify your details.');
      } else {
        console.log('[Supabase Auth] Profile created successfully in Supabase:', data.user);
        setRegistered(true);
        setTimeout(() => {
          navigate('/login');
        }, 2200);
      }
    } catch (err: any) {
      console.error('[Supabase Auth] Network error during registration:', err?.message || err);
      setError(err?.message || 'An unexpected error occurred during profile registration.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      id="register-page"
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
          maxWidth: '480px',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(32px, 5vw, 44px)',
          position: 'relative',
          zIndex: 10,
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-card)',
          boxShadow: '0 24px 60px -15px rgba(0, 0, 0, 0.75)'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'inline-block', marginBottom: '12px' }}>
            <BrandLogo size="lg" variant="light" />
          </div>
          <h1 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: 400 }}>
            Create Client Profile
          </h1>
          <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Register to save customized expedition manifests and access private concierge chat.
          </p>
        </div>

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
              fontSize: '0.8rem',
              marginBottom: '14px'
            }}
          >
            <AlertCircle size={14} style={{ flexShrink: 0 }} />
            <span>{error}</span>
          </div>
        )}

        {registered ? (
          <div style={{ textAlign: 'center', padding: '24px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <CheckCircle2 size={36} color="var(--accent-gold)" />
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.2rem' }}>Profile Created Successfully</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Welcome to PāTH. Redirecting you to the client portal...
            </p>
          </div>
        ) : (
          <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                Full Name
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
                <User size={15} color="var(--accent-gold)" />
                <input
                  type="text"
                  required
                  placeholder="Lord / Lady / Mr. / Ms. Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
              <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                Email Address
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

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Telephone / WhatsApp
                </label>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-xs)',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-card)'
                  }}
                >
                  <Phone size={14} color="var(--accent-gold)" />
                  <input
                    type="tel"
                    placeholder="+1 555-0123"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: 'var(--text-primary)',
                      fontSize: '0.86rem',
                      width: '100%',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Country
                </label>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-xs)',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-card)'
                  }}
                >
                  <Globe size={14} color="var(--accent-gold)" />
                  <input
                    type="text"
                    placeholder="e.g. United Kingdom"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: 'var(--text-primary)',
                      fontSize: '0.86rem',
                      width: '100%',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                Password (min. 6 characters)
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

            <div>
              <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                Confirm Password
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
                <Lock size={15} color="var(--accent-gold)" />
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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

            <button
              type="submit"
              id="register-submit-btn"
              disabled={loading}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '13px',
                fontSize: '0.82rem',
                marginTop: '6px',
                opacity: loading ? 0.75 : 1,
                cursor: loading ? 'not-allowed' : 'pointer',
                justifyContent: 'center'
              }}
            >
              {loading ? (
                <>
                  <Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} />
                  <span>Creating Profile...</span>
                </>
              ) : (
                <>
                  <span>Create Client Profile</span>
                  <ArrowRight size={14} />
                </>
              )}
            </button>

            <div style={{ textAlign: 'center', marginTop: '8px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              <span>Already possess a profile? </span>
              <Link to="/login" style={{ color: 'var(--accent-gold)', fontWeight: 500 }}>
                Login to Portal
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
