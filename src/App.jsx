import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ProcessSection from "./Components/ProcessSection";
import ServicesSection from "./Components/ServicesSection";
import BlogSection from "./Components/BlogSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main className="bg-[#f7f5f1]">
        <Hero />
        <div className="mt-16 lg:mt-20">
          <ProcessSection />
        </div>
        <div className="mt-16 lg:mt-20">
          <ServicesSection />
        </div>
        <div className="mt-16 lg:mt-20">
          <BlogSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;