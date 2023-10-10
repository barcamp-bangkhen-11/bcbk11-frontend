import React from "react";
import Section from "../components/Section";
import Flare from "../components/Flare";

const Question = () => {
  return (
    <Section id="questions" flexColCenter mockBorderPlsRemove>
      <Flare positionX="right" positionY="bottom" />
      <h1 className="text-desktop-h1">Questions</h1>
      <h2 className="text-desktop-h3">Coming soon</h2>
    </Section>
  );
};

export default Question;
