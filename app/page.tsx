import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Fleet from "@/components/Fleet";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#b0b0b0]">
      <Navbar />
      <Hero />
      <About />
      <Fleet />
      <Testimonials />
      <Footer />
    </div>
  );
}
