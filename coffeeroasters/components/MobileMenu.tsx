"use client";

import Link from "next/link";

interface MobileMenuProps {
  open: boolean;
  closeMenu: () => void;
}

export default function MobileMenu({
  open,
  closeMenu,
}: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="absolute left-0 top-full z-50 w-full bg-[#FEFCF7] px-6 py-8 shadow-lg md:hidden">
      <nav className="flex flex-col items-center gap-6">
        <Link
          href="/"
          onClick={closeMenu}
          className="text-[16px] font-bold uppercase tracking-[1px] text-[#333D4B]"
        >
          Home
        </Link>

        <Link
          href="/about"
          onClick={closeMenu}
          className="text-[16px] font-bold uppercase tracking-[1px] text-[#333D4B]"
        >
          About Us
        </Link>

        <Link
          href="/plan"
          onClick={closeMenu}
          className="text-[16px] font-bold uppercase tracking-[1px] text-[#333D4B]"
        >
          Create Your Plan
        </Link>
      </nav>
    </div>
  );
}
