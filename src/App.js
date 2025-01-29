import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { SocialProof } from '@/components/SocialProof/SocialProof';
import { Protocol } from '@/components/Protocol/Protocol';
import { TargetAudience } from '@/components/TargetAudience/TargetAudience';
import { Author } from '@/components/Author/Author';
import { Pricing } from '@/components/Pricing/Pricing';
import { FAQ } from '@/components/FAQ/FAQ';

/**
 * Main App component with content reveal logic
 * @returns {JSX.Element} App component
 */
function App() {
  // State for controlling content visibility
  const [showContent, setShowContent] = useState(false);

  // Effect for delayed content reveal
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300000); // 5 minutes delay

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