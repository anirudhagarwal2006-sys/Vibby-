import { motion } from "framer-motion";
import { Place, Mood, City } from "@/data/places";
import { ArrowLeft, MapPin, Star, ExternalLink } from "lucide-react";

interface PlacesListProps {
  city: City;
  mood: Mood;
  places: Place[];
  onBack: () => void;
}

const PlacesList = ({ city, mood, places, onBack }: PlacesListProps) => {
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
          <span>Change Mood</span>
        </button>

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-card border border-border mb-4">
            <span>{city.emoji} {city.name}</span>
            <span className="text-muted-foreground">•</span>
            <span>{mood.emoji} {mood.label}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Here's where you should go! 🎯
          </h2>
        </div>

        <div className="space-y-4">
          {places.map((place, i) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-2xl border border-border gradient-card hover:shadow-glow hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{place.image}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold text-foreground truncate">{place.name}</h3>
                    <div className="flex items-center gap-1 shrink-0">
                      <Star className="w-4 h-4 text-secondary fill-secondary" />
                      <span className="text-sm text-secondary font-medium">{place.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{place.description}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                    <MapPin className="w-3 h-3" />
                    <span>{place.address}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {place.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={place.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl gradient-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open in Maps
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {places.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <span className="text-5xl block mb-4">🚧</span>
            <p className="text-muted-foreground text-lg">Places coming soon for this mood!</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default PlacesList;
