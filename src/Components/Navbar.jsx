import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80;
      const elementPosition = section.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
      setMobileOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-4 md:px-6">
      <div
        className={`
        max-w-7xl mx-auto mt-5
        transition-all duration-500 ease-out
        ${
          scrolled
            ? `
    bg-white/90
    backdrop-blur-xl
    shadow-[0_10px_40px_rgba(0,0,0,0.08)]
    border border-black/5
    rounded-[30px]
    max-w-6xl
  `
            : `
    bg-white/60
    backdrop-blur-md
    border border-black/5
    rounded-[30px]
    max-w-7xl
  `
        }
      `}
      >
        <div className="h-16 lg:h-[72px] flex items-center justify-between px-6">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center font-bold">
              BW
            </div>
            <span className="font-semibold text-lg text-black">
              Brand Website
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-gray-600">
            <button onClick={() => scrollToSection("hero")} className="hover:text-amber-600 transition">Home</button>
            <button onClick={() => scrollToSection("services")} className="hover:text-amber-600 transition">Services</button>
            <button onClick={() => scrollToSection("process")} className="hover:text-amber-600 transition">Process</button>
            <button onClick={() => scrollToSection("blog")} className="hover:text-amber-600 transition">Blog</button>
          </nav>

          <button className="hidden md:flex items-center bg-amber-600 hover:bg-amber-700 transition px-7 py-3 rounded-2xl text-white font-semibold">
            Start Project →
          </button>

          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="lg:hidden px-6 pb-6">
            <div className="flex flex-col gap-4 text-gray-700">
              <button onClick={() => scrollToSection("hero")} className="text-left hover:text-amber-600 transition py-2">Home</button>
              <button onClick={() => scrollToSection("services")} className="text-left hover:text-amber-600 transition py-2">Services</button>
              <button onClick={() => scrollToSection("process")} className="text-left hover:text-amber-600 transition py-2">Process</button>
              <button onClick={() => scrollToSection("blog")} className="text-left hover:text-amber-600 transition py-2">Blog</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}