import React from 'react';
import { Link } from 'react-router-dom';
import { resetHeroToTop } from '../../utils/scrollReset';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'terracotta';
  size?: 'sm' | 'md' | 'lg';
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  onClick
}) => {
  const getScale = () => {
    switch (size) {
      case 'sm':
        return { devanagari: '1.4rem', english: '0.62rem', dot: '4px' };
      case 'lg':
        return { devanagari: '2.4rem', english: '0.82rem', dot: '6px' };
      case 'md':
      default:
        return { devanagari: '1.8rem', english: '0.72rem', dot: '5px' };
    }
  };

  const scale = getScale();

  const getTextColor = () => {
    switch (variant) {
      case 'dark':
        return { devanagari: 'var(--color-text-main)', english: 'var(--color-text-muted)' };
      case 'terracotta':
        return { devanagari: 'var(--color-accent-secondary)', english: 'var(--color-text-main)' };
      case 'light':
      default:
        return { devanagari: 'var(--color-text-main)', english: 'var(--color-accent-secondary)' };
    }
  };

  const colors = getTextColor();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    // Unified reset: If on homepage, smooth scroll to top 0 and reset hero reel
    if (window.location.pathname === '/') {
      e.preventDefault();
      resetHeroToTop();
    }
  };

  return (
    <Link
      to="/"
      id="brand-logo-link"
      onClick={handleClick}
      className={`brand-logo brand-wordmark-container ${className}`}
      data-brand-logo="true"
      data-home-link="true"
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: '6px',
        textDecoration: 'none',
        userSelect: 'none',
        transition: 'opacity 0.2s ease'
      }}
      aria-label="पथ (PāTH) — Home"
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
        {/* Devanagari Primary Wordmark */}
        <span
          className="font-devanagari"
          style={{
            fontSize: scale.devanagari,
            fontWeight: 600,
            lineHeight: 1,
            color: colors.devanagari,
            letterSpacing: '0.02em',
            display: 'inline-block'
          }}
        >
          पथ
        </span>

        {/* Minimalist Journey Movement Indicator */}
        <span
          style={{
            display: 'inline-block',
            width: scale.dot,
            height: scale.dot,
            borderRadius: '50%',
            backgroundColor: 'var(--accent-gold)',
            opacity: 0.9,
            transform: 'translateY(-2px)'
          }}
        />

        {/* Latin Transliteration */}
        <span
          className="font-display"
          style={{
            fontSize: scale.english,
            fontWeight: 500,
            letterSpacing: '0.24em',
            color: colors.english,
            lineHeight: 1
          }}
        >
          PāTH
        </span>
      </div>
    </Link>
  );
};
