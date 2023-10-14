import React, { useState } from "react";
import Section from "../components/Section";
import Flare from "../components/Flare";

import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

const Question = () => {
  const [isRoatate, setIsRoatate] = useState(false);
  const [isRoatate2, setIsRoatate2] = useState(false);
  const [isRoatate3, setIsRoatate3] = useState(false);
  return (
    <div className={inter.className}>
      <Section id="questions">
        <Flare positionX="right" positionY="bottom" />
        <h1 className="pb-[6vh] pl-[10vw] text-mobile-h1 font-normal text-white md:pl-10 lg:w-full lg:pl-[10vw] lg:text-desktop-h1">
          Q&A
        </h1>
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col divide-y-2 divide-white/[.36] pl-[10vw] pr-[10vw]">
            <div className="item-center flex flex-row pb-[24px]">
              <Image
                className={`h-[32px] w-[32px] transition duration-150 ease-in-out focus:-rotate-180 ${
                  isRoatate ? "rotate-180" : "rotate-0"
                }`}
                src={"/images/QAndADropdown.svg"}
                alt="Q&A Dropdown"
                width={32}
                height={32}
                onClick={() => setIsRoatate(!isRoatate)}
              />
              <h2 className="pl-[8px] text-mobile-h4 font-normal text-white lg:w-full lg:text-desktop-h4">
                How many topics will be chosen for each session?
              </h2>
            </div>
            <h2 className="pt-[24px]">
              {isRoatate
                ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quod fugit repudiandae tenetur! Alias porro sunt cum nostrum, iusto voluptatum. Eos quam, fuga aliquam tempore labore voluptates. Quod, iusto ullam!"
                : ""}
            </h2>
          </div>
          {/* --------------------------------------------------------------- */}
          <div className="flex flex-col divide-y-2 divide-white/[.36] pl-[10vw] pr-[10vw]">
            <div className="item-center flex flex-row pb-[24px]">
              <Image
                className={`h-[32px] w-[32px] transition duration-150 ease-in-out focus:-rotate-180 ${
                  isRoatate2 ? "rotate-180" : "rotate-0"
                }`}
                src={"/images/QAndADropdown.svg"}
                alt="Q&A Dropdown"
                width={32}
                height={32}
                onClick={() => setIsRoatate2(!isRoatate2)}
              />
              <h2 className="pl-[8px] text-mobile-h4 font-normal text-white lg:w-full lg:text-desktop-h4">
                How to travel to the event venue?
              </h2>
            </div>
            <h2 className="pt-[24px]">
              {isRoatate2
                ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolore vel quia deleniti neque fuga, nisi accusantium deserunt tenetur modi atque totam ratione exercitationem. Doloremque illum aliquam quam in numquam."
                : ""}
            </h2>
          </div>
          {/* --------------------------------------------------------------- */}
          <div className="flex flex-col divide-y-2 divide-white/[.36] pl-[10vw] pr-[10vw]">
            <div className="item-center flex flex-row pb-[24px]">
              <Image
                className={`h-[32px] w-[32px] transition duration-150 ease-in-out focus:-rotate-180 ${
                  isRoatate3 ? "rotate-180" : "rotate-0"
                }`}
                src={"/images/QAndADropdown.svg"}
                alt="Q&A Dropdown"
                width={32}
                height={32}
                onClick={() => setIsRoatate3(!isRoatate3)}
              />
              <h2 className="pl-[8px] text-mobile-h4 font-normal text-white lg:w-full lg:text-desktop-h4">
                Are there any parking spots available around the venue?
              </h2>
            </div>
            <h2 className="pt-[24px] ">
              {isRoatate3
                ? "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sapiente amet, in aliquam maxime animi possimus numquam hic nam unde laudantium odit enim ipsa ad optio eos itaque nulla delectus?"
                : ""}
            </h2>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Question;
