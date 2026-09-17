import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award } from 'lucide-react';

export const SignatureJourneySection: React.FC = () => {
  return (
    <section
      id="signature-journey-section"
      className="theme-primary section-py"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Editorial Story Header */}
        <div className="editorial-kicker">
          <span>The Signature Expedition • पथ विशेष कथा</span>
        </div>

        {/* Cinematic Framing */}
        <div
          className="cinematic-media-frame"
          style={{
            position: 'relative',
            minHeight: 'clamp(520px, 68vh, 740px)',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'flex-end',
            padding: 'clamp(28px, 5vw, 60px)',
            border: '1px solid var(--border-card)'
          }}
        >
          {/* Background Media */}
          <img
            src="/assets/images/journeys/mustang-wind.webp"
            alt="Upper Mustang Royal Caravan"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.8) contrast(1.06)'
            }}
          />

          {/* Cinematic Scrim */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(15,17,21,0.2) 0%, rgba(15,17,21,0.55) 40%, rgba(15,17,21,0.96) 100%)',
              pointerEvents: 'none'
            }}
          />

          {/* Stamp Badge */}
          <div
            style={{
              position: 'absolute',
              top: 'clamp(24px, 4vw, 40px)',
              left: 'clamp(24px, 4vw, 40px)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '7px 16px',
              background: 'rgba(23, 26, 33, 0.92)',
              backdropFilter: 'blur(16px)',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--border-card)',
              color: 'var(--accent-gold)',
              fontSize: '0.74rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase'
            }}
          >
            <Award size={13} color="var(--accent-primary)" />
            <span>PāTH Flagship Expedition • Limited to 8 Travelers</span>
          </div>

          {/* Editorial Content */}
          <div
            style={{
              position: 'relative',
              maxWidth: '840px',
              zIndex: 10
            }}
          >
            <span
              className="font-devanagari"
              style={{
                fontSize: '1.35rem',
                color: 'var(--accent-gold)',
                display: 'block',
                marginBottom: '8px'
              }}
            >
              उपल्लो मुस्ताङ शाही अभियान
            </span>

            <h2
              className="editorial-title-lg"
              style={{
                color: 'var(--text-primary)',
                marginBottom: '16px',
                lineHeight: 1.08
              }}
            >
              The Upper Mustang Royal Caravan: Secrets of the Walled Kingdom
            </h2>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.18rem)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                fontWeight: 300,
                marginBottom: '28px'
              }}
            >
              Eleven days navigating the ancient Tibetan salt corridor. From the cliff-carved sky caves of Chhoser to private dinners inside the 15th-century royal palace of Lo Manthang with local historians, culminating in a chartered private helicopter crossing of the Dhaulagiri ice face.
            </p>

            {/* Metadata Strip */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'clamp(16px, 3vw, 32px)',
                alignItems: 'center',
                marginBottom: '30px',
                fontSize: '0.84rem',
                color: 'var(--text-primary)',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '18px'
              }}
            >
              <div>
                <span style={{ display: 'block', fontSize: '0.66rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Duration
                </span>
                <span style={{ fontWeight: 500 }}>11 Days / 10 Nights</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.66rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Max Elevation
                </span>
                <span style={{ fontWeight: 500 }}>3,840 m (Lo Manthang)</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.66rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Transit Style
                </span>
                <span style={{ fontWeight: 500 }}>Custom 4WD & Private Helicopter</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.66rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Signature Fare
                </span>
                <span style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>From $5,800 / guest</span>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <Link
                to="/trips/mustang-expedition"
                id="signature-journey-pricing-btn"
                className="btn-primary"
                style={{ padding: '14px 30px', fontSize: '0.8rem' }}
              >
                <span>View Full Itinerary & Pricing</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/inquiry?dest=Upper%20Mustang"
                className="btn-secondary"
                style={{ padding: '14px 26px', fontSize: '0.8rem' }}
              >
                <span>Request Private Departure</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
