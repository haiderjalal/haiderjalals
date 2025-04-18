"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

export default function CapabilitiesSection() {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation (in milliseconds)
      easing: 'ease-in-out', // Animation easing
      once: true, // Animation occurs only once
    });
  }, []);

  return (
    <section className="relative py-1 px-4 bg-gradient-to-r from-[#c5c505] via-[#000] to-[#A020F0] h-165">
      <div className="bg-gradient-to-b from-[#000] to-transparent h-20 absolute inset-0 z-0"></div>

      {/* Title */}
      <div className="absolute inset-0 flex justify-center items-center bottom-140">
        <h1 className="text-6xl font-bold text-white tracking-widest" data-aos="fade-up">
          Our Capabilities
        </h1>
      </div>

      {/* Capabilities Sections */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-32 text-white">
        {/* First Column - Design */}
        <div className="flex-1 text-center md:text-left mt-20" data-aos="fade-left">
          <h2 className="text-4xl font-semibold hover:text-yellow-400 transform hover:scale-105 transition-all duration-300">
            Design
          </h2>
          <p className="text-lg mt-4">Design that connects your brand with your audience.</p>
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <button className="px-6 py-2 rounded-full bg-transparent border-2 border-white hover:bg-white hover:text-black transition">
              UX
            </button>
            <button className="px-6 py-2 rounded-full bg-transparent border-2 border-white hover:bg-white hover:text-black transition">
              UI
            </button>
          </div>
        </div>

        {/* Second Column - Development */}
        <div className="flex-1 mt-12 md:mt-0 text-center md:text-left mb-80 right-60" data-aos="fade-right">
          <h2 className="text-4xl font-semibold transform -translate-x-1/2 rotate-[-10deg]">
            Development
          </h2>
          <p className="text-lg mt-4 transform -translate-x-1/2 rotate-[-10deg]">
            We turn ideas into powerful dynamic websites.
          </p>
        </div>
      </div>

      {/* Section Divider */}
      <div className="flex justify-center mt-16 text-white">
        <div className="absolute right-0 left-240 top-50 transform -translate-x-1/2 -translate-y-1/7 rotate-[-10deg] w-1/3 text-center" data-aos="zoom-in">
          <h3 className="text-2xl font-semibold mb-4">Branding</h3>
          <p className="text-lg">Web & Mobile design</p>
        </div>
      </div>

      <div className="flex justify-center mt-16 text-white">
        <div className="absolute right-100 top-130 top-1/2 transform -translate-x-1/2 -translate-y-1/7 rotate-[-10deg] w-1/3 text-center" data-aos="flip-left">
          <h3 className="text-5xl font-semibold mb-4">Front End</h3>
        </div>
      </div>

      <div className="flex justify-center mt-16 text-white">
        <div className="absolute left-180 right-60 top-80 transform -translate-x-1/2 -translate-y-1/7 rotate-[-10deg] w-1/3 text-center" data-aos="fade-up">
          <h3 className="text-5xl font-semibold mb-4">Backend</h3>
        </div>
      </div>

      <div className="flex justify-center mt-16 text-white">
        <div className="absolute left-250 right-50 top-140 transform -translate-x-1/2 -translate-y-1/7 rotate-[-10deg] w-1/3 text-center" data-aos="zoom-in">
          <h3 className="text-5xl font-semibold mb-4">React Native</h3>
        </div>
      </div>

      <div className="flex justify-center mt-16 text-white">
        <div className="absolute left-230 right-55 top-100 transform -translate-x-1/2 -translate-y-1/7 rotate-[-10deg] w-1/3 text-center" data-aos="flip-right">
          <h3 className="text-5xl font-semibold mb-4">Automation</h3>
        </div>
      </div>

      <div className="flex justify-center mt-16 text-white">
        <div className="absolute left-50 right-50 top-140 transform -translate-x-1/2 -translate-y-1/7 rotate-[-10deg] w-1/3 text-center" data-aos="fade-left">
          <h3 className="text-5xl font-semibold mb-4">Next JS</h3>
        </div>
      </div>

      {/* Star Icon */}
      <div className="absolute w-32 h-32 top-50">
        {/* Horizontal bar */}
        <div className="absolute inset-0 w-full h-1 bg-black rotate-45"></div>
        {/* Vertical bar */}
        <div className="absolute inset-0 w-full h-1 bg-black rotate-90"></div>
        {/* Diagonal top-left to bottom-right */}
        <div className="absolute inset-0 w-full h-1 bg-black rotate-135"></div>
        {/* Diagonal top-right to bottom-left */}
        <div className="absolute inset-0 w-full h-1 bg-black rotate-45"></div>
      </div>

      <div className="absolute w-32 h-32 left-270 top-100">
        {/* Horizontal bar */}
        <div className="absolute inset-0 w-full h-1 bg-black rotate-45"></div>
        {/* Vertical bar */}
        <div className="absolute inset-0 w-full h-1 bg-black rotate-90"></div>
        {/* Diagonal top-left to bottom-right */}
        <div className="absolute inset-0 w-full h-1 bg-black rotate-135"></div>
        {/* Diagonal top-right to bottom-left */}
        <div className="absolute inset-0 w-full h-1 bg-black rotate-45"></div>
      </div>
    </section>
  );
}
