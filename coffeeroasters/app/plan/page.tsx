import Header from "@/components/Header";
import PlanForm from "@/components/PlanForm";
import Footer from "@/components/Footer";

export default function PlanPage() {
  return (
    <main className="min-h-screen bg-[#FEFCF7]">
      <Header />

      <section className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
        <div className="rounded-[10px] bg-[#2C343E] px-6 py-20 md:px-16 md:py-28 lg:px-20">
          <div className="max-w-[500px]">
            <h1 className="text-[40px] font-black leading-none text-white md:text-[48px]">
              Create a plan
            </h1>

            <p className="mt-6 text-[15px] leading-[25px] text-white/70">
              Build a coffee subscription that&apos;s perfect for you.
              Choose your coffee type, quantity, frequency and delivery.
            </p>
          </div>
        </div>
      </section>

      <PlanForm />

      <Footer />
    </main>
  );
}