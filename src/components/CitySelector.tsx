import { motion } from "framer-motion";
import { cities, City } from "@/data/places";
import { Sparkles } from "lucide-react";

interface CitySelectorProps {
  onSelect: (city: City) => void;
}

const CitySelector = ({ onSelect }: CitySelectorProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mb-6"
      >
        <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">Pick your city</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-xl w-full"
      >
        {cities.map((city, i) => (
          <motion.button
            key={city.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.08 }}
            whileHover={{ scale: city.available ? 1.07 : 1, y: city.available ? -4 : 0 }}
            whileTap={{ scale: city.available ? 0.95 : 1 }}
            onClick={() => city.available && onSelect(city)}
            className={`relative p-6 rounded-2xl border transition-all duration-300 ${
              city.available
                ? "gradient-card border-border hover:shadow-glow hover:border-primary/40 cursor-pointer"
                : "opacity-30 border-border/50 cursor-not-allowed"
            }`}
          >
            <span className="text-4xl md:text-5xl mb-3 block">{city.emoji}</span>
            <span className="text-foreground font-bold text-lg block">{city.name}</span>
            {!city.available && (
              <span className="block text-xs text-muted-foreground mt-1">Coming Soon 🔜</span>
            )}
            {city.available && (
              <span className="block text-xs text-primary mt-1 font-medium">Tap to explore →</span>
            )}
          </motion.button>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-12 text-sm text-muted-foreground"
      >
        Made with ❤️ for Gen-Z explorers
      </motion.p>
    </div>
  );
};

export default CitySelector;
