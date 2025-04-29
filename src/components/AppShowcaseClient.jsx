"use client"; // This is a client-side component

import { useState } from "react";
import { motion } from "framer-motion"; // Import motion for animation
import Spline from "@splinetool/react-spline";
import { IoArrowBack } from "react-icons/io5"; // Import the left arrow icon

export default function AppShowcaseClient() {
  const [hoveredProject, setHoveredProject] = useState(null); // Track hovered project

  // Project data
  const projects = [
    {
      name: "Dressify",
      details: "An App to Connect Customers with Tailors nearby.",
    },
    {
      name: "GYMYG",
      details: "A fitness platform for users and trainers.",
    },
    {
      name: "Hujra",
      details: "An app for a resturant to manage orders and deliveries.",
    },
  ];

  const handleBackClick = () => {
    setHoveredProject(null);
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden bg-black">
      {/* Background Spline Animation */}
      <div className="absolute inset-0 -z-0 bg-black">
        <Spline scene="https://prod.spline.design/qnUCGGmsvXyElqES/scene.splinecode" />
      </div>

      {/* Optional Overlay for vignette look */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center space-y-6">
        {/* Show Project Titles when no project is selected */}
        <div className="flex space-x-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.name)} // Show details on hover
              onMouseLeave={() => setHoveredProject(null)} // Hide details on hover out
            >
              <h2 className="text-6xl md:text-7xl font-bold text-white hover:text-[#D6DA44] transition-colors duration-300">
                {project.name}
              </h2>

              {/* Animate the project details to move from right to left */}
              {hoveredProject === project.name && (
                <motion.div
                  className="space-y-4 mt-4"
                  initial={{ x: "100%" }} // Start from the right side
                  animate={{ x: 0 }} // Move to the normal position
                  exit={{ x: "100%" }} // Exit to the right side
                  transition={{ duration: 1 }} // Duration of the animation
                >
                  <h3 className="text-2xl font-semibold text-[#D6DA44]">{project.name}</h3>
                  <p className="text-lg text-white">{project.details}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
