import React from "react";
import Section from "../components/Section";
import Flare from "../components/Flare";
import Image from "next/image";
import barcampHero from "@/modules/img/barcampHero.png";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const Hero = () => {
  const [countdown, setCountdown] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2023-11-25T00:00:00Z"); // 25/11/2023

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(intervalId);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className={inter.className}>
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
              src={barcampHero}
              alt="barcamp"
            />

            <div className="mt-15 flex flex-col items-center justify-center pt-5 md:ml-24 md:pt-0">
              <div className="mb-12 text-center text-[50px]  font-normal text-white lg:text-[84px]">
                {countdown.days}:{countdown.hours}:{countdown.minutes} day
              </div>
              <Link href="">
                <div className="inline-flex h-[60px] items-center justify-center rounded-[45px] border-4 border-stone-300 from-orange-400 via-red-500 to-transparent px-[40px]  py-5 shadow-xl hover:bg-gradient-to-r hover:drop-shadow-2xl md:h-[76px] md:w-[316px]">
                  <div className="font-bold text-white ">
                    <h1 className=" w-full  text-[25px] md:text-[33px] ">
                      Register Now
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <Flare positionX="center" positionY="bottom" />
        </Section>
      </div>
    </>
  );
};

export default Hero;
