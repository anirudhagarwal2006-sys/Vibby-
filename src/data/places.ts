export interface Place {
  id: string;
  name: string;
  description: string;
  address: string;
  rating: number;
  image: string;
  tags: string[];
  mapUrl: string;
}

export interface Mood {
  id: string;
  label: string;
  emoji: string;
  color: string;
  description: string;
}

export interface City {
  id: string;
  name: string;
  emoji: string;
  available: boolean;
}

export const cities: City[] = [
  { id: "lucknow", name: "Lucknow", emoji: "🕌", available: true },
  { id: "delhi", name: "Delhi", emoji: "🏛️", available: true },
  { id: "mumbai", name: "Mumbai", emoji: "🌊", available: true },
  { id: "bangalore", name: "Bangalore", emoji: "💻", available: false },
  { id: "jaipur", name: "Jaipur", emoji: "🏰", available: false },
  { id: "kolkata", name: "Kolkata", emoji: "🌉", available: false },
];

export const moods: Mood[] = [
  { id: "bored", label: "Bored AF", emoji: "😑", color: "from-blue-500 to-cyan-400", description: "Need something to do ASAP" },
  { id: "romantic", label: "Romantic", emoji: "💕", color: "from-pink-500 to-rose-400", description: "Date night vibes" },
  { id: "party", label: "Party Mode", emoji: "🎉", color: "from-purple-500 to-violet-400", description: "Let's gooo!" },
  { id: "chill", label: "Chill Vibes", emoji: "😌", color: "from-green-500 to-emerald-400", description: "Peace & calm" },
  { id: "foodie", label: "Foodie", emoji: "🍕", color: "from-orange-500 to-amber-400", description: "Hungry & exploring" },
  { id: "adventure", label: "Adventure", emoji: "🚀", color: "from-red-500 to-orange-400", description: "Thrill seeker mode" },
  { id: "shopping", label: "Retail Therapy", emoji: "🛍️", color: "from-yellow-500 to-amber-300", description: "Swipe that card" },
  { id: "cultural", label: "Cultural", emoji: "🎭", color: "from-indigo-500 to-blue-400", description: "Heritage & history" },
];

