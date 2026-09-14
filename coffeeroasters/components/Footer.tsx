import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2C3440] text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-12 flex-col md:flex-row">
          <Link href="/" className="text-2xl font-bold tracking-wider font-serif">
            coffeeroasters
          </Link>
          <nav className="flex space-x-8 text-sm font-bold tracking-widest uppercase text-[#83888F]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/plan" className="hover:text-white transition-colors">Create Your Plan</Link>
          </nav>
        </div>
        <div className="flex space-x-6 text-xl">
          <span className="cursor-pointer hover:text-[#0E8784]">f</span>
          <span className="cursor-pointer hover:text-[#0E8784]">𝕏</span>
          <span className="cursor-pointer hover:text-[#0E8784]">📷</span>
        </div>
      </div>
    </footer>
  );
}