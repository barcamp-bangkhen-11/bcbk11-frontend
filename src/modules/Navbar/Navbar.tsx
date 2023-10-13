import React from "react";
import { sections } from "../components/Section";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <style jsx>{`
        .navbar {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
      `}</style>
      <div className="navbar fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between bg-[#2623294D] p-5 lg:px-12 lg:py-6">
        <a href={`#${sections.hero.id}`} className="text-[28px]">
          <Image
            src="/images/bcbk11_small_logo.png"
            alt="Barcamp Bangkhen"
            width={500}
            height={400}
            className="h-20 w-20  object-contain"
          />
        </a>
        <div className="hidden justify-between space-x-20 text-[28px] lg:flex ">
          {Object.values(sections)
            .slice(1)
            .map(({ id, title }) => (
              <a
                href={`#${id}`}
                key={id}
                className=" hover:text-gray-300 active:text-gray-400"
              >
                {title}
              </a>
            ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
