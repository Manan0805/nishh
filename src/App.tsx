import { useState, useEffect } from 'react';
import { FloatingPetals } from './components/FloatingPetals';
import { ScrollProgress } from './components/ScrollProgress';
import { OpeningScreen } from './components/OpeningScreen';
import { SevenThings } from './components/SevenThings';
import { MemoryJournal } from './components/MemoryJournal';
import { RememberSection } from './components/RememberSection';
import { LittleThings } from './components/LittleThings';
import { BeforeYouGo } from './components/BeforeYouGo';
import { BirthdayFinale } from './components/BirthdayFinale';
import { FinalSurpriseModal } from './components/FinalSurpriseModal';

export function App() {
  const [activeSection, setActiveSection] = useState('opening');
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false);

  // Smooth scroll handler for the opening CTA
  const handleStartExploring = () => {
    const el = document.getElementById('seven-things');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection observer to keep the progress indicator updated
  useEffect(() => {
    const sectionIds = [
      'opening',
      'seven-things',
      'memory-date',
      'remember',
      'little-things',
      'before-you-go',
      'finale',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-cream-100 text-charcoal-700 selection:bg-blush-200 selection:text-charcoal-800">
      {/* Gentle Floating Petals Background */}
      <FloatingPetals />

      {/* Floating Progress Bar & Pill Navigation */}
      <ScrollProgress activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-20">
        {/* Section 1: Opening */}
        <OpeningScreen onStart={handleStartExploring} />

        {/* Section 2: 7 Things I Like About You */}
        <SevenThings />

        {/* Section 3: 03.10.2026 Cab Ride Memory */}
        <MemoryJournal />

        {/* Section 4: Something I Want You to Remember */}
        <RememberSection />

        {/* Section 5: The Little Things */}
        <LittleThings />

        {/* Section 6: Before You Go... */}
        <BeforeYouGo />

        {/* Section 7: Happy Birthday Finale */}
        <BirthdayFinale onOpenSurprise={() => setIsSurpriseOpen(true)} />
      </main>

      {/* Final Surprise Modal */}
      <FinalSurpriseModal
        isOpen={isSurpriseOpen}
        onClose={() => setIsSurpriseOpen(false)}
      />
    </div>
  );
}

export default App;
