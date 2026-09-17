import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section
      id="philosophy-section"
      className="theme-surface section-py"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border-subtle)',
        overflow: 'hidden'
      }}
    >
      {/* Anchor for #philosophy */}
      <span id="philosophy" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }} />
      <div className="container-editorial">
        {/* Editorial Subtitle Kicker */}
        <div className="editorial-kicker">
          <span>The Philosophy of PāTH • पथ दर्शन</span>
        </div>

        {/* Oversized Statement Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'start',
            marginBottom: 'clamp(48px, 6vw, 84px)'
          }}
        >
          <div>
            <h2
              className="editorial-title-lg"
              style={{
                color: 'var(--text-primary)',
                lineHeight: 1.1
              }}
            >
              We believe Nepal cannot be rushed. It must be entered as a <span style={{ color: 'var(--accent-primary)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>sacred landscape</span>.
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.3vw, 1.22rem)',
                lineHeight: 1.75,
                color: 'var(--text-primary)',
                fontWeight: 300
              }}
            >
              In Sanskrit and Nepali, <strong>पथ (PāTH)</strong> signifies more than a physical path; it embodies one’s directional calling—an inner and outer journey through territory both majestic and contemplative.
            </p>

            <p
              style={{
                fontSize: '0.94rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                fontWeight: 300
              }}
            >
              For decades, Himalayan travel was framed either as grueling survivalist mountaineering or hasty commercial bus tours. PāTH was founded to pioneer an unhurried, deeply intellectual, visually cinematic exploration where world-class comfort meets authentic Himalayan stewardship.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '6px' }}>
              <Link to="/about" className="btn-secondary" style={{ padding: '12px 26px', fontSize: '0.78rem' }}>
                <span>Read Our Full Story</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Core Philosophical Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(24px, 3.5vw, 40px)',
            paddingTop: 'clamp(32px, 4vw, 52px)',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          <div
            style={{
              padding: '24px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            <span style={{ fontSize: '0.74rem', letterSpacing: '0.18em', color: 'var(--accent-gold)', textTransform: 'uppercase', fontWeight: 600 }} className="font-display">
              01 • Native Lineage
            </span>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 400 }}>
              Guided by Veteran Sherpas & Cultural Scholars
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-secondary)', fontWeight: 300 }}>
              You do not simply visit villages; you are welcomed as personal guests into private homes and sacred monastic cloisters inaccessible to the general public.
            </p>
          </div>

          <div
            style={{
              padding: '24px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            <span style={{ fontSize: '0.74rem', letterSpacing: '0.18em', color: 'var(--accent-gold)', textTransform: 'uppercase', fontWeight: 600 }} className="font-display">
              02 • Uncompromising Logistics
            </span>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 400 }}>
              Private Helicopter Traverses & Heated Lodges
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-secondary)', fontWeight: 300 }}>
              Replacing grueling 14-hour bumpy mountain highways with private helicopter ascents, leaving more time immersed in silence, photography, and restful reflection.
            </p>
          </div>

          <div
            style={{
              padding: '24px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            <span style={{ fontSize: '0.74rem', letterSpacing: '0.18em', color: 'var(--accent-gold)', textTransform: 'uppercase', fontWeight: 600 }} className="font-display">
              03 • Sacred Conservation
            </span>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 400 }}>
              Regenerative Stewardship of High Valleys
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-secondary)', fontWeight: 300 }}>
              5% of every expedition fee directly funds indigenous heritage preservation, high-altitude sherpa family education, and glacial monitoring initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
