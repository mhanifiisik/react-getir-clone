import React from "react";

const Mobile = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-primary-home-purple bg-mobile-app mt-5 rounded-xl flex flex-row justify-between items-center">
        <div className="flex flex-col gap-y-3 p-10">
          <h3 className="text-white text-2xl font-bold tracking-tight">
            Download Getir!
          </h3>
          <p className="text-white font-semibold tracking-normal">
            Let us deliver your order to your door in
            <br /> minutes.
          </p>
          <nav className="mt-5 flex flex-col md:flex-row gap-x-2">
            <a className="cursor-pointer w-36 p-1">
              <img
                src="https://getir.com/_next/static/images/huawei-appgallery-en-aed8ae3ea827fedc197b350496164d3f.svg"
                className="h-full w-full"
              />
            </a>
            <a className="cursor-pointer w-36 p-1">
              <img
                src="https://getir.com/_next/static/images/googleplay-en-46ff50211cf4b7b1c29309f3526af930.svg"
                className="h-full w-full"
              />
            </a>
            <a className="cursor-pointer w-36 p-1">
              <img
                src="https://getir.com/_next/static/images/appstore-en-c661eed8e5955c0a422054a9021698ce.svg"
                className="h-full w-full"
              />
            </a>
          </nav>
        </div>
        <picture className="hidden  lg:block pt-5">
          <img
            className="object-cover"
            src="https://getir.com/_next/static/images/phoneLandingEn-5e918947c1bcf3088c762a1b52c89c7d.png"
            className="w-full h-full"
          />
        </picture>
      </div>
    </div>
  );
};

export default Mobile;
