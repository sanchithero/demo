import React, { useState } from 'react';
import { SEASONS } from '../../data/seasons';
import { Link } from 'react-router-dom';
import { Sun, CloudRain, Wind, Snowflake, Calendar, Thermometer, ArrowRight } from 'lucide-react';

export const SeasonalNepalSection: React.FC = () => {
  const [activeSeasonId, setActiveSeasonId] = useState<string>('autumn');

  const currentSeason = SEASONS.find((s) => s.id === activeSeasonId) || SEASONS[2];

  const getSeasonIcon = (id: string) => {
    switch (id) {
      case 'spring': return <Sun size={14} />;
      case 'summer': return <CloudRain size={14} />;
      case 'autumn': return <Wind size={14} />;
      case 'winter': return <Snowflake size={14} />;
      default: return <Sun size={14} />;
    }
  };

  return (
    <section
      id="seasonal-nepal-section"
      className="theme-surface section-py"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '720px',
            margin: '0 auto clamp(36px, 5vw, 56px)'
          }}
        >
          <div className="editorial-kicker" style={{ justifyContent: 'center' }}>
            <span>Rhythms of the Himalayas • ऋतु चक्र</span>
          </div>
          <h2 className="editorial-title-lg" style={{ color: 'var(--text-primary)', marginBottom: '14px' }}>
            Nepal Across Four Seasons
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.7 }}>
            Each turn of the solar calendar unlocks an entirely different mountain realm—from scarlet rhododendron canopies to the dry sunlit kingdom of Upper Mustang.
          </p>
        </div>

        {/* Season Interactive Tab Switcher */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: 'clamp(32px, 4vw, 52px)'
          }}
        >
          {SEASONS.map((season) => {
            const isActive = season.id === activeSeasonId;
            return (
              <button
                key={season.id}
                onClick={() => setActiveSeasonId(season.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '11px 22px',
                  borderRadius: 'var(--radius-sm)',
                  background: isActive ? 'var(--color-accent-primary)' : 'var(--color-bg-surface)',
                  color: isActive ? 'var(--color-text-main)' : 'var(--color-text-muted)',
                  border: isActive ? '1px solid var(--color-accent-secondary)' : '1px solid var(--color-border)',
                  fontSize: '0.8rem',
                  fontWeight: isActive ? 600 : 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'all 0.25s ease'
                }}
              >
                {getSeasonIcon(season.id)}
                <span>{season.name}</span>
                <span style={{ fontSize: '0.72rem', opacity: 0.8 }}>({season.months})</span>
              </button>
            );
          })}
        </div>

        {/* Season Editorial Showcase Card */}
        <div
          className="cinematic-media-frame"
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)'
          }}
        >
          {/* Image */}
          <div
            style={{
              position: 'relative',
              minHeight: '400px',
              overflow: 'hidden'
            }}
          >
            <img
              src={currentSeason.image}
              alt={currentSeason.name}
              key={currentSeason.image}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                animation: 'seasonImageFade 0.5s ease'
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, rgba(31,36,45,0) 50%, rgba(31,36,45,0.94) 100%)'
              }}
            />
          </div>

          {/* Details */}
          <div
            style={{
              padding: 'clamp(28px, 4vw, 48px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '18px'
            }}
          >
            <div>
              <span
                className="font-devanagari"
                style={{
                  fontSize: '1.2rem',
                  color: 'var(--accent-gold)',
                  display: 'block',
                  marginBottom: '4px'
                }}
              >
                {currentSeason.nepaliName}
              </span>
              <h3 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.3rem)', color: 'var(--text-primary)', fontWeight: 400 }}>
                {currentSeason.name} in the Himalayas
              </h3>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                padding: '16px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(163, 133, 96, 0.08)',
                border: '1px solid var(--color-border)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Thermometer size={16} color="var(--color-accent-secondary)" />
                <div>
                  <span style={{ fontSize: '0.68rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', display: 'block' }}>Typical Temperature</span>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--color-text-main)' }}>{currentSeason.temperature}</strong>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calendar size={16} color="var(--color-accent-secondary)" />
                <div>
                  <span style={{ fontSize: '0.68rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', display: 'block' }}>Atmosphere</span>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--color-text-main)' }}>{currentSeason.atmosphere}</strong>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.96rem', lineHeight: 1.75, color: 'var(--color-text-muted)', fontWeight: 300 }}>
              {currentSeason.description}
            </p>

            <div>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent-secondary)', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                Recommended Journeys:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {currentSeason.recommendedTrips.map((tripTitle, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-xs)',
                      background: 'rgba(163, 133, 96, 0.12)',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.78rem',
                      color: 'var(--color-text-main)'
                    }}
                  >
                    {tripTitle}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '8px' }}>
              <Link
                to={`/inquiry?season=${encodeURIComponent(currentSeason.name)}`}
                className="btn-primary"
                style={{ padding: '11px 24px', fontSize: '0.78rem' }}
              >
                <span>Plan Your {currentSeason.name} Journey</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes seasonImageFade {
          from { opacity: 0.4; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};
