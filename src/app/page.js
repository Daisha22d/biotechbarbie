import Hero from "./hero/page";
import About from "../app/about/page";
import Footer from "../app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="max-w-4xl mx-auto p-6">
        <section id="home" className="mb-12"> 
          <Hero />
        </section>
        <section id="about" className="mb-12"> 
          <About />
        </section>
      </main>
      <Footer />
    </div>
  );
}