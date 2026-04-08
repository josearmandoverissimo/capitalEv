import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Partners from "@/components/sections/Partners";
import Differentials from "@/components/sections/Differentials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Partners />
        <Differentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
