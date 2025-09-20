import React from "react";
import { motion } from "framer-motion";
import Bear from "../assets/beer.png";
import Lion from "../assets/Lion.png";
import Cat from "../assets/Cat.png";

export default function NFTCards() {
  const cards = [
    { img: Bear, title: "Bear", artist: "by Andrew Garf", price: "$40" },
    { img: Lion, title: "Lion", artist: "by Jen Stark", price: "$80" },
    { img: Cat, title: "Cats", artist: "by Casey Reas", price: "$120" },
  ];

  return (
    <section id="cards" className="py-16 px-6 md:px-12 bg-cream">
      <div className="hero-container mx-auto">
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-8">Explore Collections</motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all relative"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="w-full h-48 flex items-center justify-center">
                <img src={c.img} alt={c.title} className="max-h-40 object-contain" />
              </div>
              <div className="mt-6 text-center">
                <div className="font-semibold text-lg">{c.title}</div>
                <div className="text-sm text-gray-500">{c.artist}</div>
              </div>
              <div className="mt-6 flex justify-center">
                <div className="pedestal-base">
                  <div className="price-pill">{c.price}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
