

"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Showcase() {
    const tabs = [
        {
          key: "everyone",
          label: "For Everyone",
          text: [
            { text: "I’m a hands-on " },
            { text: "Digital Creative Director", className: "text-[#C5C505] font-semibold" },
            { text: " focused on crafting innovative digital experiences. Dive in to explore my work, my process, and how I bring ideas to life through " },
            { text: "collaboration" },
            { text: " and " },
            { text: "creativity." },
          ],
        },
        {
          key: "recruiters",
          label: "Recruiters",
          text: [
            { text: "With over " },
            { text: "2 years of experience", className: "text-[#C5C505] font-bold" },
            { text: ", I’ve led development teams in collaboration with cross-functional groups to create impactful digital solutions across diverse industries, driving innovation and results." },
          ],
        },
        {
          key: "agencies",
          label: "Agencies",
          text: [
             
            { text: "I lead, grow, and mentor teams to deliver innovative, " },
            { text: "user-centered digital experiences", className: "text-[#C5C505] font-medium" },
            { text: ". With a focus on strategy and collaboration, I help agencies drive success and elevate their design capabilities." },
          ],
        },
        {
          key: "clients",
          label: "Clients",
        

          text: [
            { text: "I use my " },
            { text: "design and leadership expertise", className: "text-[#C5C505] font-medium" },
            { text: " to elevate brands and create " },
            { text: "meaningful digital experiences" },
        
            { text: "that deliver lasting value. Let’s work together to bring your vision to life" },
          ],
        },
      ];
      

  const [activeTab, setActiveTab] = useState("everyone");

  const activeContent = tabs.find((tab) => tab.key === activeTab)?.text;

  return (
    <section className="bg-black text-white px-6 py-10">
      {/* Top Tabs */}
      <div className="flex justify-center gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              activeTab === tab.key
                ? "bg-[#C5C505] text-black"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dynamic Description */}
      <div className="text-lg max-w-3xl mx-auto leading-relaxed text-center">
  {activeContent?.map((part, index) => (
    <span key={index} className={part.className || ""}>
      {part.text}
    </span>
  ))}
</div>

    

      {/* Location + CTA Button */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-4 max-w-5xl mx-auto">
        <div className="flex items-center space-x-4">
          <p className="text-white font-semibold">Current Location</p>
          <p className="line-through text-gray-400">Lahore</p>
          <p className="line-through text-gray-400">Karachi</p>
          <p className="text-[#C5C505] font-semibold">Islamabad</p>
        </div>

        {/* View My Work Button */}
        <button className="flex items-center gap-2 bg-[#C5C505] text-black rounded-full px-5 py-2 font-semibold hover:bg-[#b0ac00] transition">
          View my Work
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
