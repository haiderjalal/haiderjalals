"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Dressify from "./Dressify";
import Gymyg from "./Gymyg";

export default function ClientProjectShowcase() {
  const containerRef = useRef(null);

  // Track scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dressify: fade & slide from 0 → 0.6 scroll
  const dressifyOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const dressifyX       = useTransform(scrollYProgress, [0, 0.6], [0, -200]);

  // Gymyg: now delayed until 0.8 → 1 scroll
  const gymygOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const gymygX       = useTransform(scrollYProgress, [0.8, 1], [200, 0]);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Dressify */}
      <motion.div
        className="absolute top-0 left-0 h-full w-full"
        style={{ opacity: dressifyOpacity, x: dressifyX }}
      >
        <Dressify />
      </motion.div>

      {/* Gymyg */}
      <motion.div
        className="absolute top-0 left-0 h-full w-full"
        style={{ opacity: gymygOpacity, x: gymygX }}
      >
        <Gymyg />
      </motion.div>
    </div>
  );
}
