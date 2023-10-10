import React from "react";
import { sections } from "../components/Section";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between bg-[#2623294D] px-12 py-6">
      <a href={`#${sections.hero.id}`} className="text-[28px]">
        Logo
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
  );
};

export default Navbar;
