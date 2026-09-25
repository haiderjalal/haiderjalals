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

// Each mounted Spline scene holds its own WebGL context, and browsers cap how many
// can exist at once ("Web page caused context loss and was blocked"). The homepage
// has five scenes, so a mounted-forever scene both exhausts that budget and keeps
// burning GPU on a render loop nobody can see. Unmounting on exit lets
// react-spline call app.dispose(), which releases the context.
export default function LazySpline({ scene, className = "", fallbackColor = "#C5C505", showLoader = true, defer = false }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let observer;

    const observe = () => {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
          if (!entry.isIntersecting) {
            // Next mount starts from the loader again rather than a blank canvas.
            setIsLoaded(false);
          }
        },
        {
          threshold: 0,
          // Generous margin: mount before the scene scrolls in and hold it a while
          // past the edge, so small scroll jitters near the boundary don't thrash
          // the context up and down.
          rootMargin: "300px",
        }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
    };

    // An above-the-fold scene intersects immediately, so the WebGL runtime would
    // start downloading while the browser is still painting the hero. `defer`
    // waits for idle time so the scene never competes with first paint.
    if (!defer) {
      observe();
      return () => observer?.disconnect();
    }

    let idleId;
    let timeoutId;
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(observe, { timeout: 2500 });
    } else {
      timeoutId = setTimeout(observe, 1200);
    }

    return () => {
      if (idleId && window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      if (timeoutId) clearTimeout(timeoutId);
      observer?.disconnect();
    };
  }, [defer]);

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
          {showLoader && (
            <div className="animate-pulse rounded-full h-16 w-16 bg-gray-800"></div>
          )}
        </div>
      ) : (
        // Load Spline when visible
        <>
          {!isLoaded && (
            <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
              {showLoader && (
                <div
                  className="animate-spin rounded-full h-32 w-32 border-b-2"
                  style={{ borderColor: fallbackColor }}
                ></div>
              )}
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
