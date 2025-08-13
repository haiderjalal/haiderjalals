"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// Lazy load Spline component with intersection observer
const Spline = dynamic(() => import("@splinetool/react-spline").then(mod => ({ default: mod.default || mod })), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#C5C505]"></div>
    </div>
  ),
});

export default function LazySpline({ scene, className = "", fallbackColor = "#C5C505" }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px", // Start loading 100px before the element is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    console.warn("Failed to load Spline scene:", scene);
  };

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {!isVisible ? (
        // Placeholder while not visible
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="animate-pulse rounded-full h-16 w-16 bg-gray-800"></div>
        </div>
      ) : (
        // Load Spline when visible
        <>
          {!isLoaded && (
            <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
              <div className={`animate-spin rounded-full h-32 w-32 border-b-2`} style={{ borderColor: fallbackColor }}></div>
            </div>
          )}
          <Spline
            scene={scene}
            onLoad={handleLoad}
            onError={handleError}
            style={{
              width: "100%",
              height: "100%",
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        </>
      )}
    </div>
  );
}