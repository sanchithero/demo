import React, { useEffect } from 'react';
import { CinematicHero } from '../components/hero/CinematicHero';
import { PhilosophySection } from '../components/home/PhilosophySection';
import { DiscoverNepalSection } from '../components/home/DiscoverNepalSection';
import { FeaturedTripsSection } from '../components/home/FeaturedTripsSection';
import { ExperiencesSection } from '../components/home/ExperiencesSection';
import { SeasonalNepalSection } from '../components/home/SeasonalNepalSection';
import { SignatureJourneySection } from '../components/home/SignatureJourneySection';
import { WhyPathSection } from '../components/home/WhyPathSection';
import { TravelerStoriesSection } from '../components/home/TravelerStoriesSection';
import { JournalPreviewSection } from '../components/home/JournalPreviewSection';
import { PlanCtaSection } from '../components/home/PlanCtaSection';

export const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="path-homepage" style={{ width: '100%' }}>
      {/* SECTION 01 — CINEMATIC HERO (10-Second Scroll-Controlled Aerial Video) */}
      <CinematicHero />

      {/* SECTION 02 — INTRODUCING PāTH (Editorial Philosophy & Sacred Landscape) */}
      <PhilosophySection />

      {/* SECTION 03 — DISCOVER NEPAL (Large Visual Compositions of 7 Realms) */}
      <DiscoverNepalSection />

      {/* SECTION 04 — FEATURED TRIPS (6 Luxury Expeditions with View Pricing) */}
      <FeaturedTripsSection />

      {/* SECTION 05 — EXPERIENCES (6 Pillars of Immersion) */}
      <ExperiencesSection />

      {/* SECTION 06 — SEASONAL NEPAL (Interactive Spring, Summer, Autumn, Winter) */}
      <SeasonalNepalSection />

      {/* SECTION 07 — SIGNATURE JOURNEY (Upper Mustang Royal Caravan Mini-Story) */}
      <SignatureJourneySection />

      {/* SECTION 08 — WHY PāTH (Trust, Native Sherpas, Private Helicopter Access) */}
      <WhyPathSection />

      {/* SECTION 09 — TRAVELER STORIES (Editorial Magazine Testimonials) */}
      <TravelerStoriesSection />

      {/* SECTION 10 — JOURNAL (High Himalayan Editorial Articles Preview) */}
      <JournalPreviewSection />

      {/* SECTION 11 — PLAN YOUR JOURNEY BANNER CTA */}
      <PlanCtaSection />
    </main>
  );
};
