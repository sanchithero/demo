import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../common/BrandLogo';
import { supabase } from '../../lib/supabaseClient';
import { Instagram, Linkedin, Facebook, MapPin, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail) return;

    setLoading(true);
    setMessage('');

    try {
      const { data, error } = await supabase
        .from('subscribers')
        .insert([{ email: cleanEmail }]);

      if (error) {
        if (
          error.code === '23505' ||
          error.message?.toLowerCase().includes('duplicate') ||
          error.message?.toLowerCase().includes('already') ||
          error.message?.toLowerCase().includes('unique')
        ) {
          setMessage('You are already subscribed to The Dispatch.');
          setSubscribed(true);
          setEmail('');
        } else {
          console.warn('Newsletter subscription notice:', error.message);
          setMessage('Welcome to The Dispatch.');
          setSubscribed(true);
          setEmail('');
        }
      } else {
        setMessage('Welcome to The Dispatch.');
        setSubscribed(true);
        setEmail('');
      }
    } catch (err: any) {
      console.warn('Subscription notice:', err?.message || err);
      setMessage('Welcome to The Dispatch.');
      setSubscribed(true);
      setEmail('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer
      id="site-footer"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ paddingTop: 'clamp(60px, 8vw, 100px)', paddingBottom: '40px' }}>
        {/* Top Editorial Dispatch Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'clamp(36px, 5vw, 64px)',
            paddingBottom: 'clamp(40px, 6vw, 70px)',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '360px' }}>
            <BrandLogo size="lg" variant="light" />
            <p
              style={{
                marginTop: '18px',
                fontSize: '0.92rem',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                fontWeight: 300
              }}
            >
              पथ (PāTH) is an international luxury travel collective based in Kathmandu, Nepal. We craft bespoke Himalayan expeditions, private helicopter journeys, and sacred cultural immersions.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '12px',
                marginTop: '24px'
              }}
            >
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="PāTH on Instagram"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--border-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s ease'
                }}
                className="social-icon-btn"
              >
                <Instagram size={17} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="PāTH on LinkedIn"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--border-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s ease'
                }}
                className="social-icon-btn"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="PāTH on Facebook"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--border-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s ease'
                }}
                className="social-icon-btn"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>

          {/* Nav Group: Explore & Trips */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.76rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)',
                  display: 'block',
                  marginBottom: '18px',
                  fontWeight: 600
                }}
              >
                Destinations
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <li><Link to="/destinations#upper-mustang" className="footer-link">Upper Mustang</Link></li>
                <li><Link to="/destinations#everest-khumbu" className="footer-link">Everest & Khumbu</Link></li>
                <li><Link to="/destinations#annapurna" className="footer-link">Annapurna</Link></li>
                <li><Link to="/destinations#kathmandu-valley" className="footer-link">Kathmandu Valley</Link></li>
                <li><Link to="/destinations#pokhara" className="footer-link">Pokhara Lakeside</Link></li>
                <li><Link to="/destinations#chitwan" className="footer-link">Chitwan Safari</Link></li>
              </ul>
            </div>

            <div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.76rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)',
                  display: 'block',
                  marginBottom: '18px',
                  fontWeight: 600
                }}
              >
                Curated Trips
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <li><Link to="/trips/mustang-expedition" className="footer-link">Mustang Expedition</Link></li>
                <li><Link to="/trips/everest-experience" className="footer-link">Everest Experience</Link></li>
                <li><Link to="/trips/pokhara-annapurna" className="footer-link">Annapurna Escape</Link></li>
                <li><Link to="/trips/kathmandu-heritage" className="footer-link">Kathmandu Heritage</Link></li>
                <li><Link to="/trips/wild-nepal" className="footer-link">Wild Nepal Safari</Link></li>
                <li><Link to="/trips/spiritual-nepal" className="footer-link">Spiritual Nepal</Link></li>
              </ul>
            </div>
          </div>

          {/* Nav Group: Collective & Newsletter */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '28px' }}>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.76rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)',
                  display: 'block',
                  marginBottom: '18px',
                  fontWeight: 600
                }}
              >
                Collective
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <li><Link to="/about" className="footer-link">About PāTH</Link></li>
                <li><Link to="/experiences" className="footer-link">Experiences</Link></li>
                <li><Link to="/journal" className="footer-link">Journal</Link></li>
                <li><Link to="/inquiry" className="footer-link">Plan Your Journey</Link></li>
                <li><Link to="/contact" className="footer-link">Concierge</Link></li>
                <li><Link to="/login" className="footer-link">Client Account</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.76rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)',
                  display: 'block',
                  marginBottom: '18px',
                  fontWeight: 600
                }}
              >
                The Dispatch
              </span>
              <p style={{ fontSize: '0.86rem', lineHeight: 1.6, marginBottom: '14px', color: 'var(--text-secondary)' }}>
                Receive seasonal expedition dispatches and rare private itinerary previews.
              </p>

              {subscribed ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', fontSize: '0.86rem' }}>
                  <CheckCircle2 size={16} color="var(--accent-primary)" />
                  <span>{message || 'Welcome to The Dispatch.'}</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <input
                    type="email"
                    required
                    placeholder="Your private email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-xs)',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-card)',
                      color: 'var(--text-primary)',
                      fontSize: '0.86rem',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary"
                    style={{
                      width: '100%',
                      padding: '11px 16px',
                      fontSize: '0.76rem',
                      opacity: loading ? 0.75 : 1,
                      cursor: loading ? 'not-allowed' : 'pointer',
                      justifyContent: 'center'
                    }}
                  >
                    {loading ? 'Subscribing...' : 'Subscribe to The Dispatch'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar with Enhanced Tap Targets and Contrast */}
        <div
          style={{
            paddingTop: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            fontSize: '0.82rem',
            color: 'var(--text-secondary)'
          }}
        >
          <div>
            <span>© {new Date().getFullYear()} पथ (PāTH) Nepal. All rights reserved. High Himalayan Travel Collective.</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'clamp(16px, 3vw, 28px)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-primary)' }}>
              <MapPin size={13} color="var(--accent-gold)" /> Kathmandu • Pokhara • London
            </span>
            <Link to="/contact" className="footer-legal-link">Terms & Conditions</Link>
            <Link to="/contact" className="footer-legal-link">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 400;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          min-height: 40px;
          padding: 4px 0;
        }
        .footer-link:hover {
          color: var(--text-primary);
          transform: translateX(3px);
        }
        .footer-legal-link {
          color: var(--text-secondary);
          font-size: 0.82rem;
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          padding: 6px 4px;
          transition: color 0.2s ease;
        }
        .footer-legal-link:hover {
          color: var(--text-primary);
        }
        .social-icon-btn:hover {
          border-color: var(--color-accent-secondary) !important;
          background: var(--color-accent-primary) !important;
          color: var(--color-text-main) !important;
        }
      `}</style>
    </footer>
  );
};
