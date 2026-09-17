import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const TOTAL_FRAMES = 100;

export const CinematicHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const cachedFramesRef = useRef<HTMLImageElement[]>([]);
  const isDrawingRef = useRef<boolean>(false);
  const lastDrawnIndexRef = useRef<number>(-1);
  const [framesLoadedCount, setFramesLoadedCount] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activePhraseIndex, setActivePhraseIndex] = useState<number>(0);

  const editorialPhrases = [
    {
      kicker: 'प्रवेश नेपाल • 27.7172° N, 85.3240° E',
      title: 'ENTER NEPAL',
      sub: 'From ancient Newar valley sanctuaries to the high glacial passes of the Himalayas.'
    },
    {
      kicker: 'हिमालयको बाटो • 28.5961° N, 83.8203° E',
      title: 'FOLLOW THE HIMALAYAS',
      sub: 'Along ancient salt trading corridors where stone mani walls whisper in the wind.'
    },
    {
      kicker: 'अपूर्व यात्रा • 29.1817° N, 83.9558° E',
      title: 'BEYOND THE ORDINARY',
      sub: 'Where silence, scale, and sacred geography redefine the meaning of modern travel.'
    },
    {
      kicker: 'आफ्नो पथ • 27.9881° N, 86.9250° E',
      title: 'FIND YOUR PATH',
      sub: 'From ancient valleys to the edge of the Himalayas, travel deeper into a country that rewards curiosity.'
    }
  ];

  // Draw current frame to canvas with aspect-ratio cover, mobile rAF throttling, and GPU memory optimization
  const drawFrame = useCallback((frameIdx: number, force = false) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (!force && lastDrawnIndexRef.current === frameIdx) return;

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const render = () => {
      const cvs = canvasRef.current;
      if (!cvs) return;
      const ctx = cvs.getContext('2d');
      if (!ctx) return;

      const img = cachedFramesRef.current[frameIdx];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      // Desktop (min-width: 1024px): strictly preserved at window.devicePixelRatio || 1
      // Mobile (< 768px): High-DPI Canvas Scaling capped at 2 for razor-sharp retina rendering without performance lag
      const dpr = isMobile
        ? Math.min(window.devicePixelRatio || 1, 2)
        : (window.devicePixelRatio || 1);
      const width = cvs.clientWidth;
      const height = cvs.clientHeight;

      if (width === 0 || height === 0) return;

      const targetW = Math.floor(width * dpr);
      const targetH = Math.floor(height * dpr);

      if (cvs.width !== targetW || cvs.height !== targetH) {
        cvs.width = targetW;
        cvs.height = targetH;
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      // Razor-sharp High-DPI image smoothing settings
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // Calculate aspect ratio cover
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = width / height;
      let renderW = width;
      let renderH = height;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        renderW = width;
        renderH = width / imgRatio;
        offsetY = (height - renderH) / 2;
      } else {
        renderH = height;
        renderW = height * imgRatio;
        offsetX = (width - renderW) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
      ctx.restore();

      lastDrawnIndexRef.current = frameIdx;
    };

    // Mobile: throttled requestAnimationFrame render loop to prevent redundant paints during fast touch events
    if (isMobile && !force) {
      if (!isDrawingRef.current) {
        requestAnimationFrame(() => {
          render();
          isDrawingRef.current = false;
        });
        isDrawingRef.current = true;
      }
    } else {
      render();
    }
  }, []);

  // Preload, pre-decode and cache all 100 frames upfront in memory (avoids runtime decoding lag)
  useEffect(() => {
    const frames: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/assets/video/frames/frame_${frameNum}.webp`;

      const onFrameReady = () => {
        loaded++;
        setFramesLoadedCount(loaded);
        if (i === 0) {
          drawFrame(0, true);
        }
      };

      // Asynchronously pre-decode image off main thread before drawing
      if (typeof img.decode === 'function') {
        img.decode()
          .then(onFrameReady)
          .catch(() => {
            if (img.complete) {
              onFrameReady();
            } else {
              img.onload = onFrameReady;
            }
          });
      } else {
        (img as HTMLImageElement).onload = onFrameReady;
      }

      frames.push(img);
    }

    cachedFramesRef.current = frames;

    // Expose global renderFrame for reset scripts
    window.renderFrame = (idx: number) => {
      drawFrame(idx, true);
    };

    const handleResize = () => {
      lastDrawnIndexRef.current = -1;
      const idx = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(scrollProgress * (TOTAL_FRAMES - 1)))
      );
      drawFrame(idx, true);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [drawFrame]);

  // Deliberately slower & smoother mobile hero scroll + reset listener
  useEffect(() => {
    let animationFrameId: number;
    let targetProgress = 0;
    let currentProgress = 0;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTrackHeight = rect.height - window.innerHeight;
      if (scrollTrackHeight <= 0) return;

      const scrolled = -rect.top;
      targetProgress = Math.min(1, Math.max(0, scrolled / scrollTrackHeight));
    };

    // Global "पथ • PāTH" / Home Click Reset listener
    const handleReset = () => {
      targetProgress = 0;
      currentProgress = 0;
      setScrollProgress(0);
      setActivePhraseIndex(0);
      lastDrawnIndexRef.current = -1;
      drawFrame(0, true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
    };

    window.addEventListener('path:reset-hero-top', handleReset);

    const updateLoop = () => {
      // Desktop scrub factor is strictly preserved at 0.35 (100% untouched)
      // Mobile uses a snappy scrub factor (0.4) for fast, punchy thumb swipes without lagging behind
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      const scrubFactor = isMobile ? 0.4 : 0.35;
      currentProgress += (targetProgress - currentProgress) * scrubFactor;

      const frameIdx = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(currentProgress * (TOTAL_FRAMES - 1)))
      );

      // Render cached canvas frame
      drawFrame(frameIdx);

      // Fallback video sync if frames still loading
      if (videoRef.current && framesLoadedCount < 20) {
        const targetTime = currentProgress * 10;
        if (Math.abs(videoRef.current.currentTime - targetTime) > 0.04) {
          videoRef.current.currentTime = targetTime;
        }
      }

      setScrollProgress(currentProgress);

      const phraseIdx = Math.min(
        editorialPhrases.length - 1,
        Math.floor(currentProgress * editorialPhrases.length)
      );
      setActivePhraseIndex(phraseIdx);

      animationFrameId = requestAnimationFrame(updateLoop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    animationFrameId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('path:reset-hero-top', handleReset);
      cancelAnimationFrame(animationFrameId);
    };
  }, [drawFrame, framesLoadedCount, editorialPhrases.length]);

  // Frame subtle transformation as user scrolls
  const framePadding = Math.min(24, scrollProgress * 28);
  const frameBorderRadius = Math.min(20, scrollProgress * 24);
  const frameScale = 1 - scrollProgress * 0.015;
  const frameBorderOpacity = Math.min(0.2, 0.05 + scrollProgress * 0.15);

  const scrollToExpeditions = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('featured-trips-section') || document.getElementById('philosophy-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      id="cinematic-hero-section"
      style={{
        position: 'relative',
        height: '135vh', // Desktop pinning distance preserved at ~135vh (100% untouched)
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      {/* Pinned Sticky Viewport */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: `${framePadding}px`,
          transition: 'padding 0.15s ease-out',
          boxSizing: 'border-box'
        }}
      >
        {/* Cinematic Media Window Frame with GPU Hardware Acceleration */}
        <div
          id="hero-media-window"
          className="cinematic-media-frame hero-canvas-wrapper"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            borderRadius: `${frameBorderRadius}px`,
            transform: `scale(${frameScale}) translateZ(0)`,
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transition: 'border-radius 0.15s ease-out, transform 0.15s ease-out',
            border: `1px solid rgba(163, 133, 96, ${frameBorderOpacity * 0.3})`,
            boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.75)',
            overflow: 'hidden',
            backgroundColor: 'var(--color-bg-base)'
          }}
        >
          {/* Preloaded Memory-Cached Canvas Player (Zero dropped frames, 60fps responsive) */}
          <canvas
            ref={canvasRef}
            style={{
              width: '100%',
              height: '100%',
              display: 'block',
              filter: 'brightness(0.92) contrast(1.05)',
              position: 'relative',
              zIndex: 2,
              transform: 'translateZ(0)',
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          />

          {/* Fallback video element (in case frames are still fetching) */}
          {framesLoadedCount < 50 && (
            <video
              ref={videoRef}
              className="hero-video-element"
              src="/assets/video/hero.mp4"
              playsInline
              muted
              preload="auto"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                zIndex: 1
              }}
            />
          )}

          {/* Cinematic Scrim allowing landscape to shine */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(3,17,13,0.55) 0%, rgba(3,17,13,0.1) 40%, rgba(3,17,13,0.85) 100%)',
              pointerEvents: 'none',
              zIndex: 5
            }}
          />

          {/* Mobile Vignette Overlay for Typography & Coordinates Readability */}
          <div
            className="mobile-hero-vignette"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle, transparent 40%, rgba(3, 17, 13, 0.7) 100%)',
              pointerEvents: 'none',
              zIndex: 6
            }}
          />

          {/* Minimalist Top Coordinates & Progress Line */}
          <div
            style={{
              position: 'absolute',
              top: 'clamp(88px, 12vh, 108px)',
              left: 'clamp(24px, 4vw, 56px)',
              right: 'clamp(24px, 4vw, 56px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: 'var(--color-text-muted)',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              pointerEvents: 'none',
              zIndex: 10
            }}
          >
            <div className="hero-reel-header" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent-secondary)' }} />
              <span className="font-display">HIMALAYAN AERIAL REEL • KATHMANDU TO MUSTANG</span>
            </div>

            <div className="hero-coordinates" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--color-text-main)', opacity: 0.9 }}>
                {(scrollProgress * 10).toFixed(1)}s / 10.0s
              </span>
              <div
                style={{
                  width: '54px',
                  height: '2px',
                  backgroundColor: 'rgba(163, 133, 96, 0.2)',
                  borderRadius: '2px',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    width: `${scrollProgress * 100}%`,
                    height: '100%',
                    backgroundColor: 'var(--color-accent-secondary)',
                    transition: 'width 0.08s linear'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Hero Editorial Typography & Single Primary CTA */}
          <div
            id="hero-editorial-content"
            style={{
              position: 'absolute',
              bottom: 'clamp(44px, 8vh, 88px)',
              left: 'clamp(24px, 5vw, 64px)',
              right: 'clamp(24px, 5vw, 64px)',
              maxWidth: '880px',
              zIndex: 15
            }}
          >
            {editorialPhrases.map((phrase, idx) => {
              const isActive = activePhraseIndex === idx;
              return (
                <div
                  key={phrase.title}
                  style={{
                    display: isActive ? 'block' : 'none',
                    animation: 'heroTextFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <span
                    className="font-devanagari"
                    style={{
                      display: 'block',
                      fontSize: 'clamp(0.85rem, 1.2vw, 1.05rem)',
                      color: 'var(--color-accent-secondary)',
                      letterSpacing: '0.12em',
                      marginBottom: '10px',
                      textTransform: 'uppercase'
                    }}
                  >
                    {phrase.kicker}
                  </span>

                  <h1
                    className="editorial-title-lg"
                    style={{
                      color: 'var(--color-text-main)',
                      marginBottom: '16px',
                      textShadow: '0 6px 30px rgba(0, 0, 0, 0.7)'
                    }}
                  >
                    {phrase.title}
                  </h1>

                  <p
                    className="editorial-lead"
                    style={{
                      color: 'var(--color-text-muted)',
                      marginBottom: '28px',
                      textShadow: '0 4px 18px rgba(0, 0, 0, 0.8)'
                    }}
                  >
                    {phrase.sub}
                  </p>
                </div>
              );
            })}

            {/* Single Primary CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <button
                onClick={scrollToExpeditions}
                id="hero-primary-explore-btn"
                className="btn-primary"
                style={{
                  padding: '15px 34px',
                  fontSize: '0.84rem'
                }}
              >
                <span>Explore Expeditions</span>
                <ArrowRight size={15} />
              </button>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--color-text-muted)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  opacity: 0.85
                }}
              >
                <span>Scroll to Fly</span>
                <ChevronDown size={14} color="var(--color-accent-secondary)" style={{ animation: 'bounceDown 2s infinite' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroTextFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
            filter: blur(3px);
          }
          to {
            opacity: 1;
            transform: translateY(0px);
            filter: blur(0px);
          }
        }
        @keyframes bounceDown {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(4px); }
          60% { transform: translateY(2px); }
        }

        @media (min-width: 1024px) {
          .mobile-hero-vignette {
            display: none !important;
          }
        }

        /* Mobile & Tablet Scoped (Zero Desktop Impact) */
        @media (max-width: 1023px) {
          #cinematic-hero-section,
          #cinematic-hero-section *,
          .hero-reel-header,
          .hero-coordinates,
          #hero-editorial-content,
          #hero-editorial-content * {
            user-select: none !important;
            -webkit-user-select: none !important;
            -webkit-touch-callout: none !important;
          }
        }

        @media (max-width: 768px) {
          .mobile-hero-vignette {
            display: block !important;
          }

          #cinematic-hero-section {
            height: 220vh !important; /* Fast, punchy mobile scroll distance (+=120vh travel distance) */
            touch-action: pan-y;
          }

          #cinematic-hero-section > div {
            height: 100vh;
            height: 100svh;
          }

          .hero-canvas-wrapper,
          #hero-media-window,
          #hero-media-window canvas {
            transform: translateZ(0) !important;
            -webkit-transform: translateZ(0) !important;
            will-change: transform !important;
            backface-visibility: hidden !important;
            -webkit-backface-visibility: hidden !important;
          }

          #hero-editorial-content {
            background: radial-gradient(ellipse at bottom left, rgba(3, 17, 13, 0.85) 0%, rgba(3, 17, 13, 0.4) 65%, transparent 100%);
            padding: 16px 18px;
            border-radius: var(--radius-md);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            bottom: clamp(24px, 5vh, 44px) !important;
          }
        }
      `}</style>
    </div>
  );
};
