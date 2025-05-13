import React from 'react';
import JacketImage from "./assets/images/jacket.svg";

const items = [
  {
    type: 'CLOTHING',
    title: 'FIRE JACKET',
    image: JacketImage
  },
  {
    type: 'ARMOR',
    title: 'BIG GRIN',
    image: JacketImage
  },
  {
    type: 'WEAPON',
    title: 'TEMPERED MP5',
    image: JacketImage
  },
  {
    type: 'WEAPON',
    title: 'DESERT HUNTER',
    image: JacketImage
  },
  {
    type: 'MISC',
    title: "GRANDMOTHER'S GIFT BARRICADE",
    image: JacketImage
  },
  {
    type: 'ARMOR',
    title: 'GLOWING SKULL',
    image: JacketImage
  },
  {
    type: 'WEAPON',
    title: 'BANANA EOKA',
    image: JacketImage
  },
  {
    type: 'CZ75-AUTO',
    title: 'HOT-TEMPERED LONGSWORD',
    image: JacketImage
  }
];

export default function ItemGrid() {
  return (
    <div className="min-h-screen bg-[#0f0f11] text-white p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-yellow-300 text-sm uppercase tracking-widest">Text for heading</h2>
        <button className="text-yellow-300 text-xs uppercase">Hide ^</button>
      </div>

      <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[calc(100vh-100px)] min-h-0">
        {/* FIRE JACKET (2x2) */}
        <div className="col-span-2 row-span-2 bg-[#1a1a1d] p-4 flex flex-col h-full min-h-0">
          <span className="text-gray-400 text-sm">{items[0].type}</span>
          <h3 className="text-2xl font-bold mb-2">{items[0].title}</h3>
          <div className="flex-1 flex items-center justify-center ">
            <img src={items[0].image} alt={items[0].title} className="max-h-full max-w-full object-contain" />
          </div>
        </div>

        {/* Top 4 cards (2x2 grid on the right) */}
        {items.slice(1, 5).map((item, i) => (
          <div key={i} className="bg-[#1a1a1d] p-4 flex flex-col h-full min-h-0">
            <span className="text-gray-400 text-sm">{item.type}</span>
            <h3 className="text-lg font-semibold mb-2 leading-snug">{item.title}</h3>
            <div className="flex-1 flex items-center justify-center max-h-[180px]">
              <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain" />
            </div>
          </div>
        ))}

        {/* Bottom left 2 small cards */}
        {items.slice(5, 7).map((item, i) => (
          <div key={i} className="bg-[#1a1a1d] p-4 flex flex-col h-full min-h-0">
            <span className="text-gray-400 text-sm">{item.type}</span>
            <h3 className="text-lg font-semibold mb-2 leading-snug">{item.title}</h3>
            <div className="flex-1 flex items-center justify-center">
              <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain max-h-[180px]" />
            </div>
          </div>
        ))}

        {/* Bottom right 1 card */}
        <div className="col-span-2 bg-[#1a1a1d] p-4 flex flex-col h-full min-h-0">
          <span className="text-gray-400 text-sm">{items[7].type}</span>
          <h3 className="text-lg font-semibold mb-2 leading-snug">{items[7].title}</h3>
          <div className="flex-1 flex items-center justify-center">
            <img src={items[7].image} alt={items[7].title} className="max-h-full max-w-full object-contain max-h-[180px]" />
          </div>
        </div>
      </div>
    </div>
  );
}