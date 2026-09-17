import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EXPERIENCES } from '../../data/experiences';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const ExperiencesSection: React.FC = () => {
  const [activeExpIndex, setActiveExpIndex] = useState<number>(0);

  const activeExp = EXPERIENCES[activeExpIndex];

  return (
    <section
      id="experiences-section"
      className="theme-primary section-py"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: 'clamp(36px, 5vw, 60px)'
          }}
        >
          <div>
            <div className="editorial-kicker">
              <span>Pillars of Immersion • अनुभवका आयामहरू</span>
            </div>
            <h2 className="editorial-title-lg" style={{ color: 'var(--text-primary)' }}>
              Six Ways to Experience Nepal
            </h2>
          </div>

          <Link to="/experiences" className="btn-secondary" style={{ padding: '12px 24px', fontSize: '0.78rem' }}>
            <span>Explore All Experiences</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Editorial Composition: Large Media on Left, Interactive Pillars on Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center'
          }}
        >
          {/* Left: Large Framed Media */}
          <div
            className="cinematic-media-frame"
            style={{
              position: 'relative',
              height: 'clamp(420px, 52vw, 620px)',
              borderRadius: 'var(--radius-lg)'
            }}
          >
            <img
              src={activeExp.heroImage}
              alt={activeExp.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              key={activeExp.heroImage}
            />

            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(15,17,21,0.1) 0%, rgba(15,17,21,0.85) 100%)',
                pointerEvents: 'none'
              }}
            />

            <div
              style={{
                position: 'absolute',
                bottom: '28px',
                left: '28px',
                right: '28px'
              }}
            >
              <span
                className="font-devanagari"
                style={{
                  display: 'block',
                  fontSize: '1.2rem',
                  color: 'var(--accent-gold)',
                  marginBottom: '4px'
                }}
              >
                {activeExp.nepaliSub}
              </span>
              <h3 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.4rem)', color: 'var(--text-primary)', fontWeight: 400, marginBottom: '6px' }}>
                {activeExp.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', fontWeight: 300, maxWidth: '480px' }}>
                {activeExp.description}
              </p>
            </div>
          </div>

          {/* Right: Interactive Pillars on Dark Surface */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {EXPERIENCES.map((exp, idx) => {
              const isActive = activeExpIndex === idx;
              return (
                <div
                  key={exp.id}
                  onClick={() => setActiveExpIndex(idx)}
                  style={{
                    padding: '18px 22px',
                    borderRadius: 'var(--radius-sm)',
                    background: isActive ? 'var(--bg-card)' : 'var(--bg-surface)',
                    border: isActive ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                    boxShadow: isActive ? '0 8px 24px rgba(0, 0, 0, 0.4)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  className="exp-interactive-item"
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontFamily: 'var(--font-sans)',
                          color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)',
                          fontWeight: 600
                        }}
                      >
                        0{idx + 1}
                      </span>
                      <h4
                        style={{
                          fontSize: '1.1rem',
                          color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                          fontWeight: isActive ? 600 : 400
                        }}
                      >
                        {exp.title}
                      </h4>
                    </div>

                    <span
                      style={{
                        fontSize: '0.74rem',
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                      }}
                    >
                      {exp.location}
                    </span>
                  </div>

                  {isActive && (
                    <div
                      style={{
                        marginTop: '14px',
                        paddingTop: '14px',
                        borderTop: '1px solid var(--border-subtle)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                      }}
                    >
                      <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--text-secondary)', fontWeight: 300 }}>
                        {exp.extendedText}
                      </p>

                      <div style={{ marginTop: '6px' }}>
                        <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600 }}>
                          Bespoke Encounters:
                        </span>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '6px', marginTop: '6px' }}>
                          {exp.keyMoments.slice(0, 2).map((m, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-primary)' }}>
                              <Sparkles size={12} color="var(--accent-primary)" />
                              <span>{m}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
