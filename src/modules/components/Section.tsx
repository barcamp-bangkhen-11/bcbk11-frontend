import React from "react";

export const sections = {
  hero: {
    id: "hero",
    title: "Hero",
  },
  about: {
    id: "about",
    title: "About",
  },
  gallery: {
    id: "gallery",
    title: "Gallery",
  },
  schedule: {
    id: "schedule",
    title: "Schedule",
  },
  questions: {
    id: "questions",
    title: "Q&A",
  },
} as const;

type SectionProps = {
  id?: keyof typeof sections;
  children: React.ReactNode;
  flexColCenter?: boolean;
  mockBorderPlsRemove?: boolean;
  noPadding?: boolean;
  bgImage?: boolean;
  bgMonochrome?: string;
};

const Section: React.FC<SectionProps> = ({
  id,
  children,
  flexColCenter,
  mockBorderPlsRemove,
  noPadding,
  bgImage,
  bgMonochrome,
}) => {
  return (
    <section
      style={
        bgImage
          ? {
              backgroundImage: `url("/images/hero_bg.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : bgMonochrome
          ? {
              background: bgMonochrome,
            }
          : {}
      }
      className={
        "relative " +
        (noPadding ? "" : "py-20 ") +
        (flexColCenter
          ? "flex min-h-screen flex-col items-center justify-center text-center "
          : "") +
        (mockBorderPlsRemove ? "border-2 border-emerald-500 " : "") +
        (bgMonochrome ? "mx-0 rounded-3xl md:mx-5" : "")
      }
      id={id}
    >
      {children}
      {bgImage && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            background:
              "linear-gradient(0deg, #262329 -5%, rgba(38, 35, 41, 0.00) 100%)",
            width: "100%",
            height: "371px",
          }}
        />
      )}
    </section>
  );
};

export default Section;
