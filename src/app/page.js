import Footer from "@/components/Footer";
import Cta from "@/components/Home/Cta";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Video from "@/components/Home/Video";

export default function Home() {
  return (
    <main className="lato">
      <Hero/>
      <Video/>
      <Features/>
      <Cta/>
      <Footer/>
    </main>
  );
}
