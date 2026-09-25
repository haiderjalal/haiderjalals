// ClientProjectShowcase.tsx
"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Dressify from "./Dressify";
import Gymyg from "./Gymyg";

// The two scenes are stacked in one sticky viewport, so both are permanently
// "intersecting" and LazySpline's observer cannot tell them apart. Scroll
// progress can: each scene is mounted only around the stretch where it is
// actually visible, so two WebGL contexts coexist just through the crossfade
// instead of for the whole section.
const DRESSIFY_UNMOUNT_AFTER = 0.45; // fully faded out at 0.4
const GYMYG_MOUNT_AFTER = 0.25; // starts fading in at 0.3

export default function ClientProjectShowcase() {
  const containerRef = useRef(null);
  const [showDressify, setShowDressify] = useState(true);
  const [showGymyg, setShowGymyg] = useState(false);

  // Track scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setShowDressify(p < DRESSIFY_UNMOUNT_AFTER);
    setShowGymyg(p > GYMYG_MOUNT_AFTER);
  });

  // Dressify: fade & slide from 0 → 0.4 scroll
  const dressifyOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]); // Dressify fades out quickly
  const dressifyX = useTransform(scrollYProgress, [0, 0.4], [0, -200]); // Dressify slides out

  // Gymyg: delayed fade-in and slide-in starting from 0.3 → 1 scroll
  const gymygOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 1]); // Gymyg fades in smoothly
  const gymygX = useTransform(scrollYProgress, [0.3, 1], [200, 0]); // Gymyg slides in from the right

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Dressify */}
      <motion.div
        className="absolute top-0 left-0 h-full w-full pointer-events-auto"
        style={{
          opacity: dressifyOpacity,
          x: dressifyX,
          zIndex: 2, // Ensure it stays in front of other elements
        }}
      >
        {showDressify && <Dressify />}
      </motion.div>

      {/* Gymyg */}
      <motion.div
        className="absolute top-0 left-0 h-full w-full pointer-events-auto"
        style={{
          opacity: gymygOpacity,
          x: gymygX,
          zIndex: 1, // Ensure Gymyg stays behind Dressify
        }}
      >
        {showGymyg && <Gymyg />}
      </motion.div>
    </div>
  );
}
