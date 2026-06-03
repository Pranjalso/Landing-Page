import FloatingParticles from "./FloatingParticles";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-[#f7f5f1] flex items-center justify-center relative pt-20 lg:pt-24">
      {/* Floating Background Particles */}
      <FloatingParticles />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-black/10 bg-white/70 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-sm font-medium text-gray-700">
              Trusted by ambitious businesses worldwide
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 font-black tracking-tight leading-[0.95] text-black text-5xl sm:text-6xl md:text-7xl lg:text-[96px]">
            Digital experiences
            <br />
            <span className="text-amber-600">
              built for growth.
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-gray-500 leading-relaxed px-4">
            We create modern websites and digital products that combine
            strategy, design, and technology to help businesses stand out,
            attract customers, and scale faster.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <div className="px-6 py-3 rounded-full border border-black/15 bg-white/80 backdrop-blur-sm text-gray-800 font-medium">
              High Performance
            </div>
            <div className="px-6 py-3 rounded-full border border-black/15 bg-white/80 backdrop-blur-sm text-gray-800 font-medium">
              Conversion Focused
            </div>
            <div className="px-6 py-3 rounded-full border border-black/15 bg-white/80 backdrop-blur-sm text-gray-800 font-medium">
              Long-Term Support
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">
            <button className="bg-amber-600 hover:bg-amber-700 transition-all duration-300 text-white font-semibold px-10 py-4 rounded-3xl shadow-xl">
              Start Project →
            </button>
            <button className="bg-white hover:bg-gray-50 transition-all duration-300 border border-black/15 text-black font-semibold px-10 py-4 rounded-3xl">
              Book Discovery Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}