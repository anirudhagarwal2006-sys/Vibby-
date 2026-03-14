import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cities, City } from "@/data/places";
import { Sparkles, Search } from "lucide-react";
import Footer from "@/components/Footer";

interface CitySelectorProps {
  onSelect: (city: City) => void;
}

const CitySelector = ({ onSelect }: CitySelectorProps) => {
  const [search, setSearch] = useState("");

  const filteredCities = useMemo(() => {
    if (!search.trim()) return cities;
    return cities.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6"
        >
          <Sparkles className="w-4 h-4" />
          Your Mood, Your Spot
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-5 tracking-tight">VIBBY</h1>

        <p className="text-xl md:text-2xl text-foreground font-medium mb-2">
          Bored? Romantic? Party Mode? 🤷‍♂️
        </p>
        <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto">
          Tell us your vibe & we'll tell you <span className="text-primary font-semibold">exactly where to go</span> — with Google Maps directions! 📍
        </p>
      </motion.div>

      {/* Search bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-xl mb-6"
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search your city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary/40 transition-all text-sm"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="text-center mb-4"
      >
        <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">
          {filteredCities.length} {filteredCities.length === 1 ? 'city' : 'cities'} available
        </p>
      </motion.div>

      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-2xl w-full"
      >
        <AnimatePresence mode="popLayout">
          {filteredCities.map((city, i) => (
            <motion.button
              key={city.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: Math.min(i * 0.04, 0.3) }}
              whileHover={{ scale: city.available ? 1.07 : 1, y: city.available ? -4 : 0 }}
              whileTap={{ scale: city.available ? 0.95 : 1 }}
              onClick={() => city.available && onSelect(city)}
              className={`relative p-5 rounded-2xl border transition-all duration-300 ${
                city.available
                  ? "gradient-card border-border hover:shadow-glow hover:border-primary/40 cursor-pointer"
                  : "opacity-30 border-border/50 cursor-not-allowed"
              }`}
            >
              <span className="text-3xl md:text-4xl mb-2 block">{city.emoji}</span>
              <span className="text-foreground font-bold text-sm md:text-base block">{city.name}</span>
              {!city.available && (
                <span className="block text-xs text-muted-foreground mt-1">Coming Soon 🔜</span>
              )}
              {city.available && (
                <span className="block text-xs text-primary mt-1 font-medium">Explore →</span>
              )}
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredCities.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-muted-foreground mt-8 text-center"
        >
          No cities found for "{search}" 😢
        </motion.p>
      )}

      <div className="flex-1" />
      <Footer />
    </div>
  );
};

export default CitySelector;
