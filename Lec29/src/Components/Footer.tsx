import "../App.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-[#333A44] px-8 py-16 md:px-24 md:py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 text-center md:flex-row md:gap-0 md:text-left">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-14">
          <h1 className="text-4xl font-bold tracking-tighter text-white">
            scoot
          </h1>

          <ul className="flex flex-col gap-4 text-sm font-bold tracking-wide text-slate-400 md:flex-row md:gap-8">
            <Link to="/about" className="cursor-pointer transition-colors hover:text-[#FCB72B]">
              About
            </Link>
            <Link to="/location" className="cursor-pointer transition-colors hover:text-[#FCB72B]">
              Location
            </Link>
            <Link to="/careers" className="cursor-pointer transition-colors hover:text-[#FCB72B]">
              Careers
            </Link>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <img
            src="/Path.png"
            alt="FB Logo"
            className="size-6 cursor-pointer hover:opacity-80"
          />
          <img
            src="/Path (1).png"
            alt="Twit Logo"
            className="size-6 cursor-pointer hover:opacity-80"
          />
          <img
            src="/Shape.png"
            alt="IG Logo"
            className="size-6 cursor-pointer hover:opacity-80"
          />
        </div>
      </div>
    </footer>
  );
}
