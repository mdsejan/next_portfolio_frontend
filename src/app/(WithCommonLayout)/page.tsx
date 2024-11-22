import About from "@/components/About";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

const HomePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <Hero />
      <About />
      <Skills />
      <Education />
      <div className="min-h-[10vh]"></div>
    </div>
  );
};

export default HomePage;
