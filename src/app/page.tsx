

// pages/index.js
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundAnimation from './components/BackgroundAnimation';
import InteractiveSection from './components/InteractiveSection';


export default function Home() {
  return (
    <div className="relative min-h-screen">
     
      <Navbar />
      <Hero />
      <BackgroundAnimation />
      <InteractiveSection />
      {/* Add other sections as needed */}
    </div>
  );
}
