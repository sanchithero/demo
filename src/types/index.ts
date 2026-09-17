export interface Destination {
  id: string;
  name: string;
  devanagari: string;
  subtitle: string;
  altitude: string;
  bestSeason: string;
  description: string;
  fullOverview: string;
  heroImage: string;
  highlights: string[];
  coordinates: string;
  recommendedTripId?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  altitude?: string;
  description: string;
  lodging: string;
  meals: string;
}

export interface TripPricing {
  signature: number; // e.g. 4850
  privateBespoke: number; // e.g. 7200
  heliUpgrade?: number; // e.g. 1850
}

export interface Trip {
  id: string;
  slug: string;
  title: string;
  devanagari: string;
  category: 'Adventure' | 'Culture' | 'Luxury' | 'Family' | 'Expedition' | 'Wellness' | 'Wildlife';
  duration: string;
  region: string;
  elevationMax: string;
  pricing: TripPricing;
  shortDescription: string;
  fullOverview: string;
  heroImage: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  accommodations: string;
  bestSeason: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  nepaliSub: string;
  category: 'Mountain' | 'Culture' | 'Adventure' | 'Wildlife' | 'Luxury' | 'Wellness';
  description: string;
  extendedText: string;
  duration: string;
  location: string;
  heroImage: string;
  keyMoments: string[];
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Travel Guides' | 'Culture' | 'Mountains' | 'Food' | 'Adventure' | 'Nepal Stories';
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  heroImage: string;
  tags: string[];
}

export interface SeasonInfo {
  id: 'spring' | 'summer' | 'autumn' | 'winter';
  name: string;
  nepaliName: string;
  months: string;
  temperature: string;
  atmosphere: string;
  description: string;
  image: string;
  recommendedTrips: string[];
}

export interface TravelerStory {
  id: string;
  quote: string;
  traveler: string;
  origin: string;
  tripTaken: string;
  year: string;
  image: string;
}
