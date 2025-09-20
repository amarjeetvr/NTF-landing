import React from "react";

export default function PreviewCard({ img, title, artist, price }) {
  return (
    <div className="bg-white rounded-3xl p-4 flex flex-col items-center text-center shadow hover:shadow-2xl transform hover:-translate-y-2 transition-all relative">
      <div className="w-full flex justify-center mt-2">
        <img src={img} alt={title} className="w-28 h-28 object-contain" />
      </div>
      <div className="mt-3 text-sm font-semibold">{title}</div>
      <div className="text-xs text-gray-500">{artist}</div>

      <div className="mt-6 w-full flex justify-center">
        <div className="pedestal-base w-4/5 flex items-center justify-center">
          <div className="price-pill">{price}</div>
        </div>
      </div>
    </div>
  );
}
