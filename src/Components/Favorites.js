import React, { useState, useEffect } from "react";
import data from "../Data/favorites.json";
import { AiOutlinePlus } from "react-icons/ai";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    setFavorites(data);
  });
  return (
    <div>
      <div className="max-w-7xl mx-auto bg-white">
        <h3 className="text-sm font-semibold my-5 pl-5 pt-5  text-primary-gray-dark">
          Favorites
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-8 gap-y-0 ">
          {favorites.map((favorite) => (
            <a className="relative flex flex-col justify-center items-center gap-y-1 text-center border-b p-2 border-gray-100 cursor-pointer ">
              <img
                className="h-32 w-32 border border-gray-50 rounded"
                src={favorite.image}
                alt="product"
              />
              <p className="text-primary-home-purple text-sm font-semibold">
                {favorite.price}
              </p>
              <h3 className="font-semibold text-sm ">{favorite.title}</h3>
              <span className="text-primary-gray-dark text-sm ">
                {favorite.alt}
              </span>
              <button className="w-8 h-8 border border-gray-300 rounded shadow bg-white flex items-center justify-center absolute top-2.5 right-2.5 z-20">
                <AiOutlinePlus className="text-primary-home-purple" />
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
