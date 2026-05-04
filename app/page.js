// তোমার ফোল্ডার স্ট্রাকচার অনুযায়ী সঠিক ইম্পোর্ট পাথ
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"; 
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Marquee from "./components/Marquee";
export default function Home() {
  return (
    <main className="bg-[#080808] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Marquee/>
      <Services/>
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}