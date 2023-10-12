import React from "react";
import Section from "../components/Section";
import Flare from "../components/Flare";
import Image from "next/image";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const About = () => {
  return (
    <div className={inter.className}>
      <Section id="about">
        <h1 className="text-[60px] font-normal text-white md:pl-10 pl-[10vw] lg:pl-[10vw] lg:w-full lg:text-[84px]">
              What is BarCamp</h1>

        <div className="inline-flex flex-col items-start justify-start marker:gap-6 pl-10 pr-10 pt-10 md:pl-10 lg:p-4 lg:pl-[10vw] lg:pr-[10vw] w-full">
          {/* ------------------------------------------------ */}
          <div className="flex flex-col items-start justify-start lg:flex-row  min-h-fit lg:gap-16 " >
              <Image
                src="/images/MegaphoneSimple.svg"
                width={80}
                height={80}
                className="lg:mb-24 lg:ml-24 ml-0"
                alt="MegaphoneSimple Icon"
              />

            <div className="inline-flex max-w-fit flex-col items-start justify-start gap-4">
              <div className="text-5xl font-normal text-white">
                <h2 className="text-[30px] lg:text-[48px]">Vote to Listen.</h2>
              </div>
              <div className=" text-xl text-left font-normal text-rose-100 ">
                <p className="text-[16px] lg:h-[72px] lg:text-[20px] md:w-auto">
                  BarCamp is a conference where people exchange experiences and
                  stories, without a centric theme. Speakers are to present
                  their topics, while listeners are to vote for their
                  most-wanted topics.
                </p>
              </div>
            </div>
          </div>
          {/* ---------------------------------------------------------------- */}
          <div className="w-10 h-10"></div>
          <div className="flex flex-col items-start justify-start lg:flex-row lg:gap-16">
            <Image
              src="/images/ChatsCircle.svg"
              width={80}
              height={80}
              className="lg:mb-24 lg:ml-24 ml-0"
              alt="ChatsCircle Icon"
            />

            <div className="inline-flex max-w-fit flex-col items-start justify-start gap-4">
              <div className="text-5xl font-normal text-white">
                <h2 className="text-[30px] lg:text-[48px]">
                  Exchange Stories. Create New Vision.
                </h2>
              </div>
              <div className="text-xl text-left md:w-auto md:h-auto font-normal text-rose-100">
                <p className="text-[16px] lg:h-[72px] lg:text-[20px] md:w-auto">
                  BarCamp is where people gather to share their ideologies, and
                  with those ideas; new visions and innovations will come to
                  blossom into new projects.
                  <br />
                </p>
              </div>
            </div>
          </div>

          <div className="w-10 h-10"></div>

          <div className="flex flex-col  items-start justify-start lg:flex-row lg:gap-16">
            <Image
                src="/images/UsersThree.svg"
                width={80}
                height={80}
                className="lg:mb-24 lg:ml-24 ml-0"
                alt="UsersThree Icon"
              />

            <div className="inline-flex max-w-fit flex-col items-start justify-start gap-4">
              <div className="text-5xl font-normal text-white">
                <h2 className="text-[30px] lg:text-[48px]">
                  Different Thoughts. Different Thinking.
                </h2>
              </div>
              <div className="text-xl text-left font-normal text-rose-100 ">
                <p className="text-[16px] lg:h-[72px] lg:text-[20px] md:w-auto">
                  BarCamp is a place for people with diverse thoughts and
                  visionaries. We believed in our philosophy that within the
                  place and time, people will get to know and understand each
                  other.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;