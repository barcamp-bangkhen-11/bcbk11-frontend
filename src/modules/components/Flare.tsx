import React from "react";

type FlareProps = {
  positionX: "left" | "right" | "center" | (string & NonNullable<unknown>);
  positionY: "top" | "bottom" | "center" | (string & NonNullable<unknown>);
};

const Flare: React.FC<FlareProps> = ({ positionX, positionY }) => {
  return (
    <div
      className="bg-gradient-radial absolute -z-10 h-[948px] w-[948px] rounded-full blur-[300px]"
      style={{
        background:
          "radial-gradient(100.79% 116.37% at 48.85% -9.6%, #9B64C6 37.16%, #FC7869 43.23%, #F5AE52 85.9%)",
        transform: `translate( -50%, -50%)`,
        top:
          positionY === "top"
            ? "0%"
            : positionY === "bottom"
            ? "100%"
            : positionY === "center"
            ? "50%"
            : positionY,
        left:
          positionX === "left"
            ? "0%"
            : positionX === "right"
            ? "100%"
            : positionX === "center"
            ? "50%"
            : positionX,
      }}
    >
      Flare
    </div>
  );
};

export default Flare;
