import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DESTINATIONS } from '../../data/destinations';
import { ArrowUpRight, Compass, Mountain, Calendar } from 'lucide-react';

export const DiscoverNepalSection: React.FC = () => {
  const [activeDestId, setActiveDestId] = useState<string>('upper-mustang');

  const activeDest = DESTINATIONS.find((d) => d.id === activeDestId) || DESTINATIONS[4];

  return (
    <section
      id="discover-nepal-section"
      className="theme-primary section-py"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      <div className="container">
        {/* Section Header */}
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
              <span>Territories of Nepal • नेपालका भूभागहरू</span>
            </div>
            <h2 className="editorial-title-lg" style={{ color: 'var(--text-primary)' }}>
              Discover Seven Sacred Realms
            </h2>
          </div>

          <Link to="/destinations" className="btn-secondary" style={{ padding: '12px 24px', fontSize: '0.78rem' }}>
            <span>Explore All Territories</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Major Editorial Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(32px, 5vw, 56px)',
            alignItems: 'center',
            marginBottom: 'clamp(36px, 5vw, 64px)'
          }}
        >
          {/* Left: Large Framed Visual */}
          <div
            className="cinematic-media-frame"
            style={{
              position: 'relative',
              height: 'clamp(380px, 50vw, 580px)',
              borderRadius: 'var(--radius-lg)'
            }}
          >
            <img
              src={activeDest.heroImage}
              alt={activeDest.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              key={activeDest.heroImage}
            />

            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(15,17,21,0.1) 0%, rgba(15,17,21,0.85) 100%)',
                pointerEvents: 'none'
              }}
            />

            {/* Coordinates Badge */}
            <div
              style={{
                position: 'absolute',
                top: '24px',
                left: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                background: 'rgba(15, 17, 21, 0.85)',
                backdropFilter: 'blur(12px)',
                borderRadius: 'var(--radius-xs)',
                border: '1px solid var(--border-card)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)'
              }}
            >
              <Compass size={12} />
              <span>{activeDest.coordinates}</span>
            </div>

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
                {activeDest.devanagari}
              </span>
              <h3
                style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  color: 'var(--text-primary)',
                  fontWeight: 400,
                  marginBottom: '6px'
                }}
              >
                {activeDest.name}
              </h3>
              <p
                style={{
                  fontSize: '0.94rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '520px',
                  fontWeight: 300
                }}
              >
                {activeDest.subtitle}
              </p>
            </div>
          </div>

          {/* Right: Narrative & Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                padding: '18px 20px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  Elevation Profile
                </span>
                <p style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 500, marginTop: '2px' }}>
                  {activeDest.altitude}
                </p>
              </div>

              <div>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  Prime Travel Window
                </span>
                <p style={{ fontSize: '1rem', color: 'var(--accent-gold)', fontWeight: 500, marginTop: '2px' }}>
                  {activeDest.bestSeason}
                </p>
              </div>
            </div>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                fontWeight: 300
              }}
            >
              {activeDest.fullOverview}
            </p>

            {/* Highlights */}
            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.74rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)',
                  marginBottom: '12px',
                  fontWeight: 600
                }}
                className="font-display"
              >
                Curated Private Encounters
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {activeDest.highlights.map((h, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '10px',
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                      fontWeight: 300
                    }}
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-primary)', flexShrink: 0 }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginTop: '10px' }}>
              <Link
                to={`/trips/${activeDest.recommendedTripId || 'mustang-expedition'}`}
                className="btn-primary"
                style={{ padding: '12px 28px', fontSize: '0.78rem' }}
              >
                <span>View Expeditions in {activeDest.name}</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Region Selector Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '10px',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '24px'
          }}
        >
          {DESTINATIONS.map((dest) => {
            const isSelected = dest.id === activeDestId;
            return (
              <button
                key={dest.id}
                onClick={() => setActiveDestId(dest.id)}
                style={{
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-sm)',
                  background: isSelected ? 'var(--color-accent-primary)' : 'var(--color-bg-surface)',
                  border: isSelected ? '1px solid var(--color-accent-secondary)' : '1px solid var(--color-border)',
                  textAlign: 'left',
                  transition: 'all 0.25s ease'
                }}
                className="dest-select-button"
              >
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.64rem',
                    color: isSelected ? 'var(--color-accent-secondary)' : 'var(--color-text-muted)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}
                >
                  {dest.devanagari}
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.86rem',
                    fontWeight: 500,
                    color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                    marginTop: '2px'
                  }}
                >
                  {dest.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
