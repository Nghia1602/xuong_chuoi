import React from "react";
import FarmHarvestStatisticsChart from "./farmHarvestStatisticsChart";

import TableData from "./tableData_tramCho";
import DataStatistics from "./TableTotalData";


const Khutramcho = ({ data }) => {
  if (!data) return <div>Không có dữ liệu</div>;

  
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[99.5%]  flex flex-col justify-center items-center gap-2">
        <div className="w-[99.5%] h-auto  flex justify-center items-start  gap-2 flex-wrap ">
          <div className="  w-[81%] h-[260px] flex flex-[4] justify-center items-center flex-col  ">
            <div className="w-[100%] h-[35px] text-center flex justify-center items-center bg-[#c6c6c6] rounded-t-md text-sm ">
              Dữ liệu thống kê thu hoạch theo từng nông trường
            </div>
            <div className="w-[100%] h-[225px] border-[0.3px] border-[#c6c6c670] ">
              <TableData rawData={data["table"]} />
            </div>
          </div>
          <div className=" h-[260px] flex flex[1] justify-center flex-col rounded">
            <div className="w-[100%] min-h-[35px] text-center flex justify-center items-center bg-[#c6c6c6] rounded-t-md text-sm">
              DLTK tổng thu hoạch
            </div>
            <div className="w-[100%] h-[225px] ">
              <DataStatistics tableData={data.table} />
            </div>
          </div>
        </div>

        <div className="w-[99.5%] h-[545px] flex  justify-center items-center flex-col">
          <div className="w-[100%] h-[6.3%] flex justify-center items-center  bg-[#c6c6c6] rounded-t-md text-sm">
            Biểu đồ thống kê dữ liệu thu hoạch từng nông trường
          </div>
          <div className="w-[100%] h-[500px] flex justify-center items-center">
            <FarmHarvestStatisticsChart data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Khutramcho;
