"use client";
import Spline from "@splinetool/react-spline";

export default function Dressify() {
  return (
    <div className="relative h-screen w-full">
      {/* Your Spline scene */}
      <Spline
        scene="https://prod.spline.design/JfpZqiCo0zZ2mLXn/scene.splinecode" 
        width={1920}
        height={1098}
      />

      {/* Black gradient at the top of the section */}
      <div className="absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-black to-transparent z-20"></div>
      <div className="absolute inset-x-0 top-5 h-1/6 bg-gradient-to-b from-black to-transparent z-20"></div>

      {/* <div className="absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-black to-transparent z-20"></div> */}
    </div>
  );
}
