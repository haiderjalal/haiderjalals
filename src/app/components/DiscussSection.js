"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const DiscussSection = () => {
  const [word, setWord] = useState('Idea');
  const words = ['Idea', 'Project', 'Success'];

  useEffect(() => {
    const interval = setInterval(() => {
      setWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 1500); // Change every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-start justify-center text-white py-10 relative z-10 pl-20 pb-20 bg-black">
      <h1 className="text-4xl font-semibold mb-4 z-20">Lets Discuss Your</h1>
      <div className="flex items-center z-20">
        <span className="text-2xl">Next </span>
        <span className="ml-2 text-yellow-500 text-2xl">→</span> {/* Unicode arrow */}
        <motion.span
          className="text-3xl text-yellow-500 font-bold ml-2"
          key={word}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {word}
        </motion.span>
      
      </div>
    </div>
  );
};

export default DiscussSection;
