// src/components/LoadingScreen.tsx
"use client"; // Ensure this is a client-side component

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For smoother text animations

const randomQuotes = [
  "Loading the future of your digital experience...",
  "Making things happen, please wait...",
  "Great things are on the way...",
  "Your patience will reward you with excellence...",
  "Creating something special for you...",
  "Just a moment, while we prepare magic...",
  "Bringing your vision to life...",
  "Unveiling creativity...",
  "Hold on! A fantastic experience is coming...",
  "Crafting something amazing for you..."
];

export default function LoadingScreen() {
  const [quote, setQuote] = useState(randomQuotes[0]);

  useEffect(() => {
    const quoteChangeInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * randomQuotes.length);
      setQuote(randomQuotes[randomIndex]);
    }, 3000); // Change the quote every 3 seconds

    return () => clearInterval(quoteChangeInterval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="loading-screen">
      {/* Animated Text */}
      <motion.div
        className="loading-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>{quote}</h2>
      </motion.div>

      {/* Loading Spinner */}
      <div className="spinner"></div>
    </div>
  );
}
