import HeroSection from "@/app/components/HeroSection";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import About from "@/app/components/About";
import Banner from "@/app/components/Banner";
import Tools from "@/app/components/Tools";

export default function Home() {
  return (
    <>
        <HeroSection/>
        <Projects/>
        <About/>
        <Tools/>
        <Experience/>
        <Banner/>
    </>
  );
}
