export default function Hero() {
  return (
    <section className="py-20 md:py-28 bg-[#151515] text-white">
      <div className="max-w-[1110px] mx-auto px-5 grid md:grid-cols-2 gap-12 items-center relative">
        <div className="text-center md:text-left z-10">
          <h1 className="text-4xl md:text-[72px] font-bold tracking-tighter leading-[1.1] mb-8">
            Nice to meet you! I'm
            <span className="border-b-4 border-[#4EE1A0]">NikoIso.</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-[445px] mx-auto md:mx-0 mb-12 leading-relaxed">
            Based in the Georgia, I'm a front-end developer passionate about
            building accessible web apps that users love.
          </p>

          <a
            href="#contact"
            className="inline-block text-sm font-bold tracking-widest uppercase border-b-2 border-[#4EE1A0] pb-2 hover:text-[#4EE1A0] transition-colors"
          >
            Contact Me
          </a>
        </div>
        <div className="hidden md:block absolute right-0 bottom-0 top-[-100px] w-[445px] h-full z-0">
          <img
            src="/vigactipi.png"
            alt="vigactipi"
            className="w-full h-full object-cover object-bottom"
          />
        </div>
        <div className="md:hidden flex justify-center mt-[-50px] z-0 relative">
          <img
            src="/vigactipi.png"
            alt="vigactipi"
            className="w-[320px] h-[380px] object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
