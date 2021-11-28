import React, { useState, useEffect } from "react";
import data from "../Data/categories.json";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(data);
  });
  return (
    <div>
      <div className="max-w-7xl mx-auto bg-gray-100 md:bg-white">
        <h3 className="text-sm font-semibold my-5 pl-5 pt-5 text-primary-gray-dark">
          Categories
        </h3>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-y-10">
          {categories.map((category) => (
            <a
              key={category.id}
              className="flex flex-col justify-center items-center text-center gap-y-2 hover:bg-purple-100 cursor-pointer group p-3"
            >
              <img
                src={category.image}
                className="h-12 w-12 rounded border border-gray-200"
              />
              <span className="text-sm font-semibold text-primary-gray-dark tracking-tight group-hover:text-primary-home-purple">
                {category.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
