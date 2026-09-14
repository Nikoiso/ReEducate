import Link from 'next/link';

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold tracking-wider font-serif">
        coffeeroasters
      </Link>
      <nav className="hidden md:flex items-center space-x-8 text-sm font-bold tracking-widest uppercase text-[#83888F]">
        <Link href="/" className="hover:text-[#333D4B] transition-colors">Home</Link>
        <Link href="/about" className="hover:text-[#333D4B] transition-colors">About Us</Link>
        <Link href="/plan" className="hover:text-[#333D4B] transition-colors">Create Your Plan</Link>
      </nav>
    </header>
  );
}