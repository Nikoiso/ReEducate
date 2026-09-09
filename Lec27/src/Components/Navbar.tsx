import '../App.css';
import { motion } from "framer-motion";
import type { NavItem } from "../types";

interface NavbarProps {
  items: NavItem[];
  mobile?: boolean;
  onNavigate?: () => void;
}

const Navbar = ({
  items,
  mobile = false,
  onNavigate,
}: NavbarProps) => {
  return (
    <nav
      className={
        mobile
          ? "flex flex-col gap-1"
          : "hidden items-center gap-7 md:flex"
      }
    >
      {items.map((item) => (
        <motion.a
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={
            mobile
              ? "border-b border-white/10 py-4 text-[13px] font-medium text-white"
              : "text-[10px] font-medium text-white transition-opacity hover:opacity-60"
          }
        >
          {item.label}
        </motion.a>
      ))}
    </nav>
  );
};

export default Navbar;