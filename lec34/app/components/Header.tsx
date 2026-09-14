import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#151515]">
      <div className="max-w-[1110px] mx-auto px-5 py-8 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold tracking-tighter text-white">
          adamkeyes
        </Link>
        
        <nav className="flex items-center gap-7 text-white">
          <a href="https://github.com/Nikoiso" className="hover:text-[#4EE1A0] transition-colors"><img src="/github.png" alt="GitHub" /></a>
          <a href="#" className="hover:text-[#4EE1A0] transition-colors"><img src="/front.png" alt="Frontend Mentor" /></a>
          <a href="#" className="hover:text-[#4EE1A0] transition-colors"><img src="/LinkedIn.png" alt="LinkedIn" /></a>
          <a href="#" className="hover:text-[#4EE1A0] transition-colors"><img src="/twitter.png" alt="Twitter" /></a>
        </nav>
      </div>
    </header>
  );
}