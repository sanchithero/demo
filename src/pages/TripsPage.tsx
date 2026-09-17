import React, { useState, useEffect } from 'react';
import { TRIPS } from '../data/trips';
import { TripCard } from '../components/common/TripCard';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';

export const TripsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Adventure', 'Culture', 'Luxury', 'Family', 'Expedition', 'Wellness'];

  const filteredTrips = TRIPS.filter((trip) => {
    const matchesCat = selectedCategory === 'All' || trip.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          trip.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          trip.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main id="trips-catalog-page" className="theme-primary" style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)', backgroundColor: 'var(--bg-primary)' }}>
      {/* Header */}
      <section className="section-pt section-pb" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container-editorial">
          <div className="editorial-kicker">
            <span>Expedition Portfolio • यात्राहरू</span>
          </div>
          <h1 className="editorial-title-lg" style={{ color: 'var(--text-primary)', marginBottom: '18px' }}>
            Himalayan Expeditions
          </h1>
          <p className="editorial-lead" style={{ color: 'var(--text-secondary)' }}>
            Each journey is an original creation—balancing contemplative pace, native Sherpa heritage, and private helicopter agility. Select any expedition to inspect its day-by-day dossier and transparent pricing.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-subtle)', padding: '20px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '18px'
            }}
          >
            {/* Category Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '8px 18px',
                      borderRadius: 'var(--radius-xs)',
                      background: isActive ? 'var(--color-accent-primary)' : 'var(--color-bg-surface)',
                      color: isActive ? 'var(--color-text-main)' : 'var(--color-text-muted)',
                      border: isActive ? '1px solid var(--color-accent-secondary)' : '1px solid var(--color-border)',
                      fontSize: '0.78rem',
                      fontWeight: isActive ? 600 : 400,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 16px',
                borderRadius: 'var(--radius-xs)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                minWidth: '240px'
              }}
            >
              <Search size={14} color="var(--accent-gold)" />
              <input
                type="text"
                placeholder="Search expeditions or peaks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '0.82rem',
                  fontFamily: 'inherit',
                  width: '100%'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trips Catalog Grid */}
      <section className="section-py">
        <div className="container">
          {filteredTrips.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px', color: 'var(--text-muted)' }}>
              <p style={{ fontSize: '1.15rem', marginBottom: '16px' }}>No expeditions matched your criteria.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="btn-secondary"
                style={{ fontSize: '0.8rem' }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: 'clamp(28px, 4vw, 40px)'
              }}
            >
              {filteredTrips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Pre-Footer Concluding CTA Block */}
      <section
        className="theme-surface"
        style={{
          padding: 'clamp(60px, 8vw, 100px) 0',
          borderTop: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-surface)',
          textAlign: 'center'
        }}
      >
        <div className="container-editorial">
          <div className="editorial-kicker" style={{ justifyContent: 'center' }}>
            <span>Bespoke Expeditions • यात्रा योजना</span>
          </div>
          <h2 className="editorial-title-lg" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>
            YOUR PATH THROUGH NEPAL STARTS HERE
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 28px', fontWeight: 300, lineHeight: 1.7 }}>
            Looking for an unlisted high-pass traverse or custom dates for a private family party?
          </p>
          <Link to="/inquiry" className="btn-primary" style={{ padding: '14px 34px', fontSize: '0.82rem' }}>
            <span>Design Your Journey</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
};
