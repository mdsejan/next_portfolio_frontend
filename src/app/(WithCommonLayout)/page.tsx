import About from "@/components/About";
import Hero from "@/components/Hero";

const HomePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <Hero />
      <About />
      <div className="min-h-[10vh]"></div>
    </div>
  );
};

export default HomePage;
