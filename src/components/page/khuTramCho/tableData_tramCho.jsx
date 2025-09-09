import React, { useState } from "react";
const data = {
  headers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  rows: [
    {
      name: "Buồng đầu vào",
      value: [310, 337, 345, 302, 348, 322, 300, 379, 349, 381, 424, 313],
      color: "bg-[#FCD617]",
    },
    {
      name: "Buồng đạt",
      value: [304, 293, 326, 295, 345, 283, 275, 352, 320, 358, 390, 284],
      color: "bg-[#7DC241]",
    },
    {
      name: "Buồng lỗi",
      value: [6, 44, 19, 7, 3, 39, 25, 27, 29, 23, 34, 29],
      color: "bg-[#EB1010]",
    },
    {
      name: "Khối lượng (tấn)",
      value: [10.7, 9.81, 11.38, 9.68, 12.45, 9.74, 9.32, 12.5, 10.46, 13.00, 13.10, 9.87],
      color: "bg-[#6A8FD8]",
    },
    {
      name: "Năng suất (kg/buồng)",
      value: [35.2, 33.5, 34.9, 32.8, 36.1, 34.4, 33.9, 35.5, 32.7, 36.3, 33.6, 34.74], 
      color: "bg-[#5A9CCA]",
    },
  ],
};
const TableData = (props) => {
    
  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-center font-be-vietnam-pro text-[0.875rem]">
      <div className=" w-full flex-[1]">
        <table className="w-[100%] h-[100%] table-fixed">
          <thead className="w-[100%]">
            <tr>
              <th className="text-left  w-[10rem] pl-2 ">Nông trường</th>
              {data.headers.map((header, index) => (
                <th key={index} className="font-normal ">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>
      <div className="w-full flex-[5] overflow-x-auto">
        <table className="w-[100%] h-[100%] table-fixed ">
          <tbody className="w-[100%]">
            {data.rows.map((row, rInd) => (
              <tr key={rInd} className={`text-white ${row.color}`}>
                <td className="w-[10rem] pl-2 font-bold">{row.name}</td>
                {row.value.map((val, cInd) => (
                  <td key={cInd} className="text-center">
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TableData;
