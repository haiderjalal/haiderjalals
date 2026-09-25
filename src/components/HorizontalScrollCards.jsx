// src/components/HorizontalScrollCards.jsx
"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    name: "John Doe",
    tags: ["AI", "UX", "2025", "LEAD"],
    image: "/team-work.jpg",
  },
  {
    name: "Haider Jalal",
    tags: ["2024", "NEXTJS", "3D", "Spline"],
    image: "/haider-card.jpg",
  },
];

export default function HorizontalScrollCards() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!scrollRef.current || !containerRef.current) return;
      
      const totalWidth = scrollRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      if (totalWidth <= viewportWidth) return;

      gsap.to(scrollRef.current, {
        x: () => `-${totalWidth - viewportWidth}`,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${totalWidth - viewportWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-black to-transparent"
    >
      <div ref={scrollRef} className="flex space-x-10 px-10 py-20 w-max h-auto">
        {cardData.map((card, i) => (
          <div
            key={i}
            className="bg-[#E9DFD6] rounded-3xl shadow-xl w-[80vw] h-auto max-w-[500px] p-6 flex-shrink-0 flex flex-col items-center text-center overflow-hidden"
          >
            <Image
              src={card.image}
              alt={card.name}
              width={500}
              height={300}
              className="rounded-2xl w-full h-[300px] object-cover mb-6"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Kcp"
            />
            <h2 className="text-xl md:text-2xl font-bold text-[#c5c505] leading-snug break-words">
              {card.name.split(" ")[0]}
              <br />
              <span className="text-xl md:text-3xl font-extrabold">
                {card.name.split(" ")[1]}
              </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {card.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-[#000] text-white text-sm px-3 py-1 rounded font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
