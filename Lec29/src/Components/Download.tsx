import { motion } from "framer-motion";

export default function Download() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 bg-[#495567] p-12 text-white sm:p-20">
      <h2 className="max-w-md text-center text-4xl font-bold leading-tight tracking-wide sm:text-5xl">
        Sign up and Scoot off today
      </h2>

      <div className="flex flex-col gap-4 sm:flex-row">
        <motion.a
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}  
          href="#"
          className="flex items-center gap-3 rounded-xl bg-[#e5ecf4] px-6 py-3 text-[#333a42] transition hover:bg-white"
        >
          <div className="h-7 w-7 fill-current">
            <img src="/apple-logo.png" alt="Logo"/>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-600">
              Available on the
            </span>
            <span className="text-base font-bold tracking-tight">AppStore</span>
          </div>
        </motion.a>

        <motion.a
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
          href="#"
          className="flex items-center gap-3 rounded-xl bg-[#e5ecf4] px-6 py-3 text-[#333a42] transition hover:bg-white"
        >
          <div className="h-7 w-7 fill-current">
            <img src="/playstore.png" alt="Google Market"/>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-600">
              Get it on
            </span>
            <span className="text-base font-bold tracking-tight">
              GooglePlay
            </span>
          </div>
        </motion.a>
      </div>
    </div>
  );
}
