import React from "react";
import Section from "../components/Section";
import Flare from "../components/Flare";

const About = () => {
  return (
    <Section id="about" flexColCenter mockBorderPlsRemove>
      <Flare positionX="right" positionY="center" />
      <h1 className="text-desktop-h1">About</h1>
      <h2 className="text-desktop-h3">Coming soon</h2>
    </Section>
  );
};

export default About;
