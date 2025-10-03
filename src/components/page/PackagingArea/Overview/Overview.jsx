import React from "react";
import { DatePicker, Button, Select } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import TableData from "../../khuTramCho/tableData_tramCho";
import ActualBoxQuantityAndTargetQuantity from "../ActualBoxQuantityAndTargetQuantity";

// const tableDataQuantityAndTaget = {
//   headers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   rows: [
//     {
//       name: "Kế hoạch",
//       value: [304, 293, 326, 295, 345, 283, 275, 352, 320, 358],
//       color: "bg-[#7DC241]",
//     },
//     {
//       name: "Tổng thùng thực tế",
//       value: [6, 44, 19, 7, 3, 39, 25, 27, 29, 23],
//       color: "bg-[#EB1010]",
//     },
//     {
//       name: "Thùng đạt chuẩn",
//       value: [10.7, 9.81, 11.38, 9.68, 12.45, 9.74, 9.32, 12.5, 10.46, 13.0],
//       color: "bg-[#6A8FD8]",
//     },
//     {
//       name: "Thùng lỗi",
//       value: [35.2, 33.5, 34.9, 32.8, 36.1, 34.4, 33.9, 35.5, 32.7, 36.3],
//       color: "bg-[#5A9CCA]",
//     },
//     {
//       name: "Chênh lệch",
//       value: [310, 337, 345, 302, 348, 322, 300, 379, 349, 381],
//       color: "bg-[#FCD617]",
//     },
//     {
//       name: "Hiệu suất",
//       value: [35.2, 33.5, 34.9, 32.8, 36.1, 34.4, 33.9, 35.5, 32.7, 36.3],
//       color: "bg-[#5A9CCA]",
//     },
//   ],
// };
const OverView = ({data}) => {
  return (
    <div className="w-[99%] h-[815px] flex items-center  flex-col overflow-x-auto pt-1">
      <div className="  w-[100%] h-[20rem] flex   items-center flex-col  ">
        <div className="w-[100%] h-[2.1875rem] flex justify-center items-center  bg-[#c6c6c6] rounded-t-md text-sm">
          BẢNG THỐNG KÊ SỐ LƯỢNG THÙNG THỰC TẾ VÀ CHỈ TIÊU KẾ HOẠCH THEO TỪNG
          MODULE (THEO NGÀY)
        </div>
        <div className="w-[100%] h-[17rem]">
          <TableData data={data["table-tongquan"]} />
        </div>
      </div>
      <div className="w-[100%] h-[500px] flex   items-center flex-col overflow-x-auto">
        <div className="w-[100%] h-[2.1875rem] flex justify-center items-center  bg-[#c6c6c6] rounded-t-md text-sm">
          BIỂU ĐỒ THỐNG KÊ SỐ LƯỢNG THÙNG ĐẠT CHUẨN VÀ CHỈ TIÊU KẾ HOẠCH THEO
          TỪNG MODULE (THEO NGÀY)
        </div>
        <div className="  w-[100%] h-[29rem] flex justify-center items-center">
          <ActualBoxQuantityAndTargetQuantity data={data["barchart-tongquan"]}/>
        </div>
      </div>
    </div>
  );
};
export default OverView;
