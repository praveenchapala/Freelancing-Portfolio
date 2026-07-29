import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { TrustMetricsSection } from './components/sections/TrustMetricsSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { FeaturedProjectsSection } from './components/sections/FeaturedProjectsSection';
import { ProcessTimelineSection } from './components/sections/ProcessTimelineSection';
import { WhyMeSection } from './components/sections/WhyMeSection';
import { TechStackSection } from './components/sections/TechStackSection';
import { JourneyTimelineSection } from './components/sections/JourneyTimelineSection';
import { FAQSection } from './components/sections/FAQSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Top Fixed Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <TrustMetricsSection />
        <ServicesSection />
        <FeaturedProjectsSection />
        <ProcessTimelineSection />
        <WhyMeSection />
        <TechStackSection />
        <JourneyTimelineSection />
        <FAQSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
