import React from "react";
import Section from "../components/Section";
import Flare from "../components/Flare";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Gallery = () => {
  const imagesAndText = [
    {
      type: "text",
      text: "Why an ordinary man can't be the MP? 🤔",
      mark: "a",
    },
    {
      type: "image",
      src: "/images/gallery/b.png",
      mark: "b",
    },
    {
      type: "image",
      src: "/images/gallery/c.png",
      mark: "c",
    },
    {
      type: "text",
      text: "Clean code for dump sh*t. ✨",
      mark: "d",
    },
    {
      type: "text",
      text: "Writing tests until tired. Is that enough? 🥹",
      mark: "e",
    },
    {
      type: "image",
      src: "/images/gallery/f.png",
      mark: "f",
    },
    {
      type: "image",
      src: "/images/gallery/g.png",
      mark: "g",
    },
    {
      type: "image",
      src: "/images/gallery/h.png",
      mark: "h",
    },
    {
      type: "text",
      text: "I am a Consultant Ask me Anything. 🤝",
      mark: "i",
    },
    {
      type: "image",
      src: "/images/gallery/j.png",
      mark: "j",
    },
    {
      type: "image",
      src: "/images/gallery/k.png",
      mark: "k",
    },
    {
      type: "text",
      text: "How to make crispy pork. 😋",
      mark: "l",
    },
    {
      type: "image",
      src: "/images/gallery/m.png",
      mark: "m",
    },
  ] as const;
  return (
    <Section id="gallery" flexColCenter mockBorderPlsRemove>
      <h2 className="mb-8 text-left text-mobile-h2 md:text-center md:text-desktop-h1">
        Glance of the Past
      </h2>
      <Marquee autoFill>
        <div
          className="h-[500px] w-[calc(500px/10*36)] md:h-[750px] md:w-[calc(750px/10*36)]"
          style={{
            display: "grid ",
            gridColumnGap: "1rem",
            gridRowGap: "1rem",
            paddingRight: "1rem",

            gridTemplateColumns: "repeat(36, 1fr)",
            gridTemplateRows: "repeat(10, 1fr)",
            gridTemplateAreas: `
          "a a a a a a a a c c c c c c e e e e e e h h h h h h j j j j j m m m m m"
          "a a a a a a a a c c c c c c e e e e e e h h h h h h j j j j j m m m m m"
          "b b b b b b b b c c c c c c f f f f f f h h h h h h j j j j j m m m m m"
          "b b b b b b b b c c c c c c f f f f f f h h h h h h j j j j j m m m m m"
          "b b b b b b b b c c c c c c f f f f f f h h h h h h j j j j j m m m m m"
          "b b b b b b b b c c c c c c f f f f f f i i i i i i j j j j j m m m m m"
          "b b b b b b b b c c c c c c f f f f f f i i i i i i k k k k k m m m m m"
          "b b b b b b b b c c c c c c g g g g g g g g g g g g k k k k k m m m m m"
          "b b b b b b b b d d d d d d g g g g g g g g g g g g k k k k k l l l l l"
          "b b b b b b b b d d d d d d g g g g g g g g g g g g k k k k k l l l l l"
          `,
          }}
        >
          {imagesAndText.map((item) => {
            if (item.type === "image") {
              return (
                <Image
                  key={item.mark}
                  src={item.src}
                  alt="Gallery"
                  style={{
                    gridArea: item.mark,
                  }}
                  width={1000}
                  height={1000}
                  className="h-full w-full  rounded-xl object-cover object-center"
                />
              );
            } else if (item.type === "text") {
              return (
                <div
                  key={item.mark}
                  style={{
                    gridArea: item.mark,
                  }}
                  className="flex h-32 w-full items-center justify-center  rounded-xl bg-[#FFECDA] p-6 text-left text-mobile-h4 text-[#1F1C1D] md:text-desktop-h4"
                >
                  {item.text}
                </div>
              );
            }
          })}
        </div>
      </Marquee>
      <Flare positionX="center" positionY="center" />
    </Section>
  );
};

export default Gallery;
