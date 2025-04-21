"use client";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      easing: "ease-in-out", // Animation easing
      once: true, // Animation occurs only once when the element comes into view
    });
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col-reverse md:flex-row items-center justify-between p-8 overflow-hidden bg-black">
      {/* 🔵 Background Spline Animation */}
      <div className="absolute inset-0 -z-0 bg-black">
        <Spline scene="https://prod.spline.design/veyxO-A64L241GHs/scene.splinecode" />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 text-white z-10" data-aos="fade-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi There, I'm<br />
          <span className="text-[#C5C505]">Haider Jalal</span>
        </h1>
        <p className="text-lg md:text-xl">A Full Stack Engineer</p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 z-10" data-aos="fade-left">
        <Image
          src="/haiderjalal.png"
          alt="Haider Jalal"
          width={400}
          height={400}
          className="rounded-full"
        />
      </div>
    </section>
  );
}
