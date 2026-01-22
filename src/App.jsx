import React, { useState } from 'react';
import IntroAnimation from '@/components/functional/IntroAnimation';
import CustomCursor from '@/components/functional/CustomCursor';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import IdentitySection from '@/components/sections/IdentitySection';
import PhilosophySection from '@/components/sections/PhilosophySection';
import ValleyCastSection from '@/components/sections/ValleyCastSection';
import TeamSection from '@/components/sections/TeamSection';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-pink-100 selection:text-pink-900">
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      <CustomCursor />

      <Header />
      <main>
        <Hero />
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
