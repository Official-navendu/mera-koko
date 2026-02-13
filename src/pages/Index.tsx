import { useState } from "react";
import Preloader from "@/components/valentine/Preloader";
import CinematicIntro from "@/components/valentine/CinematicIntro";
import Heart3D from "@/components/valentine/Heart3D";
import MemoryGallery from "@/components/valentine/MemoryGallery";
import LoveTimeline from "@/components/valentine/LoveTimeline";
import SurpriseSection from "@/components/valentine/SurpriseSection";
import EmotionalFinale from "@/components/valentine/EmotionalFinale";
import MusicToggle from "@/components/valentine/MusicToggle";
import FloatingParticles from "@/components/valentine/FloatingParticles";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setLoaded(true)} />
      {loaded && (
        <main className="relative bg-background overflow-x-hidden">
          <FloatingParticles />
          <MusicToggle />
          <CinematicIntro />
          <Heart3D />
          <MemoryGallery />
          <LoveTimeline />
          <SurpriseSection />
          <EmotionalFinale />
        </main>
      )}
    </>
  );
};

export default Index;
