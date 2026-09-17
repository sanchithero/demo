import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { BrandLogo } from '../common/BrandLogo';
import { useAmbientAudio } from '../../context/AudioContext';
import { resetHeroToTop } from '../../utils/scrollReset';
import { Volume2, VolumeX, Menu, User, ArrowUpRight } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { isPlaying, togglePlay } = useAmbientAudio();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Global listener for any brand-logo or Home links across the page
  useEffect(() => {
    const handleGlobalHomeClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(
        '.brand-logo, a[href="#home"], .nav-link-home, #brand-logo-link, [data-home-link]'
      );
      if (target && location.pathname === '/') {
        e.preventDefault();
        setMobileMenuOpen(false);
        resetHeroToTop();
      }
    };
    document.addEventListener('click', handleGlobalHomeClick);
    return () => document.removeEventListener('click', handleGlobalHomeClick);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Destinations', path: '/destinations' },
    { label: 'Trips', path: '/trips' },
    { label: 'Experiences', path: '/experiences' },
    { label: 'Journal', path: '/journal' },
    { label: 'About', path: '/about' }
  ];

  return (
    <>
      <header
        id="main-navigation-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: 'var(--nav-height)',
          zIndex: 900,
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          background: isScrolled
            ? 'rgba(3, 17, 13, 0.94)'
            : 'linear-gradient(180deg, rgba(3, 17, 13, 0.8) 0%, rgba(3, 17, 13, 0) 100%)',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled
            ? '1px solid var(--color-border)'
            : '1px solid transparent'
        }}
      >
        <div
          className="container"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Left: Brand Wordmark */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BrandLogo
              size="md"
              variant="light"
              onClick={() => {
                if (location.pathname === '/') {
                  resetHeroToTop();
                }
              }}
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-nav"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 'clamp(20px, 2.5vw, 36px)'
            }}
            className="desktop-nav-container"
          >
            {navLinks.map((link) => {
              const isHome = link.path === '/';
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={(e) => {
                    if (isHome && location.pathname === '/') {
                      e.preventDefault();
                      resetHeroToTop();
                    }
                  }}
                  style={({ isActive }) => ({
                    position: 'relative',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: isActive ? 600 : 400,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    padding: '6px 0',
                    transition: 'color 0.2s ease'
                  })}
                  className={`nav-link-item ${isHome ? 'nav-link-home' : ''}`}
                  data-home-link={isHome ? 'true' : undefined}
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '100%',
                          height: '1.5px',
                          backgroundColor: 'var(--color-accent-secondary)',
                          transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                          transformOrigin: 'left',
                          transition: 'transform 0.3s ease'
                        }}
                        className="nav-link-indicator"
                      />
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Actions: Subtle Sound, Inquiry, Discreet Account Icon, Discreet Plan CTA */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(12px, 1.6vw, 22px)'
            }}
          >
            {/* Subtle Minimalist Sound Icon Toggle */}
            <button
              onClick={togglePlay}
              title={isPlaying ? 'Mute Himalayan Soundscape' : 'Listen to Himalayan Soundscape'}
              id="audio-toggle-btn"
              aria-label={isPlaying ? 'Mute audio' : 'Play ambient audio'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: isPlaying ? '1px solid var(--color-accent-secondary)' : '1px solid var(--color-border)',
                background: isPlaying ? 'rgba(57, 5, 23, 0.6)' : 'rgba(22, 48, 43, 0.6)',
                color: isPlaying ? 'var(--color-accent-secondary)' : 'var(--color-text-main)',
                transition: 'all 0.25s ease'
              }}
            >
              {isPlaying ? <Volume2 size={15} /> : <VolumeX size={15} />}
            </button>

            {/* Inquiry Link */}
            <Link
              to="/inquiry"
              id="nav-inquiry-link"
              className="hide-mobile"
              style={{
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                transition: 'color 0.2s ease',
                fontWeight: 500
              }}
            >
              Inquiry
            </Link>

            {/* Discreet Client Account Icon */}
            <Link
              to="/login"
              id="nav-account-btn"
              title="Client Portal & Account"
              aria-label="Client Portal & Account"
              className="hide-mobile"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-main)',
                background: 'rgba(22, 48, 43, 0.6)',
                transition: 'all 0.2s ease'
              }}
            >
              <User size={15} />
            </Link>

            {/* Discreet Plan Your Journey CTA */}
            <Link
              to="/inquiry"
              id="nav-plan-journey-btn"
              className="btn-primary hide-mobile-sm"
              style={{
                padding: '9px 20px',
                fontSize: '0.74rem',
                gap: '6px',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              <span>Plan Your Journey</span>
              <ArrowUpRight size={13} />
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-trigger"
              className="mobile-menu-btn"
              aria-label="Toggle navigation menu"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-main)',
                background: 'rgba(22, 48, 43, 0.6)'
              }}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
      />

      <style>{`
        @media (min-width: 980px) {
          .desktop-nav-container {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }

        @media (max-width: 979px) {
          .desktop-nav-container {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
          }
          .hide-mobile {
            display: none !important;
          }
        }

        @media (max-width: 600px) {
          .hide-mobile-sm {
            display: none !important;
          }
        }

        .nav-link-item:hover {
          color: var(--text-primary) !important;
        }

        .nav-link-item:hover .nav-link-indicator {
          transform: scaleX(0.5) !important;
        }

        #nav-inquiry-link:hover {
          color: var(--text-primary) !important;
        }

        #nav-account-btn:hover {
          color: var(--text-primary) !important;
          border-color: var(--accent-gold) !important;
        }

        #audio-toggle-btn:hover {
          border-color: var(--accent-gold) !important;
          color: var(--text-primary) !important;
        }
      `}</style>
    </>
  );
};
