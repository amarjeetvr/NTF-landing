import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NFTCards from "./components/NFTCards";
import Footer from "./components/Footer";

export default function NFTLanding() {
  return (
    <div className="min-h-screen bg-[url('./assets/colors.png')] bg-cover bg-center text-gray-800">
      <div className="backdrop-blur-sm bg-opacity-40">
        <Navbar />
        <main>
          <Hero />
          <NFTCards />
        </main>
        <Footer />
      </div>
    </div>
  );
}
