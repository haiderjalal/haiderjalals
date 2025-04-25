"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Dressify from "./Dressify";
import Gymyg from "./Gymyg";

export default function ProjectShowcase() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dressify fades out + slides left
  const dressifyOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const dressifyX = useTransform(scrollYProgress, [0, 0.5], [0, -200]);

  // Gymyg fades in + slides in from right
  const gymygOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const gymygX = useTransform(scrollYProgress, [0.5, 1], [200, 0]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen w-full">
      <div className="absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-black to-transparent z-20"></div>

        {/* Dressify Section */}
        <motion.div
          className="absolute top-0 left-0 h-full w-full"
          style={{
            opacity: dressifyOpacity,
            x: dressifyX,
            zIndex: 2, // stays on top during fade out
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
            zIndex: 1, // appears underneath and fades in
          }}
        >
          <Gymyg />
        </motion.div>
      </div>
    </div>
  );
}
