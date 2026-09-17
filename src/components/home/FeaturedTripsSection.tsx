import React from 'react';
import { Link } from 'react-router-dom';
import { TRIPS } from '../../data/trips';
import { TripCard } from '../common/TripCard';
import { ArrowUpRight } from 'lucide-react';

export const FeaturedTripsSection: React.FC = () => {
  return (
    <section
      id="featured-trips-section"
      className="theme-surface section-py"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)'
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
            marginBottom: 'clamp(40px, 5.5vw, 64px)'
          }}
        >
          <div>
            <div className="editorial-kicker">
              <span>Curated Expeditions • विशेष यात्राहरू</span>
            </div>
            <h2 className="editorial-title-lg" style={{ color: 'var(--text-primary)' }}>
              Featured Himalayan Journeys
            </h2>
          </div>

          <p
            style={{
              maxWidth: '480px',
              fontSize: '0.94rem',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              fontWeight: 300
            }}
          >
            Each PāTH expedition is strictly limited to small private parties, accompanied by native Sherpa mountaineers with private helicopter agility.
          </p>
        </div>

        {/* 6 Featured Trips Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'clamp(24px, 3.5vw, 36px)',
            marginBottom: 'clamp(40px, 6vw, 64px)'
          }}
        >
          {TRIPS.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>

        {/* Bottom Editorial Banner */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '24px 32px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            gap: '20px'
          }}
        >
          <div>
            <span style={{ fontSize: '0.74rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600 }}>
              Looking for a Custom Private Manifest?
            </span>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-primary)', marginTop: '4px' }}>
              We design tailor-made journeys for families, alpine photographers, and private parties.
            </p>
          </div>

          <Link to="/inquiry" className="btn-primary" style={{ padding: '12px 24px', fontSize: '0.78rem' }}>
            <span>Design Custom Journey</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};
