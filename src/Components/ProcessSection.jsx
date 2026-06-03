const steps = [
  {
    id: "01",
    title: "Research",
    text: "We understand your business, audience and goals through deep market analysis.",
    description: "User interviews, competitor analysis, and market research to identify opportunities."
  },
  {
    id: "02",
    title: "Planning",
    text: "Information architecture and user journeys mapped for optimal experience.",
    description: "Wireframing, prototyping, and strategic planning for seamless execution."
  },
  {
    id: "03",
    title: "Build",
    text: "Modern development with performance first approach and best practices.",
    description: "Agile development, continuous integration, and rigorous testing.",
    active: true,
  },
  {
    id: "04",
    title: "Launch",
    text: "Deploy, optimize and continuously improve based on real data.",
    description: "Performance monitoring, A/B testing, and ongoing optimization."
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="min-h-screen bg-[#f7f5f1] flex items-center py-24 lg:py-0">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <div className="inline-flex px-5 py-2 rounded-full border border-black/10 bg-white">
            HOW IT WORKS
          </div>
          <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight">
            A simple process.
            <br />
            Exceptional results.
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-gray-500 text-lg">
            Every project follows a clear framework that ensures quality, speed and consistency.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`
              rounded-[32px]
              p-8
              min-h-[320px]
              transition-all duration-500
              hover:-translate-y-2
              ${
                step.active
                  ? "bg-gradient-to-b from-amber-700 via-amber-600 to-amber-500 text-white shadow-2xl"
                  : "bg-white border border-[#ece3d4] hover:shadow-xl"
              }
            `}
            >
              <div className="flex justify-between">
                <span className="text-sm font-semibold tracking-widest">
                  STEP {step.id}
                </span>
                <span className="text-6xl font-black opacity-10">
                  {step.id}
                </span>
              </div>
              <h3 className="mt-10 text-2xl font-bold">
                {step.title}
              </h3>
              <p className="mt-4 leading-relaxed opacity-90">
                {step.text}
              </p>
              <p className="mt-3 text-sm leading-relaxed opacity-70">
                {step.description}
              </p>
              <div className="mt-6 inline-flex px-4 py-2 rounded-full border text-sm">
                Premium Workflow
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-amber-600 text-xl font-bold hover:translate-x-1 transition inline-flex items-center gap-2">
            Explore Our Process → 
          </button>
        </div>
      </div>
    </section>
  );
}