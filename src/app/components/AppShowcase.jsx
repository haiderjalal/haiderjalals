// "use client";
import Spline from "@splinetool/react-spline";

export default function AppShowcase() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden bg-black">
      
      {/* Background Spline Animation */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Spline scene="https://prod.spline.design/qnUCGGmsvXyElqES/scene.splinecode" />
      </div>

      {/* Optional Overlay for vignette look */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80 z-10 pointer-events-none" />

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center space-y-6">
        <h1 className="text-6xl md:text-7xl font-bold text-[#D6DA44]">Dressify</h1>
        <h2 className="text-7xl md:text-8xl font-extrabold text-white">GYMYG</h2>
        <h3 className="text-6xl md:text-7xl font-bold text-[#D6DA44]">Hujra</h3>
      </div>
    </section>
  );
}
