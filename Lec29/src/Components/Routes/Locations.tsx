import { motion } from "framer-motion";

interface CityPin {
  id: number;
  name: string;
  top: string;
  left: string;
  delay: number;
}

export default function LocationSection() {
  const cities: CityPin[] = [
    { id: 1, name: "New York", top: "22%", left: "22%", delay: 0.4 },
    { id: 2, name: "London", top: "14%", left: "45%", delay: 0.6 },
    { id: 3, name: "Yokohama", top: "25%", left: "75%", delay: 0.8 },
    { id: 4, name: "Jakarta", top: "45%", left: "70%", delay: 1.0 },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-[#495567]">
      <div className="relative w-full overflow-hidden">
        <motion.img
          src="/Bitmap (7).png"
          alt="World Map"
          className="w-full h-auto object-contain opacity-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

        {cities.map((city) => (
          <motion.div
            key={city.id}
            className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-full"
            style={{ top: city.top, left: city.left }}
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: city.delay,
              ease: "backOut",
            }}
          >
            <div className="bg-[#fcb72b] text-[#333a42] font-bold px-6 py-3 rounded text-sm md:text-base shadow-md whitespace-nowrap">
              {city.name}
            </div>
            <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#fcb72b]" />
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-8 md:flex-row">
        <h2 className="text-3xl font-bold md:text-5xl text-[#495567] max-w-xs text-center md:text-left leading-tight">
          Your city not listed?
        </h2>
        <p className="text-[#939caa] max-w-md text-center md:text-left text-sm md:text-base leading-relaxed">
          If you'd like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>
        <button className="bg-[#fcb72b] text-[#333a42] font-bold px-8 py-3 rounded hover:bg-transparent hover:text-[#fcb72b] border-2 border-[#fcb72b] transition-all whitespace-nowrap">
          Message Us
        </button>
      </div>
    </section>
  );
}