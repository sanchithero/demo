import React from 'react';
import { Link } from 'react-router-dom';
import { Trip } from '../../types';
import { ArrowRight, Clock, MapPin } from 'lucide-react';

interface TripCardProps {
  trip: Trip;
}

export const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  return (
    <article
      className="trip-card-editorial"
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative'
      }}
    >
      {/* 1. Photography First: Large Framed Visual */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 10',
          overflow: 'hidden',
          backgroundColor: 'var(--bg-surface)'
        }}
      >
        <img
          src={trip.heroImage}
          alt={trip.title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          className="trip-card-image"
        />

        {/* Cinematic gradient scrim */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(3,17,13,0.05) 0%, rgba(3,17,13,0.75) 100%)',
            pointerEvents: 'none'
          }}
        />

        {/* Single discreet category tag */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px'
          }}
        >
          <span
            style={{
              padding: '4px 10px',
              borderRadius: 'var(--radius-xs)',
              background: 'rgba(22, 48, 43, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--color-border)',
              fontSize: '0.68rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-accent-secondary)',
              fontWeight: 500
            }}
          >
            {trip.category}
          </span>
        </div>

        {/* Region */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--text-primary)',
            fontSize: '0.74rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}
        >
          <MapPin size={12} color="var(--accent-gold)" />
          <span>{trip.region}</span>
        </div>
      </div>

      {/* 2. Content Hierarchy: Name -> Emotional Description -> Duration & Price -> View Pricing */}
      <div
        style={{
          padding: 'clamp(20px, 2.5vw, 26px)',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between',
          gap: '16px'
        }}
      >
        <div>
          <h3
            style={{
              fontSize: 'clamp(1.2rem, 1.6vw, 1.4rem)',
              color: 'var(--text-primary)',
              fontWeight: 400,
              lineHeight: 1.25,
              marginBottom: '8px'
            }}
            className="trip-card-title"
          >
            {trip.title}
          </h3>

          <p
            style={{
              fontSize: '0.86rem',
              lineHeight: 1.65,
              color: 'var(--text-secondary)',
              fontWeight: 300,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {trip.shortDescription}
          </p>
        </div>

        {/* Duration & Metadata */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '12px',
            borderTop: '1px solid var(--border-subtle)',
            fontSize: '0.78rem',
            color: 'var(--text-muted)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={13} color="var(--accent-gold)" />
            <span>{trip.duration}</span>
          </div>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>Max {trip.elevationMax}</span>
        </div>

        {/* Pricing & View Pricing CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '4px'
          }}
        >
          <div>
            <span style={{ fontSize: '0.66rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block' }}>
              From
            </span>
            <span style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              ${trip.pricing.signature.toLocaleString()}
            </span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginLeft: '3px' }}>/ guest</span>
          </div>

          <Link
            to={`/trips/${trip.id}`}
            id={`view-pricing-${trip.id}`}
            className="btn-primary"
            style={{
              padding: '9px 18px',
              fontSize: '0.74rem',
              borderRadius: 'var(--radius-sm)',
              gap: '6px'
            }}
          >
            <span>View Pricing</span>
            <ArrowRight size={13} className="trip-cta-arrow" />
          </Link>
        </div>
      </div>

      <style>{`
        .trip-card-editorial:hover {
          transform: translateY(-4px);
          border-color: rgba(163, 133, 96, 0.45) !important;
          box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.6);
        }
        .trip-card-editorial:hover .trip-card-image {
          transform: scale(1.04);
        }
        .trip-card-editorial:hover .trip-card-title {
          color: var(--accent-gold);
        }
        .trip-card-editorial:hover .trip-cta-arrow {
          transform: translateX(3px);
        }
      `}</style>
    </article>
  );
};
