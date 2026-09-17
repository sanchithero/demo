import React from 'react';
import { Link } from 'react-router-dom';
import { JOURNAL_ARTICLES } from '../../data/journal';
import { ArrowUpRight, Clock } from 'lucide-react';

export const JournalPreviewSection: React.FC = () => {
  const featuredArticle = JOURNAL_ARTICLES[0];
  const sideArticles = JOURNAL_ARTICLES.slice(1, 3);

  return (
    <section
      id="journal-preview-section"
      className="theme-surface section-py"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: 'clamp(36px, 5vw, 60px)'
          }}
        >
          <div>
            <div className="editorial-kicker">
              <span>The PāTH Journal • पथ पत्रिका</span>
            </div>
            <h2 className="editorial-title-lg" style={{ color: 'var(--text-primary)' }}>
              Stories from the High Himalaya
            </h2>
          </div>

          <Link to="/journal" className="btn-secondary" style={{ padding: '12px 24px', fontSize: '0.78rem' }}>
            <span>View All Stories</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Editorial Layout: Large Featured Article on Left, Two Stacked Articles on Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(28px, 4vw, 44px)'
          }}
        >
          {/* Main Feature Article */}
          <article
            className="journal-featured-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 18px rgba(0, 0, 0, 0.2)'
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '320px', overflow: 'hidden' }}>
              <img
                src={featuredArticle.heroImage}
                alt={featuredArticle.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                className="journal-img"
              />
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-xs)',
                  background: 'rgba(15, 17, 21, 0.85)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--border-card)',
                  color: 'var(--accent-gold)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 500
                }}
              >
                {featuredArticle.category}
              </div>
            </div>

            <div style={{ padding: 'clamp(24px, 3vw, 34px)', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1, justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: 'clamp(1.35rem, 2vw, 1.7rem)',
                    color: 'var(--text-primary)',
                    fontWeight: 400,
                    lineHeight: 1.25,
                    marginBottom: '10px'
                  }}
                  className="journal-title"
                >
                  <Link to={`/journal/${featuredArticle.slug}`}>{featuredArticle.title}</Link>
                </h3>

                <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-secondary)', fontWeight: 300 }}>
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>By {featuredArticle.author}</span>
                <Link to={`/journal/${featuredArticle.slug}`} className="btn-text">
                  <span>Read Article</span>
                </Link>
              </div>
            </div>
          </article>

          {/* Side Stacked Articles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {sideArticles.map((article) => (
              <article
                key={article.id}
                className="journal-side-card"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '140px 1fr',
                  gap: '20px',
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)'
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '120px', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    className="journal-img"
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.72rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h4
                    style={{
                      fontSize: '1.08rem',
                      color: 'var(--text-primary)',
                      fontWeight: 400,
                      lineHeight: 1.3
                    }}
                    className="journal-title"
                  >
                    <Link to={`/journal/${article.slug}`}>{article.title}</Link>
                  </h4>

                  <p
                    style={{
                      fontSize: '0.82rem',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                      fontWeight: 300,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {article.excerpt}
                  </p>

                  <Link to={`/journal/${article.slug}`} style={{ fontSize: '0.74rem', color: 'var(--accent-gold)', fontWeight: 600, marginTop: '4px' }}>
                    Read Dispatch →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .journal-featured-card:hover, .journal-side-card:hover {
          transform: translateY(-4px);
          border-color: rgba(163, 133, 96, 0.45) !important;
          box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.5) !important;
        }
        .journal-featured-card:hover .journal-img, .journal-side-card:hover .journal-img {
          transform: scale(1.05);
        }
        .journal-featured-card:hover .journal-title a, .journal-side-card:hover .journal-title a {
          color: var(--accent-gold) !important;
        }
      `}</style>
    </section>
  );
};
