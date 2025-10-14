"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import InnovatorComponent from "./InnovatorComponent";
import BeyondCodeSection from "./BeyondCodeSection";

const cards = [
  {
    id: 1,
    title: "Chemco",
    subtitle: "Data management",
    description:
      "In the highly competitive landscape of pharmaceutical retail in India, an...",
    color: "from-[#0B0E1A] to-[#1A1E2E]",
    accent: "bg-[#2F3BF2]",
    image: "/images/ProvenResults/chemco.png",
    imageSec: "/images/ProvenResults/chemcoCard.png",
  },
  {
    id: 2,
    title: "Medchart+",
    subtitle: "Healthcare",
    description: "In the dynamic landscape of pharmaceutical services and...",
    color: "from-[#0C0E20] to-[#15233C]",
    accent: "bg-[#4663FF]",
    image: "/images/ProvenResults/medcharts.png",
    imageSec: "/images/ProvenResults/medChartcard.png",
  },
  {
    id: 3,
    title: "Company",
    subtitle: "Realestate business",
    description:
      "In the ever-evolving landscape of real estate technology, organizations face...",
    color: "from-[#342A00] to-[#624A00]",
    accent: "bg-[#F2B705]",
    image: "/images/ProvenResults/company.png",
    imageSec: "/images/ProvenResults/companyCard.png",

    audio: true,
  },
  {
    id: 4,
    title: "Company",
    subtitle: "Expense management",
    description: "In the ever-evolving landscape of real estate technology...",
    color: "from-[#0D001E] to-[#25004E]",
    accent: "bg-[#9333EA]",
    image: "/images/ProvenResults/company expense.png",
    imageSec: "/images/ProvenResults/companyCardexpense.png",
  },
];

const tabs = ["Business", "Development", "Design", "Deploy"];

export default function ProvenResults() {
  const [activeTab, setActiveTab] = useState("Business");

  return (
    <>
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
                solutions that simplify workflows, accelerate launches, and
                create measurable business outcomes.
              </p>
            </div>
            <div className="flex items-center justify-between  px-4 py-2 w-[100%] max-w-[100%] ">
              {/* Tabs (Left Side) */}
              <div className="flex items-center space-x-2  bg-[#111]/50 rounded-full">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                      activeTab === tab
                        ? "text-white font-medium"
                        : "text-gray-400 hover:text-white"
                    }`}
                    style={{
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

              {/* Browse More (Right Side) */}
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-sm font-medium cursor-pointer hover:text-white transition">
                  Browse thousands more →
                </span>
                <div className="flex gap-2">
                  <button className="w-[58px] h-[57px] flex items-center justify-center rounded-[86px] border border-white/10 bg-black opacity-100 hover:bg-black/80 transition">
                    <ChevronLeft
                      className="text-white w-[24px] h-[24px] flex-shrink-0"
                      strokeWidth={2.5}
                    />
                  </button>
                  <button className="w-[58px] h-[57px] flex items-center justify-center rounded-[86px] border border-white/10 bg-black opacity-100 hover:bg-black/80 transition">
                    <ChevronRight
                      className="text-white w-[24px] h-[24px] flex-shrink-0"
                      strokeWidth={2.5}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="flex overflow-x-auto gap-6 no-scrollbar overflow-hidden">
            {cards.map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className={`flex-shrink-0 w-[280px] h-[420px] bg-gradient-to-b ${card.color} rounded-3xl  relative overflow-hidden border border-white/10`}
              >
                {/* Accent Circle */}
                <div
                  className={`absolute -top-16 -right-16 w-40 h-40 rounded-full ${card.accent} opacity-30 blur-2xl`}
                ></div>

                {/* Content */}
                <div className="relative flex flex-col justify-between  h-full z-10  ">
                  <div className="flex justify-between  p-6 ">
                    <div className="flex  gap-1">
                      <Image
                        src={card.image}
                        alt="icon"
                        width={55}
                        height={55}
                        className="object-contain"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{card.title}</h3>
                        <p className="text-sm text-gray-400">{card.subtitle}</p>
                      </div>
                    </div>

                    <button
                      className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-b from-white/5 to-white/10 
  shadow-[0px_-1px_0px_0px_#00000033_inset,0px_0px_0px_1px_#FFFFFF40,
  0px_1px_0px_0px_#FFFFFF0D_inset] opacity-100"
                    >
                      <ChevronRight
                        className="text-white w-6 h-6"
                        strokeWidth={2.5}
                      />
                    </button>
                  </div>
                  <div>
                    <p className=" text-sm text-gray-300 leading-relaxed p-6 pb-0 pt-0">
                      {card.description}
                    </p>
                    <Image
                      src={card.imageSec}
                      alt="icon"
                      width={360}
                      height={360}
                      className="object-contain  "
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <InnovatorComponent />
      <BeyondCodeSection />
    </>
  );
}
