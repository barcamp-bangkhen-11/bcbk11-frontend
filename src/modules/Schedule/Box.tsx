interface BoxProps {
  time: string;
  title: string;
  details: string[];
}
const Box = ({ time, title, details }: BoxProps) => {
  return (
    <div className="flex h-full w-full  flex-col items-start  space-y-2 ">
      <div className="mb-4 flex flex-col space-x-2 space-y-2 md:flex-row md:items-center md:space-y-0 ">
        <h1 className="w-fit whitespace-nowrap rounded-full border-2 border-white px-[10px] py-1 text-mobile-body font-bold lg:text-desktop-body">
          {time}
        </h1>
        <h1 className="text-mobile-h4 lg:text-desktop-h4">{title}</h1>
      </div>
      <ul className=" flex list-disc flex-col items-start justify-start pl-[28px] text-start">
        {details?.map((item, index) => {
          return (
            <li key={index} className="text-mobile-body lg:text-desktop-body">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Box;
