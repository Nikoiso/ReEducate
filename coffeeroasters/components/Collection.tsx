const coffees = [
  {
    name: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience.",
    image: "/images/home/desktop/image-gran-espresso.png",
  },
  {
    name: "Planalto",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.",
    image: "/images/home/desktop/image-planalto.png",
  },
  {
    name: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry.",
    image: "/images/home/desktop/image-piccollo.png",
  },
  {
    name: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes.",
    image: "/images/home/desktop/image-danche.png",
  },
];

export default function Collection() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32 lg:px-20">
      <div className="relative">
        <h2 className="pointer-events-none absolute left-0 right-0 top-0 text-center text-[40px] font-black leading-none tracking-[-2px] text-[#83888F]/30 md:text-[80px] lg:text-[150px]">
          our collection
        </h2>

        <div className="relative z-10 grid gap-12 pt-16 md:grid-cols-2 md:gap-16 lg:grid-cols-4 lg:gap-8 lg:pt-32">
          {coffees.map((coffee) => (
            <article
              key={coffee.name}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-[180px] items-center justify-center">
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  className="max-h-[180px] w-auto object-contain"
                />
              </div>

              <h3 className="mt-8 text-[24px] font-black text-[#333D4B]">
                {coffee.name}
              </h3>

              <p className="mt-4 max-w-[260px] text-[15px] leading-[25px] text-[#333D4B]">
                {coffee.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
