import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock, ArrowRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="contact-page" className="theme-primary" style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)', backgroundColor: 'var(--bg-primary)' }}>
      {/* Header */}
      <section className="section-pt section-pb" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container-editorial">
          <div className="editorial-kicker">
            <span>Direct Concierge • सम्पर्क</span>
          </div>
          <h1 className="editorial-title-lg" style={{ color: 'var(--text-primary)', marginBottom: '18px' }}>
            Private Concierge & Offices
          </h1>
          <p className="editorial-lead" style={{ color: 'var(--text-secondary)' }}>
            Connect with our expedition leads in Kathmandu or our private client liaisons in London and Zurich.
          </p>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="section-py">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'clamp(32px, 4vw, 44px)',
              marginBottom: 'clamp(48px, 6vw, 76px)'
            }}
          >
            {/* Kathmandu Headquarters */}
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                padding: 'clamp(26px, 4vw, 34px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600 }} className="font-display">
                  Global Headquarters
                </span>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>UTC+05:45</span>
              </div>

              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', fontWeight: 400 }}>
                Kathmandu Sanctuary Office
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={15} color="var(--accent-gold)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>Durbar Marg Heritage Arcade, Level 3, Kathmandu 44600, Nepal</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={15} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                  <span>+977 1 422 9800 / +977 980 120 4500</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={15} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                  <span>concierge@pathnepal.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Clock size={15} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                  <span>Sunday – Friday: 08:30 – 19:00 NPT</span>
                </div>
              </div>
            </div>

            {/* Pokhara Operations Center */}
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                padding: 'clamp(26px, 4vw, 34px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600 }} className="font-display">
                  Alpine Logistics
                </span>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>UTC+05:45</span>
              </div>

              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', fontWeight: 400 }}>
                Pokhara Heli & Lake Base
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={15} color="var(--accent-gold)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>Lakeside Center, Pokhara 33700, Kaski, Nepal</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={15} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                  <span>+977 61 465 220</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={15} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                  <span>pokhara@pathnepal.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Clock size={15} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                  <span>Daily Heli Dispatch: 06:00 – 18:00 NPT</span>
                </div>
              </div>
            </div>

            {/* London Private Client Liaison */}
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                padding: 'clamp(26px, 4vw, 34px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600 }} className="font-display">
                  European Liaison
                </span>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>UTC+00:00</span>
              </div>

              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', fontWeight: 400 }}>
                London Private Office
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={15} color="var(--accent-gold)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>Mayfair Private Suites, London W1K 3QT, United Kingdom</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={15} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                  <span>+44 20 7946 0912</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={15} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                  <span>london@pathnepal.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Clock size={15} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                  <span>Monday – Friday: 09:00 – 18:00 GMT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer Concluding CTA Block */}
      <section
        className="theme-surface"
        style={{
          padding: 'clamp(60px, 8vw, 100px) 0',
          borderTop: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-surface)',
          textAlign: 'center'
        }}
      >
        <div className="container-editorial">
          <div className="editorial-kicker" style={{ justifyContent: 'center' }}>
            <span>Initiate Contact • यात्रा आरम्भ</span>
          </div>
          <h2 className="editorial-title-lg" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>
            YOUR PATH THROUGH NEPAL STARTS HERE
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 28px', fontWeight: 300, lineHeight: 1.7 }}>
            Complete our confidential inquiry manifest to begin planning with our senior mountain curators.
          </p>
          <Link to="/inquiry" className="btn-primary" style={{ padding: '14px 34px', fontSize: '0.82rem' }}>
            <span>Design Your Journey</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
};
