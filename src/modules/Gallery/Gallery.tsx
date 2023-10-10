import React from "react";
import Section from "../components/Section";
import Flare from "../components/Flare";

const Gallery = () => {
  return (
    <Section id="gallery" flexColCenter mockBorderPlsRemove>
      <Flare positionX="center" positionY="center" />

      <h1 className="text-desktop-h1">Gallery</h1>
      <h2 className="text-desktop-h3">Coming soon</h2>
    </Section>
  );
};

export default Gallery;
