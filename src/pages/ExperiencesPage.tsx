import React, { useEffect } from 'react';
import { EXPERIENCES } from '../data/experiences';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Sparkles, MapPin, Clock } from 'lucide-react';

export const ExperiencesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="experiences-page" className="theme-primary" style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)', backgroundColor: 'var(--bg-primary)' }}>
      {/* Header */}
      <section className="section-pt section-pb" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container-editorial">
          <div className="editorial-kicker">
            <span>Bespoke Himalayan Dimensions • अनुभवहरू</span>
          </div>
          <h1 className="editorial-title-lg" style={{ color: 'var(--text-primary)', marginBottom: '18px' }}>
            Signature Experiences
          </h1>
          <p className="editorial-lead" style={{ color: 'var(--text-secondary)' }}>
            Beyond standard tourism circuits, we curate deeply immersive encounters honoring Nepal’s topography, sacred arts, and wilderness silence.
          </p>
        </div>
      </section>

      {/* 6 Curated Experience Sections */}
      <section className="section-py">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(70px, 9vw, 120px)' }}>
          {EXPERIENCES.map((exp, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <article
                key={exp.id}
                id={exp.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: 'clamp(36px, 5vw, 68px)',
                  alignItems: 'center'
                }}
              >
                {/* Media Frame */}
                <div
                  className="cinematic-media-frame"
                  style={{
                    order: isReversed ? 2 : 1,
                    height: 'clamp(380px, 48vw, 540px)',
                    borderRadius: 'var(--radius-lg)'
                  }}
                >
                  <img
                    src={exp.heroImage}
                    alt={exp.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-xs)',
                      background: 'rgba(22, 48, 43, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-accent-secondary)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      fontWeight: 600
                    }}
                  >
                    {exp.category}
                  </div>
                </div>

                {/* Narrative */}
                <div style={{ order: isReversed ? 1 : 2, display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <span className="font-devanagari" style={{ fontSize: '1.25rem', color: 'var(--accent-gold)', display: 'block', marginBottom: '4px' }}>
                      {exp.nepaliSub}
                    </span>
                    <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', color: 'var(--text-primary)', fontWeight: 400, lineHeight: 1.18 }}>
                      {exp.title}
                    </h2>
                  </div>

                  <div style={{ display: 'flex', gap: '20px', fontSize: '0.82rem', color: 'var(--accent-gold)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <MapPin size={13} color="var(--accent-gold)" /> {exp.location}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={13} color="var(--accent-gold)" /> {exp.duration}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: 'var(--text-secondary)', fontWeight: 300 }}>
                    {exp.extendedText}
                  </p>

                  <div
                    style={{
                      padding: '18px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                      Curated Private Moments:
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {exp.keyMoments.map((moment, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '8px', fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 300 }}>
                          <Sparkles size={12} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                          <span>{moment}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', marginTop: '10px' }}>
                    <Link to="/trips" className="btn-primary" style={{ padding: '12px 26px', fontSize: '0.78rem' }}>
                      <span>View Related Expeditions</span>
                      <ArrowUpRight size={14} />
                    </Link>
                    <Link to="/inquiry" className="btn-secondary" style={{ padding: '12px 22px', fontSize: '0.78rem' }}>
                      <span>Inquire Bespoke</span>
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
            <span>Bespoke Curations • यात्रा</span>
          </div>
          <h2 className="editorial-title-lg" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>
            YOUR PATH THROUGH NEPAL STARTS HERE
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 28px', fontWeight: 300, lineHeight: 1.7 }}>
            Design a custom journey combining high-altitude helicopter access with secluded heritage retreats.
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
