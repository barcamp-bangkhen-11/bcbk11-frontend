import React, { useState } from "react";
import Section from "../components/Section";
import Flare from "../components/Flare";

import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

const Question = () => {
  const [openQuestion, setOpenQuestion] = useState<string[]>([]);

  const data = [
    {
      question: "How many topics will be chosen for each session?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quod fugit repudiandae tenetur! Alias porro sunt cum nostrum, iusto voluptatum. Eos quam, fuga aliquam tempore labore voluptates. Quod, iusto ullam!",
    },
    {
      question: "How to travel to the event venue?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolore vel quia deleniti neque fuga, nisi accusantium deserunt tenetur modi atque totam ratione exercitationem. Doloremque illum aliquam quam in numquam.",
    },
    {
      question: "Are there any parking spots available around the venue?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sapiente amet, in aliquam maxime animi possimus numquam hic nam unde laudantium odit enim ipsa ad optio eos itaque nulla delectus?",
    },
  ];

  return (
    <div className={inter.className}>
      <Section id="questions">
        <Flare positionX="right" positionY="bottom" />
        <h1 className="pb-[6vh] pl-[10vw] text-mobile-h1 font-normal text-white md:pl-10 lg:w-full lg:pl-[10vw] lg:text-desktop-h1">
          Q&A
        </h1>
        <div className="flex flex-col gap-[36px]">
          {data.map((item) => (
            <div
              key={item.question}
              className="flex flex-col divide-y-2 divide-white/[.36] pl-[10vw] pr-[10vw]"
            >
              <div
                className="flex cursor-pointer flex-row items-center pb-[24px] align-middle"
                onClick={() => {
                  if (openQuestion.includes(item.question)) {
                    setOpenQuestion(
                      openQuestion.filter((q) => q !== item.question),
                    );
                  } else {
                    setOpenQuestion([...openQuestion, item.question]);
                  }
                }}
              >
                <Image
                  className={`h-[32px] w-[32px] transition duration-150 ease-in-out focus:-rotate-180 ${
                    openQuestion.includes(item.question)
                      ? "rotate-180"
                      : "rotate-0"
                  }`}
                  src={"/images/QAndADropdown.svg"}
                  alt="Q&A Dropdown"
                  width={32}
                  height={32}
                />
                <h4 className="pl-5 text-mobile-h4 font-normal text-white lg:w-full lg:text-desktop-h4">
                  {item.question}
                </h4>
              </div>
              <p className="pt-[24px] text-mobile-body font-normal">
                {openQuestion.includes(item.question) ? item.answer : ""}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Question;
