"use client";

const testimonials = [
  {
    quote: "Booked online in two minutes, picked up the same afternoon. The car was spotless and the whole process felt effortless. Will never use another rental company.",
    name: "Tariro M.",
    location: "Harare",
    rating: 5,
  },
  {
    quote: "Drove from Harare to Victoria Falls and back. Not a single issue. Roadside support picked up immediately when I had a tyre concern. Genuinely impressive service.",
    name: "James K.",
    location: "Bulawayo",
    rating: 5,
  },
  {
    quote: "The Land Cruiser was perfect for our family trip. Spacious, clean, and exactly as described. Pricing was transparent — no nasty surprises at checkout.",
    name: "Chiedza N.",
    location: "Mutare",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#b0b0b0] px-12 py-28 max-md:px-6 max-md:py-20 relative overflow-hidden">

      {/* Large ghost quote mark */}
      <div className="absolute top-8 left-8 font-syne text-[20rem] leading-none font-extrabold text-white/10 pointer-events-none select-none">
        "
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-[0.68rem] font-medium tracking-[0.28em] uppercase text-[#1a1a1a]/50 mb-3">
            Testimonials
          </p>
          <h2 className="font-syne text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold tracking-tight leading-[1.05] text-[#1a1a1a]">
            Don&apos;t Take <span className="text-white">Our Word</span> For It
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]/10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#b0b0b0] p-10 flex flex-col gap-8 hover:bg-[#a8a8a8] transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <span key={s} className="text-[#1a1a1a] text-md">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[0.9rem] font-semibold leading-[1.85] text-[#1a1a1a]/80 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#1a1a1a]/10">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a]/15 flex items-center justify-center font-syne font-bold text-[0.85rem] text-[#1a1a1a] flex-shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <span className="font-syne text-[0.88rem] font-bold text-[#1a1a1a] block">
                    {t.name}
                  </span>
                  <span className="text-[0.65rem] tracking-[0.15em] uppercase text-[#1a1a1a]/80">
                    {t.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat bar */}
        <div className="grid grid-cols-2 mt-px bg-[#1a1a1a]/10">
          {[
            { num: "140+", label: "Happy Customers" },
            { num: "98%", label: "Would Recommend" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#b0b0b0] px-10 py-7 flex items-center gap-5 max-md:flex-col max-md:items-start max-md:gap-1">
              <span className="font-syne text-[2rem] font-extrabold text-[#1a1a1a] leading-none">
                {stat.num}
              </span>
              <span className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-[#1a1a1a]/50">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
