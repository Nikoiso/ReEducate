export default function Footer() {
  return (
    <footer className="py-8 bg-[#242424] border-t border-white/10 text-white">
      <div className="max-w-[1110px] mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
        <p className="text-3xl font-bold tracking-tighter text-white">adamkeyes</p>
        
        <div className="flex gap-7">
          <a href="https://github.com/Nikoiso" className="hover:text-[#4EE1A0] transition-colors"><img src="/github.png" alt="GitHub" /></a>
          <a href="#" className="hover:text-[#4EE1A0] transition-colors"><img src="/front.png" alt="Frontend Mentor" /></a>
          <a href="#" className="hover:text-[#4EE1A0] transition-colors"><img src="/LinkedIn.png" alt="LinkedIn" /></a>
          <a href="#" className="hover:text-[#4EE1A0] transition-colors"><img src="/twitter.png" alt="Twitter" /></a>
        </div>
      </div>
    </footer>
  );
}