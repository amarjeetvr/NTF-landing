import React from "react";
import { motion } from "framer-motion";
import Bear from "../assets/beer.png";
import Lion from "../assets/Lion.png";
import Cat from "../assets/Cat.png";
import Hand from "../assets/hand.png";
import Stone from "../assets/stone.png";
import Barcode from "../assets/Barcode.png";
import PreviewCard from "./PreviewCard";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6 },
  }),
};

const float = {
  animate: { y: [0, -12, 0], rotate: [0, 2, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 md:px-12 py-16 bg-cream">
      <div className="hero-decor"></div>
      <div className="hero-container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left: Heading + intro + previews */}
        <div className="w-full md:w-1/2">
          <h1 className="hero-title font-extrabold leading-tight tracking-tight">
            <span className="block text-3xl font-script italic text-[color:var(--muted-1)]">Unlock</span>
            <span className="block display-gradient font-script">The Digital</span>
            <span className="block display-gradient font-script">Renaissance</span>
          </h1>

          <p className="mt-6 text-gray-700 max-w-xl text-lg">
            Join the revolution, embrace the digital revolution, and become a part of the ever-evolving NFT ecosystem.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <button className="btn-marbled">Start</button>
            <a href="#cards" className="text-sm text-gray-600">Explore NFTs</a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <PreviewCard img={Bear} title="Bear" artist="by Andrew Garf" price="$40" />
            <PreviewCard img={Lion} title="Lion" artist="by Jen Stark" price="$80" />
            <PreviewCard img={Cat} title="Cats" artist="by Casey Reas" price="$120" />
          </div>
        </div>

        {/* Right: Decorative composition */}
        <div className="w-full md:w-1/2 relative flex justify-center md:justify-end items-center">
          <div className="relative">
            <img src={Hand} alt="hand" className="w-80 md:w-96 drop-shadow-2xl transform rotate-45" />
            
            {/* Stone positioned on top of the hand */}
            <img src={Stone} alt="stone" className="absolute -top-12 md:-top-16 left-8 md:left-12 w-44 md:w-56 z-30 animate-float" />
            
            {/* Barcode positioned on the hand/wrist area */}
            <div className="absolute bottom-4 right-4 md:bottom-12 md:right-8 barcode-container w-48 md:w-64">
              <img src={Barcode} alt="barcode" className="barcode-image" />
              <div className="barcode-numbers">
                <span className="group">0</span>
                <span className="group">712345</span>
                <span className="group">3256</span>
                <span className="group">67893255</span>
                <span className="group">678900</span>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-12 hidden lg:block">
            <div className="watermark-vertical">MILESTYLV3</div>
          </div>
        </div>
      </div>
    </section>
  );
}
