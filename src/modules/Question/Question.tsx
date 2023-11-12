import React, { useState } from "react";
import Section from "../components/Section";
import Flare from "../components/Flare";

import { Inter } from "next/font/google";
import Image from "next/image";
import Lightbox from "react-spring-lightbox";
const inter = Inter({ subsets: ["latin"] });

const Question = () => {
  const [openQuestion, setOpenQuestion] = useState<string[]>([]);

  const qnaImages = [
    [
      {
        src: "/images/qna/1.png",
        alt: "Q&A 1",
      },
      {
        src: "/images/qna/2.png",
        alt: "Q&A 2",
      },
      {
        src: "/images/qna/3.png",
        alt: "Q&A 3",
      },
    ],
    [
      {
        src: "/images/qna/4.png",
        alt: "Q&A 4",
      },
      {
        src: "/images/qna/5.png",
        alt: "Q&A 5",
      },
      {
        src: "/images/qna/6.png",
        alt: "Q&A 6",
      },
      {
        src: "/images/qna/7.png",
        alt: "Q&A 7",
      },
    ],
    [
      {
        src: "/images/qna/8.png",
        alt: "Q&A 8",
      },
      {
        src: "/images/qna/9.png",
        alt: "Q&A 9",
      },
    ],
  ];

  const images = qnaImages.flat();

  const [currentImageIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isParkingOpen, setIsParkingOpen] = useState(false);

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1);

  const data = [
    {
      question: "How many topics will be chosen for each session?",
      answer: (
        <span>
          There are three time slots: morning, afternoon, and evening. Each time
          slot consists of three sessions, and each session has five topics. So,
          there will be <b>45 topics in total</b>. You can check the schedule
          for more details.
        </span>
      ),
    },
    {
      question: "How to travel to the event venue?",
      answer: (
        <>
          <div className=" flex w-fit flex-col flex-wrap gap-[24px]">
            {qnaImages.map((images) => (
              <div
                key={images.map((i) => i.src).join("jjj")}
                className="flex  flex-wrap items-center justify-start gap-2"
              >
                {images.map((image) => (
                  <Image
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    width={2000}
                    height={2000}
                    className="h-auto w-[70px] cursor-pointer transition duration-150 ease-in-out hover:scale-105 md:w-[150px]"
                    onClick={() => {
                      setCurrentIndex(
                        images.findIndex((img) => img.src === image.src),
                      );
                      setIsLightboxOpen(true);
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
          <Lightbox
            isOpen={isLightboxOpen}
            onPrev={gotoPrevious}
            onNext={gotoNext}
            images={images}
            currentIndex={currentImageIndex}
            style={{ background: "rgba(23, 21, 25, 0.8)" }}
            onClose={() => setIsLightboxOpen(false)}
            pageTransitionConfig={{
              from: { transform: "scale(1)", opacity: 0 },
              enter: { transform: "scale(1)", opacity: 1 },
              leave: { transform: "scale(1)", opacity: 0 },
            }}
            renderPrevButton={(canPrev) => (
              <button
                type="button"
                className={
                  "absolute left-0 top-1/2 z-50 ml-8 flex h-12 w-12 items-center justify-center rounded-full bg-black font-black text-white opacity-50 transition duration-150 ease-in-out hover:opacity-100 focus:opacity-100 focus:outline-none" +
                  (canPrev ? "" : " hidden")
                }
                onClick={gotoPrevious}
                disabled={!canPrev}
              >
                {"←"}
              </button>
            )}
            renderNextButton={(canNext) => (
              <button
                type="button"
                className={
                  "absolute right-0 top-1/2 z-50 mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-black font-black text-white opacity-50 transition duration-150 ease-in-out hover:opacity-100 focus:opacity-100 focus:outline-none" +
                  (canNext ? "" : " hidden")
                }
                onClick={gotoNext}
                disabled={!canNext}
              >
                {"→"}
              </button>
            )}
            renderHeader={() => (
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute right-0 top-0 z-50 mr-8 mt-8 flex h-12 w-12 items-center justify-center rounded-full bg-black font-black text-white opacity-50 transition duration-150 ease-in-out hover:opacity-100 focus:opacity-100 focus:outline-none"
              >
                {"×"}
              </button>
            )}
          />
        </>
      ),
    },
    {
      question: "Are there any parking spots available around the venue?",
      answer: (
        <>
          <Image
            src={"/images/qna/9.png"}
            alt="Parking"
            width={2000}
            height={2000}
            className="h-auto w-[500px] cursor-pointer"
            onClick={() => {
              setIsParkingOpen(true);
            }}
          />
          <Lightbox
            isOpen={isParkingOpen}
            onPrev={gotoPrevious}
            onNext={gotoNext}
            images={[
              {
                src: "/images/qna/9.png",
                alt: "Q&A 9",
              },
            ]}
            currentIndex={0}
            style={{ background: "rgba(0, 0, 0, 0.8)" }}
            onClose={() => setIsParkingOpen(false)}
            pageTransitionConfig={{
              from: { transform: "scale(1)", opacity: 0 },
              enter: { transform: "scale(1)", opacity: 1 },
              leave: { transform: "scale(1)", opacity: 0 },
            }}
            renderHeader={() => (
              <button
                onClick={() => setIsParkingOpen(false)}
                className="absolute right-0 top-0 z-50 mr-8 mt-8 flex h-12 w-12 items-center justify-center rounded-full bg-black font-black text-white opacity-50 transition duration-150 ease-in-out hover:opacity-100 focus:opacity-100 focus:outline-none"
              >
                {"×"}
              </button>
            )}
          />
        </>
      ),
    },
  ];

  return (
    <>
      <div className={inter.className}>
        <Section id="questions">
          <Flare positionX="right" positionY="bottom" />
          <h1 className="pb-[6vh] pl-[10vw] text-mobile-h1 font-normal text-white md:pl-10 lg:w-full lg:pl-[10vw] lg:text-desktop-h1">
            Q&A
          </h1>
          <div className="flex flex-col gap-[36px]">
            {data.map((item) => (
              <div
                key={item.question}
                className="flex flex-col divide-y-2 divide-white/[.36] pl-[10vw] pr-[10vw]"
              >
                <div
                  className="item-center flex cursor-pointer flex-row pb-[24px]"
                  onClick={() => {
                    if (openQuestion.includes(item.question)) {
                      setOpenQuestion(
                        openQuestion.filter((q) => q !== item.question),
                      );
                    } else {
                      setOpenQuestion([...openQuestion, item.question]);
                    }
                  }}
                >
                  <Image
                    className={`h-[32px] w-[32px] transition duration-150 ease-in-out focus:-rotate-180 ${
                      openQuestion.includes(item.question)
                        ? "rotate-180"
                        : "rotate-0"
                    }`}
                    src={"/images/QAndADropdown.svg"}
                    alt="Q&A Dropdown"
                    width={32}
                    height={32}
                  />
                  <h4 className="pl-[8px] text-mobile-h4 font-normal text-white lg:w-full lg:text-desktop-h4">
                    {item.question}
                  </h4>
                </div>
                <p className="pt-[24px] text-mobile-body font-normal md:text-desktop-body">
                  {openQuestion.includes(item.question) ? item.answer : ""}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
};

export default Question;
