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
};

const Section: React.FC<SectionProps> = ({
  id,
  children,
  flexColCenter,
  mockBorderPlsRemove,
}) => {
  return (
    <section
      className={
        "relative z-0 " +
        (flexColCenter
          ? "flex min-h-screen flex-col items-center justify-center text-center "
          : "") +
        (mockBorderPlsRemove ? "border-2 border-emerald-500 " : "")
      }
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
