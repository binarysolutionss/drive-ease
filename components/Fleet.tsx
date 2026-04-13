"use client";

const fleet = [
  {
    name: "Tesla Model 3",
    category: "Electric",
    seats: 5,
    transmission: "Auto",
    price: "$45",
    tag: "Most Popular",
    tagColor: "bg-white text-[#1a1a1a]",
    emoji: "⚡",
  },
  {
    name: "Toyota Land Cruiser",
    category: "SUV",
    seats: 7,
    transmission: "Auto",
    price: "$85",
    tag: "Best for Trips",
    tagColor: "bg-[rgba(255,255,255,0.1)] text-white/60",
    emoji: "🚙",
  },
  {
    name: "BMW 3 Series",
    category: "Luxury",
    seats: 5,
    transmission: "Auto",
    price: "$95",
    tag: "Premium",
    tagColor: "bg-[rgba(255,255,255,0.1)] text-white/60",
    emoji: "🏎️",
  },
  {
    name: "Toyota Hiace",
    category: "Van",
    seats: 14,
    transmission: "Manual",
    price: "$110",
    tag: "Group Travel",
    tagColor: "bg-[rgba(255,255,255,0.1)] text-white/60",
    emoji: "🚐",
  },
];

export default function Fleet() {
  return (
    <section className="bg-[#111] px-12 py-28 max-md:px-6 max-md:py-20">

      {/* Header */}
      <div className="flex justify-between items-end mb-16 max-md:flex-col max-md:items-start max-md:gap-4">
        <div>
          <p className="text-[0.68rem] font-medium tracking-[0.28em] uppercase text-[#b0b0b0] mb-3">
            Our Fleet
          </p>
          <h2 className="font-syne text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold tracking-tight leading-[1.05] text-white">
            Pick Your <span className="text-[#b0b0b0]">Ride</span>
          </h2>
        </div>
        <a
          href="#"
          className="font-syne text-[0.75rem] font-bold tracking-widest uppercase text-[#b0b0b0] border border-white/15 px-6 py-3 hover:border-white/40 hover:text-white transition-all duration-200 no-underline whitespace-nowrap"
        >
          View Full Fleet →
        </a>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
        {fleet.map((car) => (
          <div
            key={car.name}
            className="bg-[#111] p-8 flex flex-col gap-6 group hover:bg-[#1a1a1a] transition-colors duration-300"
          >
            {/* Emoji + tag */}
            <div className="flex justify-between items-start">
              <span className="text-4xl">{car.emoji}</span>
              <span className={`text-[0.58rem] font-medium tracking-[0.15em] uppercase px-3 py-1.5 rounded-sm ${car.tagColor}`}>
                {car.tag}
              </span>
            </div>

            {/* Name */}
            <div>
              <p className="text-[0.62rem] font-medium tracking-[0.22em] uppercase text-white/30 mb-1">
                {car.category}
              </p>
              <h3 className="font-syne text-[1.2rem] font-bold text-white leading-tight">
                {car.name}
              </h3>
            </div>

            {/* Specs */}
            <div className="flex gap-4 border-t border-white/[0.06] pt-5">
              <div>
                <span className="text-[0.58rem] tracking-[0.18em] uppercase text-white/25 block mb-0.5">Seats</span>
                <span className="font-syne text-[0.85rem] font-semibold text-white/70">{car.seats}</span>
              </div>
              <div className="w-px bg-white/[0.06]" />
              <div>
                <span className="text-[0.58rem] tracking-[0.18em] uppercase text-white/25 block mb-0.5">Trans.</span>
                <span className="font-syne text-[0.85rem] font-semibold text-white/70">{car.transmission}</span>
              </div>
            </div>

            {/* Price + CTA */}
            <div className="flex justify-between items-center mt-auto pt-5 border-t border-white/[0.06]">
              <div>
                <span className="font-syne text-[1.5rem] font-extrabold text-white leading-none">{car.price}</span>
                <span className="text-[0.6rem] text-white/30 tracking-wide"> /day</span>
              </div>
              <a
                href="#"
                className="font-syne text-[0.68rem] font-bold tracking-wider uppercase bg-white text-[#1a1a1a] px-4 py-2.5 rounded-full hover:bg-[#e8e8e8] transition-colors no-underline opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                Book
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
