import React from "react";

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
        <div className="w-[99.5%] h-[31%] flex justify-between items-center ">
          <div className="w-[81%] h-[100%] flex justify-center items-center flex-col">
            <div className="w-[100%] h-[13%] flex justify-center items-center bg-[#c6c6c6]">
              Dữ liệu thống kê thu hoạch theo từng nông trường
            </div>
            <div className="w-[100%] h-[86%] flex justify-center items-center">
              bang
            </div>
          </div>
          <div className="w-[18%] h-[100%] flex justify-center items-center flex-col rounded">
            <div className="w-[100%] h-[13%] flex justify-center items-center bg-[#c6c6c6] ">
              Dữ liệu thống kê tổng thu hoạch
            </div>
            <div className="w-[100%] h-[86%] flex justify-center items-center flex-col } ">
              {thongke.map((thongke, index) => (
                <div key={index} className={`h-[13%] w-[95%] flex justify-center items-center ${thongke.color}`}>
                  <div className="w-[70%] h-[100%] flex  items-center m-1">{thongke.name}</div>
                  <div className="w-[30%] h-[100%] flex  items-center m-1">{thongke.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[99.5%] h-[68%] flex  justify-center items-center flex-col">
          <div className="w-[100%] h-[6.3%] flex justify-center items-center  bg-[#c6c6c6] ">
            Biểu đồ thống kê dữ liệu thu hoạch từng nông trường
          </div>
          <div className="w-[100%] h-[92%] flex justify-center items-center">
            Biêu đồ
          </div>
        </div>
      </div>
    </div>
  );
};
export default Khutramcho;
