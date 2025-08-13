"use client";
import { useState, Suspense } from "react";
import dynamic from "next/dynamic";

// Temporarily disabled Spline due to package export issues with Next.js 15
// const Spline = dynamic(() => import("@splinetool/react-spline").then(mod => ({ default: mod.default || mod })), {
//   ssr: false,
//   loading: () => (
//     <div className="flex items-center justify-center h-full">
//       <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
//     </div>
//   ),
// });

export default function AppShowcase() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      name: "Dressify",
      color: "#D6DA44",
      description: "Smart fashion app offering virtual try-ons, AI styling, and wardrobe planning.",
      video: "/videos/dressify.mp4",
      behanceEmbed: "<iframe src='https://www.behance.net/embed/project/176532277?ilo0=1' height='316' width='404' allowfullscreen lazyload frameborder='0' allow='clipboard-write' refererPolicy='strict-origin-when-cross-origin'></iframe>",
    },
    {
      name: "GYMYG",
      color: "#FFFFFF",
      description: "AI-powered fitness platform for goal tracking, smart routines, and real-time feedback.",
      video: "/videos/gymyg.mp4",
      behanceEmbed: "<iframe src='https://www.behance.net/embed/project/176532277?ilo0=1' height='316' width='404' allowfullscreen lazyload frameborder='0' allow='clipboard-write' refererPolicy='strict-origin-when-cross-origin'></iframe>",
    },
    {
      name: "Hujra",
      color: "#D6DA44",
      description: "Connects people through digital guest rooms and local event discovery.",
      video: "/videos/hujra.mp4",
      behanceEmbed: "<iframe src='https://www.behance.net/embed/project/176532277?ilo0=1' height='316' width='404' allowfullscreen lazyload frameborder='0' allow='clipboard-write' refererPolicy='strict-origin-when-cross-origin'></iframe>",
    },
  ];

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden bg-black">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {/* Spline animation temporarily disabled */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80 z-10 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-6">
        {!hoveredProject ? (
          <div className="flex flex-col space-y-6">
            {projects.map((project, index) => (
              <h2
                key={index}
                className="text-6xl md:text-7xl font-extrabold cursor-pointer transition-opacity duration-200 hover:scale-105"
                style={{ color: project.color }}
                onMouseEnter={() => setHoveredProject(project.name)}
              >
                {project.name}
              </h2>
            ))}
          </div>
        ) : (
          // Show video & Behance embed on hover
          <div
            className="flex flex-col items-center space-y-4 w-full max-w-4xl"
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="max-w-full h-auto">
              <iframe 
                src={`https://www.behance.net/embed/project/176532277?ilo0=1`}
                height="316" 
                width="404" 
                allowFullScreen 
                loading="lazy"
                frameBorder="0" 
                allow="clipboard-write" 
                referrerPolicy="strict-origin-when-cross-origin"
                className="rounded-lg"
              />
            </div>
            <h2
              className="text-5xl md:text-6xl font-bold mt-4"
              style={{ color: projects.find(p => p.name === hoveredProject)?.color }}
            >
              {hoveredProject}
            </h2>
            <p className="text-white text-lg md:text-xl max-w-2xl">
              {projects.find(p => p.name === hoveredProject)?.description}
            </p>
            <p className="text-sm text-gray-400">(Hover off to go back)</p>
          </div>
        )}
      </div>
    </section>
  );
}
