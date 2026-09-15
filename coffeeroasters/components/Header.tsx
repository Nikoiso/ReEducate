"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 mx-auto w-full max-w-[1280px] px-6 py-8 md:px-10 lg:px-20 lg:py-11">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 grid-cols-2 grid-rows-2 gap-[2px]">
              <span className="rounded-full bg-[#0E8784]" />
              <span className="rounded-full bg-[#0E8784]" />
              <span className="rounded-full bg-[#0E8784]" />
              <span className="rounded-full bg-[#0E8784]" />
            </div>

            <span className="text-[20px] font-black tracking-[-1px] text-[#333D4B] md:text-[24px]">
              coffeeroasters
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-[12px] font-bold uppercase tracking-[1px] text-[#83888F] transition hover:text-[#333D4B]"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-[12px] font-bold uppercase tracking-[1px] text-[#83888F] transition hover:text-[#333D4B]"
          >
            About Us
          </Link>

          <Link
            href="/plan"
            className="text-[12px] font-bold uppercase tracking-[1px] text-[#83888F] transition hover:text-[#333D4B]"
          >
            Create Your Plan
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-6 w-6 flex-col justify-center gap-[5px] md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[3px] w-6 bg-[#333D4B] transition ${
              menuOpen ? "translate-y-[8px] rotate-45" : ""
            }`}
          />

          <span
            className={`block h-[3px] w-6 bg-[#333D4B] transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block h-[3px] w-6 bg-[#333D4B] transition ${
              menuOpen ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="absolute left-0 top-full w-full bg-[#FEFCF7] px-6 py-8 shadow-lg md:hidden">
          <nav className="flex flex-col items-center gap-6">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-[16px] font-bold uppercase tracking-[1px] text-[#333D4B]"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-[16px] font-bold uppercase tracking-[1px] text-[#333D4B]"
            >
              About Us
            </Link>

            <Link
              href="/plan"
              onClick={() => setMenuOpen(false)}
              className="text-[16px] font-bold uppercase tracking-[1px] text-[#333D4B]"
            >
              Create Your Plan
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
