// "use client";
"use client";

<<<<<<< HEAD:src/app/components/Hero.js
import Image from "next/image";
=======

>>>>>>> 54f7401b7b375b9c47439810c9266c8db7c68d67:src/app/components/Hero.jsx
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
<<<<<<< HEAD:src/app/components/Hero.js
    <section className="relative h-screen w-full flex flex-col-reverse md:flex-row items-center justify-between p-8 overflow-hidden bg-black">
      {/* 🔵 Background Spline Animation */}
      <div className="absolute inset-0 -z-0 bg-black">
      <Spline
        scene="https://prod.spline.design/veyxO-A64L241GHs/scene.splinecode" 
      />
      </div>

      {/* 🟡 Text Section */}
=======
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between p-8 ">
      {/* Spline Background Animation */}
   

          {/* Spline Background Animation */}
          <div className="absolute inset-0 -z-10 flex justify-end items-center pr-210 mt-70">
        {/* Moves animation slightly to the right */}
        <div className="w-[250px] h-[250px]">
          <Spline scene="https://prod.spline.design/82FSBGH4xQCqAn6k/scene.splinecode" />
        </div>
      </div>
 
      {/* Text Section */}
>>>>>>> 54f7401b7b375b9c47439810c9266c8db7c68d67:src/app/components/Hero.jsx
      <div className="md:w-1/2 text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi There, I'm<br />
          <span className="text-[#C5C505]">Haider Jalal</span>
        </h1>
        <p className="text-lg md:text-xl">A Full Stack Engineer</p>
      </div>

<<<<<<< HEAD:src/app/components/Hero.js
      {/* 🟢 Image Section */}
      <div className="md:w-1/3 flex justify-center mb-8 md:mb-0 z-10">
=======
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 z-10">
>>>>>>> 54f7401b7b375b9c47439810c9266c8db7c68d67:src/app/components/Hero.jsx
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
