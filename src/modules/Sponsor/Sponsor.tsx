import React from "react";
import Section from "../components/Section";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Flare from "../components/Flare";

const Sponsor = () => {
  const sponsors = {
    diamond: [
      {
        name: "Mock sponsor 1",
        image: "/images/sponsors/ku_logo.png",
      },
      {
        name: "Mock sponsor 2",
        image: "/images/sponsors/ku_logo.png",
      },
      {
        name: "Mock sponsor 3",
        image: "/images/sponsors/ku_logo.png",
      },
    ],
    platinumAndGold: [
      {
        name: "Mock sponsor 3",
        image: "/images/sponsors/ku_logo.png",
      },

      {
        name: "Mock sponsor 4",
        image: "/images/sponsors/ku_logo.png",
      },
      {
        name: "Mock sponsor 1",
        image: "/images/sponsors/ku_logo.png",
      },
      {
        name: "Mock sponsor 2",
        image: "/images/sponsors/ku_logo.png",
      },
    ],
    silverAndBronze: [
      {
        name: "Mock sponsor 1",
        image: "/images/sponsors/ku_logo.png",
      },

      {
        name: "Mock sponsor 3",
        image: "/images/sponsors/ku_logo.png",
      },

      {
        name: "Mock sponsor 5",
        image: "/images/sponsors/ku_logo.png",
      },
      {
        name: "Mock sponsor 4",
        image: "/images/sponsors/ku_logo.png",
      },
      {
        name: "Mock sponsor 2",
        image: "/images/sponsors/ku_logo.png",
      },
    ],
  };
  return (
    <Section noPadding>
      <div className="mx-auto mb-4 flex w-full max-w-7xl flex-wrap justify-between px-4 md:px-12 lg:px-32">
        {sponsors.diamond.map((sponsor, idx) => (
          <Image
            key={sponsor.name + idx}
            src={sponsor.image}
            width={1000}
            height={1000}
            alt={sponsor.name}
            className="h-32 w-fit object-contain object-center md:h-52"
          />
        ))}
      </div>
      <div className="mx-auto mb-4 flex w-full max-w-7xl flex-wrap justify-between px-4 md:px-12 lg:px-32">
        {sponsors.platinumAndGold.map((sponsor, idx) => (
          <Image
            key={sponsor.name + idx}
            src={sponsor.image}
            width={1000}
            height={1000}
            alt={sponsor.name}
            className="h-24 w-fit object-contain object-center md:h-36"
          />
        ))}
      </div>

      <div className="mx-auto hidden w-full max-w-7xl flex-wrap justify-between px-4 md:flex md:px-12 lg:px-32">
        {sponsors.silverAndBronze.map((sponsor, idx) => (
          <Image
            key={sponsor.name + idx}
            src={sponsor.image}
            width={1000}
            height={1000}
            alt={sponsor.name}
            className="h-16 w-fit object-contain object-center md:h-24"
          />
        ))}
      </div>
      <Marquee autoFill={true} className="mb-20">
        {sponsors.silverAndBronze.map((sponsor, idx) => (
          <Image
            key={sponsor.name + idx}
            src={sponsor.image}
            width={1000}
            height={1000}
            alt={sponsor.name}
            className="block h-16 w-auto object-contain object-center md:hidden md:h-24"
          />
        ))}
      </Marquee>
    </Section>
  );
};

export default Sponsor;
