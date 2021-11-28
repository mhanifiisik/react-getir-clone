import React, { useState, useEffect } from "react";
import data from "../Data/cards.json";

function Cards() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(data);
  });
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-5 mt-10 pb-14 px-3 md:px-0">
      {cards.map((card) => (
        <div className="flex flex-col justify-center items-center text-center py-14 px-3  gap-y-3 mb-5 border shadow rounded bg-white">
          <img
            className="w-[150px] h-[150px] object-cover mb-4"
            src={card.image}
          />
          <h3 className="text-lg text-primary-home-purple font-semibold">
            {card.title}
          </h3>
          <p className="text-sm text-primary-gray-dark">{card.alt}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
