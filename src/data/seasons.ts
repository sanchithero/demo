import { SeasonInfo } from '../types';

export const SEASONS: SeasonInfo[] = [
  {
    id: 'spring',
    name: 'Spring',
    nepaliName: 'वसन्त ऋतु',
    months: 'March – May',
    temperature: '16°C to 26°C in Valleys / Crisp & Clear in High Ridges',
    atmosphere: 'Rhododendron blossoms ablaze in scarlet, crystal clear mornings, and warming mountain breezes.',
    description: 'The Himalayas awaken from winter slumber. Entire mountainsides explode in vibrant crimson, pink, and white rhododendron blooms. High passes open, rivers rush with glacial meltwater, and wildlife emerges in full vitality. Perfect for high altitude treks and floral forest immersions.',
    image: '/assets/images/stories/ghorepani.webp',
    recommendedTrips: ['Everest Experience: High Sherpa Kingdoms', 'Pokhara & Annapurna Sanctuary Escape', 'Kathmandu Heritage & Sacred Valleys']
  },
  {
    id: 'summer',
    name: 'Summer / Monsoon',
    nepaliName: 'वर्षा ऋतु',
    months: 'June – August',
    temperature: '20°C to 30°C / Rain-Shadow Desert 15°C to 24°C',
    atmosphere: 'Emerald terraced paddies, mystical cloud waterfalls, and the dry sunlit kingdom of Upper Mustang.',
    description: 'While the southern valleys receive dramatic monsoon downpours that transform the countryside into an emerald paradise, the trans-Himalayan Tibetan plateau of Upper Mustang and Dolpo lies in complete rain-shadow. Summer is the premier, sun-drenched season to explore the walled forbidden kingdom.',
    image: '/assets/images/journeys/mustang-wind.webp',
    recommendedTrips: ['Mustang Expedition: The Walled Kingdom of Lo', 'Kathmandu Heritage & Sacred Valleys']
  },
  {
    id: 'autumn',
    name: 'Autumn',
    nepaliName: 'शरद ऋतु',
    months: 'September – November',
    temperature: '14°C to 24°C / Brilliant Mountain Sunshine',
    atmosphere: 'Sharpest sapphire skies, razor-sharp mountain panoramas, and festive celebrations.',
    description: 'Nepal’s golden season. With the monsoon departed, the air is rinsed clean, unveiling peerless, razor-sharp vistas of 8,000-meter peaks. Terraced fields turn golden for harvest, and the great cultural festivals of Dashain and Tihar fill historic villages with music and lantern light.',
    image: '/assets/images/journeys/khumbu-slowly.webp',
    recommendedTrips: ['Everest Experience', 'Pokhara & Annapurna Escape', 'Kathmandu Heritage Journey', 'Wild Nepal Safari']
  },
  {
    id: 'winter',
    name: 'Winter',
    nepaliName: 'हेमन्त / शिशिर',
    months: 'December – February',
    temperature: '8°C to 18°C in Valleys / Deep Snow in High Sanctuaries',
    atmosphere: 'Serene solitude, pristine snowlines, uncrowded heritage squares, and warm luxury firesides.',
    description: 'For those seeking peaceful contemplation. The skies remain clear and cloudless for weeks. The cultural heritage of Kathmandu and Pokhara is uncrowded and atmospheric, while the southern jungles of Chitwan enjoy mild, dry, sunny days perfect for tracking tigers.',
    image: '/assets/images/destinations/chitwan.webp',
    recommendedTrips: ['Wild Nepal: Subtropical Safari', 'Kathmandu Heritage & Sacred Valleys', 'Spiritual Nepal: Monasteries & Sacred Lakes']
  }
];
