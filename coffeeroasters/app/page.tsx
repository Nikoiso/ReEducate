import Hero from '@/components/Hero';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 space-y-28">
      <Hero 
        title="Great coffee made simple." 
        description="Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
        showButton={true}
      />
      <div className="text-center">
        <h2 className="text-4xl font-serif font-bold mb-6">Uncompromising quality</h2>
        <p className="text-[#83888F] max-w-xl mx-auto">
          We deliver pristine coffee packed with flavor and freshness to elevate your daily routine.
        </p>
      </div>
    </div>
  );
}