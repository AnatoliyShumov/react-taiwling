import React from 'react';
import JacketImage from "./assets/images/jacket.svg";
import BackgroundImage from "./assets/images/background-image.svg";

const items = [
  {
    type: 'CLOTHING',
    title: 'FIRE JACKET',
    image: JacketImage,
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    type: 'ARMOR',
    title: 'BIG GRIN',
    image: JacketImage,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    type: 'WEAPON',
    title: 'TEMPERED MP5',
    image: JacketImage,
    gradient: 'from-indigo-500 to-violet-500'
  },
  {
    type: 'WEAPON',
    title: 'DESERT HUNTER',
    image: JacketImage,
    gradient: 'from-yellow-400 to-amber-500'
  },
  {
    type: 'MISC',
    title: "GRANDMOTHER'S GIFT",
    image: JacketImage,
    gradient: 'from-cyan-400 to-blue-500'
  },
  {
    type: 'ARMOR',
    title: 'GLOWING SKULL',
    image: JacketImage,
    gradient: 'from-green-400 to-emerald-500'
  },
  {
    type: 'WEAPON',
    title: 'BANANA EOKA',
    image: JacketImage,
    gradient: 'from-yellow-300 to-lime-400'
  },
  {
    type: 'CZ75-AUTO',
    title: 'HOT-TEMPERED LONGSWORD',
    image: JacketImage,
    gradient: 'from-rose-500 to-red-600'
  }
];

export default function ItemGrid() {
  return (
    <div
      className="min-h-screen bg-[#0f0f11] text-white p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-yellow-300 text-sm uppercase tracking-widest">Text for heading</h2>
        <button className="text-yellow-300 text-xs uppercase">Hide ^</button>
      </div>

      <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[calc(100vh-100px)] min-h-0">
        {/* FIRE JACKET (2x2) */}
        <div className="col-span-2 row-span-2 bg-white/5 backdrop-blur-md border border-white/10 p-4 flex flex-col h-full min-h-0 rounded">
          <span className="text-gray-400 text-sm">{items[0].type}</span>
          <h3 className="text-2xl font-bold mb-2">{items[0].title}</h3>
          <div className="flex-1 flex items-center justify-center">
            <img src={items[0].image} alt={items[0].title} className="max-h-full max-w-full object-contain" />
          </div>
          <div className={`h-1 w-full mt-2 bg-gradient-to-r rounded ${items[0].gradient}`} />
        </div>

        {/* Top 4 cards (2x2 grid on the right) */}
        {items.slice(1, 5).map((item, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-4 flex flex-col h-full min-h-0 rounded">
            <span className="text-gray-400 text-sm">{item.type}</span>
            <h3 className="text-lg font-semibold mb-2 leading-snug">{item.title}</h3>
            <div className="flex-1 flex items-center justify-center max-h-[140px]">
              <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain" />
            </div>
            <div className={`h-1 w-full mt-2 bg-gradient-to-r rounded ${items[0].gradient}`} />
          </div>
        ))}

        {/* Bottom left 2 small cards */}
        {items.slice(5, 7).map((item, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-4 flex flex-col h-full min-h-0 rounded">
            <span className="text-gray-400 text-sm">{item.type}</span>
            <h3 className="text-lg font-semibold mb-2 leading-snug">{item.title}</h3>
            <div className="flex-1 flex items-center justify-center">
              <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain max-h-[140px]" />
            </div>
            <div className={`h-1 w-full mt-2 bg-gradient-to-r rounded ${item.gradient}`} />
          </div>
        ))}

        {/* Bottom right 1 card */}
        <div className="col-span-2 bg-white/5 backdrop-blur-md border border-white/10 p-4 flex flex-col h-full min-h-0 rounded">
          <span className="text-gray-400 text-sm">{items[7].type}</span>
          <h3 className="text-lg font-semibold mb-2 leading-snug">{items[7].title}</h3>
          <div className="flex-1 flex items-center justify-center">
            <img src={items[7].image} alt={items[7].title} className="max-h-full max-w-full object-contain max-h-[140px]" />
          </div>
          <div className={`h-1 w-full mt-2 bg-gradient-to-r rounded ${items[7].gradient}`} />
        </div>
      </div>
    </div>
  );
}