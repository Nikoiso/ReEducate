import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
      <div
        className="relative min-h-[500px] overflow-hidden rounded-[10px] bg-[#2C343E] bg-cover bg-center px-6 py-24 md:min-h-[600px] md:px-14 md:py-28 lg:px-20"
        style={{
          backgroundImage: "url('/images/desktop/image-hero-coffeepress.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 max-w-[500px]">
          <h1 className="text-[40px] font-black leading-[1] tracking-[-1px] text-white md:text-[48px] lg:text-[72px]">
            Great coffee
            <br />
            made simple.
          </h1>

          <p className="mt-6 max-w-[430px] text-[15px] leading-[25px] text-white/80 md:mt-8 md:text-[16px]">
            Start your mornings with the world&apos;s best coffees. Try our
            expertly curated artisan coffees from our best roasters delivered
            directly to your door, on your schedule.
          </p>

          <Link
            href="/plan"
            className="mt-8 inline-flex rounded-[6px] bg-[#0E8784] px-8 py-4 text-[12px] font-bold text-white transition hover:bg-[#66D2CF] md:mt-10"
          >
            Create your plan
          </Link>
        </div>
      </div>
    </section>
  );
}
