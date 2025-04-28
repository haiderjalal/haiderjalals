"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Dressify from "./Dressify";
import Gymyg from "./Gymyg";

export default function ClientProjectShowcase() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const dressifyOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0] );
  const dressifyX = useTransform(scrollYProgress, [0, 0.5], [0, -200]);

  const gymygOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const gymygX = useTransform(scrollYProgress, [0.5, 1], [200, 0]);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 h-full w-full"
        style={{ opacity: dressifyOpacity }}
        x={dressifyX}
      >
        <Dressify />
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 h-full w-full"
        style={{ opacity: gymygOpacity }}
        x={gymygX}
      >
        <Gymyg />
      </motion.div>
    </div>
  );
}
