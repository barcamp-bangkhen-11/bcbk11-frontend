
interface BoxProps {
  time: string;
  title: string;
  details: string[];
}
const Box = ({ time, title, details }: BoxProps) => {
  
  return (
    <div className="flex flex-col items-start  h-full space-y-2  w-full lg:w-[360px]">
      <div className="flex flex-col md:flex-row md:items-center space-x-2 space-y-2 md:space-y-0">
        <h1 className="text-mobile-body lg:text-desktop-body font-bold border-2 border-white w-fit rounded-full py-1 whitespace-nowrap px-[10px]">{time}</h1>
        <h1 className="text-mobile-body lg:text-desktop-body">{title}</h1>
      </div>
      <ul className=" flex flex-col items-start justify-start list-disc pl-[28px] text-start">
      {details && details.map((item,index) => {
        return (
          <li key={index} className="text-mobile-sub lg:text-desktop-sub">{item}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default Box;
