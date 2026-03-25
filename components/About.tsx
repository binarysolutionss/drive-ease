"use client";

const pillars = [
  {
    icon: "🛡️",
    title: "Fully Insured",
    desc: "Every vehicle comes with comprehensive cover. Drive with total peace of mind.",
  },
  {
    icon: "⚡",
    title: "Instant Booking",
    desc: "Reserve your car in under 2 minutes. Pick up same day, no paperwork queues.",
  },
  {
    icon: "🔧",
    title: "Always Serviced",
    desc: "Our fleet is inspected and serviced before every rental. No exceptions.",
  },
  {
    icon: "📞",
    title: "24/7 Support",
    desc: "Broke down at midnight? Our roadside team answers around the clock.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-[#1a1a1a] text-white py-28 px-12 overflow-hidden">

      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_70%_50%,rgba(176,176,176,0.06),transparent_60%)]" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center max-w-7xl mx-auto">

        {/* Left — copy */}
        <div>
          {/* Eyebrow */}
          <p className="flex items-center gap-3 text-lg font-medium tracking-[0.28em] uppercase text-[#888] mb-7">
            <span className="inline-block w-8 h-px bg-[#888] shrink-0" />
            Who We Are
          </p>

          {/* Heading */}
          <h2 className="font-syne text-[clamp(2.2rem,4vw,3.4rem)] font-extrabold leading-[1.05] tracking-tight mb-7">
            Built for the Road.{" "}
            <br />
            Built for{" "}
            <span className="text-[#b0b0b0]">You.</span>
          </h2>

          {/* Body */}
          <div className="text-[1rem] font-light leading-[1.85] text-white/50 mb-10 max-w-[48ch] space-y-4">
            <p>
              DriveEase was founded on a simple belief — renting a car should
              feel as good as driving one. Since 2012, we&apos;ve been putting
              customers behind the wheel of well-maintained, modern vehicles
              with no surprises at checkout.
            </p>
            <p>
              From quick city runs to cross-country adventures, our fleet and
              our people are ready. We&apos;re not just a rental company —
              we&apos;re your driving partner.
            </p>
          </div>

          {/* Link */}
          <a
            href="#"
            className="font-syne text-[0.85rem] font-bold tracking-widest uppercase text-white border-b border-white/30 pb-1 inline-flex items-center gap-2 hover:gap-4 hover:border-white transition-all duration-300 no-underline"
          >
            Meet the team
          </a>
        </div>

      </div>
    </section>
  );
}
