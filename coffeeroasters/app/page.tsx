import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FEFCF7]">
      <Header />

      <Hero />

      <Collection />

      <Benefits />

      <HowItWorks />

      <Footer />
    </main>
  );
}
