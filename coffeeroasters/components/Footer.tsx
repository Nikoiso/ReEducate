
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1280px] px-6 pb-8 md:px-10 lg:px-20">
      <div className="flex flex-col items-center gap-10 bg-[#2C343E] px-8 py-12 md:px-10 lg:flex-row lg:justify-between">
        
        <Link href="/" className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 grid-cols-2 grid-rows-2 gap-[2px]">
              <span className="rounded-full bg-[#0E8784]" />
              <span className="rounded-full bg-[#0E8784]" />
              <span className="rounded-full bg-[#0E8784]" />
              <span className="rounded-full bg-[#0E8784]" />
            </div>

            <span className="text-[20px] font-black tracking-[-1px] text-white md:text-[24px]">
              coffeeroasters
            </span>
          </div>
        </Link>

        <nav className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
          <Link
            href="/"
            className="text-[11px] font-bold uppercase tracking-[1px] text-[#83888F] hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-[11px] font-bold uppercase tracking-[1px] text-[#83888F] hover:text-white"
          >
            About Us
          </Link>

          <Link
            href="/plan"
            className="text-[11px] font-bold uppercase tracking-[1px] text-[#83888F] hover:text-white"
          >
            Create Your Plan
          </Link>
        </nav>

        <div className="flex gap-5">
          <a
            href="#"
            aria-label="Facebook"
            className="text-xl font-bold text-white"
          >
            f
          </a>

          <a
            href="#"
            aria-label="Twitter"
            className="text-xl font-bold text-white"
          >
            𝕏
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="text-xl font-bold text-white"
          >
            ◎
          </a>
        </div>

      </div>
    </footer>
  );
}
