import '../App.css';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[620px] overflow-hidden bg-[#121716] text-white sm:min-h-[680px] lg:min-h-[760px]"
    >
      <div className="absolute -right-10 top-8 h-20 w-36 rounded-full border border-[#A8B899]/50" />
      <div className="absolute -left-16 bottom-12 h-28 w-44 rounded-full border border-[#F4B15B]/60" />

      <div className="mx-auto grid min-h-[620px] max-w-[1180px] items-center px-5 pb-16 pt-24 sm:min-h-[680px] sm:px-8 lg:min-h-[760px] lg:grid-cols-2 lg:px-10 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <p className="mb-5 text-[8px] font-medium uppercase tracking-[0.28em] text-white/70">
            BKR presents
          </p>

          <h1 className="max-w-[430px] font-serif text-[47px] font-black leading-[0.91] tracking-[-0.055em] sm:text-[62px] lg:text-[70px]">
            Fresh
            <br />
            Bakery
            <br />
            Every Day
          </h1>

          <p className="mt-6 max-w-[290px] text-[10px] leading-[1.7] text-white/65 sm:text-[11px]">
            Start the day with freshly baked bread, delicious pastries and
            handmade treats made with care.
          </p>

          <motion.a
            href="#products"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="mt-7 inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest"
          >
            Explore
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/50">
              →
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto mt-10 h-[340px] w-full max-w-[390px] sm:h-[420px] lg:mt-0 lg:h-[520px]"
        >
          <div className="absolute right-[10%] top-[4%] h-[48%] w-[48%] rounded-full bg-[#F3A54D]" />

          <div className="absolute right-[4%] top-[16%] h-[47%] w-[40%] rounded-full border border-[#A8B899]" />

          <div className="absolute left-[12%] top-[9%] h-[45%] w-[58%] rounded-full bg-[#A8B899]/80" />

          <div className="absolute left-[22%] top-[2%] h-[42%] w-[50%] overflow-hidden rounded-[45%]">
            <img
              src="/images/bread.jpg"
              alt="Fresh bread"
              className="h-full w-full object-cover"
            />
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[3%] right-[3%] z-10 h-[65%] w-[62%] rounded-[50%] bg-[#F8F5E9]"
          >
            <div className="absolute left-1/2 top-[12%] h-[21%] w-[29%] -translate-x-1/2 rounded-full bg-[#F1B172]" />
            <div className="absolute bottom-0 left-1/2 h-[74%] w-[62%] -translate-x-1/2 rounded-t-[48%] bg-[#F1A34E]" />
            <div className="absolute bottom-[3%] left-[22%] h-[44%] w-[20%] rounded-full bg-[#E89B4D]" />
            <div className="absolute bottom-[3%] right-[22%] h-[44%] w-[20%] rounded-full bg-[#E89B4D]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;