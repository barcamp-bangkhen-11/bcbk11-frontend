import React from "react";
import Section from "../components/Section";
import Flare from "../components/Flare";

const Hero = () => {
  return (
    <Section id="hero" flexColCenter mockBorderPlsRemove>
      <Flare positionX="center" positionY="bottom" />
      <h1 className="text-desktop-h1">Barcamp Bangkhen 11</h1>
      <h2 className="text-desktop-h3">Coming soon</h2>
    </Section>
  );
};

export default Hero;
