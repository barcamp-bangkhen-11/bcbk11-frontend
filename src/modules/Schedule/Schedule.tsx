import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import Flare from "../components/Flare";
import Box from "./Box";
import { Chrono } from "react-chrono";
import { scheduleList } from "./ScheduleList";

const Schedule = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <Section id="schedule" flexColCenter>
      <Flare positionX="center" positionY="60%" />

      <h1 className="mb-10 bg-transparent text-mobile-h1 lg:text-desktop-h1">
        Schedule
      </h1>
      <div className="w-full lg:max-w-[1440px]">
        {isLoaded && (
          <Chrono
            mode="VERTICAL_ALTERNATING"
            hideControls
            timelinePointDimension={20}
            theme={{
              primary: "white",
              secondary: "white",
              cardBgColor: "transparent",
            }}
            cardHeight={50}
            enableBreakPoint
            verticalBreakPoint={1024}
          >
            {scheduleList.map((item) => (
              <Box
                key={item.title + item.time}
                details={item.list}
                time={item.time}
                title={item.title}
              />
            ))}
          </Chrono>
        )}
      </div>
    </Section>
  );
};

export default Schedule;
