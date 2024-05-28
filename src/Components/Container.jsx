import React, { useState } from 'react';
import Card from './Card';

const cardImages = [
  {
    id: 1,
    imageurl: "/Frame 1.png",
    cname:"Skin care",
    description: "Desc",
  },
  {
    id: 2,
    imageurl: "/firm.png",
    cname:"Firm",
    description: "Desc",
  },
  {
    id: 3,
    imageurl: "/Group 2.png",
    cname:"Fast food resto",
    description: "Desc",
  },
  {
    id: 4,
    imageurl: "/Group 16.png",
    cname:"hotel",
    description: "Desc",
  },
  {
    id: 5,
    imageurl: "/profile1.png",
    cname:"Startup",
    description: "Desc",
  },
  {
    id: 6,
    imageurl: "/Group66.png",
    cname:"FinTech",
    description: "Desc",
  }
];

const Container = () => {
  const [filter, setFilter] = useState('All');

  const filteredCards = cardImages.filter(item => {
    if (filter === 'All') return true;
    if (filter === 'Sme') return item.id >= 1 && item.id <= 3;
    if (filter === 'Other') return item.id === 4 || item.id === 6;
    return false;
  });

  const cards = filteredCards.map(item => (
    <Card key={item.id} imageurl={item.imageurl} cname={item.cname} description={item.description} />
  ));

  return (
    <div className="flex gap-4">
      <div className="w-1/4 bg-white p-4">
        {/* Left container content */}
        <div id="sidebar" className="p-4 bg">
          <h1 className="text-1xl font-semibold mb-4">Filters</h1>
          <div className='flex m-1 flex-col text-[0.9rem] items-start text-[#767272] font-semibold'>
            <button
              className={`p-2 ${filter === 'All' ? 'text-black' : ''}`}
              onClick={() => setFilter('All')}
            >
              All
            </button>
            <button
              className={`p-2 ${filter === 'Sme' ? 'text-black' : ''}`}
              onClick={() => setFilter('Sme')}
            >
              Sme's
            </button>
            <button
              className={`p-2 ${filter === 'Other' ? 'text-black' : ''}`}
              onClick={() => setFilter('Other')}
            >
              Other
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-wrap w-3/4 bg-[#FAFAFA] p-4">
        {/* Right container content */}
        {cards}
      </div>
    </div>
  );
};

export default Container;