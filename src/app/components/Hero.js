// // components/Hero.js
// import Image from 'next/image';

// export default function Hero() {
//   return (
//     <section className="flex flex-col-reverse md:flex-row items-center justify-between p-8">
//       {/* Text Section */}
//       <div className="md:w-1/2 text-white">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">
//           Hi There, I'm Haider Jalal
//         </h1>
//         <p className="text-lg md:text-xl">
//           Welcome to my portfolio!
//         </p>
//       </div>

//       {/* Image Section */}
//       <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
//         <Image
//           src="/haiderjalal.png"  // Reference directly from public folder
//           alt="Haider Jalal"
//           width={400}
//           height={400}
//           className="rounded-full"
//         />
//       </div>
//     </section>
//   );
// }

// "use client";
import Image from "next/image";

import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between p-8 ">
      {/* Spline Background Animation */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-full h-full order-2 border-red-500">
       
          <Spline scene="https://prod.spline.design/GMbDwrW2gPTDjuwt/scene.splinecode" />
          
        </div>

      </div>
 
      {/* Text Section */}
      <div className="md:w-1/2 text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi There, I'm<br/> 
          <span className="text-[#C5C505]">Haider Jalal</span>

        </h1>
        <p className="text-lg md:text-xl">A Full Stack Engineer</p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 z-10">
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
