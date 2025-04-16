"use client";
import { useState } from "react";
import Spline from "@splinetool/react-spline";
import { IoArrowBack } from "react-icons/io5"; // Import the left arrow icon

export default function AppShowcase() {
  // State to track the selected project
  const [selectedProject, setSelectedProject] = useState(null);

  // Project data
  const projects = [
    {
      name: "Dressify",
      details: "A fashion app for personalized recommendations.",
      imageUrl: "/dressify.png", // Replace with actual image URL
    },
    {
      name: "GYMYG",
      details: "A fitness platform for workout tracking.",
      imageUrl: "/gymyg.png", // Replace with actual image URL
    },
    {
      name: "Hujra",
      details: "A social app for community interactions.",
      imageUrl: "/hujra.jpg", // Replace with actual image URL
    },
  ];

  const handleProjectClick = (projectName) => {
    setSelectedProject(projectName);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden bg-black">
      {/* Background Spline Animation */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Spline scene="https://prod.spline.design/qnUCGGmsvXyElqES/scene.splinecode" />
      </div>

      {/* Optional Overlay for vignette look */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center space-y-6">
        {selectedProject === null ? (
          // Show Project Titles when no project is selected
          <div className="flex space-x-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => handleProjectClick(project.name)}
                onMouseEnter={() => setSelectedProject(project.name)} // Show on hover
                onMouseLeave={() => setSelectedProject(null)} // Hide on hover out
              >
                <h2 className="text-6xl md:text-7xl font-bold text-white hover:text-[#D6DA44] transition-colors duration-300">
                  {project.name}
                </h2>
              </div>
            ))}
          </div>
        ) : (
          // Show Project Details when a project is selected
          <div className="space-y-6">
            {/* Arrow Icon (Back) */}
            {selectedProject && (
              <div
                onClick={handleBackClick}
                className="cursor-pointer text-white text-4xl absolute top-8 left-8"
              >
                <IoArrowBack />
              </div>
            )}
            {/* Displaying the selected project details */}
            {projects
              .filter((project) => project.name === selectedProject)
              .map((project, index) => (
                <div key={index} className="space-y-4">
                  <h1 className="text-6xl md:text-7xl font-bold text-[#D6DA44]">
                    {project.name}
                  </h1>
                  <p className="text-2xl text-white">{project.details}</p>
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="max-w-3xl w-full h-auto rounded-lg"
                  />
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
