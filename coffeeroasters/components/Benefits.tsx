const benefits = [
  {
    title: "Best quality",
    text: "Discover an endless variety of the world's best artisan coffee from each of our roasters.",
    icon: "☕",
  },
  {
    title: "Exclusive benefits",
    text: "Special offers and perks are available to you when you subscribe, including discounted shipping.",
    icon: "🎁",
  },
  {
    title: "Free shipping",
    text: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
    icon: "🚚",
  },
];

export default function Benefits() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
      <div className="relative overflow-hidden rounded-[10px] bg-[#2C343E] px-6 pb-16 pt-16 md:px-16 md:pb-20 md:pt-20 lg:px-20 lg:pb-20 lg:pt-24">
        
        <div className="relative z-10 mx-auto max-w-[540px] text-center">
          <h2 className="text-[32px] font-black text-white md:text-[40px]">
            Why choose us?
          </h2>

          <p className="mt-6 text-[15px] leading-[25px] text-white/70 md:text-[16px]">
            A large part of our role is choosing which particular coffees
            will be featured, but we also make sure they are expertly
            roasted, freshly packaged, and delivered on time.
          </p>
        </div>

        <div className="relative z-10 mt-16 grid gap-6 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-[8px] bg-[#0E8784] px-8 py-12 text-center text-white md:flex md:items-center md:gap-8 md:text-left lg:block lg:text-center"
            >
              <div className="mb-8 text-[48px] md:mb-0 lg:mb-8">
                {benefit.icon}
              </div>

              <div>
                <h3 className="text-[24px] font-black">
                  {benefit.title}
                </h3>

                <p className="mt-5 text-[15px] leading-[25px] text-white/90">
                  {benefit.text}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
