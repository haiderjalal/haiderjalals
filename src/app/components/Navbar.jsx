// components/Navbar.js
import Link from "next/link";
import Spline from "@splinetool/react-spline";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 relative z-50 bg-black">
      {/* Left side text */}
      <div className="text-[#C5C505] text-xl font-bold w-[168px] h-[25px] ">
        Steam
      </div>

      {/* Right side navigation */}
      <div className="flex items-center space-x-6">
        <Link
          href="#experience"
          className="text-[#C5C505] hover:text-gray-400 w-[110px] h-[30px]"
        >
          Experience
        </Link>

        <Link
          href="#projects"
          className="text-[#C5C505] hover:text-gray-400 w-[110px] h-[30px]"
        >
          Projects
        </Link>
        <Link
          href="#services"
          className="text-[#C5C505] hover:text-gray-400  w-[110px] h-[30px]"
        >
          Services
        </Link>

        {/* Animated Spline Button */}
        <div >
          
    
        <Spline
               scene="https://prod.spline.design/DztAEa-8KbGkNyG3/scene.splinecode" 

        width={150}
        height={50}
      />

          
        </div>
      </div>
    </nav>
  );
}
