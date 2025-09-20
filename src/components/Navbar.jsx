import React, { useState, useEffect } from "react";
import Logo from "../assets/star.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Marketplace", href: "#marketplace" },
  { label: "Artist", href: "#artist" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`w-full sticky top-0 z-40 transition-colors duration-300 ${scrolled ? 'backdrop-blur-sm/80 shadow-[0_2px_6px_rgba(0,0,0,0.04)]' : ''}`} id="home">
      <div className="w-full bg-[var(--bg-main)]/92 border-b border-[rgba(0,0,0,0.06)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between py-4 gap-6">
        {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-md bg-white flex items-center justify-center shadow ring-1 ring-black/5">
                <img src={Logo} alt="logo" className="w-8 h-8" />
              </div>
              <span className="text-lg font-semibold tracking-wide text-[var(--accent-strong)]">NFT Studio</span>
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center text-sm gap-9">
              {navItems.map(i => (
                <a key={i.label} href={i.href} className="relative px-1 py-1 font-medium tracking-wide text-[var(--accent-dark)] hover:text-[var(--accent-strong)] transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-[var(--accent-dark)] hover:after:w-full after:transition-all">
                  {i.label}
                </a>
              ))}
              <div className="flex items-center gap-6 pl-6 ml-2 border-l border-[rgba(0,0,0,0.12)]">
                <button className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition focus:outline-none focus:ring-2 focus:ring-black/40">Sign up</button>
                <a href="#login" className="text-sm font-medium text-[var(--accent-dark)] hover:text-[var(--accent-strong)] transition-colors">Login</a>
              </div>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(o => !o)}
              aria-label="Menu"
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-[rgba(0,0,0,0.15)] bg-white/75 backdrop-blur hover:bg-white transition active:scale-95"
            >
              <span className="relative block w-6 h-4">
                <span className={`absolute left-0 top-0 h-0.5 w-full bg-[var(--accent-strong)] transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`}></span>
                <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-full bg-[var(--accent-strong)] transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute left-0 bottom-0 h-0.5 w-full bg-[var(--accent-strong)] transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`}></span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div className={`lg:hidden transition-[max-height,opacity] duration-300 ease overflow-hidden ${open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 md:px-8 pb-5">
          <div className="mt-1 rounded-xl border border-[rgba(0,0,0,0.12)] bg-[var(--bg-main)]/97 backdrop-blur-sm shadow-sm px-6 py-6 flex flex-col gap-4">
            <ul className="flex flex-col gap-3">
              {navItems.map(i => (
                <li key={i.label}>
                  <a
                    href={i.href}
                    onClick={() => setOpen(false)}
                    className="block py-1 text-[var(--accent-dark)] font-medium tracking-wide hover:text-[var(--accent-strong)]"
                  >
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-2 flex items-center gap-5">
              <button className="flex-1 px-5 py-3 rounded-full bg-black text-white text-sm font-semibold shadow-md hover:shadow-lg active:scale-[0.97] transition focus:outline-none focus:ring-2 focus:ring-black/40">Sign up</button>
              <a href="#login" className="text-sm font-medium text-[var(--accent-dark)] hover:text-[var(--accent-strong)] transition-colors">Login</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
