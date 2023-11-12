import React from "react";
import Section from "../components/Section";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const location = `Department of Computer Engineering, 
  Faculty of Engineering, Kasetsart University
  50 Ngamwongwan St., Lat Yao, Chatuchak, Bangkok 10900`;

  const contact = [
    [
      {
        title: "email",
        image: "/images/EnvelopeSimple.svg",
        href: "mailto:barcampbangkhen11@gmail.com",
      },
      {
        title: "tiktok",
        image: "/images/TiktokLogo.svg",
        href: "https://www.tiktok.com/@barcamp.bangkhen",
      },
    ],
    [
      {
        title: "instagram",
        image: "/images/InstagramLogo.svg",
        href: "https://www.instagram.com/barcampbangkhen",
      },
      {
        title: "facebook",
        image: "/images/FacebookLogo.svg",
        href: "https://www.facebook.com/Barcampbangkhen",
      },
    ],
  ] as const;

  return (
    <Section noPadding>
      <div className="bg-[#2623294d] p-10 md:px-[5vw]">
        <div className="flex items-start justify-between gap-10">
          <div className="flex gap-2">
            <Image
              className="h-[70px] w-[54px] object-contain  md:h-[140px] md:w-[185px]"
              src={"/images/ku_logo.png"}
              alt="ku logo"
              width={140}
              height={185}
            />
            <Image
              className="h-[70px] w-[54px] object-contain md:h-[140px] md:w-[185px]"
              src={"/images/cpsk_logo.png"}
              alt="cpsk logo"
              width={140}
              height={185}
            />
          </div>
          <div>
            <div className="flex flex-wrap justify-end gap-4">
              {contact.map((pair, idx) => (
                <div key={idx} className="flex flex-wrap gap-4">
                  {pair.map(({ title, image, href }) => (
                    <Link href={href} key={title} target="_blank">
                      <Image
                        className="h-[32px] w-[32px] object-contain hover:opacity-50 md:h-[54px] md:w-[54px]"
                        src={image}
                        alt={title}
                        width={54}
                        height={54}
                      />
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <p className="mt-10 hidden text-end text-desktop-sub text-[#B6B6B6] md:block">
              {location}
            </p>
          </div>
        </div>
        <p className="mt-3 text-mobile-sub text-[#B6B6B6] md:hidden">
          {location}
        </p>
      </div>
    </Section>
  );
};

export default Footer;