export const placesData: Record<string, Record<string, Place[]>> = {
  lucknow: {
    bored: [
      { id: "1", name: "Janeshwar Mishra Park", description: "Asia's largest park — perfect for walks, boating & just vibing. Great when you need fresh air and open space.", address: "Gomti Nagar, Lucknow", rating: 4.5, image: "🌳", tags: ["Park", "Boating", "Free Entry"], mapUrl: "https://maps.google.com/?q=Janeshwar+Mishra+Park+Lucknow" },
      { id: "2", name: "Gomti Riverfront", description: "Beautiful riverfront with gardens, musical fountain & evening lights. Perfect sunset spot.", address: "Gomti Nagar, Lucknow", rating: 4.3, image: "🌅", tags: ["Riverfront", "Evening", "Walk"], mapUrl: "https://maps.google.com/?q=Gomti+Riverfront+Lucknow" },
      { id: "3", name: "Lucknow Zoo", description: "One of the oldest zoos in India with diverse animals and a toy train. Fun for all ages!", address: "Hazratganj, Lucknow", rating: 4.0, image: "🦁", tags: ["Zoo", "Family", "Nature"], mapUrl: "https://maps.google.com/?q=Lucknow+Zoo" },
      { id: "4", name: "Fun Republic Mall", description: "Gaming zone, bowling alley & food court — your one-stop boredom killer.", address: "Gomti Nagar, Lucknow", rating: 4.1, image: "🎮", tags: ["Gaming", "Bowling", "Mall"], mapUrl: "https://maps.google.com/?q=Fun+Republic+Mall+Lucknow" },
    ],
    romantic: [
      { id: "5", name: "Ambedkar Park", description: "Beautiful architecture & evening lights make it super romantic. Walk hand-in-hand through the stunning monuments.", address: "Gomti Nagar, Lucknow", rating: 4.4, image: "💫", tags: ["Monument", "Evening", "Walk"], mapUrl: "https://maps.google.com/?q=Ambedkar+Park+Lucknow" },
      { id: "6", name: "The Terrace by Oakwood", description: "Rooftop dining with amazing views — perfect date night spot with great food & cocktails.", address: "Hazratganj, Lucknow", rating: 4.6, image: "🍷", tags: ["Rooftop", "Dinner", "Views"], mapUrl: "https://maps.google.com/?q=Oakwood+Premier+Lucknow" },
      { id: "7", name: "Gomti Riverfront Musical Fountain", description: "The musical fountain show in the evening is magical — hold hands and enjoy the lights!", address: "Gomti Nagar, Lucknow", rating: 4.2, image: "⛲", tags: ["Fountain", "Evening", "Romantic"], mapUrl: "https://maps.google.com/?q=Gomti+Riverfront+Musical+Fountain" },
      { id: "8", name: "Oudh Gymkhana Club", description: "Colonial-era charm with a beautiful garden setting — old-school romantic vibes.", address: "Hazratganj, Lucknow", rating: 4.3, image: "🌹", tags: ["Heritage", "Garden", "Classy"], mapUrl: "https://maps.google.com/?q=Oudh+Gymkhana+Club+Lucknow" },
    ],
    party: [
      { id: "9", name: "Lord of the Drinks", description: "Hottest club in Lucknow — great music, cocktails & weekend DJ nights. Get ready to dance!", address: "Gomti Nagar, Lucknow", rating: 4.3, image: "🍹", tags: ["Club", "DJ", "Nightlife"], mapUrl: "https://maps.google.com/?q=Lord+of+the+Drinks+Lucknow" },
      { id: "10", name: "Mojo Lounge", description: "Chill lounge with amazing hookah, music & a great vibe for group hangouts.", address: "Hazratganj, Lucknow", rating: 4.1, image: "💨", tags: ["Lounge", "Hookah", "Music"], mapUrl: "https://maps.google.com/?q=Mojo+Lounge+Lucknow" },
      { id: "11", name: "Rehab Disc", description: "The OG party spot of Lucknow — EDM nights, themed parties & insane energy!", address: "Gomti Nagar, Lucknow", rating: 4.0, image: "🪩", tags: ["Disco", "EDM", "Party"], mapUrl: "https://maps.google.com/?q=Rehab+Disc+Lucknow" },
      { id: "12", name: "Blue Bar - Hyatt", description: "Premium nightlife experience — signature cocktails, live music & classy crowd.", address: "Gomti Nagar, Lucknow", rating: 4.5, image: "🔵", tags: ["Bar", "Premium", "Live Music"], mapUrl: "https://maps.google.com/?q=Hyatt+Regency+Lucknow" },
    ],
    chill: [
      { id: "13", name: "Café de Flora", description: "Cozy café with aesthetic interiors — perfect for reading, journaling or just chilling with coffee.", address: "Gomti Nagar, Lucknow", rating: 4.4, image: "☕", tags: ["Café", "Cozy", "Coffee"], mapUrl: "https://maps.google.com/?q=Cafe+de+Flora+Lucknow" },
      { id: "14", name: "Buddha Park", description: "Peaceful green space with a calming Buddha statue — ideal for meditation & quiet time.", address: "Gomti Nagar, Lucknow", rating: 4.2, image: "🧘", tags: ["Park", "Peaceful", "Meditation"], mapUrl: "https://maps.google.com/?q=Buddha+Park+Lucknow" },
      { id: "15", name: "Begum Hazrat Mahal Park", description: "Heritage park right in the heart of the city — sit on the grass and people-watch.", address: "Hazratganj, Lucknow", rating: 4.0, image: "🌿", tags: ["Park", "Heritage", "Central"], mapUrl: "https://maps.google.com/?q=Begum+Hazrat+Mahal+Park+Lucknow" },
      { id: "16", name: "Lulu Mall Rooftop Garden", description: "India's largest mall has a rooftop garden — grab a smoothie and vibe.", address: "Amar Shaheed Path, Lucknow", rating: 4.3, image: "🏬", tags: ["Mall", "Rooftop", "Chill"], mapUrl: "https://maps.google.com/?q=Lulu+Mall+Lucknow" },
    ],
    foodie: [
      { id: "17", name: "Tunday Kababi", description: "THE legendary kebab spot — you haven't lived until you've tried their galouti kebabs!", address: "Aminabad, Lucknow", rating: 4.7, image: "🥩", tags: ["Kebabs", "Legendary", "Non-Veg"], mapUrl: "https://maps.google.com/?q=Tunday+Kababi+Lucknow" },
      { id: "18", name: "Sharma Tea Stall", description: "Iconic chai + samosa combo — the OG Lucknow street food experience.", address: "Hazratganj, Lucknow", rating: 4.3, image: "🍵", tags: ["Chai", "Street Food", "Iconic"], mapUrl: "https://maps.google.com/?q=Sharma+Tea+Stall+Hazratganj" },
      { id: "19", name: "Idris Biryani", description: "Rich, aromatic Lucknowi biryani — slow-cooked to perfection. Absolute must-try!", address: "Chowk, Lucknow", rating: 4.5, image: "🍚", tags: ["Biryani", "Traditional", "Non-Veg"], mapUrl: "https://maps.google.com/?q=Idris+Biryani+Lucknow" },
      { id: "20", name: "Royal Café", description: "Famous for basket chaat — a unique Lucknow invention. Sweet, spicy & crunchy!", address: "Hazratganj, Lucknow", rating: 4.4, image: "🧆", tags: ["Chaat", "Famous", "Veg"], mapUrl: "https://maps.google.com/?q=Royal+Cafe+Hazratganj+Lucknow" },
    ],
    adventure: [
      { id: "21", name: "Kukrail Reserve Forest", description: "Trek through the forest, spot crocodiles & enjoy nature — urban adventure at its best!", address: "Kukrail, Lucknow", rating: 4.1, image: "🐊", tags: ["Forest", "Trekking", "Wildlife"], mapUrl: "https://maps.google.com/?q=Kukrail+Reserve+Forest+Lucknow" },
      { id: "22", name: "Go-Karting at Ansal API", description: "High-speed go-karting for the adrenaline junkies — race your friends!", address: "Sushant Golf City, Lucknow", rating: 4.2, image: "🏎️", tags: ["Go-Kart", "Racing", "Thrill"], mapUrl: "https://maps.google.com/?q=Go+Karting+Lucknow" },
      { id: "23", name: "Paintball Arena", description: "Team up and battle it out — paintball is the ultimate weekend adventure!", address: "Gomti Nagar, Lucknow", rating: 4.0, image: "🎯", tags: ["Paintball", "Team", "Action"], mapUrl: "https://maps.google.com/?q=Paintball+Arena+Lucknow" },
      { id: "24", name: "Dream World Amusement Park", description: "Rides, water park & fun — full day of thrills and screams!", address: "Kanpur Road, Lucknow", rating: 3.9, image: "🎢", tags: ["Rides", "Water Park", "Fun"], mapUrl: "https://maps.google.com/?q=Dream+World+Amusement+Park+Lucknow" },
    ],
    shopping: [
      { id: "25", name: "Lulu Mall", description: "India's largest mall — everything from fashion to food to entertainment under one roof!", address: "Amar Shaheed Path, Lucknow", rating: 4.5, image: "🏬", tags: ["Mall", "Fashion", "Food Court"], mapUrl: "https://maps.google.com/?q=Lulu+Mall+Lucknow" },
      { id: "26", name: "Hazratganj Market", description: "The iconic shopping street of Lucknow — mix of heritage shops & modern brands.", address: "Hazratganj, Lucknow", rating: 4.3, image: "🛒", tags: ["Market", "Heritage", "Brands"], mapUrl: "https://maps.google.com/?q=Hazratganj+Market+Lucknow" },
      { id: "27", name: "Aminabad Market", description: "Old-school bazaar with amazing deals on chikankari, jewelry & street food!", address: "Aminabad, Lucknow", rating: 4.2, image: "👗", tags: ["Chikankari", "Bazaar", "Traditional"], mapUrl: "https://maps.google.com/?q=Aminabad+Market+Lucknow" },
      { id: "28", name: "Phoenix Palassio", description: "Premium mall with international brands — shop till you drop!", address: "Amar Shaheed Path, Lucknow", rating: 4.4, image: "✨", tags: ["Premium", "International", "Luxury"], mapUrl: "https://maps.google.com/?q=Phoenix+Palassio+Lucknow" },
    ],
    cultural: [
      { id: "29", name: "Bara Imambara", description: "Magnificent Mughal architecture with the famous Bhool Bhulaiya maze — iconic Lucknow!", address: "Husainabad, Lucknow", rating: 4.6, image: "🕌", tags: ["Heritage", "Maze", "Architecture"], mapUrl: "https://maps.google.com/?q=Bara+Imambara+Lucknow" },
      { id: "30", name: "Rumi Darwaza", description: "The gateway of Lucknow — stunning 60-feet tall monument from the Nawabi era.", address: "Husainabad, Lucknow", rating: 4.5, image: "🚪", tags: ["Monument", "Iconic", "History"], mapUrl: "https://maps.google.com/?q=Rumi+Darwaza+Lucknow" },
      { id: "31", name: "State Museum", description: "Explore Lucknow's rich history through ancient artifacts, paintings & sculptures.", address: "Hazratganj, Lucknow", rating: 4.1, image: "🏛️", tags: ["Museum", "History", "Art"], mapUrl: "https://maps.google.com/?q=State+Museum+Lucknow" },
      { id: "32", name: "Chota Imambara", description: "Also known as Palace of Lights — gorgeous chandeliers & royal tombs.", address: "Husainabad, Lucknow", rating: 4.4, image: "💡", tags: ["Heritage", "Royal", "Lights"], mapUrl: "https://maps.google.com/?q=Chota+Imambara+Lucknow" },
    ],
  },
  delhi: {
    bored: [
      { id: "d1", name: "India Gate", description: "Iconic monument with beautiful lawns — perfect for evening strolls & ice cream.", address: "Rajpath, New Delhi", rating: 4.6, image: "🏛️", tags: ["Monument", "Evening", "Walk"], mapUrl: "https://maps.google.com/?q=India+Gate+Delhi" },
      { id: "d2", name: "Hauz Khas Village", description: "Art galleries, cafes & a fort ruin — the ultimate artsy hangout spot.", address: "Hauz Khas, New Delhi", rating: 4.4, image: "🎨", tags: ["Art", "Café", "Fort"], mapUrl: "https://maps.google.com/?q=Hauz+Khas+Village+Delhi" },
      { id: "d3", name: "Kingdom of Dreams", description: "Bollywood-themed entertainment hub with live shows & carnival vibes.", address: "Gurgaon, NCR", rating: 4.2, image: "🎭", tags: ["Entertainment", "Shows", "Fun"], mapUrl: "https://maps.google.com/?q=Kingdom+of+Dreams+Gurgaon" },
    ],
    romantic: [
      { id: "d4", name: "Lodhi Garden", description: "Heritage garden with Mughal tombs — peaceful walks among ancient architecture.", address: "Lodhi Road, New Delhi", rating: 4.5, image: "🌹", tags: ["Garden", "Heritage", "Peaceful"], mapUrl: "https://maps.google.com/?q=Lodhi+Garden+Delhi" },
      { id: "d5", name: "Olive Bar & Kitchen", description: "Dreamy Mediterranean restaurant — fairy lights, great food & romantic ambiance.", address: "Mehrauli, New Delhi", rating: 4.6, image: "🕯️", tags: ["Restaurant", "Ambiance", "Premium"], mapUrl: "https://maps.google.com/?q=Olive+Bar+Kitchen+Delhi" },
    ],
    party: [
      { id: "d6", name: "Privée", description: "Upscale nightclub with international DJs and premium cocktails.", address: "Shangri-La, New Delhi", rating: 4.4, image: "🪩", tags: ["Club", "Premium", "DJ"], mapUrl: "https://maps.google.com/?q=Privee+Shangri+La+Delhi" },
      { id: "d7", name: "Cyber Hub", description: "Multiple bars & restaurants in one complex — bar hop all night!", address: "Gurgaon, NCR", rating: 4.3, image: "🍻", tags: ["Bar Hopping", "Food", "Nightlife"], mapUrl: "https://maps.google.com/?q=Cyber+Hub+Gurgaon" },
    ],
    chill: [
      { id: "d8", name: "Champa Gali", description: "Hidden gem with fairy lights, indie cafes & chill vibes.", address: "Saidulajab, New Delhi", rating: 4.5, image: "✨", tags: ["Café", "Hidden Gem", "Indie"], mapUrl: "https://maps.google.com/?q=Champa+Gali+Delhi" },
    ],
    foodie: [
      { id: "d9", name: "Chandni Chowk", description: "Street food paradise — paranthas, jalebis, chole bhature & more!", address: "Old Delhi", rating: 4.7, image: "🍛", tags: ["Street Food", "Iconic", "Must Visit"], mapUrl: "https://maps.google.com/?q=Chandni+Chowk+Delhi" },
      { id: "d10", name: "Karim's", description: "Legendary Mughlai cuisine since 1913 — butter chicken, kebabs & biryani.", address: "Jama Masjid, Old Delhi", rating: 4.6, image: "🥘", tags: ["Mughlai", "Legendary", "Non-Veg"], mapUrl: "https://maps.google.com/?q=Karims+Delhi" },
    ],
    adventure: [
      { id: "d11", name: "Flyboy Air Safari", description: "Microlight flying experience — see Delhi from above!", address: "Gurgaon, NCR", rating: 4.3, image: "✈️", tags: ["Flying", "Adventure", "Thrill"], mapUrl: "https://maps.google.com/?q=Flyboy+Air+Safari+Gurgaon" },
    ],
    shopping: [
      { id: "d12", name: "Sarojini Nagar", description: "Fashion paradise at throwaway prices — the ultimate shopping spree!", address: "Sarojini Nagar, New Delhi", rating: 4.4, image: "👗", tags: ["Fashion", "Bargain", "Market"], mapUrl: "https://maps.google.com/?q=Sarojini+Nagar+Market+Delhi" },
      { id: "d13", name: "Select Citywalk", description: "Premium mall with all major brands & great food court.", address: "Saket, New Delhi", rating: 4.5, image: "🏬", tags: ["Mall", "Premium", "Brands"], mapUrl: "https://maps.google.com/?q=Select+Citywalk+Delhi" },
    ],
    cultural: [
      { id: "d14", name: "Qutub Minar", description: "UNESCO World Heritage site — stunning 73m tall victory tower from 1193.", address: "Mehrauli, New Delhi", rating: 4.6, image: "🗼", tags: ["UNESCO", "Heritage", "Monument"], mapUrl: "https://maps.google.com/?q=Qutub+Minar+Delhi" },
      { id: "d15", name: "National Museum", description: "5000 years of Indian art & culture under one roof.", address: "Janpath, New Delhi", rating: 4.3, image: "🏛️", tags: ["Museum", "Art", "History"], mapUrl: "https://maps.google.com/?q=National+Museum+Delhi" },
    ],
  },
  mumbai: {
    bored: [
      { id: "m1", name: "Marine Drive", description: "The Queen's Necklace — iconic seafront promenade perfect for evening walks.", address: "Marine Drive, Mumbai", rating: 4.7, image: "🌊", tags: ["Seafront", "Iconic", "Walk"], mapUrl: "https://maps.google.com/?q=Marine+Drive+Mumbai" },
      { id: "m2", name: "Bandstand Promenade", description: "Beautiful seafront walk in Bandra — spot SRK's Mannat too!", address: "Bandra, Mumbai", rating: 4.4, image: "🌅", tags: ["Seafront", "Celebrity", "Walk"], mapUrl: "https://maps.google.com/?q=Bandstand+Promenade+Mumbai" },
    ],
    romantic: [
      { id: "m3", name: "Bandra-Worli Sea Link", description: "Drive across the iconic bridge at sunset — unforgettable experience!", address: "Bandra-Worli, Mumbai", rating: 4.5, image: "🌉", tags: ["Bridge", "Sunset", "Drive"], mapUrl: "https://maps.google.com/?q=Bandra+Worli+Sea+Link" },
    ],
    party: [
      { id: "m4", name: "Tryst", description: "Bollywood celeb-favorite nightclub — party like a star!", address: "Juhu, Mumbai", rating: 4.3, image: "⭐", tags: ["Club", "Celebrity", "Nightlife"], mapUrl: "https://maps.google.com/?q=Tryst+Mumbai" },
    ],
    chill: [
      { id: "m5", name: "Prithvi Theatre Café", description: "Iconic theatre café — Irish coffee, bookshop vibes & cultural energy.", address: "Juhu, Mumbai", rating: 4.6, image: "📚", tags: ["Café", "Theatre", "Culture"], mapUrl: "https://maps.google.com/?q=Prithvi+Theatre+Mumbai" },
    ],
    foodie: [
      { id: "m6", name: "Mohammed Ali Road", description: "Mumbai's street food heaven — seekh kebabs, malpua & phirni!", address: "South Mumbai", rating: 4.5, image: "🥙", tags: ["Street Food", "Non-Veg", "Iconic"], mapUrl: "https://maps.google.com/?q=Mohammed+Ali+Road+Mumbai" },
      { id: "m7", name: "Bademiya", description: "Legendary late-night kebab stall — a Mumbai institution since 1946.", address: "Colaba, Mumbai", rating: 4.4, image: "🍖", tags: ["Kebabs", "Late Night", "Legendary"], mapUrl: "https://maps.google.com/?q=Bademiya+Mumbai" },
    ],
    adventure: [
      { id: "m8", name: "EsselWorld", description: "Mumbai's iconic amusement park — rides, water park & full-day fun!", address: "Gorai, Mumbai", rating: 4.1, image: "🎢", tags: ["Amusement Park", "Rides", "Water Park"], mapUrl: "https://maps.google.com/?q=EsselWorld+Mumbai" },
    ],
    shopping: [
      { id: "m9", name: "Linking Road", description: "Street shopping paradise — fashion, accessories & great bargains!", address: "Bandra, Mumbai", rating: 4.3, image: "🛍️", tags: ["Street Shopping", "Fashion", "Bargain"], mapUrl: "https://maps.google.com/?q=Linking+Road+Mumbai" },
    ],
    cultural: [
      { id: "m10", name: "Gateway of India", description: "Iconic colonial monument overlooking the Arabian Sea — must visit!", address: "Colaba, Mumbai", rating: 4.6, image: "🚪", tags: ["Monument", "Iconic", "Heritage"], mapUrl: "https://maps.google.com/?q=Gateway+of+India+Mumbai" },
    ],
  },
};
