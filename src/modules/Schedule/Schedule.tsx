import React from "react";
import Section from "../components/Section";
import Flare from "../components/Flare";
import Box from "./Box";
import { Chrono } from "react-chrono";
import { scheduleList } from "./ScheduleList";



const Schedule = () => {
  return (
    <Section id="schedule" flexColCenter mockBorderPlsRemove>
      <Flare positionX="center" positionY="60%" />

      <h1 className="bg-transparent text-mobile-h1 lg:text-desktop-h1 mb-10">Schedule</h1>
      <div className="w-full lg:max-w-[1440px]">
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
          enableBreakPoint verticalBreakPoint={1024}
        >
          {
            scheduleList.map((item)=>(
              <Box details={item.list} time={item.time} title={item.title} />
            ))
          }
        </Chrono>
      </div>
    </Section>
  );
};

export default Schedule;
