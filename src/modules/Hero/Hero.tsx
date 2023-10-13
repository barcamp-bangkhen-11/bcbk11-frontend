import React from "react";
import Section from "../components/Section";
import Flare from "../components/Flare";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const Hero = () => {
  const [countdown, setCountdown] = useState<{
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  }>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const pad = (n: number) => (n < 10 ? `0${n}` : n.toString());
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

      setCountdown({
        days: pad(days),
        hours: pad(hours),
        minutes: pad(minutes),
        seconds: pad(seconds),
      });

      if (difference < 0) {
        clearInterval(intervalId);
        setCountdown({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      }
    });

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
              src="/images/barcampHero.png"
              width={433}
              height={418}
              alt="barcamp"
            />

            <div className="mt-15 flex flex-col items-center justify-center pt-5 md:pt-0 lg:ml-24">
              <div className="mb-12 text-center text-desktop-h3  font-normal text-white  md:text-desktop-h1">
                {countdown.days}:{countdown.hours}:{countdown.minutes} day
              </div>
              <Link href="">
                <div className="inline-flex h-[60px] items-center justify-center rounded-[45px] border-4 border-stone-300 px-[40px] py-5 shadow-xl  hover:border-white hover:bg-purple-500  hover:drop-shadow-2xl md:h-[76px] md:w-[316px]">
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
