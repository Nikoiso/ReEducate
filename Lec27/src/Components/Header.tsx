import '../App.css';
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Navbar from "./Navbar";
import type { NavItem } from "../types";

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Recipes", href: "#recipes" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex h-[58px] max-w-[1180px] items-center justify-between px-5 sm:px-8">
        <motion.a
          href="#home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-serif text-[18px] font-black tracking-[-0.05em] text-white"
        >
          BKR
        </motion.a>

        <Navbar items={navItems} />

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden border border-white/60 px-4 py-2 text-[9px] font-bold uppercase text-white md:block"
        >
          Contact
        </motion.a>

        <motion.button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          whileTap={{ scale: 0.9 }}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 md:hidden"
        >
          <span className="relative block h-3 w-3">
            <span
              className={`absolute left-0 top-[2px] h-[1px] w-3 bg-white transition-transform ${
                open ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-[1px] w-3 bg-white transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[10px] h-[1px] w-3 bg-white transition-transform ${
                open ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </span>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-[#121716] md:hidden"
          >
            <div className="px-5 pb-5 pt-2">
              <Navbar
                items={navItems}
                mobile
                onNavigate={() => setOpen(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;