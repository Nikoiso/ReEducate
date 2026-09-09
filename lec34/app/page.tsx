import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#151515] font-sans antialiased">
      <Header />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}