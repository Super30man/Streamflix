import { Button } from "./ui/button";
import { Play, Info } from "lucide-react";
import heroImage from "@/assets/hero-feature.jpg";

const Hero = () => {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <img 
        src={heroImage} 
        alt="Featured content" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="absolute bottom-0 left-0 right-0 p-12 pb-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            The Last Warrior
          </h1>
          <p className="text-lg md:text-xl mb-6 text-foreground/90">
            In a world torn by conflict, one hero must rise to save humanity from the brink of destruction. An epic journey of courage, sacrifice, and redemption.
          </p>
          
          <div className="flex gap-4">
            <Button size="lg" className="gap-2">
              <Play className="w-5 h-5" fill="currentColor" />
              Play
            </Button>
            <Button size="lg" variant="secondary" className="gap-2">
              <Info className="w-5 h-5" />
              More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
