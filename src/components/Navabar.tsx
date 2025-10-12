"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
      fixed top-5 left-1/2 -translate-x-1/2
      z-50 w-[1434px] max-w-[95%] h-[65px]
      flex items-center justify-between
      rounded-2xl border border-transparent
      before:absolute before:inset-0 before:rounded-2xl before:p-[1px]
before:bg-black
before:content-[''] before:-z-10

    "
    >
      {/* --- Left: Logo --- */}
      <div className="flex-shrink-0 pl-6">
        <Link href="/">
          <img
            src="https://kavtech.net/images/logo-white.png"
            alt="Bandits Logo"
            className="h-8 w-auto"
          />
        </Link>
      </div>

      {/* --- Center: Nav Links --- */}
      <nav className="hidden md:flex items-center space-x-8 font-medium text-gray-100">
        <Link href="/" className="hover:text-gray-400 transition">
          Home
        </Link>
        <Link href="/product" className="hover:text-gray-400 transition">
          Product
        </Link>
        <Link href="/services" className="hover:text-gray-400 transition">
          Services
        </Link>
        <Link href="/case-studies" className="hover:text-gray-400 transition">
          Case Studies
        </Link>
        <Link href="/company" className="hover:text-gray-400 transition">
          Company
        </Link>
      </nav>

      {/* --- Right: Get in Touch --- */}
      <div className="pr-6 hidden md:flex">
        <Link
          href="/contact"
          className="
            w-[126px] h-[41px]
            flex items-center justify-center
            rounded-[12px]
            text-[15px] font-medium text-[#E48242]
            px-4 py-2
            bg-[radial-gradient(231.94%_231.94%_at_50%_100%,rgba(228,130,66,0.25)_0%,rgba(228,130,66,0)_25.24%)]
            border border-[#3a3a3a]
            shadow-[0_2px_10px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.05)]
            transition-transform duration-200 hover:scale-[1.03]
          "
        >
          Get in touch
        </Link>
      </div>

      {/* --- Mobile menu toggle --- */}
      <button
        className="md:hidden p-2 rounded-md border border-gray-400 text-gray-100 mr-4"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* --- Mobile Menu --- */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-black/80 border-t border-gray-700 flex flex-col items-center py-4 space-y-3 shadow-md md:hidden">
          <Link href="/" className="hover:text-gray-400 transition">
            Home
          </Link>
          <Link href="/product" className="hover:text-gray-400 transition">
            Product
          </Link>
          <Link href="/services" className="hover:text-gray-400 transition">
            Services
          </Link>
          <Link href="/case-studies" className="hover:text-gray-400 transition">
            Case Studies
          </Link>
          <Link href="/company" className="hover:text-gray-400 transition">
            Company
          </Link>
          <Link
            href="/contact"
            className="
              w-[126px] h-[41px]
              flex items-center justify-center
              rounded-[12px] border border-transparent
              text-[15px] font-medium text-white
              px-4 py-2
              relative overflow-hidden
              before:absolute before:inset-0 before:rounded-[12px] before:p-[1px]
              before:bg-[linear-gradient(176.03deg,#FFFFFF_-3.47%,#787878_76.45%)]
              before:content-[''] before:-z-10
              after:absolute after:inset-[1px] after:rounded-[11px]
              after:bg-[linear-gradient(0deg,rgba(228,130,66,0.01),rgba(228,130,66,0.01)),
              linear-gradient(180deg,rgba(243,238,255,0)_0%,rgba(243,238,255,0.04)_100%),
              radial-gradient(231.94%_231.94%_at_50%_100%,rgba(228,130,66,0.25)_0%,rgba(228,130,66,0)_25.24%)]
              after:content-[''] after:-z-10
              transition-transform duration-200 hover:scale-[1.03]
              shadow-[0px_-9.3px_37.2px_0px_#FFA9280D_inset,0px_0px_13.95px_0px_#FFFFFF14_inset,0px_61.61px_17.44px_0px_#00000003,0px_39.52px_16.27px_0px_#0000000F,0px_22.09px_12.79px_0px_#00000033,0px_9.3px_9.3px_0px_#00000057,0px_2.32px_5.81px_0px_#00000063]
            "
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
