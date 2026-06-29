import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* przejście secondary-bg -> white */}
        <Divider color="#FFFFFF" />
        <Services />
        <WhyUs />
        {/* przejście teal -> secondary-bg */}
        <Divider color="#F8FAFC" flip />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
