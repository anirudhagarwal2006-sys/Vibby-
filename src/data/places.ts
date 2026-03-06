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
      { id: "d16", name: "Nehru Place", description: "Tech hub turned hangout — grab gadgets, eat momos & vibe with the crowd.", address: "Nehru Place, New Delhi", rating: 4.0, image: "💻", tags: ["Tech", "Momos", "Shopping"], mapUrl: "https://maps.google.com/?q=Nehru+Place+Delhi" },
      { id: "d17", name: "Worlds of Wonder", description: "Amusement park with roller coasters, water rides & laser tag — boredom destroyer!", address: "Noida, NCR", rating: 4.1, image: "🎢", tags: ["Rides", "Water Park", "Fun"], mapUrl: "https://maps.google.com/?q=Worlds+of+Wonder+Noida" },
      { id: "d18", name: "The Garden of Five Senses", description: "Beautiful themed gardens with art installations — great for photography & walks.", address: "Saket, New Delhi", rating: 4.3, image: "🌺", tags: ["Garden", "Art", "Photography"], mapUrl: "https://maps.google.com/?q=Garden+of+Five+Senses+Delhi" },
      { id: "d19", name: "National Rail Museum", description: "Vintage trains, toy train rides & railway history — surprisingly fun!", address: "Chanakyapuri, New Delhi", rating: 4.2, image: "🚂", tags: ["Museum", "Trains", "Family"], mapUrl: "https://maps.google.com/?q=National+Rail+Museum+Delhi" },
      { id: "d20", name: "Connaught Place", description: "The heart of Delhi — walk around the circle, grab food, shop or just people-watch.", address: "Connaught Place, New Delhi", rating: 4.5, image: "🏙️", tags: ["Shopping", "Food", "Iconic"], mapUrl: "https://maps.google.com/?q=Connaught+Place+Delhi" },
      { id: "d21", name: "Smaaash", description: "Virtual reality games, go-karting & cricket simulators — perfect for groups!", address: "Cyber Hub, Gurgaon", rating: 4.0, image: "🎮", tags: ["Gaming", "VR", "Go-Kart"], mapUrl: "https://maps.google.com/?q=Smaaash+Cyber+Hub+Gurgaon" },
      { id: "d22", name: "Dilli Haat", description: "Open-air food & craft bazaar — explore handicrafts from all Indian states.", address: "INA, New Delhi", rating: 4.4, image: "🧶", tags: ["Crafts", "Food", "Culture"], mapUrl: "https://maps.google.com/?q=Dilli+Haat+INA+Delhi" },
    ],
    romantic: [
      { id: "d4", name: "Lodhi Garden", description: "Heritage garden with Mughal tombs — peaceful walks among ancient architecture.", address: "Lodhi Road, New Delhi", rating: 4.5, image: "🌹", tags: ["Garden", "Heritage", "Peaceful"], mapUrl: "https://maps.google.com/?q=Lodhi+Garden+Delhi" },
      { id: "d5", name: "Olive Bar & Kitchen", description: "Dreamy Mediterranean restaurant — fairy lights, great food & romantic ambiance.", address: "Mehrauli, New Delhi", rating: 4.6, image: "🕯️", tags: ["Restaurant", "Ambiance", "Premium"], mapUrl: "https://maps.google.com/?q=Olive+Bar+Kitchen+Delhi" },
      { id: "d23", name: "Humayun's Tomb at Sunset", description: "Mughal architecture glowing in golden hour — the most romantic monument in Delhi.", address: "Nizamuddin, New Delhi", rating: 4.7, image: "🌅", tags: ["Heritage", "Sunset", "UNESCO"], mapUrl: "https://maps.google.com/?q=Humayuns+Tomb+Delhi" },
      { id: "d24", name: "Fio Cookhouse", description: "Garden restaurant in the middle of a park — dreamy Italian food & cocktails.", address: "Garden of Five Senses, New Delhi", rating: 4.5, image: "🍝", tags: ["Italian", "Garden", "Date Night"], mapUrl: "https://maps.google.com/?q=Fio+Cookhouse+Delhi" },
      { id: "d25", name: "The Roseate House", description: "Luxury hotel with stunning pool & rooftop — perfect staycation date.", address: "Aerocity, New Delhi", rating: 4.6, image: "🏨", tags: ["Luxury", "Pool", "Staycation"], mapUrl: "https://maps.google.com/?q=Roseate+House+Delhi" },
      { id: "d26", name: "Deer Park", description: "Quiet park with actual deer roaming around — cute picnic date spot.", address: "Hauz Khas, New Delhi", rating: 4.3, image: "🦌", tags: ["Park", "Picnic", "Nature"], mapUrl: "https://maps.google.com/?q=Deer+Park+Hauz+Khas+Delhi" },
      { id: "d27", name: "Diggin Café", description: "Garden seating, fairy lights & comfort food — Delhi's favorite date café.", address: "Chanakyapuri, New Delhi", rating: 4.4, image: "☕", tags: ["Café", "Garden", "Cozy"], mapUrl: "https://maps.google.com/?q=Diggin+Cafe+Delhi" },
      { id: "d28", name: "Sunder Nursery", description: "Beautifully restored heritage park — flowers, fountains & peaceful walks.", address: "Nizamuddin, New Delhi", rating: 4.5, image: "🌷", tags: ["Garden", "Heritage", "Flowers"], mapUrl: "https://maps.google.com/?q=Sunder+Nursery+Delhi" },
      { id: "d29", name: "Latitude 28", description: "Rooftop dining with Delhi skyline views — cocktails under the stars.", address: "Khan Market, New Delhi", rating: 4.4, image: "🌃", tags: ["Rooftop", "Cocktails", "Views"], mapUrl: "https://maps.google.com/?q=Latitude+28+Delhi" },
      { id: "d30", name: "Boat Ride at Old Fort", description: "Pedal boating in the lake beside Purana Qila — simple but super romantic.", address: "Purana Qila, New Delhi", rating: 4.2, image: "🚣", tags: ["Boating", "Fort", "Lake"], mapUrl: "https://maps.google.com/?q=Purana+Qila+Boating+Delhi" },
    ],
    party: [
      { id: "d6", name: "Privée", description: "Upscale nightclub with international DJs and premium cocktails.", address: "Shangri-La, New Delhi", rating: 4.4, image: "🪩", tags: ["Club", "Premium", "DJ"], mapUrl: "https://maps.google.com/?q=Privee+Shangri+La+Delhi" },
      { id: "d7", name: "Cyber Hub", description: "Multiple bars & restaurants in one complex — bar hop all night!", address: "Gurgaon, NCR", rating: 4.3, image: "🍻", tags: ["Bar Hopping", "Food", "Nightlife"], mapUrl: "https://maps.google.com/?q=Cyber+Hub+Gurgaon" },
      { id: "d31", name: "Kitty Su", description: "Asia's top nightclub — underground music, drag shows & insane energy!", address: "The Lalit, New Delhi", rating: 4.5, image: "🎶", tags: ["Club", "Underground", "LGBTQ+"], mapUrl: "https://maps.google.com/?q=Kitty+Su+Delhi" },
      { id: "d32", name: "Aer Lounge", description: "Rooftop bar with panoramic views — cocktails, hookah & chill party vibes.", address: "Connaught Place, New Delhi", rating: 4.2, image: "🍸", tags: ["Rooftop", "Hookah", "Views"], mapUrl: "https://maps.google.com/?q=Aer+Lounge+Delhi" },
      { id: "d33", name: "Toy Room", description: "Playful nightclub with quirky décor — hip-hop, Bollywood & bottle service.", address: "GK-2, New Delhi", rating: 4.1, image: "🧸", tags: ["Club", "Hip-Hop", "Bollywood"], mapUrl: "https://maps.google.com/?q=Toy+Room+Delhi" },
      { id: "d34", name: "Imperfecto", description: "Eclectic pub with live music, great food & Bohemian vibes.", address: "Hauz Khas, New Delhi", rating: 4.3, image: "🎸", tags: ["Pub", "Live Music", "Bohemian"], mapUrl: "https://maps.google.com/?q=Imperfecto+Hauz+Khas+Delhi" },
      { id: "d35", name: "Diablo", description: "High-energy club with pyro shows, LED screens & premium DJs.", address: "Aerocity, New Delhi", rating: 4.2, image: "🔥", tags: ["Club", "High Energy", "Premium"], mapUrl: "https://maps.google.com/?q=Diablo+Delhi" },
      { id: "d36", name: "Summer House Café", description: "Live band performances every weekend — great craft beer selection too.", address: "Hauz Khas, New Delhi", rating: 4.4, image: "🎤", tags: ["Live Music", "Craft Beer", "Café"], mapUrl: "https://maps.google.com/?q=Summer+House+Cafe+Delhi" },
      { id: "d37", name: "1Q1 Kitchen & Bar", description: "Multi-level venue with different vibes on each floor — something for everyone.", address: "Connaught Place, New Delhi", rating: 4.1, image: "🏢", tags: ["Bar", "Multi-Level", "Nightlife"], mapUrl: "https://maps.google.com/?q=1Q1+Kitchen+Bar+Delhi" },
      { id: "d38", name: "Raasta", description: "Reggae-themed bar with Bob Marley vibes — chill music, strong drinks.", address: "Hauz Khas, New Delhi", rating: 4.0, image: "🟢", tags: ["Reggae", "Chill", "Bar"], mapUrl: "https://maps.google.com/?q=Raasta+Hauz+Khas+Delhi" },
    ],
    chill: [
      { id: "d8", name: "Champa Gali", description: "Hidden gem with fairy lights, indie cafes & chill vibes.", address: "Saidulajab, New Delhi", rating: 4.5, image: "✨", tags: ["Café", "Hidden Gem", "Indie"], mapUrl: "https://maps.google.com/?q=Champa+Gali+Delhi" },
      { id: "d39", name: "Lodhi Art District", description: "Open-air street art gallery — murals by international artists on every wall.", address: "Lodhi Colony, New Delhi", rating: 4.4, image: "🎨", tags: ["Street Art", "Walk", "Free"], mapUrl: "https://maps.google.com/?q=Lodhi+Art+District+Delhi" },
      { id: "d40", name: "Rose Café", description: "Pink-themed café with gorgeous interiors — perfect for lazy brunches.", address: "Saket, New Delhi", rating: 4.3, image: "🌸", tags: ["Café", "Brunch", "Aesthetic"], mapUrl: "https://maps.google.com/?q=Rose+Cafe+Delhi" },
      { id: "d41", name: "Majnu Ka Tilla", description: "Mini Tibet in Delhi — momos, thukpa & Tibetan prayer flags everywhere.", address: "North Delhi", rating: 4.3, image: "🏔️", tags: ["Tibetan", "Food", "Culture"], mapUrl: "https://maps.google.com/?q=Majnu+Ka+Tilla+Delhi" },
      { id: "d42", name: "People & Co.", description: "Bookshop + café combo — read, sip coffee & escape the chaos.", address: "Connaught Place, New Delhi", rating: 4.2, image: "📖", tags: ["Bookshop", "Café", "Quiet"], mapUrl: "https://maps.google.com/?q=People+Co+Delhi" },
      { id: "d43", name: "Japanese Park", description: "Zen garden vibes in the middle of Delhi — koi pond, bridges & peace.", address: "Rohini, New Delhi", rating: 4.0, image: "🎋", tags: ["Park", "Zen", "Peaceful"], mapUrl: "https://maps.google.com/?q=Japanese+Park+Rohini+Delhi" },
      { id: "d44", name: "Ama Café", description: "Cozy Tibetan café in Majnu Ka Tilla — amazing views & peaceful energy.", address: "Majnu Ka Tilla, New Delhi", rating: 4.4, image: "🍵", tags: ["Café", "Tibetan", "Rooftop"], mapUrl: "https://maps.google.com/?q=Ama+Cafe+Delhi" },
      { id: "d45", name: "The Blue Door Café", description: "Instagram-worthy brunch spot — pancakes, waffles & chill weekend vibes.", address: "Khan Market, New Delhi", rating: 4.3, image: "🥞", tags: ["Brunch", "Café", "Instagram"], mapUrl: "https://maps.google.com/?q=Blue+Door+Cafe+Delhi" },
      { id: "d46", name: "Nehru Park", description: "Sprawling green park — morning yoga, evening walks or just lying on the grass.", address: "Chanakyapuri, New Delhi", rating: 4.2, image: "🌿", tags: ["Park", "Yoga", "Walk"], mapUrl: "https://maps.google.com/?q=Nehru+Park+Delhi" },
      { id: "d47", name: "Music & Mountains Café", description: "Mountain-themed café with acoustic sessions — escape to the hills in Delhi.", address: "Hauz Khas, New Delhi", rating: 4.1, image: "🏕️", tags: ["Café", "Music", "Cozy"], mapUrl: "https://maps.google.com/?q=Music+Mountains+Cafe+Delhi" },
    ],
    foodie: [
      { id: "d9", name: "Chandni Chowk", description: "Street food paradise — paranthas, jalebis, chole bhature & more!", address: "Old Delhi", rating: 4.7, image: "🍛", tags: ["Street Food", "Iconic", "Must Visit"], mapUrl: "https://maps.google.com/?q=Chandni+Chowk+Delhi" },
      { id: "d10", name: "Karim's", description: "Legendary Mughlai cuisine since 1913 — butter chicken, kebabs & biryani.", address: "Jama Masjid, Old Delhi", rating: 4.6, image: "🥘", tags: ["Mughlai", "Legendary", "Non-Veg"], mapUrl: "https://maps.google.com/?q=Karims+Delhi" },
      { id: "d48", name: "Paranthe Wali Gali", description: "Famous lane of parantha shops — stuffed with everything from rabri to mixed veg!", address: "Chandni Chowk, Old Delhi", rating: 4.5, image: "🫓", tags: ["Parantha", "Street Food", "Famous"], mapUrl: "https://maps.google.com/?q=Paranthe+Wali+Gali+Delhi" },
      { id: "d49", name: "Al Jawahar", description: "Right opposite Jama Masjid — nihari, kebabs & butter-dripping naans.", address: "Jama Masjid, Old Delhi", rating: 4.4, image: "🍖", tags: ["Mughlai", "Non-Veg", "Heritage"], mapUrl: "https://maps.google.com/?q=Al+Jawahar+Delhi" },
      { id: "d50", name: "Natraj Dahi Bhalle", description: "Iconic chaat corner — dahi bhalle that'll make you forget every other chaat.", address: "Chandni Chowk, Old Delhi", rating: 4.5, image: "🥣", tags: ["Chaat", "Iconic", "Veg"], mapUrl: "https://maps.google.com/?q=Natraj+Dahi+Bhalle+Delhi" },
      { id: "d51", name: "Khan Chacha", description: "Best rolls & kebabs in Khan Market — juicy, smoky & always crowded.", address: "Khan Market, New Delhi", rating: 4.3, image: "🌯", tags: ["Rolls", "Kebabs", "Popular"], mapUrl: "https://maps.google.com/?q=Khan+Chacha+Delhi" },
      { id: "d52", name: "Bikkgane Biryani", description: "Hyderabadi-style dum biryani in Delhi — slow-cooked perfection.", address: "Connaught Place, New Delhi", rating: 4.2, image: "🍚", tags: ["Biryani", "Hyderabadi", "Non-Veg"], mapUrl: "https://maps.google.com/?q=Bikkgane+Biryani+Delhi" },
      { id: "d53", name: "SodaBottleOpenerWala", description: "Quirky Parsi café — berry pulao, bun maska & Irani chai done right.", address: "Khan Market, New Delhi", rating: 4.4, image: "🍰", tags: ["Parsi", "Quirky", "Café"], mapUrl: "https://maps.google.com/?q=SodaBottleOpenerWala+Delhi" },
      { id: "d54", name: "Chache Di Hatti", description: "Viral chole kulche stall — long queues but totally worth the wait!", address: "Kamla Nagar, New Delhi", rating: 4.3, image: "🫘", tags: ["Chole Kulche", "Viral", "Street Food"], mapUrl: "https://maps.google.com/?q=Chache+Di+Hatti+Delhi" },
      { id: "d55", name: "Big Chill Café", description: "Delhi's beloved café — pastas, cheesecakes & that iconic retro vibe.", address: "Khan Market, New Delhi", rating: 4.5, image: "🍝", tags: ["Café", "Italian", "Desserts"], mapUrl: "https://maps.google.com/?q=Big+Chill+Cafe+Delhi" },
    ],
    adventure: [
      { id: "d11", name: "Flyboy Air Safari", description: "Microlight flying experience — see Delhi from above!", address: "Gurgaon, NCR", rating: 4.3, image: "✈️", tags: ["Flying", "Adventure", "Thrill"], mapUrl: "https://maps.google.com/?q=Flyboy+Air+Safari+Gurgaon" },
      { id: "d56", name: "ATV Rides Damdama Lake", description: "Off-road ATV riding near a beautiful lake — weekend adventure sorted!", address: "Sohna, NCR", rating: 4.1, image: "🏍️", tags: ["ATV", "Off-Road", "Lake"], mapUrl: "https://maps.google.com/?q=Damdama+Lake+ATV" },
      { id: "d57", name: "Camp Wild Dhauj", description: "Rock climbing, rappelling & zip-lining — outdoor adventure just outside Delhi.", address: "Dhauj, Faridabad", rating: 4.2, image: "🧗", tags: ["Rock Climbing", "Rappelling", "Camping"], mapUrl: "https://maps.google.com/?q=Camp+Wild+Dhauj" },
      { id: "d58", name: "iFly Indoor Skydiving", description: "Experience freefall without jumping from a plane — wind tunnel skydiving!", address: "Noida, NCR", rating: 4.0, image: "🪂", tags: ["Skydiving", "Indoor", "Thrill"], mapUrl: "https://maps.google.com/?q=iFly+Indoor+Skydiving+Noida" },
      { id: "d59", name: "Snow World", description: "Sub-zero snow experience in Delhi's heat — snowball fights & ice slides!", address: "Noida, NCR", rating: 3.9, image: "❄️", tags: ["Snow", "Indoor", "Fun"], mapUrl: "https://maps.google.com/?q=Snow+World+Noida" },
      { id: "d60", name: "Asola Bhatti Wildlife Sanctuary", description: "Hiking trails through Delhi's own forest — spot peacocks & nilgai!", address: "South Delhi", rating: 4.1, image: "🦚", tags: ["Hiking", "Wildlife", "Nature"], mapUrl: "https://maps.google.com/?q=Asola+Bhatti+Wildlife+Sanctuary" },
      { id: "d61", name: "Bungee Jumping at Wanderlust", description: "55-feet bungee jump — scream your lungs out!", address: "Gurgaon, NCR", rating: 4.0, image: "🤸", tags: ["Bungee", "Extreme", "Thrill"], mapUrl: "https://maps.google.com/?q=Bungee+Jumping+Gurgaon" },
      { id: "d62", name: "Go-Karting at Smaaash", description: "High-speed indoor go-karting — race your squad!", address: "Gurgaon, NCR", rating: 4.1, image: "🏎️", tags: ["Go-Kart", "Racing", "Indoor"], mapUrl: "https://maps.google.com/?q=Go+Karting+Smaaash+Gurgaon" },
      { id: "d63", name: "Escape Room Games", description: "Solve puzzles, crack codes & escape before time runs out — team brain workout!", address: "Connaught Place, New Delhi", rating: 4.2, image: "🔐", tags: ["Escape Room", "Puzzle", "Team"], mapUrl: "https://maps.google.com/?q=Escape+Room+Delhi" },
      { id: "d64", name: "Laser Tag at Appu Ghar", description: "Futuristic laser tag arena — squad up and battle it out!", address: "Gurgaon, NCR", rating: 4.0, image: "🔫", tags: ["Laser Tag", "Indoor", "Team"], mapUrl: "https://maps.google.com/?q=Appu+Ghar+Gurgaon" },
    ],
    shopping: [
      { id: "d12", name: "Sarojini Nagar", description: "Fashion paradise at throwaway prices — the ultimate shopping spree!", address: "Sarojini Nagar, New Delhi", rating: 4.4, image: "👗", tags: ["Fashion", "Bargain", "Market"], mapUrl: "https://maps.google.com/?q=Sarojini+Nagar+Market+Delhi" },
      { id: "d13", name: "Select Citywalk", description: "Premium mall with all major brands & great food court.", address: "Saket, New Delhi", rating: 4.5, image: "🏬", tags: ["Mall", "Premium", "Brands"], mapUrl: "https://maps.google.com/?q=Select+Citywalk+Delhi" },
      { id: "d65", name: "Janpath Market", description: "Boho jewelry, vintage clothes & quirky finds — haggle like a pro!", address: "Janpath, New Delhi", rating: 4.2, image: "📿", tags: ["Boho", "Jewelry", "Vintage"], mapUrl: "https://maps.google.com/?q=Janpath+Market+Delhi" },
      { id: "d66", name: "Chandni Chowk Market", description: "Oldest market in Delhi — electronics, fabric, spices & everything imaginable.", address: "Old Delhi", rating: 4.3, image: "🛒", tags: ["Traditional", "Wholesale", "Heritage"], mapUrl: "https://maps.google.com/?q=Chandni+Chowk+Market+Delhi" },
      { id: "d67", name: "DLF Mall of India", description: "Massive 7-floor mall — international brands, IMAX & snow park!", address: "Noida, NCR", rating: 4.4, image: "🏗️", tags: ["Mall", "Huge", "Entertainment"], mapUrl: "https://maps.google.com/?q=DLF+Mall+of+India+Noida" },
      { id: "d68", name: "Khan Market", description: "Delhi's poshest market — designer stores, bookshops & fine dining.", address: "Khan Market, New Delhi", rating: 4.5, image: "💎", tags: ["Premium", "Designer", "Books"], mapUrl: "https://maps.google.com/?q=Khan+Market+Delhi" },
      { id: "d69", name: "Lajpat Nagar Central Market", description: "Wedding shopping heaven — lehengas, suits & mehndi artists everywhere!", address: "Lajpat Nagar, New Delhi", rating: 4.2, image: "👰", tags: ["Wedding", "Ethnic", "Market"], mapUrl: "https://maps.google.com/?q=Lajpat+Nagar+Central+Market+Delhi" },
      { id: "d70", name: "Ambience Mall", description: "Luxury mall with high-end brands — Zara, H&M, and more under one roof.", address: "Vasant Kunj, New Delhi", rating: 4.3, image: "✨", tags: ["Luxury", "Mall", "Brands"], mapUrl: "https://maps.google.com/?q=Ambience+Mall+Delhi" },
      { id: "d71", name: "Palika Bazaar", description: "Underground market at CP — electronics, shoes & trendy stuff at cheap rates.", address: "Connaught Place, New Delhi", rating: 3.9, image: "🕳️", tags: ["Underground", "Electronics", "Bargain"], mapUrl: "https://maps.google.com/?q=Palika+Bazaar+Delhi" },
      { id: "d72", name: "Meena Bazaar", description: "Chikankari, zardozi & traditional Indian wear — perfect for ethnic shopping.", address: "Old Delhi", rating: 4.1, image: "🧵", tags: ["Ethnic", "Traditional", "Embroidery"], mapUrl: "https://maps.google.com/?q=Meena+Bazaar+Delhi" },
    ],
    cultural: [
      { id: "d14", name: "Qutub Minar", description: "UNESCO World Heritage site — stunning 73m tall victory tower from 1193.", address: "Mehrauli, New Delhi", rating: 4.6, image: "🗼", tags: ["UNESCO", "Heritage", "Monument"], mapUrl: "https://maps.google.com/?q=Qutub+Minar+Delhi" },
      { id: "d15", name: "National Museum", description: "5000 years of Indian art & culture under one roof.", address: "Janpath, New Delhi", rating: 4.3, image: "🏛️", tags: ["Museum", "Art", "History"], mapUrl: "https://maps.google.com/?q=National+Museum+Delhi" },
      { id: "d73", name: "Red Fort", description: "Magnificent Mughal fortress — where India's Independence Day is celebrated!", address: "Chandni Chowk, Old Delhi", rating: 4.5, image: "🏰", tags: ["Mughal", "Heritage", "Iconic"], mapUrl: "https://maps.google.com/?q=Red+Fort+Delhi" },
      { id: "d74", name: "Humayun's Tomb", description: "Precursor to the Taj Mahal — stunning Mughal garden tomb, UNESCO site.", address: "Nizamuddin, New Delhi", rating: 4.7, image: "🕌", tags: ["UNESCO", "Mughal", "Architecture"], mapUrl: "https://maps.google.com/?q=Humayuns+Tomb+Delhi" },
      { id: "d75", name: "Akshardham Temple", description: "Architectural marvel with light & water show — spiritual & visual treat!", address: "Noida Border, New Delhi", rating: 4.8, image: "🛕", tags: ["Temple", "Light Show", "Architecture"], mapUrl: "https://maps.google.com/?q=Akshardham+Temple+Delhi" },
      { id: "d76", name: "Jama Masjid", description: "India's largest mosque — climb the minaret for breathtaking Old Delhi views.", address: "Old Delhi", rating: 4.5, image: "🕌", tags: ["Mosque", "Heritage", "Views"], mapUrl: "https://maps.google.com/?q=Jama+Masjid+Delhi" },
      { id: "d77", name: "National Gallery of Modern Art", description: "Contemporary & modern Indian art — from Raja Ravi Varma to Husain.", address: "India Gate, New Delhi", rating: 4.3, image: "🖼️", tags: ["Art", "Modern", "Gallery"], mapUrl: "https://maps.google.com/?q=National+Gallery+Modern+Art+Delhi" },
      { id: "d78", name: "Gurudwara Bangla Sahib", description: "Serene Sikh temple with a holy lake — free langar & spiritual peace.", address: "Connaught Place, New Delhi", rating: 4.6, image: "🙏", tags: ["Gurudwara", "Spiritual", "Langar"], mapUrl: "https://maps.google.com/?q=Gurudwara+Bangla+Sahib+Delhi" },
      { id: "d79", name: "Crafts Museum", description: "Living museum with artisans at work — pottery, weaving & folk art.", address: "Pragati Maidan, New Delhi", rating: 4.2, image: "🏺", tags: ["Crafts", "Folk Art", "Museum"], mapUrl: "https://maps.google.com/?q=Crafts+Museum+Delhi" },
      { id: "d80", name: "Agrasen Ki Baoli", description: "Mysterious 14th-century stepwell — eerie, photogenic & historically fascinating.", address: "Hailey Road, New Delhi", rating: 4.4, image: "🏚️", tags: ["Stepwell", "Mystery", "Photography"], mapUrl: "https://maps.google.com/?q=Agrasen+Ki+Baoli+Delhi" },
    ],
  },
  mumbai: {
    bored: [
      { id: "m1", name: "Marine Drive", description: "The Queen's Necklace — iconic seafront promenade perfect for evening walks.", address: "Marine Drive, Mumbai", rating: 4.7, image: "🌊", tags: ["Seafront", "Iconic", "Walk"], mapUrl: "https://maps.google.com/?q=Marine+Drive+Mumbai" },
      { id: "m2", name: "Bandstand Promenade", description: "Beautiful seafront walk in Bandra — spot SRK's Mannat too!", address: "Bandra, Mumbai", rating: 4.4, image: "🌅", tags: ["Seafront", "Celebrity", "Walk"], mapUrl: "https://maps.google.com/?q=Bandstand+Promenade+Mumbai" },
      { id: "m11", name: "Carter Road", description: "Chill seafront walk with amazing street food stalls & sunset views.", address: "Bandra, Mumbai", rating: 4.3, image: "🏖️", tags: ["Seafront", "Food", "Sunset"], mapUrl: "https://maps.google.com/?q=Carter+Road+Mumbai" },
      { id: "m12", name: "Phoenix Palladium", description: "Premium mall with bowling, gaming zone & all the big brands.", address: "Lower Parel, Mumbai", rating: 4.4, image: "🏬", tags: ["Mall", "Gaming", "Premium"], mapUrl: "https://maps.google.com/?q=Phoenix+Palladium+Mumbai" },
      { id: "m13", name: "Girgaon Chowpatty", description: "Iconic beach — bhel puri, kulfi & the classic Mumbai evening experience.", address: "Girgaon, Mumbai", rating: 4.2, image: "🏝️", tags: ["Beach", "Street Food", "Iconic"], mapUrl: "https://maps.google.com/?q=Girgaon+Chowpatty+Mumbai" },
      { id: "m14", name: "R City Mall", description: "Massive mall with IMAX, food court & entertainment zone.", address: "Ghatkopar, Mumbai", rating: 4.1, image: "🎬", tags: ["Mall", "IMAX", "Entertainment"], mapUrl: "https://maps.google.com/?q=R+City+Mall+Mumbai" },
      { id: "m15", name: "Worli Sea Face", description: "Long seafront stretch — great for jogging, cycling or just vibing.", address: "Worli, Mumbai", rating: 4.3, image: "🚴", tags: ["Seafront", "Jogging", "Cycling"], mapUrl: "https://maps.google.com/?q=Worli+Sea+Face+Mumbai" },
      { id: "m16", name: "Juhu Beach", description: "Mumbai's most famous beach — pav bhaji, pani puri & Bollywood spotting!", address: "Juhu, Mumbai", rating: 4.3, image: "⛱️", tags: ["Beach", "Famous", "Food"], mapUrl: "https://maps.google.com/?q=Juhu+Beach+Mumbai" },
      { id: "m17", name: "Nehru Planetarium", description: "Space shows & astronomy exhibits — geek out under the stars!", address: "Worli, Mumbai", rating: 4.0, image: "🔭", tags: ["Science", "Space", "Shows"], mapUrl: "https://maps.google.com/?q=Nehru+Planetarium+Mumbai" },
      { id: "m18", name: "CSMVS Museum", description: "Stunning colonial-era museum — art, history & natural history all in one.", address: "Fort, Mumbai", rating: 4.5, image: "🏛️", tags: ["Museum", "History", "Art"], mapUrl: "https://maps.google.com/?q=CSMVS+Museum+Mumbai" },
    ],
    romantic: [
      { id: "m3", name: "Bandra-Worli Sea Link", description: "Drive across the iconic bridge at sunset — unforgettable experience!", address: "Bandra-Worli, Mumbai", rating: 4.5, image: "🌉", tags: ["Bridge", "Sunset", "Drive"], mapUrl: "https://maps.google.com/?q=Bandra+Worli+Sea+Link" },
      { id: "m19", name: "Dome at InterContinental", description: "Rooftop bar overlooking Marine Drive — cocktails with the city at your feet.", address: "Marine Drive, Mumbai", rating: 4.6, image: "🍸", tags: ["Rooftop", "Views", "Premium"], mapUrl: "https://maps.google.com/?q=Dome+InterContinental+Mumbai" },
      { id: "m20", name: "Hanging Gardens", description: "Beautiful terraced gardens on Malabar Hill — sunset views & animal hedges.", address: "Malabar Hill, Mumbai", rating: 4.3, image: "🌳", tags: ["Garden", "Sunset", "Views"], mapUrl: "https://maps.google.com/?q=Hanging+Gardens+Mumbai" },
      { id: "m21", name: "Alibaug Beach Trip", description: "Quick ferry ride to a romantic beach town — perfect day-trip date!", address: "Alibaug, Maharashtra", rating: 4.4, image: "⛵", tags: ["Beach", "Ferry", "Day Trip"], mapUrl: "https://maps.google.com/?q=Alibaug+Beach" },
      { id: "m22", name: "By The Mekong", description: "Thai fine dining at The St. Regis — candlelit tables & exotic cocktails.", address: "Lower Parel, Mumbai", rating: 4.5, image: "🕯️", tags: ["Fine Dining", "Thai", "Premium"], mapUrl: "https://maps.google.com/?q=By+The+Mekong+Mumbai" },
      { id: "m23", name: "Sunset Point, Bandra Fort", description: "Ruins of a Portuguese fort with the best sunset views in Mumbai.", address: "Bandra, Mumbai", rating: 4.4, image: "🌅", tags: ["Fort", "Sunset", "Romantic"], mapUrl: "https://maps.google.com/?q=Bandra+Fort+Mumbai" },
      { id: "m24", name: "Pizza By The Bay", description: "Beachside Italian restaurant — pasta, wine & waves crashing nearby.", address: "Marine Drive, Mumbai", rating: 4.2, image: "🍕", tags: ["Italian", "Seafront", "Casual"], mapUrl: "https://maps.google.com/?q=Pizza+By+The+Bay+Mumbai" },
      { id: "m25", name: "Powai Lake", description: "Peaceful lake with garden seating — morning walks or evening boat rides.", address: "Powai, Mumbai", rating: 4.1, image: "🦢", tags: ["Lake", "Peaceful", "Walk"], mapUrl: "https://maps.google.com/?q=Powai+Lake+Mumbai" },
      { id: "m26", name: "Tote On The Turf", description: "Restaurant set in the Royal Western India Turf Club — colonial charm & class.", address: "Mahalaxmi, Mumbai", rating: 4.3, image: "🏇", tags: ["Heritage", "Restaurant", "Classy"], mapUrl: "https://maps.google.com/?q=Tote+On+The+Turf+Mumbai" },
      { id: "m27", name: "Café Mondegar", description: "Iconic Colaba café with quirky murals, jukebox & legendary beer.", address: "Colaba, Mumbai", rating: 4.2, image: "🎵", tags: ["Café", "Iconic", "Casual"], mapUrl: "https://maps.google.com/?q=Cafe+Mondegar+Mumbai" },
    ],
    party: [
      { id: "m4", name: "Tryst", description: "Bollywood celeb-favorite nightclub — party like a star!", address: "Juhu, Mumbai", rating: 4.3, image: "⭐", tags: ["Club", "Celebrity", "Nightlife"], mapUrl: "https://maps.google.com/?q=Tryst+Mumbai" },
      { id: "m28", name: "Tito's Lane", description: "Mumbai's Goa-in-the-city — multiple bars, cheap drinks & non-stop energy.", address: "Bandra, Mumbai", rating: 4.1, image: "🍻", tags: ["Bar Street", "Cheap", "Energy"], mapUrl: "https://maps.google.com/?q=Titos+Lane+Bandra+Mumbai" },
      { id: "m29", name: "Dragonfly", description: "Sky-high rooftop club at JW Marriott — premium nightlife with city views.", address: "Juhu, Mumbai", rating: 4.4, image: "🪩", tags: ["Rooftop", "Premium", "Club"], mapUrl: "https://maps.google.com/?q=Dragonfly+Mumbai" },
      { id: "m30", name: "Escobar", description: "Bandra's party central — great music, cocktails & always packed!", address: "Bandra, Mumbai", rating: 4.2, image: "🎧", tags: ["Club", "Cocktails", "Popular"], mapUrl: "https://maps.google.com/?q=Escobar+Mumbai" },
      { id: "m31", name: "The Little Door", description: "Speakeasy-style bar with craft cocktails — hidden entrance & exclusive vibes.", address: "Andheri, Mumbai", rating: 4.3, image: "🚪", tags: ["Speakeasy", "Craft Cocktails", "Hidden"], mapUrl: "https://maps.google.com/?q=The+Little+Door+Mumbai" },
      { id: "m32", name: "Aer Lounge", description: "34th floor rooftop bar — highest party spot in Mumbai with insane views!", address: "Worli, Mumbai", rating: 4.5, image: "☁️", tags: ["Rooftop", "Views", "Premium"], mapUrl: "https://maps.google.com/?q=Aer+Lounge+Mumbai" },
      { id: "m33", name: "Social Colaba", description: "Quirky co-working-by-day, party-spot-by-night — affordable & always fun.", address: "Colaba, Mumbai", rating: 4.1, image: "🎉", tags: ["Pub", "Affordable", "Fun"], mapUrl: "https://maps.google.com/?q=Social+Colaba+Mumbai" },
      { id: "m34", name: "Loft 38", description: "Underground music venue — techno, house & indie nights for real music lovers.", address: "Lower Parel, Mumbai", rating: 4.2, image: "🎶", tags: ["Underground", "Techno", "Indie"], mapUrl: "https://maps.google.com/?q=Loft+38+Mumbai" },
      { id: "m35", name: "The Daily Bar & Kitchen", description: "Live music pub with great food — rock bands, open mics & karaoke nights.", address: "Bandra, Mumbai", rating: 4.0, image: "🎤", tags: ["Live Music", "Pub", "Karaoke"], mapUrl: "https://maps.google.com/?q=Daily+Bar+Kitchen+Mumbai" },
      { id: "m36", name: "Hakkasan", description: "Premium Chinese restaurant-turned-party-spot — Michelin vibes & late nights.", address: "Bandra, Mumbai", rating: 4.4, image: "🐉", tags: ["Premium", "Chinese", "Nightlife"], mapUrl: "https://maps.google.com/?q=Hakkasan+Mumbai" },
    ],
    chill: [
      { id: "m5", name: "Prithvi Theatre Café", description: "Iconic theatre café — Irish coffee, bookshop vibes & cultural energy.", address: "Juhu, Mumbai", rating: 4.6, image: "📚", tags: ["Café", "Theatre", "Culture"], mapUrl: "https://maps.google.com/?q=Prithvi+Theatre+Mumbai" },
      { id: "m37", name: "Versova Beach", description: "Less crowded than Juhu — golden sunsets & peaceful evening walks.", address: "Versova, Mumbai", rating: 4.2, image: "🌅", tags: ["Beach", "Peaceful", "Sunset"], mapUrl: "https://maps.google.com/?q=Versova+Beach+Mumbai" },
      { id: "m38", name: "Leaping Windows", description: "Board game café in Versova — play Catan, sip coffee & chill all day.", address: "Versova, Mumbai", rating: 4.4, image: "🎲", tags: ["Board Games", "Café", "Chill"], mapUrl: "https://maps.google.com/?q=Leaping+Windows+Mumbai" },
      { id: "m39", name: "Horniman Circle Garden", description: "Heritage garden in Fort area — read a book under ancient trees.", address: "Fort, Mumbai", rating: 4.3, image: "🌿", tags: ["Garden", "Heritage", "Peaceful"], mapUrl: "https://maps.google.com/?q=Horniman+Circle+Garden+Mumbai" },
      { id: "m40", name: "Filter Coffee", description: "South Indian café with authentic filter coffee — simple, warm & comforting.", address: "Bandra, Mumbai", rating: 4.3, image: "☕", tags: ["Coffee", "South Indian", "Cozy"], mapUrl: "https://maps.google.com/?q=Filter+Coffee+Bandra+Mumbai" },
      { id: "m41", name: "Sanjay Gandhi National Park", description: "A literal jungle inside Mumbai — nature trails, caves & lion safari!", address: "Borivali, Mumbai", rating: 4.4, image: "🌲", tags: ["Nature", "Trails", "Wildlife"], mapUrl: "https://maps.google.com/?q=Sanjay+Gandhi+National+Park+Mumbai" },
      { id: "m42", name: "Birdsong Café", description: "Organic café with garden seating — healthy food & peaceful atmosphere.", address: "Bandra, Mumbai", rating: 4.3, image: "🐦", tags: ["Organic", "Garden", "Healthy"], mapUrl: "https://maps.google.com/?q=Birdsong+Cafe+Mumbai" },
      { id: "m43", name: "Khotachiwadi Heritage Village", description: "Hidden 200-year-old Portuguese village in the middle of Mumbai — time travel!", address: "Girgaon, Mumbai", rating: 4.1, image: "🏘️", tags: ["Heritage", "Hidden", "Walk"], mapUrl: "https://maps.google.com/?q=Khotachiwadi+Mumbai" },
      { id: "m44", name: "Title Waves Bookstore", description: "Huge bookstore with reading corners — lose yourself in books for hours.", address: "Bandra, Mumbai", rating: 4.2, image: "📖", tags: ["Bookstore", "Reading", "Quiet"], mapUrl: "https://maps.google.com/?q=Title+Waves+Mumbai" },
      { id: "m45", name: "Afghan Church Garden", description: "Quiet colonial-era church garden — perfect for sketching or journaling.", address: "Colaba, Mumbai", rating: 4.0, image: "⛪", tags: ["Church", "Garden", "Quiet"], mapUrl: "https://maps.google.com/?q=Afghan+Church+Mumbai" },
    ],
    foodie: [
      { id: "m6", name: "Mohammed Ali Road", description: "Mumbai's street food heaven — seekh kebabs, malpua & phirni!", address: "South Mumbai", rating: 4.5, image: "🥙", tags: ["Street Food", "Non-Veg", "Iconic"], mapUrl: "https://maps.google.com/?q=Mohammed+Ali+Road+Mumbai" },
      { id: "m7", name: "Bademiya", description: "Legendary late-night kebab stall — a Mumbai institution since 1946.", address: "Colaba, Mumbai", rating: 4.4, image: "🍖", tags: ["Kebabs", "Late Night", "Legendary"], mapUrl: "https://maps.google.com/?q=Bademiya+Mumbai" },
      { id: "m46", name: "Swati Snacks", description: "Best Gujarati street food — dhokla, pani puri & sev usal done to perfection.", address: "Tardeo, Mumbai", rating: 4.6, image: "🫓", tags: ["Gujarati", "Snacks", "Legendary"], mapUrl: "https://maps.google.com/?q=Swati+Snacks+Mumbai" },
      { id: "m47", name: "Leopold Café", description: "Iconic since 1871 — burgers, beer & Bombay history in every corner.", address: "Colaba, Mumbai", rating: 4.3, image: "🍔", tags: ["Iconic", "Café", "Heritage"], mapUrl: "https://maps.google.com/?q=Leopold+Cafe+Mumbai" },
      { id: "m48", name: "Britannia & Co", description: "Legendary Parsi restaurant — berry pulao is worth crossing the city for!", address: "Fort, Mumbai", rating: 4.7, image: "🍛", tags: ["Parsi", "Legendary", "Berry Pulao"], mapUrl: "https://maps.google.com/?q=Britannia+Co+Mumbai" },
      { id: "m49", name: "Sardar Pav Bhaji", description: "The most famous pav bhaji in India — buttery, spicy & absolutely divine.", address: "Tardeo, Mumbai", rating: 4.5, image: "🫕", tags: ["Pav Bhaji", "Famous", "Must Try"], mapUrl: "https://maps.google.com/?q=Sardar+Pav+Bhaji+Mumbai" },
      { id: "m50", name: "Cream Centre", description: "Iconic vegetarian restaurant — sizzlers, pasta & Indian fusion classics.", address: "Churchgate, Mumbai", rating: 4.3, image: "🍝", tags: ["Vegetarian", "Iconic", "Sizzlers"], mapUrl: "https://maps.google.com/?q=Cream+Centre+Mumbai" },
      { id: "m51", name: "Vada Pav at Ashok Vada Pav", description: "Mumbai's unofficial national dish — spicy, crispy & just ₹20!", address: "Dadar, Mumbai", rating: 4.4, image: "🥔", tags: ["Vada Pav", "Street Food", "Cheap"], mapUrl: "https://maps.google.com/?q=Ashok+Vada+Pav+Mumbai" },
      { id: "m52", name: "The Bohri Kitchen", description: "Home-style Bohri cuisine — raan, smoked keema & desserts to die for.", address: "South Mumbai", rating: 4.5, image: "🥘", tags: ["Bohri", "Home Style", "Premium"], mapUrl: "https://maps.google.com/?q=Bohri+Kitchen+Mumbai" },
      { id: "m53", name: "Elco Pani Puri", description: "The pani puri that defines Mumbai — crispy puris, tangy water & pure joy.", address: "Bandra, Mumbai", rating: 4.4, image: "💧", tags: ["Pani Puri", "Iconic", "Must Try"], mapUrl: "https://maps.google.com/?q=Elco+Pani+Puri+Mumbai" },
    ],
    adventure: [
      { id: "m8", name: "EsselWorld", description: "Mumbai's iconic amusement park — rides, water park & full-day fun!", address: "Gorai, Mumbai", rating: 4.1, image: "🎢", tags: ["Amusement Park", "Rides", "Water Park"], mapUrl: "https://maps.google.com/?q=EsselWorld+Mumbai" },
      { id: "m54", name: "Kanheri Caves Trek", description: "Ancient Buddhist caves inside SGNP — easy trek with stunning rock-cut architecture.", address: "Borivali, Mumbai", rating: 4.3, image: "🏔️", tags: ["Trek", "Caves", "History"], mapUrl: "https://maps.google.com/?q=Kanheri+Caves+Mumbai" },
      { id: "m55", name: "Manori Beach & Island", description: "Ferry ride to a secluded beach island — surf, kayak & escape the city.", address: "Manori, Mumbai", rating: 4.2, image: "🏄", tags: ["Beach", "Ferry", "Surfing"], mapUrl: "https://maps.google.com/?q=Manori+Beach+Mumbai" },
      { id: "m56", name: "Elephanta Caves", description: "Boat ride to an island with ancient cave temples — UNESCO World Heritage!", address: "Elephanta Island, Mumbai", rating: 4.4, image: "🛕", tags: ["UNESCO", "Boat", "Caves"], mapUrl: "https://maps.google.com/?q=Elephanta+Caves+Mumbai" },
      { id: "m57", name: "Parasailing at Juhu", description: "Fly above Juhu Beach — quick adrenaline rush with epic ocean views!", address: "Juhu, Mumbai", rating: 4.0, image: "🪂", tags: ["Parasailing", "Beach", "Thrill"], mapUrl: "https://maps.google.com/?q=Parasailing+Juhu+Mumbai" },
      { id: "m58", name: "Go-Karting at Hakone", description: "High-speed go-kart track — race your friends and feel the rush!", address: "Andheri, Mumbai", rating: 4.1, image: "🏎️", tags: ["Go-Kart", "Racing", "Fun"], mapUrl: "https://maps.google.com/?q=Hakone+Go+Karting+Mumbai" },
      { id: "m59", name: "Pagoda Vipassana Centre", description: "World's largest stone dome — meditation retreat & architectural marvel.", address: "Gorai, Mumbai", rating: 4.3, image: "🧘", tags: ["Meditation", "Architecture", "Spiritual"], mapUrl: "https://maps.google.com/?q=Global+Vipassana+Pagoda+Mumbai" },
      { id: "m60", name: "Madh Island Beach", description: "Off-the-beaten-path beach — bonfire, camping & stargazing at night.", address: "Madh Island, Mumbai", rating: 4.0, image: "🏕️", tags: ["Beach", "Camping", "Stargazing"], mapUrl: "https://maps.google.com/?q=Madh+Island+Beach+Mumbai" },
      { id: "m61", name: "Tikuji-ni-Wadi", description: "Amusement & water park with rain dance — full day of wet & wild fun!", address: "Thane, Mumbai", rating: 3.9, image: "💦", tags: ["Water Park", "Rain Dance", "Fun"], mapUrl: "https://maps.google.com/?q=Tikuji+ni+Wadi+Mumbai" },
      { id: "m62", name: "Treks around Lonavala", description: "Quick getaway — Rajmachi, Lohagad & Tiger Point treks just 2 hours away!", address: "Lonavala, Maharashtra", rating: 4.4, image: "⛰️", tags: ["Trek", "Getaway", "Mountains"], mapUrl: "https://maps.google.com/?q=Lonavala+Treks" },
    ],
    shopping: [
      { id: "m9", name: "Linking Road", description: "Street shopping paradise — fashion, accessories & great bargains!", address: "Bandra, Mumbai", rating: 4.3, image: "🛍️", tags: ["Street Shopping", "Fashion", "Bargain"], mapUrl: "https://maps.google.com/?q=Linking+Road+Mumbai" },
      { id: "m63", name: "Colaba Causeway", description: "Iconic market with antiques, jewelry, clothes & quirky souvenirs.", address: "Colaba, Mumbai", rating: 4.4, image: "📿", tags: ["Antiques", "Jewelry", "Souvenirs"], mapUrl: "https://maps.google.com/?q=Colaba+Causeway+Mumbai" },
      { id: "m64", name: "High Street Phoenix", description: "Luxury mall — Gucci, Burberry & all premium international brands.", address: "Lower Parel, Mumbai", rating: 4.5, image: "💎", tags: ["Luxury", "International", "Premium"], mapUrl: "https://maps.google.com/?q=High+Street+Phoenix+Mumbai" },
      { id: "m65", name: "Hill Road", description: "Budget fashion shopping — trendy clothes at student-friendly prices.", address: "Bandra, Mumbai", rating: 4.1, image: "👕", tags: ["Budget", "Fashion", "Trendy"], mapUrl: "https://maps.google.com/?q=Hill+Road+Bandra+Mumbai" },
      { id: "m66", name: "Crawford Market", description: "Victorian-era wholesale market — fruits, pets, household items & more.", address: "Fort, Mumbai", rating: 4.2, image: "🛒", tags: ["Wholesale", "Heritage", "Market"], mapUrl: "https://maps.google.com/?q=Crawford+Market+Mumbai" },
      { id: "m67", name: "Infinity Mall", description: "Popular mall with all major brands, food court & multiplex cinema.", address: "Andheri, Mumbai", rating: 4.2, image: "🏬", tags: ["Mall", "Brands", "Cinema"], mapUrl: "https://maps.google.com/?q=Infinity+Mall+Mumbai" },
      { id: "m68", name: "Chor Bazaar", description: "Flea market with vintage finds — old cameras, vinyl records & antique furniture.", address: "South Mumbai", rating: 4.1, image: "📷", tags: ["Vintage", "Flea Market", "Antiques"], mapUrl: "https://maps.google.com/?q=Chor+Bazaar+Mumbai" },
      { id: "m69", name: "Fashion Street", description: "300+ stalls of trendy fashion — jeans, tops & shoes at crazy prices!", address: "MG Road, Mumbai", rating: 4.0, image: "👗", tags: ["Fashion", "Cheap", "Street"], mapUrl: "https://maps.google.com/?q=Fashion+Street+Mumbai" },
      { id: "m70", name: "Zaveri Bazaar", description: "India's biggest jewelry market — gold, diamonds & traditional Indian designs.", address: "Bhuleshwar, Mumbai", rating: 4.3, image: "💍", tags: ["Jewelry", "Gold", "Traditional"], mapUrl: "https://maps.google.com/?q=Zaveri+Bazaar+Mumbai" },
      { id: "m71", name: "Oberoi Mall", description: "Family-friendly mall with kids' zone, food court & all essentials.", address: "Goregaon, Mumbai", rating: 4.1, image: "🛒", tags: ["Mall", "Family", "Shopping"], mapUrl: "https://maps.google.com/?q=Oberoi+Mall+Mumbai" },
    ],
    cultural: [
      { id: "m10", name: "Gateway of India", description: "Iconic colonial monument overlooking the Arabian Sea — must visit!", address: "Colaba, Mumbai", rating: 4.6, image: "🚪", tags: ["Monument", "Iconic", "Heritage"], mapUrl: "https://maps.google.com/?q=Gateway+of+India+Mumbai" },
      { id: "m72", name: "Haji Ali Dargah", description: "Floating mosque connected by a causeway — spiritual & architecturally stunning.", address: "Worli, Mumbai", rating: 4.5, image: "🕌", tags: ["Mosque", "Spiritual", "Iconic"], mapUrl: "https://maps.google.com/?q=Haji+Ali+Dargah+Mumbai" },
      { id: "m73", name: "Chhatrapati Shivaji Terminus", description: "UNESCO Gothic-Victorian railway station — Mumbai's most photographed building.", address: "Fort, Mumbai", rating: 4.7, image: "🚂", tags: ["UNESCO", "Gothic", "Railway"], mapUrl: "https://maps.google.com/?q=CST+Mumbai" },
      { id: "m74", name: "Siddhivinayak Temple", description: "Mumbai's most revered Ganpati temple — spiritual energy & beautiful architecture.", address: "Prabhadevi, Mumbai", rating: 4.6, image: "🛕", tags: ["Temple", "Spiritual", "Famous"], mapUrl: "https://maps.google.com/?q=Siddhivinayak+Temple+Mumbai" },
      { id: "m75", name: "Dr. Bhau Daji Lad Museum", description: "Mumbai's oldest museum with stunning Victorian interiors — art & heritage.", address: "Byculla, Mumbai", rating: 4.4, image: "🖼️", tags: ["Museum", "Victorian", "Art"], mapUrl: "https://maps.google.com/?q=Bhau+Daji+Lad+Museum+Mumbai" },
      { id: "m76", name: "Mahalakshmi Temple", description: "Ancient temple dedicated to the goddess of wealth — powerful spiritual spot.", address: "Mahalakshmi, Mumbai", rating: 4.3, image: "🙏", tags: ["Temple", "Ancient", "Spiritual"], mapUrl: "https://maps.google.com/?q=Mahalakshmi+Temple+Mumbai" },
      { id: "m77", name: "Rajabai Clock Tower", description: "Gothic tower at Mumbai University — stunning architecture inspired by Big Ben.", address: "Fort, Mumbai", rating: 4.3, image: "🕐", tags: ["Gothic", "Architecture", "Heritage"], mapUrl: "https://maps.google.com/?q=Rajabai+Clock+Tower+Mumbai" },
      { id: "m78", name: "Banganga Tank", description: "Ancient water tank surrounded by temples — 1000-year-old sacred site.", address: "Malabar Hill, Mumbai", rating: 4.2, image: "💧", tags: ["Ancient", "Sacred", "Heritage"], mapUrl: "https://maps.google.com/?q=Banganga+Tank+Mumbai" },
      { id: "m79", name: "Nehru Centre Art Gallery", description: "Rotating art exhibitions & cultural events — free entry & always interesting.", address: "Worli, Mumbai", rating: 4.1, image: "🎨", tags: ["Art", "Gallery", "Free"], mapUrl: "https://maps.google.com/?q=Nehru+Centre+Mumbai" },
      { id: "m80", name: "Mani Bhavan (Gandhi Museum)", description: "Where Mahatma Gandhi lived — preserved home turned museum with moving exhibits.", address: "Gamdevi, Mumbai", rating: 4.4, image: "🕊️", tags: ["Gandhi", "Museum", "History"], mapUrl: "https://maps.google.com/?q=Mani+Bhavan+Mumbai" },
    ],
  },
};
