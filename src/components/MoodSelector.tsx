import { motion } from "framer-motion";
import { moods, Mood, City } from "@/data/places";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

interface MoodSelectorProps {
  city: City;
  onSelect: (mood: Mood) => void;
  onBack: () => void;
}

const MoodSelector = ({ city, onSelect, onBack }: MoodSelectorProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl"
      >
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Change City</span>
        </button>

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {city.emoji} {city.name}
          </h2>
          <p className="text-lg text-muted-foreground">What's your mood rn? 🤔</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {moods.map((mood, i) => (
            <motion.button
              key={mood.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onSelect(mood)}
              className="relative overflow-hidden p-5 rounded-2xl border border-border gradient-card hover:shadow-glow hover:border-primary/40 transition-all duration-300 text-left"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${mood.color} opacity-10`} />
              <div className="relative z-10">
                <span className="text-3xl mb-2 block">{mood.emoji}</span>
                <span className="text-foreground font-semibold block">{mood.label}</span>
                <span className="text-sm text-muted-foreground">{mood.description}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <div className="flex-1" />
      <Footer />
    </div>
  );
};

export default MoodSelector;
