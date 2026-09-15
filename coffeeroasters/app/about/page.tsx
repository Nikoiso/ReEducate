import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FEFCF7]">
      <Header />

      <section className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
        <div
          className="relative overflow-hidden rounded-[10px] bg-[#2C343E] bg-cover bg-center px-6 py-24 md:px-16 md:py-32 lg:px-20"
          style={{
            backgroundImage:
              "url('/images/about/desktop/image-hero-whitecup.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 max-w-[500px]">
            <h1 className="text-[40px] font-black text-white md:text-[48px]">
              About Us
            </h1>

            <p className="mt-6 text-[15px] leading-[25px] text-white/90">
              Coffeeroasters began its journey with one simple goal: to bring
              great coffee into the homes of coffee lovers everywhere.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-[1100px] flex-col items-center gap-12 px-6 py-24 md:flex-row md:px-10 lg:py-32">
        <div className="w-full md:w-1/2">
          <img
            src="/images/about/desktop/image-commitment.jpg"
            alt="Coffee"
            className="w-full rounded-[8px] object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-[32px] font-black text-[#333D4B]">
            Our commitment
          </h2>

          <p className="mt-6 text-[15px] leading-[25px] text-[#333D4B]">
            We&apos;re focused on providing the best coffee experience from
            the moment the beans are sourced until they arrive at your door.
            Every coffee is carefully selected and freshly roasted.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
        <div className="rounded-[10px] bg-[#2C343E] px-8 py-16 text-center md:px-16 lg:px-20 lg:text-left">
          <h2 className="text-[32px] font-black text-white">
            Uncompromising quality
          </h2>

          <p className="mt-6 max-w-[600px] text-[15px] leading-[25px] text-white/70">
            Our highly skilled team works hard to ensure every cup delivers
            an exceptional coffee experience.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

