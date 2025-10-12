"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "Chemco",
    subtitle: "Data management",
    description:
      "In the highly competitive landscape of pharmaceutical retail in India, an...",
    color: "from-[#0B0E1A] to-[#1A1E2E]",
    accent: "bg-[#2F3BF2]",
  },
  {
    id: 2,
    title: "Medchart+",
    subtitle: "Healthcare",
    description: "In the dynamic landscape of pharmaceutical services and...",
    color: "from-[#0C0E20] to-[#15233C]",
    accent: "bg-[#4663FF]",
  },
  {
    id: 3,
    title: "Company",
    subtitle: "Realestate business",
    description:
      "In the ever-evolving landscape of real estate technology, organizations face...",
    color: "from-[#342A00] to-[#624A00]",
    accent: "bg-[#F2B705]",
    image: "/profile.jpg",
    audio: true,
  },
  {
    id: 4,
    title: "Company",
    subtitle: "Expense management",
    description: "In the ever-evolving landscape of real estate technology...",
    color: "from-[#0D001E] to-[#25004E]",
    accent: "bg-[#9333EA]",
  },
];

const tabs = ["Business", "Development", "Design", "Deploy"];

export default function ProvenResults() {
  const [activeTab, setActiveTab] = useState("Business");

  return (
    <div className="w-full bg-[#050505] text-white py-16 px-6 md:px-16">
      <div className="max-w-[1200px] mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-col  md:justify-between gap-6">
          <div>
            <h2 className="text-4xl font-semibold leading-tight">
              Proven Results
            </h2>
            <p className="text-gray-400 mt-2 max-w-lg">
              From telecom giants to fintech startups, Kairech delivers
              solutions that simplify workflows, accelerate launches, and create
              measurable business outcomes.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex items-center space-x-2 bg-[#111]/50 rounded-full px-2 py-2 w-[400px]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                  activeTab === tab
                    ? "text-white font-medium" // changed text-black → text-white
                    : "text-gray-400 hover:text-white"
                }`}
                style={{
                  // width: "86.005px", // 🟢 add
                  height: "48px",
                  background:
                    activeTab === tab
                      ? "radial-gradient(51.07% 92.4% at 51% 7.61%, #5A5A5A 0%, #1A1A1A 100%)"
                      : undefined,
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex overflow-x-auto gap-6 pb-6 no-scrollbar">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`flex-shrink-0 w-[280px] h-[380px] bg-gradient-to-b ${card.color} rounded-3xl p-6 relative overflow-hidden border border-white/10`}
            >
              {/* Accent Circle */}
              <div
                className={`absolute -top-16 -right-16 w-40 h-40 rounded-full ${card.accent} opacity-30 blur-2xl`}
              ></div>

              {/* Content */}
              <div className="relative flex flex-col justify-between h-full z-10">
                <div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm text-gray-400">{card.subtitle}</p>
                  <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Footer (Audio/Play example) */}
                {card.audio ? (
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={card.image}
                        alt="profile"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <p className="text-sm text-gray-300">Playlist</p>
                    </div>
                    <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition">
                      <Play className="w-4 h-4 text-white" />
                    </button>
                  </div>
                ) : (
                  <div className="mt-6 h-[1px] bg-white/10"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Browse More */}
        <div className="flex items-center justify-between text-sm text-gray-400">
          <p>Browse thousands more →</p>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
              ←
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
