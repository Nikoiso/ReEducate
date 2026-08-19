import Image from "next/image";
import Logo from "../Images/Group 165.png";
import Search from '../Images/fa_search.png';
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-[22px] pt-[19px]">
      <div>
        <Link href="/">
        <Image
          src={Logo}
          alt="Weather Logo"
          className="w-[39px] h-[20.39px] object-contain"
        />
        </Link>
      </div>

      <div className="flex items-center gap-2 border-b border-white/40 pb-1">
        <input
          type="text"
          placeholder="Search Location..."
          className="bg-transparent text-white text-xs placeholder-gray-300 outline-none w-[110px]"
        />
        <Image 
          src={Search} 
          alt="Search Button" 
          className="w-3.5 h-3.5 object-contain cursor-pointer"
        />
      </div>
    </header>
  );
}