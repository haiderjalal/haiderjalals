// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6">
      {/* Left side text */}
      <div className="text-white text-xl font-bold">Steam</div>

      {/* Right side navigation */}
      <div className="flex items-center space-x-6">
        <Link href="#experience" className="text-white hover:text-gray-400">
          Experience
        </Link>

        <Link href="#projects" className="text-white hover:text-gray-400">
          Projects
        </Link>
        <Link href="#services" className="text-white hover:text-gray-400">
          Services
        </Link>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
          Button
        </button>
      </div>
    </nav>
  );
}
