import { useState } from "react";
import CitySelector from "@/components/CitySelector";
import MoodSelector from "@/components/MoodSelector";
import PlacesList from "@/components/PlacesList";
import { City, Mood, placesData } from "@/data/places";

type Step = "city" | "mood" | "places";

const Index = () => {
  const [step, setStep] = useState<Step>("city");
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);

  const handleCitySelect = (city: City) => {
    setSelectedCity(city);
    setStep("mood");
  };

  const handleMoodSelect = (mood: Mood) => {
    setSelectedMood(mood);
    setStep("places");
  };

  const places = selectedCity && selectedMood
    ? placesData[selectedCity.id]?.[selectedMood.id] ?? []
    : [];

  return (
    <div className="min-h-screen bg-background">
      {step === "city" && <CitySelector onSelect={handleCitySelect} />}
      {step === "mood" && selectedCity && (
        <MoodSelector
          city={selectedCity}
          onSelect={handleMoodSelect}
          onBack={() => setStep("city")}
        />
      )}
      {step === "places" && selectedCity && selectedMood && (
        <PlacesList
          city={selectedCity}
          mood={selectedMood}
          places={places}
          onBack={() => setStep("mood")}
        />
      )}
    </div>
  );
};

export default Index;
