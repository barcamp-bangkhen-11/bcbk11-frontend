import React from "react";
import Section from "../components/Section";
import Image from "next/image";

import { Inter } from "next/font/google";
import Flare from "../components/Flare";
const inter = Inter({ subsets: ["latin"] });

const About = () => {
  return (
    <div className={inter.className}>
      <Section id="about">
        <Flare positionX="center" positionY="center" />
        <h1 className="pl-[10vw] text-mobile-h1 font-normal text-white md:pl-10 lg:w-full lg:pl-[10vw] lg:text-desktop-h1">
          What is BarCamp
        </h1>

        <div className="inline-flex w-full flex-col items-start justify-start pl-10 pr-10 pt-10 marker:gap-6 md:pl-10 lg:p-4 lg:pl-[10vw] lg:pr-[10vw]">
          {/* ------------------------------------------------ */}
          <div className="flex min-h-fit flex-col items-start justify-start  lg:flex-row lg:gap-16 ">
            <Image
              src="/images/MegaphoneSimple.svg"
              width={80}
              height={80}
              className="ml-0 lg:mb-24 lg:ml-24"
              alt="MegaphoneSimple Icon"
            />

            <div className="inline-flex max-w-fit flex-col items-start justify-start gap-4">
              <div className="text-5xl font-normal text-white">
                <h2 className="text-mobile-h1 lg:text-desktop-h3">
                  Vote to Listen.
                </h2>
              </div>
              <div className=" text-xl text-left font-normal text-rose-100 ">
                <p className="text-mobile-body md:w-auto lg:h-[72px] lg:text-[20px]">
                  BarCamp is a conference where people exchange experiences and
                  stories, without a centric theme. Speakers are to present
                  their topics, while listeners are to vote for their
                  most-wanted topics.
                </p>
              </div>
            </div>
          </div>
          {/* ---------------------------------------------------------------- */}
          <div className="h-10 w-10"></div>
          <div className="flex flex-col items-start justify-start lg:flex-row lg:gap-16">
            <Image
              src="/images/ChatsCircle.svg"
              width={80}
              height={80}
              className="ml-0 lg:mb-24 lg:ml-24"
              alt="ChatsCircle Icon"
            />

            <div className="inline-flex max-w-fit flex-col items-start justify-start gap-4">
              <div className="text-5xl font-normal text-white">
                <h2 className="text-mobile-h1 lg:text-desktop-h3">
                  Exchange Stories. Create New Vision.
                </h2>
              </div>
              <div className="text-xl text-left font-normal text-rose-100 md:h-auto md:w-auto">
                <p className="text-mobile-body md:w-auto lg:h-[72px] lg:text-[20px]">
                  BarCamp is where people gather to share their ideologies, and
                  with those ideas; new visions and innovations will come to
                  blossom into new projects.
                  <br />
                </p>
              </div>
            </div>
          </div>
          {/* ---------------------------------------------------------------- */}
          <div className="h-10 w-10"></div>
          <div className="flex flex-col  items-start justify-start lg:flex-row lg:gap-16">
            <Image
              src="/images/UsersThree.svg"
              width={80}
              height={80}
              className="ml-0 lg:mb-24 lg:ml-24"
              alt="UsersThree Icon"
            />

            <div className="inline-flex max-w-fit flex-col items-start justify-start gap-4">
              <div className="text-5xl font-normal text-white">
                <h2 className="text-mobile-h1 lg:text-desktop-h3">
                  Different Thoughts. Different Thinking.
                </h2>
              </div>
              <div className="text-xl text-left font-normal text-rose-100 ">
                <p className="text-mobile-body md:w-auto lg:h-[72px] lg:text-[20px]">
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
