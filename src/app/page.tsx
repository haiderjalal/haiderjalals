// Dynamically import the client-side component with ssr: false
import dynamic from "next/dynamic";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import InteractiveSection from '../components/InteractiveSection';
import AppShowcase from '../components/AppShowcase';
import DiscussSection from '../components/DiscussSection';
import HorizontalScrollCards from '../components/HorizontalScrollCards';
import ContactForm from '../components/ContactForm';
import CapabilitiesSection from '../components/CapabilitiesSection';
import ProjectShowcase from '../components/ProjectsShowcase';
import Footer from '../components/Footer';



// Dynamically imported client-side HorizontalScrollCards

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <InteractiveSection />
      <AppShowcase />
      <DiscussSection />
      {/* Dynamically rendered HorizontalScrollCards component */}
      <HorizontalScrollCards />
      <ContactForm />
      <CapabilitiesSection />
      <ProjectShowcase />
      <Footer />
    </div>
  );
}
