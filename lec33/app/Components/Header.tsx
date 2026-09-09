import React from "react";
import Image from "next/image";
import logoImg from "../Images/Group 165.png";
import searchIcon from "../Images/fa_search.png";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

export default function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center">
        <Image
          src={logoImg}
          alt="Weather Logo"
          width={80}
          height={32}
          className="h-8 w-auto object-contain"
        />
      </div>

      <div className="flex lg:hidden items-center border-b border-white/60 pb-1">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Location..."
          className="bg-transparent text-xs text-white placeholder-gray-300 focus:outline-none w-28 text-right pr-2"
        />
        <Image
          src={searchIcon}
          alt="Search"
          width={16}
          height={16}
          className="w-4 h-4 object-contain cursor-pointer"
        />
      </div>
    </div>
  );
}
