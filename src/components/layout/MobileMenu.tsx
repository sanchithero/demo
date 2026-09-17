import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, MapPin, Mail, User } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';

import { resetHeroToTop } from '../../utils/scrollReset';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; path: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, links }) => {
  if (!isOpen) return null;

  const handleHomeReset = (e?: React.MouseEvent) => {
    onClose(); // Automatically close the drawer immediately
    if (window.location.pathname === '/') {
      if (e) e.preventDefault();
      resetHeroToTop();
    }
  };

  return (
    <div
      id="mobile-navigation-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#03110D',
        backgroundColor: '#03110D',
        opacity: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '24px 28px max(24px, env(safe-area-inset-bottom))',
        overflowY: 'auto',
        animation: 'fadeInMenu 0.35s ease'
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--color-border)',
          paddingBottom: '20px'
        }}
      >
        <BrandLogo
          size="md"
          variant="light"
          onClick={() => {
            handleHomeReset();
          }}
        />

        <button
          onClick={onClose}
          id="close-mobile-menu-btn"
          aria-label="Close navigation"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-main)',
            background: 'rgba(22, 48, 43, 0.7)'
          }}
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '36px 0' }}>
        {links.map((link, idx) => {
          const isHome = link.path === '/';
          return (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={(e) => {
                if (isHome) {
                  handleHomeReset(e);
                } else {
                  onClose();
                }
              }}
              className={`mobile-nav-link ${isHome ? 'nav-link-home' : ''}`}
              data-home-link={isHome ? 'true' : undefined}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: 'clamp(1.6rem, 5.5vw, 2.2rem)',
                fontFamily: 'var(--font-serif)',
                color: isActive ? 'var(--color-accent-secondary)' : 'var(--color-text-main)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--color-border)',
                paddingBottom: '12px'
              })}
            >
              <span>{link.label}</span>
              <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-sans)', color: 'var(--color-accent-secondary)' }}>
                0{idx + 1}
              </span>
            </NavLink>
          );
        })}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '16px' }}>
          <Link
            to="/inquiry"
            onClick={onClose}
            className="btn-primary"
            style={{ width: '100%', padding: '13px 18px', fontSize: '0.78rem', justifyContent: 'center' }}
          >
            Plan Journey
          </Link>
          <Link
            to="/login"
            onClick={onClose}
            className="btn-secondary"
            style={{ width: '100%', padding: '13px 18px', fontSize: '0.78rem', justifyContent: 'center', gap: '6px' }}
          >
            <User size={14} />
            <span>Account</span>
          </Link>
        </div>
      </nav>

      {/* Footer Info */}
      <div
        style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          fontSize: '0.82rem',
          color: 'var(--color-text-muted)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MapPin size={14} color="var(--color-accent-secondary)" />
          <span>Durbar Marg, Kathmandu, Nepal</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Mail size={14} color="var(--color-accent-secondary)" />
          <span>concierge@pathnepal.com</span>
        </div>
      </div>

      <style>{`
        @keyframes fadeInMenu {
          from { opacity: 0; transform: scale(0.99); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 1023px) {
          #mobile-navigation-overlay {
            background: #03110D !important;
            background-color: #03110D !important;
            opacity: 1 !important;
            z-index: 99999 !important;
            padding-bottom: max(24px, env(safe-area-inset-bottom)) !important;
          }
        }
      `}</style>
    </div>
  );
};
