import React, { useState, useEffect } from "react";
import data from "../Data/footerdata.json";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { CgArrowDownR } from "react-icons/cg";
import { Collapse } from "react-collapse";
import { useWindowWidth } from "@react-hook/window-size";

function Footer() {
  const [links, setLinks] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const windowWidth = useWindowWidth();

  const menutoggle = () => {
    if (windowWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };
  useEffect(() => {
    setLinks(data);
    console.log("the width of windows is:", windowWidth);
    if (isOpen && windowWidth <= 768) {
      setIsOpen(false);
    }
    if (!isOpen && windowWidth > 768) {
      setIsOpen(true);
    }
  }, [windowWidth]);
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-col pt-12 px-5">
        <div className="grid grid-cols-1 gap-y-5 md:grid-cols-5 pb-10">
          <div className="flex flex-col gap-y-2">
            <h3 className="text-primary-home-purple">Download Getir!</h3>
            <nav className="flex flex-col gap-y-2">
              <a className="cursor-pointer w-36">
                <img
                  className="object-cover w-full h-full"
                  src="https://getir.com/_next/static/images/huawei-appgallery-en-aed8ae3ea827fedc197b350496164d3f.svg"
                />
              </a>
              <a className="cursor-pointer w-36">
                <img
                  className="object-cover w-full h-full"
                  src="https://getir.com/_next/static/images/googleplay-en-46ff50211cf4b7b1c29309f3526af930.svg"
                />
              </a>
              <a className="cursor-pointer w-36">
                <img
                  className="object-cover w-full h-full"
                  src="https://getir.com/_next/static/images/appstore-en-c661eed8e5955c0a422054a9021698ce.svg"
                />
              </a>
            </nav>
          </div>
          {links.map((links) => (
            <article className="flex flex-col gap-y-2 ">
              <h3
                onClick={menutoggle}
                className=" flex flex-row justify-between items-center text-primary-home-purple"
              >
                {links.title}
                <CgArrowDownR
                  className="md:hidden text-primary-home-purple cursor-pointer"
                  size={20}
                />
              </h3>
              <Collapse isOpened={isOpen}>
                <nav className="flex flex-col gap-y-4">
                  {links.subtitles.map((subtitle) => (
                    <a className="text-sm cursor-pointer ">
                      {subtitle.subtitle}
                    </a>
                  ))}
                </nav>
              </Collapse>
            </article>
          ))}

          <img
            className="object-fit hidden md:blcok w-24 h-24 rounded border p-2"
            src="https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png"
            alt="qr"
          />
        </div>
        <div className="flex flex-col gap-y-3 md:flex-row justify-between items-center border-t border-gray-300 py-5">
          <div className="flex flex-col gap-y-2 md:flex-row gap-x-10 justify-center items-center text-sm">
            <p>© 2021 Getir</p>
            <a className="md:list-item text-primary-home-purple">
              Information Society Services
            </a>
          </div>
          <nav className="flex flex-row gap-x-3 justify-center items-center">
            <a className="cursor-pointer">
              <FaFacebook className="text-gray-500 text-2xl hover:text-primary-purple" />
            </a>
            <a className="cursor-pointer">
              <FaTwitter className="text-gray-500 text-2xl hover:text-primary-purple" />
            </a>
            <a className="cursor-pointer">
              <FaInstagram className="text-gray-500 text-2xl hover:text-primary-purple" />
            </a>
            <a className="flex flex-row justify-center items-center border border-gray-300 shadow p-1 gap-x-2 hover:bg-purple-200">
              <RiGlobalLine className="text-gray-500 text-2xl" />
              English (EN)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
