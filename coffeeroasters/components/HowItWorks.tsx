const steps = [
  {
    number: "01",
    title: "Pick your coffee",
    text: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them.",
  },
  {
    number: "02",
    title: "Choose the frequency",
    text: "Customize your order frequency, quantity, and even your roast style. Pause, skip or cancel your subscription with no commitment.",
  },
  {
    number: "03",
    title: "Receive and enjoy!",
    text: "We ship your coffee within 48 hours, freshly roasted. Sit back and enjoy award-winning artisan coffee curated just for you.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 lg:px-20">
      <h2 className="text-[24px] font-black text-[#83888F]">
        How it works
      </h2>

      <div className="relative mt-20">
        <div className="absolute left-0 right-[66%] top-[15px] hidden h-[2px] bg-[#FDD6BA] lg:block" />

        <div className="grid gap-16 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <article key={step.number} className="relative">
              <div className="relative z-10 mb-12 flex h-[31px] w-[31px] items-center justify-center rounded-full border-2 border-[#0E8784] bg-[#FEFCF7]">
                <span className="h-[11px] w-[11px] rounded-full bg-[#0E8784]" />
              </div>

              <span className="text-[72px] font-black leading-none text-[#FDD6BA]">
                {step.number}
              </span>

              <h3 className="mt-8 text-[28px] font-black leading-[32px] text-[#333D4B]">
                {step.title}
              </h3>

              <p className="mt-6 max-w-[300px] text-[15px] leading-[25px] text-[#333D4B]">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>

      <a
        href="/plan"
        className="mt-16 inline-flex rounded-[6px] bg-[#0E8784] px-8 py-4 text-[12px] font-bold text-white transition hover:bg-[#66D2CF]"
      >
        Create your plan
      </a>
    </section>
  );
}
