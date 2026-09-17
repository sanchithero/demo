import React, { useState, useEffect } from 'react';
import { JOURNAL_ARTICLES } from '../data/journal';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';

export const JournalPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'High Mountains', 'Heritage', 'Culture', 'Wildlife', 'Expedition Notes'];

  const filteredArticles = selectedCategory === 'All'
    ? JOURNAL_ARTICLES
    : JOURNAL_ARTICLES.filter((a) => a.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <main id="journal-page" className="theme-primary" style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)', backgroundColor: 'var(--bg-primary)' }}>
      {/* Header */}
      <section className="section-pt section-pb" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container-editorial">
          <div className="editorial-kicker">
            <span>Dispatches & Field Notes • यात्रा संस्मरण</span>
          </div>
          <h1 className="editorial-title-lg" style={{ color: 'var(--text-primary)', marginBottom: '18px' }}>
            The PāTH Journal
          </h1>
          <p className="editorial-lead" style={{ color: 'var(--text-secondary)' }}>
            In-depth essays on Himalayan conservation, Buddhist art history, mountaineering lore, and sensory dispatches from the high passes of Nepal.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-subtle)', padding: '16px 0' }}>
        <div className="container">
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
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-py">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: 'clamp(32px, 4.5vw, 44px)'
            }}
          >
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="journal-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '260px', overflow: 'hidden' }}>
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    className="journal-card-img"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-xs)',
                      background: 'rgba(22, 48, 43, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-accent-secondary)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      fontWeight: 600
                    }}
                  >
                    {article.category}
                  </div>
                </div>

                <div style={{ padding: '26px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', gap: '14px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.76rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                      <span>{article.date}</span>
                      <span>•</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} color="var(--accent-gold)" /> {article.readTime}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 400, lineHeight: 1.3, marginBottom: '10px' }}>
                      <Link to={`/journal/${article.slug}`} style={{ color: 'inherit' }}>
                        {article.title}
                      </Link>
                    </h2>

                    <p style={{ fontSize: '0.88rem', lineHeight: 1.65, color: 'var(--text-secondary)', fontWeight: 300 }}>
                      {article.excerpt}
                    </p>
                  </div>

                  <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                      By {article.author}
                    </span>
                    <Link to={`/journal/${article.slug}`} style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                      Read Dispatch →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
            <span>Stories to Journeys • पत्रिका</span>
          </div>
          <h2 className="editorial-title-lg" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>
            YOUR PATH THROUGH NEPAL STARTS HERE
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 28px', fontWeight: 300, lineHeight: 1.7 }}>
            Turn these editorial dispatches into your personal private expedition.
          </p>
          <Link to="/inquiry" className="btn-primary" style={{ padding: '14px 34px', fontSize: '0.82rem' }}>
            <span>Design Your Journey</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <style>{`
        .journal-card:hover {
          transform: translateY(-4px);
          border-color: rgba(163, 133, 96, 0.45) !important;
          box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.5);
        }
        .journal-card:hover .journal-card-img {
          transform: scale(1.04);
        }
      `}</style>
    </main>
  );
};
