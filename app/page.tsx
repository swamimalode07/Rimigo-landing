import Image from "next/image";
import Navbar from "./components/Navbar/page";
import HeroSection from "./components/Hero/page";
import Features from "./components/Features/page";
import FaqComponent from "./components/FAQ/page";
import Footer from "./components/Footer/page";

export default function Home() {
  return (
   <div>
    <div  className="fixed top-2  w-full z-50">
        <Navbar/>
    </div>
      <main >
        <HeroSection/>
      </main>
      <Features/>
      <FaqComponent/>
      <Footer/>
   </div>
  );
}
