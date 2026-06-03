import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProcessSection from "./components/ProcessSection";
import ServicesSection from "./components/ServicesSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";

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