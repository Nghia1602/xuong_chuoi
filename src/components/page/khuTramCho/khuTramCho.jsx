import React from "react";
import FarmHarvestStatisticsChart from "./farmHarvestStatisticsChart";

import TableData from "./tableData_tramCho";
import DataStatistics from "./TableTotalData";

// const tabledata_waitingarea = {
//   headers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
//   rows: [
//     {
//       name: "Buồng đầu vào",
//       value: [310, 337, 345, 302, 348, 322, 300, 379, 349, 381, 424, 313],
//       color: "bg-[#FCD617]",
//     },
//     {
//       name: "Buồng đạt",
//       value: [304, 293, 326, 295, 345, 283, 275, 352, 320, 358, 390, 284],
//       color: "bg-[#7DC241]",
//     },
//     {
//       name: "Buồng lỗi",
//       value: [6, 44, 19, 7, 3, 39, 25, 27, 29, 23, 34, 29],
//       color: "bg-[#EB1010]",
//     },
//     {
//       name: "Khối lượng (tấn)",
//       value: [
//         10.7, 9.81, 11.38, 9.68, 12.45, 9.74, 9.32, 12.5, 10.46, 13.0, 13.1,
//         9.87,
//       ],
//       color: "bg-[#6A8FD8]",
//     },
//     {
//       name: "Năng suất (kg/buồng)",
//       value: [
//         35.2, 33.5, 34.9, 32.8, 36.1, 34.4, 33.9, 35.5, 32.7, 36.3, 33.6, 34.74,
//       ],
//       color: "bg-[#5A9CCA]",
//     },
//   ],
// };
// const DataTotal = [
//   { name: "Số nông trường", value: 12, color: "bg-[#Ffff]" },
//   { name: "Buồng đầu vào", value: 4110, color: "bg-[#FCD617]" },
//   { name: "Buồng đạt", value: 3825, color: "bg-[#7DC241]" },
//   { name: "Buồng lỗi", value: 258, color: "bg-[#EB1010]" },
//   { name: "Khối lượng (tấn)", value: 13.347, color: "bg-[#6A8FD8]" },
//   { name: "Năng suất (kg/buồng)", value: 32.86, color: "bg-[#5A9CCA]" },
// ];
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
              {/* {thongke.map((thongke, index) => (
                <div key={index} className={` w-[100%] min-w-[250px] flex justify-center items-center h-[37.5px] ${thongke.color}`}>
                  <div className="w-[75%]  flex ml-1 items-center  font-be-vietnam-pro text-sm min-w-[140px]"><span className="truncate">{thongke.name}</span> </div>
                  <div className="w-[25%]  flex ml-1 items-center  font-be-vietnam-pro text-sm min-w-[80px]">{thongke.value}</div>
                </div>
              ))} */}
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
