import react from "react";
import Parameter from "./Parameter/Parameter";
import ChartTab from "./Data/ChartTab";
const WaitingAreaData = () => {
  return (
    <div className="w-full h-full  justify-center flex flex-col font-be-vietnam-pro text-sm">
      <div className="h-[1.375rem] w-full flex pl-[0.5rem] border-b-2 border-[#c6c6c670]">
        <div className="h-full w-[4rem] text-sm text-center">Thông số</div>
        <div className="h-full w-[4rem] text-sm text-center">Biểu đồ</div>
      </div>
      <ChartTab />
      {/* <Parameter /> */}
    </div>
  );
};
export default WaitingAreaData;
