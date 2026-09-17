import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { JOURNAL_ARTICLES } from '../data/journal';
import { Clock, ArrowLeft, Tag, ArrowRight } from 'lucide-react';

export const JournalDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug || a.id === slug) || JOURNAL_ARTICLES[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <main id="journal-detail-page" className="theme-primary" style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)', backgroundColor: 'var(--bg-primary)' }}>
      {/* Article Header */}
      <article>
        <header className="section-pt" style={{ paddingBottom: '36px' }}>
          <div className="container-narrow">
            <Link
              to="/journal"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.78rem',
                color: 'var(--accent-gold)',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontWeight: 600
              }}
            >
              <ArrowLeft size={14} />
              <span>Back to Journal</span>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', fontSize: '0.76rem', color: 'var(--accent-gold)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              <span>{article.category}</span>
              <span>•</span>
              <span style={{ color: 'var(--text-muted)' }}>{article.readTime}</span>
            </div>

            <h1
              className="editorial-title-lg"
              style={{
                color: 'var(--text-primary)',
                lineHeight: 1.12,
                marginBottom: '20px'
              }}
            >
              {article.title}
            </h1>

            <p style={{ fontSize: '1.1rem', lineHeight: 1.65, color: 'var(--accent-gold)', fontStyle: 'italic', fontFamily: 'var(--font-serif)', marginBottom: '20px' }}>
              {article.excerpt}
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '0.82rem',
                color: 'var(--text-muted)'
              }}
            >
              <div>
                <span>Written by </span>
                <strong style={{ color: 'var(--text-primary)' }}>{article.author}</strong>
                <span> • {article.date}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="container-editorial" style={{ marginBottom: 'clamp(36px, 5vw, 60px)' }}>
          <div
            className="cinematic-media-frame"
            style={{
              height: 'clamp(380px, 50vw, 560px)',
              borderRadius: 'var(--radius-lg)'
            }}
          >
            <img
              src={article.heroImage}
              alt={article.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Article Body */}
        <section style={{ paddingBottom: 'clamp(60px, 8vw, 100px)' }}>
          <div className="container-narrow">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
              {article.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: '1.08rem',
                    lineHeight: 1.85,
                    color: 'var(--text-secondary)',
                    fontWeight: 300
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
              <Tag size={14} color="var(--accent-gold)" />
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-xs)',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.74rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </article>

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
            <span>Inquire Bespoke • यात्रा</span>
          </div>
          <h2 className="editorial-title-lg" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>
            YOUR PATH THROUGH NEPAL STARTS HERE
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 28px', fontWeight: 300, lineHeight: 1.7 }}>
            Experience the living culture and high passes of Nepal through a privately tailored journey.
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
