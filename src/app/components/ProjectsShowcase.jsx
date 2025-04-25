"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Dressify from "./Dressify";
import Gymyg from "./Gymyg";
import GymygFeed from "./GymygFeed"; // Import GymygFeed component

export default function ProjectShowcase() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // Track scroll position from top to bottom
  });

  // Dressify fades out + slides left
  const dressifyOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]); // Fade out from 1 to 0
  const dressifyX = useTransform(scrollYProgress, [0, 0.5], [0, -200]); // Slide left from 0 to -200

  // Gymyg fades in + slides in from right
  const gymygOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]); // Fade in from 0 to 1
  const gymygX = useTransform(scrollYProgress, [0.5, 1], [200, 0]); // Slide in from 200 to 0

  // GymygFeed fades in when Gymyg section is fully visible and after scrolling further
  const gymygFeedOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]); // GymygFeed fade-in when Gymyg section is fully visible
  const gymygFeedY = useTransform(scrollYProgress, [1, 1.5], [0, -200]); // Slide GymygFeed from bottom to its position

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen w-full">
        {/* Gradient background at the top */}
        <div className="absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-black to-transparent z-20"></div>

        {/* Dressify Section */}
        <motion.div
          className="absolute top-0 left-0 h-full w-full"
          style={{
            opacity: dressifyOpacity,
            x: dressifyX,
            zIndex: 2, // Ensure Dressify stays on top during its fade out
          }}
        >
          <Dressify />
        </motion.div>

        {/* Gymyg Section */}
        <motion.div
          className="absolute top-0 left-0 h-full w-full"
          style={{
            opacity: gymygOpacity,
            x: gymygX,
            zIndex: 1, // Gymyg appears underneath Dressify
          }}
        >
          <Gymyg />
        </motion.div>

        {/* GymygFeed Section */}
        <motion.div
          className="absolute top-0 left-0 h-full w-full"
          style={{
            opacity: gymygFeedOpacity, // Make GymygFeed visible when Gymyg section is fully visible
            y: gymygFeedY, // Apply the Y axis slide-in effect
            // zIndex: 0, // GymygFeed is displayed on top of Gymyg
          }}
        >
          <GymygFeed /> {/* GymygFeed component that will show after Gymyg */}
        </motion.div>
      </div>
    </div>
  );
}
