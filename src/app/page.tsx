
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import BackgroundAnimation from './components/BackgroundAnimation';
import InteractiveSection from './components/InteractiveSection';
import AppShowcase from './components/AppShowcase';
import DiscussSection from './components/DiscussSection';
import HorizontalScrollCards from './components/HorizontalScrollCards';
import ContactForm from './components/ContactForm';
import CapabilitiesSection from './components/CapabilitiesSection';
import Footer from './components/Footer';
import Dressify from './components/Dressify';


export default function Home() {
  return (
    <div className="relative min-h-screen">
     
      <Navbar />
      <Hero />
      {/* <BackgroundAnimation /> */}
      <InteractiveSection />
      <AppShowcase/>
      <DiscussSection/>
      <HorizontalScrollCards/>
      <ContactForm/>
      <CapabilitiesSection/>
      <Dressify/>
      <Footer/>

      {/* Add other sections as needed */}
    </div>
  );
}
