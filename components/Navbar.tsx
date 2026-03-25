"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 h-18 bg-white/10 backdrop-blur-lg border-b border-white/10">

      {/* Logo */}
      <a href="#" className="flex items-center gap-2.5 no-underline">
        <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center shrink-0">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 17H3V13L5.5 7H18.5L21 13V17H19M5 17C5 18.1 5.9 19 7 19C8.1 19 9 18.1 9 17M5 17C5 15.9 5.9 15 7 15C8.1 15 9 15.9 9 17M19 17C19 18.1 18.1 19 17 19C15.9 19 15 18.1 15 17M19 17C19 15.9 18.1 15 17 15C15.9 15 15 15.9 15 17M9 17H15"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <span className="font-syne text-2xl font-extrabold tracking-tight text-black/60">
          Drive<span className="text-black font-normal">Ease</span>
        </span>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {["Fleet", "Locations", "Deals", "About"].map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-sm text-gray-700 hover:text-white transition-colors duration-200 no-underline"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#"
        className="hidden md:inline-block font-syne text-sm font-bold tracking-widest uppercase bg-white text-[#1a1a1a] px-6 py-2.5 rounded-full hover:bg-white/90 transition-all duration-200 hover:-translate-y-px no-underline"
      >
        Book Now
      </a>

      {/* Hamburger */}
      <button className="md:hidden flex flex-col gap-1.25 bg-transparent border-none cursor-pointer p-1">
        <span className="block w-8 h-0.5 bg-black rounded" />
        <span className="block w-8 h-0.5 bg-black/70 rounded" />
        <span className="block w-8 h-0.5 bg-black rounded" />
      </button>
    </nav>
  );
}
