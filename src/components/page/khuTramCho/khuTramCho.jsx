import React from "react";
import FarmHarvestStatisticsChart from "./farmHarvestStatisticsChart";
import TableData from "./tableData_tramCho";
const Khutramcho = (props) => {
  const thongke = [
    { name: "Số nông trường", value: 12,color:"bg-[#Ffff]" },
    { name: "Buồng đầu vào", value: 4110, color:"bg-[#FCD617]" },
    { name: "Buồng đạt", value: 3825, color:"bg-[#7DC241]"},
    { name: "Buồng lỗi", value: 258,color:"bg-[#EB1010]" },
    { name: "Khối lượng (tấn)", value: 13.347,color:"bg-[#6A8FD8]" },
    { name: "Năng suất (kg/buồng)", value: 32.86,color:"bg-[#5A9CCA]" },
  ];
  return (
    <div className="w-full h-full"  >
      <div className="w-[99%] h-[99%] flex flex-col justify-center items-center">
        <div className="w-[99.5%] h-auto min-h-[260px] flex justify-between items-start  gap-2 flex-wrap ">
          <div className="w-[81%] h-[260px] flex flex-[4] justify-center items-center flex-col  " >
            <div className="w-[100%] h-[35px] flex justify-center items-center bg-[#c6c6c6] text-sm rounded-t-md ">
              Dữ liệu thống kê thu hoạch theo từng nông trường
            </div>
            <div className="w-[100%] h-[225px] flex justify-center items-center">
              <TableData/>
            </div>
          </div>
          <div className="w-[18%] h-[260px] flex flex-[1] justify-center items-center flex-col rounded">
            <div className="w-[100%] h-[35px] text-center flex justify-center items-center bg-[#c6c6c6] rounded-t-md text-sm">
              Dữ liệu thống kê tổng thu hoạch
            </div>
            <div className="w-[100%] h-[225px]  flex  flex-col overflow-x-auto ">
              {thongke.map((thongke, index) => (
                <div key={index} className={` w-[100%] min-w-[250px] flex justify-center items-center h-[37.5px] ${thongke.color}`}>
                  <div className="w-[75%]  flex ml-1 items-center  font-be-vietnam-pro text-sm min-w-[140px]"><span className="truncate">{thongke.name}</span> </div>
                  <div className="w-[25%]  flex ml-1 items-center  font-be-vietnam-pro text-sm min-w-[80px]">{thongke.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[99.5%] h-[555px] flex  justify-center items-center flex-col">
          <div className="w-[100%] h-[6.3%] flex justify-center items-center  bg-[#c6c6c6] rounded-t-md text-sm">
            Biểu đồ thống kê dữ liệu thu hoạch từng nông trường
          </div>
          <div className="w-[100%] h-[92%] flex justify-center items-center">
            <FarmHarvestStatisticsChart/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Khutramcho;
