"use client";

const links = {
  Company: ["About Us", "Careers", "Press", "Blog"],
  Services: ["Fleet", "Locations", "Corporate", "Deals"],
  Support: ["FAQ", "Contact Us", "Terms", "Privacy"],
};

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] px-12 pt-20 pb-8 max-md:px-6">

      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-16 mb-16 max-md:gap-10">

        {/* Brand col */}
        <div>
          <a href="#" className="flex items-center gap-2.5 no-underline mb-6">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 17H3V13L5.5 7H18.5L21 13V17H19M5 17C5 18.1 5.9 19 7 19C8.1 19 9 18.1 9 17M5 17C5 15.9 5.9 15 7 15C8.1 15 9 15.9 9 17M19 17C19 18.1 18.1 19 17 19C15.9 19 15 18.1 15 17M19 17C19 15.9 18.1 15 17 15C15.9 15 15 15.9 15 17M9 17H15"
                  stroke="#1a1a1a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="font-syne text-[1.2rem] font-extrabold tracking-tight text-white">
              Drive<span className="text-white/40 font-normal">Ease</span>
            </span>
          </a>
          <p className="text-[0.85rem] font-light leading-[1.8] text-white max-w-[30ch] mb-8">
            Premium car rentals across Zimbabwe. Transparent pricing, modern fleet, zero hassle.
          </p>
          {/* Social icons */}
          <div className="flex gap-3">
            {["𝕏", "in", "f", "ig"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-[0.75rem] text-white/60 hover:border-white/30 hover:text-white transition-all no-underline rounded-sm"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Link cols */}
        {Object.entries(links).map(([heading, items]) => (
          <div key={heading}>
            <p className="font-syne text-[0.68rem] font-bold tracking-[0.22em] text-pink-500 mb-6">
              {heading}
            </p>
            <ul className="flex flex-col gap-3.5 list-none">
              {items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[0.85rem] font-light text-white/50 hover:text-white transition-colors no-underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-center pt-8 border-t border-white/[0.06] max-md:flex-col max-md:gap-4 max-md:items-start">
        <p className="text-md font-light tracking-wide text-white/25">
          © 2025 DriveEase Zimbabwe. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-md font-light tracking-wide text-white/25">
            Website by 
            <span className="text-pink-500"> Binary Solutions</span>
          </span>
        </div>
      </div>

    </footer>
  );
}
