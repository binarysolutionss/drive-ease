"use client";

export default function Hero() {
  return (
    <section className="relative h-dvh pt-[76px] lg:pt-[96px] flex items-end overflow-hidden bg-[#b0b0b0]">

      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        src="/Shining_Wizard.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(90,90,90,0.85) 0%, rgba(90,90,90,0.2) 5%, transparent 70%), linear-gradient(to right, rgba(80,80,80,0.5) 0%, transparent 55%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full px-12 pb-18 grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-8">

        {/* Left */}
        <div>
          {/* Kicker */}
          <p className="gap-2 text-lg font-medium tracking-[0.26em] uppercase text-black mb-5 animate-fade-up">
            <span className=" w-7 h-px bg-white/40" />
            Premium Car Rentals
          </p>

          {/* Title */}
          <h1 className="font-syne text-[clamp(3rem,7vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight text-black mb-7 animate-fade-up [animation-delay:150ms]">
            Drive On<br />
            <span className="[-webkit-text-stroke:1.5px_#ffffff] text-transparent">
              Your
            </span>
            <br />
            Terms
          </h1>

          {/* Subtitle */}
          <p className="text-[1.2rem] font-semibold leading-[1.7] text-black max-w-[46ch] mb-10 animate-fade-up [animation-delay:300ms]">
            Handpicked vehicles. Transparent pricing. Zero hidden fees.
            Whether it&apos;s a weekend trip or a long-haul journey —
            we&apos;ve got the perfect ride waiting.
          </p>

          {/* Booking bar */}
          <div className="flex flex-col sm:flex-row max-w-155 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden animate-fade-up [animation-delay:450ms]">
            {[
              { label: "Pick-up",  value: "Harare, ZW"   },
              { label: "From",     value: "Apr 02, 2025" },
              { label: "Until",    value: "Apr 07, 2025" },
            ].map((field, i) => (
              <div
                key={i}
                className="flex-1 px-5 py-4 border-b sm:border-b-0 sm:border-r border-white/15 last:border-0"
              >
                <span className="block text-sm font-medium tracking-[0.2em] uppercase text-black/75mb-1">
                  {field.label}
                </span>
                <span className="font-syne text-xl font-semibold text-black">
                  {field.value}
                </span>
              </div>
            ))}
            <button className="font-syne text-2xl font-bold tracking-wide bg-white text-[#1a1a1a] px-8 py-4 hover:bg-white/90 transition-colors whitespace-nowrap">
              Search →
            </button>
          </div>
        </div>

        {/* Right — stats (desktop only) */}
        <div className="hidden md:flex flex-col gap-6 text-right animate-fade-left">
          {[
            { num: "100+", desc: "Vehicles"  },
            { num: "9",   desc: "Locations" },
            { num: "4.9★", desc: "Rated"     },
          ].map((stat, i) => (
            <div key={i}>
              {i > 0 && <div className="h-px bg-white/15 w-full mb-6" />}
              <span className="font-syne block text-5xl font-extrabold text-white leading-none">
                {stat.num}
              </span>
              <span className="block text-2xl tracking-[0.14em] text-gray-800">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2">
        <span className="text-[0.55rem] tracking-[0.25em] uppercase text-white/40">Scroll</span>
        <div className="w-px h-10 bg-linear-to-b from-white/50 to-transparent animate-scroll-line" />
      </div>
    </section>
  );
}
