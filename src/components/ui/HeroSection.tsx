"use client";

import PromptCard, { Option } from "./PromptCard";
import WhyUsSection from "./WhyUsSection";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function ChangingBanner() {
  const items = [
    { text: "Services", color: "#CD3E47" },
    { text: "Product", color: "#42A5E4" },
    { text: "Solution", color: "#00F0FF" },
    { text: "Website", color: "#5FC09B" },
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = items[index];
    const typingSpeed = deleting ? 60 : 100;

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.text.length) {
        setSubIndex(subIndex + 1);
      } else if (deleting && subIndex > 0) {
        setSubIndex(subIndex - 1);
      } else if (!deleting && subIndex === current.text.length) {
        // pause before erasing
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && subIndex === 0) {
        // move to next word
        setDeleting(false);
        setIndex((prev) => (prev + 1) % items.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, items]);

  const currentItem = items[index];
  const longestWord = items.reduce(
    (a, b) => (a.text.length > b.text.length ? a : b),
    items[0]
  ).text;

  return (
    <span
      style={{
        display: "inline-block",
        minWidth: `${longestWord.length}ch`,
        textAlign: "left",
      }}
    >
      <span
        style={{
          backgroundImage: `linear-gradient(to right, ${currentItem.color}, ${currentItem.color})`,
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontWeight: 600,
          whiteSpace: "nowrap",
        }}
      >
        {currentItem.text.substring(0, subIndex)}
      </span>
    </span>
  );
}
// ✅ Main Hero Section
export default function HeroSection() {
  const handlePromptSelect = ({
    text,
    option,
  }: {
    text: string;
    option: Option;
  }) => {
    console.log("User prompt:", text, "Selected option:", option);
  };

  return (
    <section
      className="
    relative flex flex-col items-center justify-center
    h-screen text-center px-6 overflow-hidden
    bg-[#000000] text-white
    mt-12
    gap-10
  "
    >
      {/* Gradient background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(100%_100%_at_50%_0%,rgba(228,130,66,0.2)_0%,rgba(0,0,0,1)_80%)]"></div>

      {/* Hero Content */}
      <div className="max-w-[1040px] flex flex-col items-center gap-2">
        <h1
          className="
    text-[clamp(48px,8vw,120px)]
    leading-[105%] tracking-[-0.04em]
    font-[510] text-center
  "
          style={{
            fontFamily:
              "SF Pro Display, SF Pro, -apple-system, BlinkMacSystemFont, sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          Launch your <ChangingBanner /> <br></br>in minutes
        </h1>

        <p
          className="text-center"
          style={{
            fontFamily: "SF Pro, -apple-system, BlinkMacSystemFont, sans-serif",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          Describe your idea in a few words, we’ll match you with the right
          solution <br /> from tailored builds to ready-to-go MVPs.
        </p>
      </div>

      {/* Prompt Card */}
      <PromptCard onSelect={handlePromptSelect} />
    </section>
  );
}
