import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Protocol } from './components/Protocol';
import { TargetAudience } from './components/TargetAudience';
import { Author } from './components/Author';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300000); // 5 minutes in milliseconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        {showContent && (
          <>
            <Protocol />
            <TargetAudience />
            <SocialProof />
            <Author />
            <Pricing />
            <FAQ />
          </>
        )}
      </main>
    </div>
  );
}

export default App;