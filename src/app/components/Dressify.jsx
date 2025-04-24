"use client";
import Spline from "@splinetool/react-spline";

export default function Dressify() {
  return (
    <div className="relative h-screen w-full">
      {/* Black background behind Spline animation */}
      <div className="absolute inset-0 "></div>

      {/* Your Spline scene */}
      <Spline
        scene="https://prod.spline.design/JfpZqiCo0zZ2mLXn/scene.splinecode"
     
      />

      {/* Black gradient at the top of the section */}
      <div className="absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-black to-transparent z-20"></div>
      <div className="absolute inset-x-0 top-5 h-1/6 bg-gradient-to-b from-black to-transparent z-20"></div>
    </div>
  );
}
