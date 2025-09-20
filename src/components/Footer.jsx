import React from "react";

export default function Footer() {
  const links = ["Join the Revolution", "Future is Here", "NFT World", "Rule the Game", "We Are NFT"];
  
  return (
    <footer className="bottom-strip py-6 px-6 md:px-12 bg-gradient-to-b from-[rgba(0,0,0,0.02)] to-[rgba(255,255,255,0)] border-t border-[rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center md:justify-between gap-8 flex-wrap">
          {links.map((link, i) => (
            <React.Fragment key={i}>
              <a 
                href="#" 
                className="text-sm font-medium text-[var(--accent-dark)] hover:text-[var(--accent-strong)] transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute left-0 bottom-[-4px] h-0.5 w-0 bg-[var(--accent-dark)] transition-all duration-300 group-hover:w-full"></span>
              </a>
              {i < links.length - 1 && (
                <div className="hidden md:block w-8 h-8 opacity-20">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[var(--accent-dark)]">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}
