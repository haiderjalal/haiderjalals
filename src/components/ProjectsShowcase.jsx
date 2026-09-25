// app/ProjectShowcase.js (Server Component)

import ClientProjectShowcase from './ClientProjectShowcase'; // Import Client Component

export default function ProjectShowcase() {
  return (
    <div>
      {/* Static layout */}
      <div className="relative h-[200vh]">
        <div className="sticky top-0 h-screen w-full">
          {/* Gradient background at the top */}
          <div className="absolute inset-x-0 top-0 h-1/12 bg-gradient-to-b from-black to-transparent z-20"></div>



          <div className="absolute inset-x-0 -bottom-19 h-1/12 bg-gradient-to-b from-black to-transparent z-20"></div>



          <div className="absolute inset-x-0 bottom-0 h-1/12 bg-gradient-to-t from-black to-transparent z-20"></div>


          {/* Client-side interactive section */}
          <ClientProjectShowcase />
        </div>
      </div>
    </div>
  );
}
