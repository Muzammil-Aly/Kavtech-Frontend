"use client";
import React, { useState } from "react";

export interface Option {
  label: string;
  highlight?: boolean;
}

interface PromptCardProps {
  placeholder?: string;
  options?: Option[];
  onSelect?: (data: { text: string; option: Option }) => void;
}

const PromptCard: React.FC<PromptCardProps> = ({
  placeholder = "I want to optimize my distribution journey...",
  options = [
    { label: "Sales & Distribution" },
    { label: "Medicare solution" },
    { label: "Match me to a MVP", highlight: true },
  ],
  onSelect,
}) => {
  const [text, setText] = useState("");

  const handleSelect = (option: Option) => {
    onSelect?.({ text, option });
  };

  return (
    <div className="w-full max-w-[681px] mx-auto mt-6 sm:h-[207px] rounded-[24px] border border-gray-500/50 bg-[#06060666] p-4 sm:p-6 flex flex-col justify-between">
      <textarea
        className="w-full bg-transparent text-white text-lg placeholder-gray-400 resize-none outline-none"
        placeholder={placeholder}
        rows={3}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-between lg:justify-start">
        {options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(option)}
            className={`px-4 py-2 rounded-lg shadow-md text-sm sm:text-base ${
              option.highlight ? "text-white" : "text-[#707070]"
            }`}
            style={
              option.highlight
                ? {
                    background: `linear-gradient(0deg, rgba(186, 156, 255, 0.01), rgba(186, 156, 255, 0.01)),
                                 linear-gradient(180deg, rgba(243, 238, 255, 0) 0%, rgba(243, 238, 255, 0.04) 100%),
                                 radial-gradient(231.94% 231.94% at 50% 100%, rgba(186, 156, 255, 0.25) 0%, rgba(186, 156, 255, 0) 25.24%)`,
                    border: "1px solid #707070",
                    marginLeft: "100px",
                  }
                : {
                    background: "#000000",
                    border: "1px solid #707070",
                  }
            }
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PromptCard;
