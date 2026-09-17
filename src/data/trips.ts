import { Trip } from '../types';

export const TRIPS: Trip[] = [
  {
    id: 'kathmandu-heritage',
    slug: 'kathmandu-heritage-journey',
    title: 'Kathmandu Heritage & Sacred Valleys',
    devanagari: 'काठमाडौं सम्पदा यात्रा',
    category: 'Culture',
    duration: '7 Days / 6 Nights',
    region: 'Kathmandu Valley',
    elevationMax: '2,175 m (Nagarkot Ridge)',
    pricing: {
      signature: 3450,
      privateBespoke: 4950,
      heliUpgrade: 1200
    },
    shortDescription: 'A slow cultural immersion into the medieval royal squares, living goddesses, private monastic ceremonies, and ridge-top sunset retreats.',
    fullOverview: 'Traverse the ancient kingdoms of Kathmandu, Patan, and Bhaktapur with private art historians and spiritual scholars. Settle into restored Newar palace courtyards, receive an auspicious blessing from a Buddhist Rinpoche at Boudhanath at twilight, and watch the Himalayan range ignite in pink dawn from your private terrace above the mist.',
    heroImage: '/assets/images/journeys/sacred-valleys.webp',
    highlights: [
      'Private after-hours access to Patan Museum and royal courtyards',
      'Exclusive monk blessing and butter lamp ceremony at Boudhanath',
      'Hands-on masterclass with Newari bronze and terracotta masters',
      'Two nights in a secluded ridge-top luxury sanctuary in Dhulikhel',
      'Traditional multi-course Newari royal feast paired with spiced rice liquor'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu & The Ancient Courtyard',
        altitude: '1,400 m',
        description: 'Private VIP airport assistance. Transfer to Dwarika’s Heritage Sanctuary. Afternoon welcome tea and orientation with your lead cultural curator.',
        lodging: 'The Dwarika’s Hotel (Heritage Suite)',
        meals: 'Welcome Dinner'
      },
      {
        day: 2,
        title: 'Sacred Boudhanath & Secret Monasteries',
        altitude: '1,400 m',
        description: 'Dawn circumambulation around Boudhanath Stupa before public entry. Private audience with senior Tibetan Lama. Afternoon exploration of Pashupatinath riverside ghats.',
        lodging: 'The Dwarika’s Hotel',
        meals: 'Breakfast, Gourmet Lunch, Dinner'
      },
      {
        day: 3,
        title: 'Patan City of Fine Arts & Living Heritage',
        altitude: '1,400 m',
        description: 'Private guided walking tour through hidden gallis to Golden Temple. Masterclass in lost-wax bronze casting with 5th-generation master artisans.',
        lodging: 'The Dwarika’s Hotel',
        meals: 'Breakfast, Lunch'
      },
      {
        day: 4,
        title: 'Bhaktapur Medieval Splendor & Pottery Squares',
        altitude: '1,400 m',
        description: 'Spend the morning in Bhaktapur, the best-preserved medieval capital. Witness royal Nyatapola Temple and private woodcarving ateliers. Settle into pottery square.',
        lodging: 'The Dwarika’s Resort Dhulikhel',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 5,
        title: 'Himalayan Ridge Dawn & Forest Meditation',
        altitude: '1,650 m',
        description: 'Wake to panoramic sunrise views across the Langtang and Ganesh Himal ranges. Private sound bowl therapy and curated herbal walk through pine ridge paths.',
        lodging: 'The Dwarika’s Resort Dhulikhel',
        meals: 'Breakfast, Spa Lunch, Dinner'
      },
      {
        day: 6,
        title: 'Namo Buddha Monastery & Sacred Caves',
        altitude: '1,750 m',
        description: 'Excursion to Thrangu Tashi Yangtse Monastery (Namo Buddha), where the Buddha in a past life sacrificed himself to save a starving tigress.',
        lodging: 'The Dwarika’s Hotel Kathmandu',
        meals: 'Breakfast, Lunch, Farewell Banquet'
      },
      {
        day: 7,
        title: 'Private Departure or Journey Extension',
        altitude: '1,400 m',
        description: 'Morning at leisure. Private concierge escort to Kathmandu Tribhuvan International Airport for onward flight.',
        lodging: 'Departure',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'All luxury heritage accommodations (Dwarika’s Hotel & Resort)',
      'Private dedicated cultural historian and chauffeur in luxury SUV',
      'All VIP monument access fees, permits, and private offerings',
      'All meals specified with curated local organic pairings',
      'Private Himalayan sound healing and wellness sessions'
    ],
    exclusions: [
      'International airfare to/from Kathmandu',
      'Personal travel insurance with medical evacuation',
      'Discretionary gratuities for guides and drivers',
      'Premium vintage wines and spirits outside curated menus'
    ],
    accommodations: 'Dwarika’s Heritage Hotel Kathmandu & Dwarika’s Himalayan Sanctuary Dhulikhel',
    bestSeason: 'September through May',
    featured: true
  },
  {
    id: 'pokhara-annapurna',
    slug: 'pokhara-annapurna-escape',
    title: 'Pokhara & Annapurna Sanctuary Escape',
    devanagari: 'पोखरा र अन्नपूर्ण विश्राम',
    category: 'Luxury',
    duration: '8 Days / 7 Nights',
    region: 'Annapurna & Pokhara Valley',
    elevationMax: '4,130 m (Annapurna Base Camp by Heli)',
    pricing: {
      signature: 4600,
      privateBespoke: 6400,
      heliUpgrade: 1650
    },
    shortDescription: 'Lakeside serenity combined with private mountain lodges, Gurung mountain trails, and a champagne helicopter landing in the Annapurna Sanctuary.',
    fullOverview: 'Experience the Annapurna massif in absolute refinement. Stay in secluded private stone lodges offering roaring fireplaces and farm-to-table cuisine. Walk serene ridgeline trails surrounded by giant bamboo and rhododendron, ending with a private sunrise helicopter flight directly into the Annapurna Base Camp glacial bowl.',
    heroImage: '/assets/images/journeys/luxury-escape.webp',
    highlights: [
      'Private sunrise helicopter flight landing inside the Annapurna glacial amphitheater',
      'Luxury stone mountain lodges with heated duvets and panoramic peak decks',
      'Exclusive wooden boat excursion across misty Phewa Lake at dawn',
      'Curated walks through traditional stone hamlets of Ghandruk and Majhgaon',
      'Gourmet champagne breakfast facing the sheer ice flutes of Machapuchare'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Scenic Flight to Pokhara & Lakeside Sanctuary',
        altitude: '822 m',
        description: 'Fly along the snowy Himalayan spine to Pokhara. Transfer to lakeside boutique lodge. Sunset private wooden boat cruise to Tal Barahi.',
        lodging: 'Pavilions Himalayas The Farm',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Foothill Trail to Mountain Lodge Sanctuary',
        altitude: '1,450 m',
        description: 'Gentle walk through terraced paddy fields and subtropical forest to a secluded mountain lodge. Afternoon tea facing Annapurna South.',
        lodging: 'Ker & Downey Mountain Lodge',
        meals: 'Breakfast, Picnic Lunch, Lodge Dinner'
      },
      {
        day: 3,
        title: 'Gurung Hamlets & Rhododendron Trails',
        altitude: '1,940 m',
        description: 'Trek along ancient stone staircases through Majhgaon and Landruk. Meet village elders and discover indigenous weaving traditions.',
        lodging: 'Ker & Downey Mountain Lodge',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 4,
        title: 'Annapurna Base Camp Private Heli Sanctuary Landing',
        altitude: '4,130 m',
        description: 'Board private Airbus H125 helicopter at dawn. Fly through the Modi Khola gorge directly onto the sanctuary floor. 45-minute alpine pause with warm tea and champagne.',
        lodging: 'Pavilions Himalayas Lake View',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 5,
        title: 'Lakeside Leisure & Organic Farm Wellness',
        altitude: '822 m',
        description: 'Day of restoration. Ayurvedic massage, farm-to-table culinary workshop with organic vegetables harvested directly from the estate.',
        lodging: 'Pavilions Himalayas Lake View',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 6,
        title: 'Peace Pagoda & Sarangkot Sunset',
        altitude: '1,600 m',
        description: 'Forest walk up to the World Peace Pagoda. Sunset cocktails on a secluded ridge overlooking Pokhara valley and the Machapuchare pinnacle.',
        lodging: 'Pavilions Himalayas',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 7,
        title: 'Return to Kathmandu & Private Farewell',
        altitude: '1,400 m',
        description: 'Scenic flight back to Kathmandu. Private shopping assistance for cashmere and Tibetan carpets. Celebratory dinner.',
        lodging: 'Baber Mahal Vilas Kathmandu',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 8,
        title: 'Departure from Nepal',
        altitude: '1,400 m',
        description: 'Private airport transfer for your departure journey.',
        lodging: 'Departure',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Private helicopter flight to Annapurna Base Camp',
      'All internal flights (Kathmandu – Pokhara – Kathmandu)',
      'Luxury mountain lodge and boutique resort accommodations',
      'Dedicated mountain guide, porters, and private vehicle transfers',
      'All meals, daily afternoon tea, and selected beverages'
    ],
    exclusions: [
      'International flights',
      'Helicopter payload upgrades if luggage exceeds standard limit',
      'Personal massage therapies beyond package',
      'Gratuities'
    ],
    accommodations: 'Pavilions Himalayas The Farm & Ker & Downey Annapurna Lodges',
    bestSeason: 'October to May',
    featured: true
  },
  {
    id: 'mustang-expedition',
    slug: 'mustang-expedition',
    title: 'Mustang Expedition: The Walled Kingdom of Lo',
    devanagari: 'मुस्ताङ विशेष अभियान',
    category: 'Expedition',
    duration: '11 Days / 10 Nights',
    region: 'Upper Mustang (Trans-Himalaya)',
    elevationMax: '3,840 m (Lo Manthang)',
    pricing: {
      signature: 5800,
      privateBespoke: 8400,
      heliUpgrade: 2400
    },
    shortDescription: 'Journey across the Tibetan rain shadow into the forbidden walled city of Lo Manthang, painted canyons, and ancient Buddhist cliff caves.',
    fullOverview: 'Beyond the Annapurna and Dhaulagiri massifs lies Upper Mustang—a landscape of sculpted ochre cliffs, wind-blown canyons, and pure Tibetan culture preserved for eight centuries. Traverse this high-altitude desert in custom off-road luxury vehicles or on horseback, staying in charming renovated aristocrat homes and restored mud-brick gompas.',
    heroImage: '/assets/images/journeys/mustang-wind.webp',
    highlights: [
      'Explore the fortified 15th-century royal capital of Lo Manthang',
      'Inspect 800-year-old Buddhist murals inside Thubchen and Chhoser sky caves',
      'Meet with local Mustang royal family representatives and community historians',
      'Drive across Mars-like canyon passes with vistas of Dhaulagiri and Nilgiri',
      'Optional private helicopter return directly from Lo Manthang to Kathmandu'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kathmandu to Pokhara & Flight to Jomsom',
        altitude: '2,743 m',
        description: 'Early morning flight between the Dhaulagiri and Annapurna giants through the Kali Gandaki canyon. Arrival in Jomsom and drive to Kagbeni.',
        lodging: 'Red House Heritage Lodge, Kagbeni',
        meals: 'Lunch, Dinner'
      },
      {
        day: 2,
        title: 'Entering Upper Mustang: Tangbe & Chele',
        altitude: '3,050 m',
        description: 'Pass the restricted checkpoint at Kagbeni into Upper Mustang. Red and white chortens, whitewashed villages, and dramatic canyon crossing.',
        lodging: 'Local Boutique Guesthouse, Chele',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 3,
        title: 'High Passes of Syangboche & Ghami Red Cliffs',
        altitude: '3,520 m',
        description: 'Traverse Yamda La and Nyi La passes (4,010m). Descend into Ghami beside the longest stone prayer wall in Mustang.',
        lodging: 'Royal Guesthouse, Ghami',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 4,
        title: 'Tsarang Monastery & The Palace of Kings',
        altitude: '3,560 m',
        description: 'Explore the 5-story white palace and 14th-century monastery of Tsarang. View centuries-old gold-leaf manuscript scriptures.',
        lodging: 'Maya’s Heritage Inn, Tsarang',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 5,
        title: 'Arrival in the Walled Capital of Lo Manthang',
        altitude: '3,840 m',
        description: 'Cross the Lo La pass for the first glimpse of the whitewashed fortress city surrounded by barley fields. Enter the royal gates.',
        lodging: 'Lotus Heritage Hotel, Lo Manthang',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 6,
        title: 'Monasteries of Lo Manthang & Monastic Chants',
        altitude: '3,840 m',
        description: 'Full day inside the city walls. Visit Jampa Gompa (House of Maitreya) and Thubchen Gompa. Witness morning puja prayers with young monks.',
        lodging: 'Lotus Heritage Hotel, Lo Manthang',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 7,
        title: 'Chhoser Sky Caves & The Tibetan Borderland',
        altitude: '3,900 m',
        description: 'Horseback or 4WD excursion to the multi-story cave dwellings carved into towering sandstone cliffs at Chhoser. Settle near the Nepal-China frontier.',
        lodging: 'Lotus Heritage Hotel, Lo Manthang',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 8,
        title: 'Ghar Gompa: Oldest Buddhist Sanctuary in Mustang',
        altitude: '3,920 m',
        description: 'Visit Ghar Gompa (dating to the 8th century, attributed to Guru Padmasambhava). Proceed through Dhakmar with its blood-red sandstone towers.',
        lodging: 'Boutique Lodge, Syangboche',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 9,
        title: 'Descent to Kagbeni & Muktinath Sacred Temple',
        altitude: '3,710 m',
        description: 'Cross back toward Kagbeni and ascend to the holy pilgrimage shrine of Muktinath, revered by both Hindus and Buddhists.',
        lodging: 'Muktinath Heritage Lodge',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 10,
        title: 'Flight Jomsom to Pokhara to Kathmandu',
        altitude: '1,400 m',
        description: 'Early morning flight from Jomsom to Pokhara, connecting to Kathmandu. Settle into luxury hotel. Rest and celebratory dinner.',
        lodging: 'The Dwarika’s Hotel Kathmandu',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 11,
        title: 'Farewell from Nepal',
        altitude: '1,400 m',
        description: 'Private airport transfer.',
        lodging: 'Departure',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Special Restricted Area Permit for Upper Mustang ($500/person included)',
      'Custom luxury 4WD vehicles and certified mountain drivers',
      'All boutique heritage lodges and private camp setups',
      'Expert Sherpa expedition leader and English/Tibetan speaking cultural guide',
      'Domestic flights (Pokhara – Jomsom – Pokhara – Kathmandu)'
    ],
    exclusions: [
      'International flights',
      'Personal horseback hire if selected for extra routes',
      'Emergency rescue insurance (mandatory)',
      'Alcohol and personal expenses'
    ],
    accommodations: 'Lotus Heritage Lo Manthang & Dwarika’s Hotel Kathmandu',
    bestSeason: 'May to October (Perfect during Monsoon)',
    featured: true
  },
  {
    id: 'everest-experience',
    slug: 'everest-experience',
    title: 'Everest Experience: High Sherpa Kingdoms',
    devanagari: 'सगरमाथा खुम्बु अनुभूती',
    category: 'Adventure',
    duration: '10 Days / 9 Nights',
    region: 'Khumbu / Everest',
    elevationMax: '3,860 m (Tengboche) / 5,364 m Heli Landing',
    pricing: {
      signature: 5200,
      privateBespoke: 7600,
      heliUpgrade: 1950
    },
    shortDescription: 'Trek the legendary Sherpa highways of Khumbu in luxury mountain lodges, culminating in a scenic helicopter landing near Everest Base Camp.',
    fullOverview: 'Experience the roof of the world without compromising comfort. Staying in heated luxury Sherpa lodges, follow pine-scented paths across suspension bridges swaying high above the Dudh Koshi. Meditate at Tengboche with views of Ama Dablam and Everest, accompanied throughout by elite Everest summiteer guides.',
    heroImage: '/assets/images/journeys/khumbu-heritage.webp',
    highlights: [
      'Scenic flight into the iconic mountain airstrip of Lukla',
      'Stays at Yeti Mountain Homes with heated electric blankets and en-suite bathrooms',
      'Private sunset tea at Everest View Hotel (3,880m) facing Mount Everest',
      'Monastery blessing with the Rinpoche of Tengboche Monastery',
      'Private helicopter return flight directly from Syangboche to Kathmandu'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Flight to Lukla & Gentle Walk to Phakding',
        altitude: '2,610 m',
        description: 'Breathtaking 35-minute mountain flight to Lukla. Meet your Sherpa support crew. Gentle downhill walk along the Dudh Koshi river.',
        lodging: 'Yeti Mountain Home Phakding',
        meals: 'Lunch, Dinner'
      },
      {
        day: 2,
        title: 'Ascent to Namche Bazaar across Hillary Bridge',
        altitude: '3,440 m',
        description: 'Cross high suspension bridges draped in prayer flags. Enter Sagarmatha National Park. Ascend the famous Namche hill for first glimpse of Everest.',
        lodging: 'Yeti Mountain Home Namche',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 3,
        title: 'Acclimatization & Syangboche Panoramic Ridge',
        altitude: '3,780 m',
        description: 'Hike to Syangboche ridge and the world’s highest hotel for morning coffee facing Everest, Lhotse, and Ama Dablam. Visit the Sherpa culture museum.',
        lodging: 'Yeti Mountain Home Namche',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 4,
        title: 'Trek through Rhododendrons to Deboche',
        altitude: '3,820 m',
        description: 'Traverse high mountain paths with sheer valley views. Descend to Phungi Thanga water-driven prayer wheels before climbing to Tengboche.',
        lodging: 'Rivendell Heritage Lodge, Deboche',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 5,
        title: 'Tengboche Monastic Blessing & Ama Dablam Panorama',
        altitude: '3,860 m',
        description: 'Morning prayer ceremony inside the sacred hall of Tengboche Monastery. Contemplate the towering pyramidal peak of Ama Dablam.',
        lodging: 'Rivendell Heritage Lodge, Deboche',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 6,
        title: 'Valley of Khumjung & Sir Edmund Hillary School',
        altitude: '3,790 m',
        description: 'Walk through the tranquil twin Sherpa hamlets of Khumjung and Khunde. Visit the monastery housing the purported Yeti scalp.',
        lodging: 'Yeti Mountain Home Kongde',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 7,
        title: 'Everest Heli-Glacier Landing & Return to Kathmandu',
        altitude: '1,400 m',
        description: 'Private helicopter picks up at Kongde. Fly over the Khumbu Icefall and Kala Patthar (5,545m) for close-up views of Everest’s southwest face. Fly back to Kathmandu.',
        lodging: 'Dwarika’s Hotel Kathmandu',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 8,
        title: 'Kathmandu Spa & Private Rest',
        altitude: '1,400 m',
        description: 'Full day of rejuvenation. Deep-tissue massage and private dinner at Dwarika’s Krishnarpan.',
        lodging: 'Dwarika’s Hotel Kathmandu',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 9,
        title: 'Artisan Heritage & Private Tibetan Curations',
        altitude: '1,400 m',
        description: 'Curated shopping and artisan gallery viewings.',
        lodging: 'Dwarika’s Hotel Kathmandu',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 10,
        title: 'Departure Journey',
        altitude: '1,400 m',
        description: 'Private departure transfer.',
        lodging: 'Departure',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Private helicopter return flight from Khumbu to Kathmandu',
      'Luxury heated Sherpa lodge accommodations with en-suite bathrooms',
      'Veteran Everest summiteer lead guide and private luggage porters',
      'Sagarmatha National Park and Khumbu Pasang Lhamu permits',
      'All meals, hydration systems, and satellite communication safety'
    ],
    exclusions: [
      'International flights',
      'Personal climbing gear (none required for trekking route)',
      'High-altitude emergency medical insurance'
    ],
    accommodations: 'Yeti Mountain Homes & Dwarika’s Hotel Kathmandu',
    bestSeason: 'March to May & October to December',
    featured: true
  },
  {
    id: 'wild-nepal',
    slug: 'wild-nepal',
    title: 'Wild Nepal: Subtropical Safari & River Sanctuaries',
    devanagari: 'चितवन वन्यजन्तु सफारी',
    category: 'Wildlife',
    duration: '6 Days / 5 Nights',
    region: 'Chitwan & Terai Lowlands',
    elevationMax: '200 m (Terai Plains)',
    pricing: {
      signature: 3100,
      privateBespoke: 4400,
      heliUpgrade: 950
    },
    shortDescription: 'Encounter Bengal tigers, one-horned rhinos, and river gharials from exclusive luxury tented camps and sunset river canoes in Chitwan.',
    fullOverview: 'Descend from the high peaks into Nepal’s lush southern jungle. Drift down the Rapti River in quiet wooden canoes at sunrise, track greater one-horned rhinos with elite naturalists, and retire to private safari villas overlooking the national park where wildlife wanders right past your plunge pool.',
    heroImage: '/assets/images/destinations/chitwan.webp',
    highlights: [
      'Private jeep and boat safaris with senior conservation naturalists',
      'Stay at Meghauli Serai (Taj Safari Lodge) overlooking the Rapti river',
      'Sundowner cocktails on the riverbank watching rhinos bathe',
      'Quiet birdwatching trails tracking over 500 avian species',
      'Insightful encounters with indigenous Tharu naturalist communities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Chitwan & Sunset River Drift',
        altitude: '150 m',
        description: 'Scenic drive or 20-minute flight to Bharatpur. Transfer to Meghauli Serai. Evening sundowner by the river with local Tharu dance demonstration.',
        lodging: 'Meghauli Serai (Taj Safari Lodge)',
        meals: 'Lunch, Dinner'
      },
      {
        day: 2,
        title: 'Full Day Deep Jungle Safari',
        altitude: '150 m',
        description: 'Morning private 4WD jeep safari into the core area of Chitwan National Park. Track fresh tiger pugmarks and rhino wallows.',
        lodging: 'Meghauli Serai',
        meals: 'Breakfast, Bush Picnic, Dinner'
      },
      {
        day: 3,
        title: 'Silent River Canoe Drift & Elephant Grasslands',
        altitude: '150 m',
        description: 'Quiet wooden dugout canoe cruise along the Rapti river. Spot endangered mugger crocodiles and gharials. Afternoon guided walking safari.',
        lodging: 'Meghauli Serai',
        meals: 'Breakfast, Lunch, Private BBQ Dinner'
      },
      {
        day: 4,
        title: 'Avian Sanctuaries & Tharu Living Traditions',
        altitude: '150 m',
        description: 'Dawn bird-watching walk along oxbow lakes. Village visit to traditional mud-and-reed Tharu hamlets.',
        lodging: 'Barahi Jungle Lodge',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 5,
        title: 'Conservation Field Station & Return to Kathmandu',
        altitude: '1,400 m',
        description: 'Visit vulture conservation center. Afternoon flight back to Kathmandu.',
        lodging: 'Dwarika’s Hotel Kathmandu',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 6,
        title: 'Departure or Himalayan Extension',
        altitude: '1,400 m',
        description: 'Private transfer for outbound flight.',
        lodging: 'Departure',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'All luxury safari villa accommodations with private balconies',
      'Private customized open-top 4WD safari vehicles and boats',
      'Lead safari naturalist and park ranger escorts',
      'All park entrance fees and wildlife conservation royalties',
      'All gourmet meals, bush picnics, and house beverages'
    ],
    exclusions: [
      'International airfare',
      'Personal gratuities for safari naturalists and tracker teams',
      'Travel insurance'
    ],
    accommodations: 'Meghauli Serai (A Taj Safari) & Barahi Jungle Lodge',
    bestSeason: 'October to April',
    featured: false
  },
  {
    id: 'spiritual-nepal',
    slug: 'spiritual-nepal',
    title: 'Spiritual Nepal: Monasteries & Sacred High Lakes',
    devanagari: 'आध्यात्मिक नेपाल यात्रा',
    category: 'Wellness',
    duration: '9 Days / 8 Nights',
    region: 'Kathmandu, Pokhara & Langtang',
    elevationMax: '3,870 m (Kyanjin Gompa)',
    pricing: {
      signature: 4100,
      privateBespoke: 5900,
      heliUpgrade: 1400
    },
    shortDescription: 'A pilgrimage of silence, Himalayan sound healing, private monastery audiences, and meditation above the clouds.',
    fullOverview: 'Designed for seekers of contemplative depth. Experience dawn mindfulness overlooking the sacred peaks of Machapuchare and Langtang, receive personal guidance from learned Buddhist scholars, and participate in evening butter-lamp lighting ceremonies away from the crowds.',
    heroImage: '/assets/images/stories/monasteries.webp',
    highlights: [
      'Private daily meditation and yoga guided by master instructors',
      'Exclusive audience and spiritual conversation with Tibetan Rinpoches',
      'Himalayan full-moon singing bowl sound therapy sessions',
      'Private retreat in sacred Dhulikhel and quiet monastery guesthouses',
      'Pilgrimage to sacred high-altitude alpine lake shrines'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Sacred Valley of Kathmandu',
        altitude: '1,400 m',
        description: 'Arrival and private transfer to heritage monastery retreat hotel. Orientation on contemplative itinerary.',
        lodging: 'Kopan Monastery Guesthouse / Dwarika’s',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Chants of Boudhanath & Secret Tara Shrines',
        altitude: '1,400 m',
        description: 'Early morning meditation at dawn inside private Tibetan shrine room. Walking circumambulation with butter lamp offering.',
        lodging: 'Dwarika’s Hotel',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 3,
        title: 'Ridge Retreat at Dhulikhel & Forest Mindfulness',
        altitude: '1,650 m',
        description: 'Transfer to Dhulikhel. Silent walk through pine forests with panoramic mountain vistas. Evening sound bath with 7-metal singing bowls.',
        lodging: 'Dwarika’s Resort Dhulikhel',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 4,
        title: 'Namo Buddha Cave Meditation',
        altitude: '1,750 m',
        description: 'Morning meditation at the sacred site where Bodhisattva offered his flesh. Conversation with senior monk on Buddhist ethics.',
        lodging: 'Dwarika’s Resort Dhulikhel',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 5,
        title: 'Heli-Flight to Langtang Sacred Glacier Valley',
        altitude: '3,870 m',
        description: 'Helicopter flight into Langtang valley. Visit Kyanjin Gompa. Meditation surrounded by ice peaks of Langtang Lirung.',
        lodging: 'Mountain Boutique Sanctuary',
        meals: 'Breakfast, Picnic, Dinner'
      },
      {
        day: 6,
        title: 'Return to Pokhara Lakeside Sanctuary',
        altitude: '822 m',
        description: 'Fly to Pokhara. Settle into peaceful yoga sanctuary. Sunset meditation over Phewa Lake.',
        lodging: 'Begnas Lake Resort',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 7,
        title: 'Ayurvedic Healing & Forest Bathing',
        altitude: '822 m',
        description: 'Personal Ayurvedic physician consultation, customized herbal therapies, and silent mindfulness practice.',
        lodging: 'Begnas Lake Resort',
        meals: 'Breakfast, Ayurvedic Lunch, Dinner'
      },
      {
        day: 8,
        title: 'Return to Kathmandu & Final Blessing',
        altitude: '1,400 m',
        description: 'Scenic flight to Kathmandu. Concluding dedication ceremony and celebratory farewell meal.',
        lodging: 'Dwarika’s Hotel Kathmandu',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 9,
        title: 'Departing in Peace',
        altitude: '1,400 m',
        description: 'Private transfer to airport.',
        lodging: 'Departure',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'All boutique luxury retreat accommodations',
      'Private master yoga & meditation instructor throughout',
      'Private helicopter access to high sacred glacial valley',
      'Curated organic Ayurvedic cuisine and daily herbal teas',
      'All monastery permits, offerings, and private sound therapy sessions'
    ],
    exclusions: [
      'International flights',
      'Personal medical insurance',
      'Optional additional spa treatments'
    ],
    accommodations: 'Dwarika’s Resort Dhulikhel & Begnas Lake Resort Pokhara',
    bestSeason: 'September to May',
    featured: false
  }
];
