import React from "react";

const Promotions = () => {
  return (
    <div className="bg-gray-100 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-col gap-y-2">
        <h3 className="text-sm font-semibold my-5 text-primary-gray-dark">
          Promotions
        </h3>
        <div className="flex flex-row gap-x-5">
          <img
            className="w-[400px] h-52 rounded-xl object-cover"
            src="https://cdn.getir.com/misc/6069cee3f7be2b6472dc8b5f_banner_en_1629921894520.jpeg"
          />
          <img
            className="w-[400px] h-52 rounded-xl object-cover"
            src="https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_en_1629378034568.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default Promotions;
