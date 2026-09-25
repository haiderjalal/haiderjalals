"use client";
import LazySpline from "./LazySpline";

export default function Dressify() {
  return (
    <div className="relative h-full w-full bg-black pointer-events-auto">
    <LazySpline
      scene="https://prod.spline.design/7ITQh1YmUH4h5YpV/scene.splinecode" 
    />
  </div> 
  );
}
