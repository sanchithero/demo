import React, { useState } from 'react';
import { TRAVELER_STORIES } from '../../data/stories';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const TravelerStoriesSection: React.FC = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);

  const currentStory = TRAVELER_STORIES[activeStoryIndex];

  const handlePrev = () => {
    setActiveStoryIndex((prev) => (prev === 0 ? TRAVELER_STORIES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveStoryIndex((prev) => (prev === TRAVELER_STORIES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="traveler-stories-section"
      className="theme-primary section-py"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container-editorial">
        <div className="editorial-kicker">
          <span>Voices of the Journey • यात्रीका संस्मरणहरू</span>
        </div>

        {/* Magazine Editorial Quote Layout */}
        <div
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center',
            paddingTop: '16px'
          }}
        >
          {/* Left: Photographic Portrait Frame */}
          <div
            className="cinematic-media-frame"
            style={{
              position: 'relative',
              height: 'clamp(360px, 44vw, 480px)',
              borderRadius: 'var(--radius-lg)'
            }}
          >
            <img
              src={currentStory.image}
              alt={currentStory.traveler}
              key={currentStory.image}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                animation: 'storyFade 0.45s ease'
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(15,17,21,0) 60%, rgba(15,17,21,0.92) 100%)'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                color: 'var(--text-primary)',
                fontSize: '0.82rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              <span style={{ color: 'var(--accent-gold)' }}>{currentStory.tripTaken}</span>
            </div>
          </div>

          {/* Right: Oversized Typography Quote & Traveler Credential */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Quote size={40} color="var(--accent-primary)" style={{ opacity: 0.85 }} />

            <blockquote
              key={currentStory.quote}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.35rem, 2.3vw, 2rem)',
                lineHeight: 1.45,
                color: 'var(--text-primary)',
                fontStyle: 'italic',
                fontWeight: 300,
                animation: 'storyFade 0.45s ease'
              }}
            >
              “{currentStory.quote}”
            </blockquote>

            <div
              style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                  {currentStory.traveler}
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  {currentStory.origin} • {currentStory.year}
                </p>
              </div>

              {/* Minimalist Navigation Arrows */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={handlePrev}
                  aria-label="Previous traveler story"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid var(--border-card)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                  className="story-nav-btn"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next traveler story"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid var(--border-card)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                  className="story-nav-btn"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes storyFade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .story-nav-btn:hover {
          border-color: var(--color-accent-secondary) !important;
          background: var(--color-accent-primary) !important;
          color: var(--color-text-main) !important;
        }
      `}</style>
    </section>
  );
};
