import Link from 'next/link';

interface HeroProps {
  title: string;
  description: string;
  showButton?: boolean;
}

export default function Hero({ title, description, showButton = true }: HeroProps) {
  return (
    <section className="relative rounded-xl overflow-hidden py-28 px-8 lg:px-20 text-white flex flex-col justify-center min-h-[450px] bg-[#2C3440] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-xl space-y-6">
        <h1 className="text-4xl lg:text-6xl font-bold font-serif leading-tight">{title}</h1>
        <p className="text-gray-200 text-sm lg:text-base max-w-md leading-relaxed">{description}</p>
        {showButton && (
          <div>
            <Link href="/plan" className="inline-block bg-[#0E8784] hover:bg-[#66D2D6] text-white font-bold px-8 py-4 rounded-lg transition-colors">
              Create your plan
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}