import React, { useEffect, useState } from "react";

const Timer = () => {
  const [countdown, setCountdown] = useState<{
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  }>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const pad = (n: number) => (n < 10 ? `0${n}` : n.toString());
    const targetDate = new Date("2023-11-25T00:00:00Z"); // 25/11/2023

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({
        days: pad(days),
        hours: pad(hours),
        minutes: pad(minutes),
        seconds: pad(seconds),
      });

      if (difference < 0) {
        clearInterval(intervalId);
        setCountdown({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      }
    });

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="flex justify-center gap-3 md:gap-8">
      <div className="relative flex flex-col gap-5">
        <div className="flex h-16 w-16 items-center justify-between rounded-lg bg-[#343650] md:h-32 md:w-32 lg:h-40 lg:w-40">
          <div className="relative !-left-[6px] h-2.5 w-2.5 rounded-full bg-[#191A24] md:h-3 md:w-3"></div>
          <span className="text-mobile-h2 font-semibold text-[#a5b4fc] md:text-mobile-h1 lg:text-desktop-h1">
            {countdown?.days}
          </span>
          <div className="relative -right-[6px] h-2.5 w-2.5 rounded-full bg-[#191A24] md:h-3 md:w-3"></div>
        </div>
        <span className="text-center text-mobile-body capitalize text-[#8486A9] md:text-desktop-body">
          {countdown?.days === "01" ? "Day" : "Days"}
        </span>
      </div>
      <div className="relative flex flex-col gap-5">
        <div className="flex h-16 w-16 items-center justify-between rounded-lg bg-[#343650] md:h-32 md:w-32 lg:h-40 lg:w-40">
          <div className="relative !-left-[6px] h-2.5 w-2.5 rounded-full bg-[#191A24] md:h-3 md:w-3"></div>
          <span className="text-mobile-h2 font-semibold text-[#a5b4fc] md:text-mobile-h1 lg:text-desktop-h1">
            {countdown?.hours}
          </span>
          <div className="relative -right-[6px] h-2.5 w-2.5 rounded-full bg-[#191A24] md:h-3 md:w-3"></div>
        </div>
        <span className="text-center text-mobile-body font-medium text-[#8486A9] md:text-desktop-body">
          {countdown?.hours === "01" ? "Hour" : "Hours"}
        </span>
      </div>
      <div className="relative flex flex-col gap-5">
        <div className="flex h-16 w-16 items-center justify-between rounded-lg bg-[#343650] md:h-32 md:w-32 lg:h-40 lg:w-40">
          <div className="relative !-left-[6px] h-2.5 w-2.5 rounded-full bg-[#191A24] md:h-3 md:w-3"></div>
          <span className="text-mobile-h2 font-semibold text-[#a5b4fc] md:text-mobile-h1 lg:text-desktop-h1">
            {countdown?.minutes}
          </span>
          <div className="relative -right-[6px] h-2.5 w-2.5 rounded-full bg-[#191A24] md:h-3 md:w-3"></div>
        </div>
        <span className="text-center text-mobile-body capitalize text-[#8486A9] md:text-desktop-body">
          {countdown?.minutes === "01" ? "Minute" : "Minutes"}
        </span>
      </div>
      <div className="relative flex flex-col gap-5">
        <div className="flex h-16 w-16 items-center justify-between rounded-lg bg-[#343650] md:h-32 md:w-32 lg:h-40 lg:w-40">
          <div className="relative !-left-[6px] h-2.5 w-2.5 rounded-full bg-[#191A24] md:h-3 md:w-3"></div>
          <span className="text-mobile-h2 font-semibold text-[#a5b4fc] md:text-mobile-h1 lg:text-desktop-h1">
            {countdown?.seconds}
          </span>
          <div className="relative -right-[6px] h-2.5 w-2.5 rounded-full bg-[#191A24] md:h-3 md:w-3"></div>
        </div>
        <span className="text-center text-mobile-body capitalize text-[#8486A9] md:text-desktop-body">
          {countdown?.seconds === "01" ? "Second" : "Seconds"}
        </span>
      </div>
    </div>
  );
};

export default Timer;
