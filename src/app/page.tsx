

// pages/index.js
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundAnimation from './components/BackgroundAnimation';
import InteractiveSection from './components/InteractiveSection';
import AppShowcase from './components/AppShowcase';
import DiscussSection from './components/DiscussSection';
import HorizontalScrollCards from './components/HorizontalScrollCards';


export default function Home() {
  return (
    <div className="relative min-h-screen">
     
      <Navbar />
      <Hero />
      <BackgroundAnimation />
      <InteractiveSection />
      <AppShowcase/>
      <DiscussSection/>
      <HorizontalScrollCards/>
      {/* Add other sections as needed */}
    </div>
  );
}
