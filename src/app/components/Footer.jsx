"use client";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#C5C505] via-[#000] to-[#A020F0] py-16 text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Logo or Name */}
        <motion.h2
          className="text-4xl font-bold mb-6  text-[#c5c505]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Haider Jalal
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Crafting innovative digital experiences.
        </motion.p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <motion.a
            href="https://github.com/haiderjalal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#C5C505]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/haiderjalal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#C5C505]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://twitter.com/haiderjalalx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#C5C505]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="mailto:haider.jalal@code-huddle.com"
            className="text-2xl hover:text-[#C5C505]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <FaEnvelope />
          </motion.a>
        </div>

        <div className="absolute w-32 h-32 left-10 top-10">
        {/* Horizontal bar */}
        <div className="absolute inset-0 w-full h-1 bg-black rotate-45"></div>
        {/* Vertical bar */}
        <div className="absolute inset-0 w-full h-1 bg-black rotate-90"></div>
        {/* Diagonal top-left to bottom-right */}
        <div className="absolute inset-0 w-full h-1 bg-black rotate-135"></div>
        {/* Diagonal top-right to bottom-left */}
        <div className="absolute inset-0 w-full h-1 bg-black rotate-45"></div>
      </div>
      </div>
    </footer>
  );
}
