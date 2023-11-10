import React from "react";
import Section from "../components/Section";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Sponsor = () => {
  const sponsors = {
    diamond: [
      {
        name: "Cytron Technologies",
        image: "/images/sponsors/[Diamond]Cytron TH Logo-01-crop.png",
      },
      {
        name: "Odd-e",
        image: "/images/sponsors/[Diamond]Odd-e-crop.png",
      },
    ],
    platinumAndGold: [
      {
        name: "lnw shop",
        image: "/images/sponsors/[Gold] logo_Lnw-01-crop.png",
      },
    ],
    silverAndBronze: [
      {
        name: "Exzy",
        image: "/images/sponsors/[Silver] Logo Exzy_Horizon-01-crop.png",
      },
      {
        name: "Debuz",
        image: "/images/sponsors/[Silver]debuz-crop.png",
      },
      {
        name: "LINE MAN Wongnai",
        image: "/images/sponsors/[Bronze]LMWN-RGB-01-crop.png",
      },
    ],
  };
  return (
    <Section>
      <div className="mx-auto mb-16 flex w-full max-w-7xl flex-wrap justify-evenly  gap-4 px-4 md:px-12 lg:px-32">
        {sponsors.diamond.map((sponsor, idx) => (
          <Image
            key={sponsor.name + idx}
            src={sponsor.image}
            width={1000}
            height={1000}
            alt={sponsor.name}
            className=" h-32 w-fit object-contain object-center md:h-52"
          />
        ))}
      </div>
      <div className="mx-auto mb-16 flex w-fit max-w-7xl flex-wrap justify-between  gap-4 px-4 md:px-12 lg:px-32">
        {sponsors.platinumAndGold.map((sponsor, idx) => (
          <Image
            key={sponsor.name + idx}
            src={sponsor.image}
            width={1000}
            height={1000}
            alt={sponsor.name}
            className=" h-20 w-fit object-contain object-center md:h-28"
          />
        ))}
      </div>

      <div className="mx-auto hidden w-full max-w-7xl flex-wrap justify-evenly gap-4 px-4 md:flex md:px-12 lg:px-32">
        {sponsors.silverAndBronze.map((sponsor, idx) => (
          <Image
            key={sponsor.name + idx}
            src={sponsor.image}
            width={1000}
            height={1000}
            alt={sponsor.name}
            className=" h-16 w-fit object-contain object-center md:h-16 lg:h-24"
          />
        ))}
      </div>
      <Marquee autoFill={true}>
        {sponsors.silverAndBronze.map((sponsor, idx) => (
          <Image
            key={sponsor.name + idx}
            src={sponsor.image}
            width={1000}
            height={1000}
            alt={sponsor.name}
            className="m-4 block h-16 w-auto object-contain object-center md:hidden md:h-24"
          />
        ))}
      </Marquee>
    </Section>
  );
};

export default Sponsor;
