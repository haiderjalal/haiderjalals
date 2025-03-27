

// pages/index.js
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundAnimation from './components/BackgroundAnimation';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      {/* Add other sections as needed */}
    </div>
  );
}
