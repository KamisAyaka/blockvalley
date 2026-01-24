import { useState } from 'react';
import IntroAnimation from '@/components/functional/IntroAnimation';
import CustomCursor from '@/components/functional/CustomCursor';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import VisionSection from '@/components/sections/VisionSection';
import IdentitySection from '@/components/sections/IdentitySection';
import PhilosophySection from '@/components/sections/PhilosophySection';
import ValleyCastSection from '@/components/sections/ValleyCastSection';
import TeamSection from '@/components/sections/TeamSection';
import NoiseOverlay from '@/components/ui/NoiseOverlay';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="font-sans antialiased text-bv-text bg-bv-background selection:bg-bv-cta/30 selection:text-bv-primary relative">
      <NoiseOverlay />

      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      <CustomCursor />

      <Header />
      <main className="relative z-10">
        <VisionSection />
        <IdentitySection />
        <PhilosophySection />
        <ValleyCastSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
