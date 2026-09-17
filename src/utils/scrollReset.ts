/**
 * Global Scroll & Hero Reset Utility
 * Provides unified, instantaneous or smooth reset to scroll position 0
 * and forces the hero reel animation, progress counter, and canvas frame
 * to immediately reset to the initial state (0.0s / Frame 0).
 */

declare global {
  interface Window {
    resetHeroToTop?: () => void;
    renderFrame?: (index: number) => void;
  }
}

export function resetHeroToTop(options?: { instant?: boolean }) {
  // Smooth or instant scroll to top
  window.scrollTo({
    top: 0,
    behavior: options?.instant ? 'auto' : 'smooth'
  });

  // Dispatch custom event for CinematicHero component to reset state, progress & canvas
  window.dispatchEvent(new CustomEvent('path:reset-hero-top'));

  // Reset video element or canvas frame counter if present
  const heroVideo = document.querySelector<HTMLVideoElement>(
    '.hero-video-element, #hero-media-window video, video'
  );
  if (heroVideo) {
    heroVideo.currentTime = 0;
  }

  // Call global renderFrame if available
  if (typeof window.renderFrame === 'function') {
    window.renderFrame(0);
  }
}

if (typeof window !== 'undefined') {
  window.resetHeroToTop = resetHeroToTop;
}
