import { useState } from "react";
import "../App.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full bg-white px-8 py-6 md:px-24">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-[#FCB72B] focus:outline-none md:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <div className="flex items-center gap-14">
          <motion.div
            className="text-3xl font-bold tracking-tighter text-[#495567] max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a href="/">scoot</a>
          </motion.div>

          <nav className="hidden items-center gap-8 font-mono text-sm font-bold text-slate-400 md:flex">
          <Link to="/about" className="hover:text-[#fcb72b]">
          About
          </Link>
            <Link to="/location" className="transition-colors hover:text-[#FCB72B]">
              Location
            </Link>
            <Link to="/careers" className="transition-colors hover:text-[#FCB72B]">
              Careers
            </Link>
          </nav>
        </div>

        <div className="hidden md:block">
          <a
            href="#"
            className="rounded-none bg-[#FCB72B] px-9 py-3 font-mono text-sm font-bold text-white transition-colors hover:bg-amber-300"
          >
            Get Scootin
          </a>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full z-50 flex w-64 flex-col gap-6 bg-[#333A44] p-8 text-white md:hidden"
          >
            <Link to="/about" className="font-mono text-lg font-bold">
              About
            </Link>
            <Link to="/location" className="font-mono text-lg font-bold">
              Location
            </Link>
            <Link to="/careers" className="font-mono text-lg font-bold">
              Careers
            </Link>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="mt-4 inline-block bg-[#FCB72B] py-3 text-center font-mono text-sm font-bold text-white"
            >
              Get Scootin
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
