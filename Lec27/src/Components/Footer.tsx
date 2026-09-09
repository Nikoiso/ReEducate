import '../App.css';
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#121716] px-5 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-8 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <motion.a
            href="#home"
            whileHover={{ opacity: 0.7 }}
            className="font-serif text-[22px] font-black tracking-[-0.05em]"
          >
            BKR
          </motion.a>

          <p className="mt-3 max-w-[250px] text-[8px] leading-5 text-white/45">
            Fresh bakery products made every day with care and passion.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-[8px] text-white/60">
          <a href="#home" className="hover:text-white">
            Home
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#products" className="hover:text-white">
            Products
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1180px] justify-between pt-6 text-[7px] text-white/30">
        <span>© {new Date().getFullYear()} BKR Bakery</span>
        <span>Made fresh every day.</span>
      </div>
    </footer>
  );
};

export default Footer;