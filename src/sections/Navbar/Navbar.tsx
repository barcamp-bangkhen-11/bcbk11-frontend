import React from "react";

export const sections = {
  home: "Home",
  about: "About",
  gallery: "Gallery",
  schedule: "Schedule",
  questions: "Q&A",
} as const;

export type Section = keyof typeof sections;

const Navbar = () => {
  return (
    <div className="flex h-20 items-center justify-between px-12 py-6">
      <a href={`#${Object.keys(sections)[0]}`} className="text-[28px]">
        Logo
      </a>
      <div className="flex justify-between space-x-16 text-[28px]">
        {Object.entries(sections)
          .slice(1)
          .map(([id, title]) => (
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
