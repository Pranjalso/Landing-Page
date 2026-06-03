import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Custom Web Development",
    description: "Fast, scalable websites and applications built with modern frameworks and best practices for optimal performance.",
    tags: ["React", "Performance", "Scalable", "SEO Friendly"],
    icon: "🚀"
  },
  {
    id: "02",
    title: "UI / UX Design",
    description: "Human-centered design systems that create seamless and memorable user experiences across all devices.",
    tags: ["Figma", "Research", "Design System", "Prototyping"],
    icon: "🎨"
  },
  {
    id: "03",
    title: "SEO & Growth",
    description: "Optimization strategies that improve visibility, engagement, and conversions through data-driven decisions.",
    tags: ["SEO", "Analytics", "Marketing", "Growth Hacking"],
    icon: "📈"
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="min-h-screen bg-[#f7f5f1] flex items-center py-24 lg:py-0">
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-black/10 bg-white">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              WHAT WE OFFER
            </div>
            <h2 className="mt-8 leading-[1.1] font-black tracking-tight text-[52px] sm:text-6xl md:text-7xl lg:text-[88px]">
              Everything your
              <br />
              business needs to
              <br />
              <span className="text-amber-600">
                grow online.
              </span>
            </h2>
            <p className="mt-8 text-lg md:text-xl text-gray-500 leading-relaxed max-w-xl">
              From strategy and design to development and optimization,
              we handle the complete digital experience so you can focus
              on scaling your business.
            </p>
            <div className="mt-10 flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <p className="font-bold">98%</p>
                  <p className="text-sm text-gray-500">Client Satisfaction</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <p className="font-bold">150+</p>
                  <p className="text-sm text-gray-500">Projects Delivered</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="overflow-hidden mt-10 lg:mt-0">
            <div className="flex flex-col gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-[40px] border border-black/5 p-8 relative shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{service.icon}</span>
                      <h3 className="text-3xl font-bold max-w-[280px]">
                        {service.title}
                      </h3>
                    </div>
                    <button className="w-14 h-14 rounded-full border flex items-center justify-center hover:bg-amber-600 hover:text-white hover:border-amber-600 transition">
                      <ArrowRight />
                    </button>
                  </div>
                  <p className="mt-6 text-gray-500 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full border border-black/10 text-sm hover:bg-amber-50 transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}