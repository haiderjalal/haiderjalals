// Page.jsx
import Hero from './components/Hero';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero component will be rendered on the client-side */}
      <Hero />
    </div>
  );
}
