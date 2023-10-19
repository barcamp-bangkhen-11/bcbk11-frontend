import React from "react";
import Section from "../components/Section";
import Flare from "../components/Flare";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Inter } from "next/font/google";
import Timer from "./Timer";
const Hero = () => {
  return (
    <Section id="hero">
      <Marquee
        autoFill={true}
        className=" bg-yellow-500 text-[30px] font-bold text-black md:text-[40px] "
      >
        ! FIRST 200 ATTENDEES GET FREE T-SHIRT
      </Marquee>
      <div className="mt-8 flex  flex-row flex-wrap  items-center justify-center">
        <Image
          className="h-[382px] w-[382px] md:h-[418px] md:w-[433px] "
          src="/images/barcampHero.png"
          width={433}
          height={418}
          alt="barcamp"
        />

        <div className="mt-15 flex flex-col items-center justify-center gap-8 pt-5 md:pt-0 lg:ml-24">
          <Timer />
          <Link
            href=""
            className=" inline-flex h-[60px]  w-full items-center justify-center rounded-[45px] border-4 border-stone-300 px-[40px] py-5 text-desktop-body font-bold  text-white shadow-xl hover:border-white  hover:bg-purple-500 hover:drop-shadow  md:h-[76px] md:w-[316px] md:text-[33px]"
          >
            Register Now
          </Link>
        </div>
      </div>

      <Flare positionX="center" positionY="bottom" />
    </Section>
  );
};

export default Hero;
