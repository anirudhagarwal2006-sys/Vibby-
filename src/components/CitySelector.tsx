import { motion } from "framer-motion";
import { cities, City } from "@/data/places";

interface CitySelectorProps {
  onSelect: (city: City) => void;
}

const CitySelector = ({ onSelect }: CitySelectorProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-4">VIBBY</h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Find your vibe. Pick your city. ✨
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-xl w-full"
      >
        {cities.map((city, i) => (
          <motion.button
            key={city.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.08 }}
            whileHover={{ scale: city.available ? 1.05 : 1 }}
            whileTap={{ scale: city.available ? 0.95 : 1 }}
            onClick={() => city.available && onSelect(city)}
            className={`relative p-6 rounded-2xl border border-border transition-all duration-300 ${
              city.available
                ? "gradient-card hover:shadow-glow hover:border-primary/40 cursor-pointer"
                : "opacity-40 cursor-not-allowed"
            }`}
          >
            <span className="text-4xl mb-2 block">{city.emoji}</span>
            <span className="text-foreground font-semibold text-lg">{city.name}</span>
            {!city.available && (
              <span className="block text-xs text-muted-foreground mt-1">Coming Soon</span>
            )}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default CitySelector;
