import React, { useEffect } from 'react';
import { DESTINATIONS } from '../data/destinations';
import { Link } from 'react-router-dom';
import { Compass, Mountain, Calendar, ArrowUpRight, ArrowRight } from 'lucide-react';

export const DestinationsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="destinations-page" className="theme-primary" style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)', backgroundColor: 'var(--bg-primary)' }}>
      {/* Page Header */}
      <section className="section-pt section-pb" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container-editorial">
          <div className="editorial-kicker">
            <span>Sacred Topography • गन्तव्यहरू</span>
          </div>
          <h1 className="editorial-title-lg" style={{ color: 'var(--text-primary)', marginBottom: '18px' }}>
            Territories of Nepal
          </h1>
          <p className="editorial-lead" style={{ color: 'var(--text-secondary)' }}>
            From the subtropical sal forests of Chitwan where one-horned rhinos roam, to the windswept Tibetan rain shadow of Upper Mustang and the granite giants of Khumbu.
          </p>
        </div>
      </section>

      {/* Destinations List / Large Visual Compositions */}
      <section className="section-py">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(70px, 9vw, 120px)' }}>
          {DESTINATIONS.map((dest, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <article
                key={dest.id}
                id={dest.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: 'clamp(36px, 5vw, 68px)',
                  alignItems: 'center'
                }}
              >
                {/* Media Column */}
                <div
                  className="cinematic-media-frame"
                  style={{
                    order: isEven ? 2 : 1,
                    height: 'clamp(380px, 48vw, 560px)',
                    borderRadius: 'var(--radius-lg)'
                  }}
                >
                  <img
                    src={dest.heroImage}
                    alt={dest.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '6px 14px',
                      background: 'rgba(22, 48, 43, 0.9)',
                      backdropFilter: 'blur(12px)',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--color-accent-secondary)'
                    }}
                  >
                    <Compass size={12} />
                    <span>{dest.coordinates}</span>
                  </div>
                </div>

                {/* Narrative Column */}
                <div style={{ order: isEven ? 1 : 2, display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <span
                      className="font-devanagari"
                      style={{ fontSize: '1.25rem', color: 'var(--accent-gold)', display: 'block', marginBottom: '4px' }}
                    >
                      {dest.devanagari}
                    </span>
                    <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.7rem)', color: 'var(--text-primary)', fontWeight: 400, lineHeight: 1.15 }}>
                      {dest.name}
                    </h2>
                    <p style={{ fontSize: '0.94rem', color: 'var(--accent-gold)', fontStyle: 'italic', fontFamily: 'var(--font-serif)', marginTop: '4px' }}>
                      {dest.subtitle}
                    </p>
                  </div>

                  {/* Metadata Chips with High Contrast */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    <div
                      style={{
                        padding: '8px 14px',
                        borderRadius: 'var(--radius-xs)',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.8rem',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <Mountain size={13} color="var(--accent-gold)" />
                      <span>{dest.altitude}</span>
                    </div>

                    <div
                      style={{
                        padding: '8px 14px',
                        borderRadius: 'var(--radius-xs)',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.8rem',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <Calendar size={13} color="var(--accent-gold)" />
                      <span>{dest.bestSeason}</span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: 'var(--text-secondary)', fontWeight: 300 }}>
                    {dest.fullOverview}
                  </p>

                  {/* Highlights */}
                  <div>
                    <span style={{ fontSize: '0.74rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                      Private Encounters:
                    </span>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
                      {dest.highlights.map((h, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '8px', fontSize: '0.86rem', color: 'var(--text-primary)', fontWeight: 300 }}>
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-primary)', flexShrink: 0 }} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', marginTop: '10px' }}>
                    <Link
                      to={`/trips/${dest.recommendedTripId || 'mustang-expedition'}`}
                      className="btn-primary"
                      style={{ padding: '12px 26px', fontSize: '0.78rem' }}
                    >
                      <span>Explore Journeys in {dest.name}</span>
                      <ArrowUpRight size={14} />
                    </Link>
                    <Link
                      to={`/inquiry?dest=${encodeURIComponent(dest.name)}`}
                      className="btn-secondary"
                      style={{ padding: '12px 22px', fontSize: '0.78rem' }}
                    >
                      <span>Custom Inquiry</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
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
            <span>The Sacred Map • नेपाल यात्रा</span>
          </div>
          <h2 className="editorial-title-lg" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>
            YOUR PATH THROUGH NEPAL STARTS HERE
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 28px', fontWeight: 300, lineHeight: 1.7 }}>
            Select any region to craft a private expedition manifest with our Kathmandu lead curators.
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
