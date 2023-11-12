import React from "react";
import Section from "../components/Section";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
const Hero = () => {
  return (
    <>
      <Marquee
        autoFill={true}
        className=" absolute left-0 top-20 z-10  bg-yellow-500 text-[30px] font-bold text-black md:text-[40px]"
      >
        ! FIRST 200 ATTENDEES GET FREE T-SHIRT
      </Marquee>
      <Section id="hero" flexColCenter bgImage>
        <div className="z-50 mt-8  flex flex-row flex-wrap items-center justify-center lg:mx-[10vw] lg:self-start">
          <div className="mt-15 flex flex-col items-center justify-center pt-5  md:pt-0">
            <div className="mb-12 text-center text-mobile-h3 font-bold  text-white md:text-desktop-h3 ">
              Share your thoughts,
              <br /> listen to others experiences
            </div>
            <div className="mb-8 flex flex-col gap-3 md:text-[20px]">
              <div className="flex gap-3 ">
                <Image
                  src={"/images/calendar.svg"}
                  width={32}
                  height={32}
                  alt="calendar"
                />
                <p>Saturday, November 25, 2023</p>
              </div>
              <div className="flex gap-3">
                <Image
                  className=""
                  src={"/images/MapPin.svg"}
                  width={32}
                  height={32}
                  alt="calendar"
                />
                <p>building 17 (IUP), Kasetsart University. </p>
              </div>
            </div>
            <Link
              href="https://www.eventpop.me/e/16323/barcampbangkhen11"
              target="_blank"
              className="inline-flex h-[60px] items-center justify-center rounded-[45px] border-4 border-stone-300 px-[40px] py-5  text-[25px] font-bold  text-white shadow-xl hover:border-white hover:bg-purple-500 hover:drop-shadow-2xl md:h-[76px] md:w-[316px] md:text-[33px]"
            >
              Register Now
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Hero;
