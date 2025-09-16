import react from "react";
import { DatePicker, Button, Select } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import dayjs from 'dayjs';
import TableData from "../khuTramCho/tableData_tramCho";
import DetailedHarvestData from "./DetailedHarvestData";
import DataStatistics from "../khuTramCho/TableTotalData";

export const detailedHarvestDataTable = {
  headers: [
    "Thời gian",
    "Buồng đầu vào (buồng)",
    "Buồng đạt (buồng)",
    "Buồng lỗi (buồng)",
    "Lượt cân",
    "Khối lượng buồng (kg)",
  ],
  rows: Array.from({ length: 6 }, () => ({
    name: "", // Không cần cột "Nông trường"
    color: "", // Không tô màu từng dòng
    value: [
      "2024-7-26 13:27:24",
      3799,
      3051,
      749,
      3051,
      25.60,
    ],
  })),
};

const tabledata_statistical = {
  headers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  rows: [
    {
      name: "Buồng đầu vào",
      value: [320, 330, 355, 310, 340, 335, 310, 370, 360, 390, 410, 320],
      color: "bg-[#FCD617]",
    },
    {
      name: "Buồng đạt",
      value: [300, 290, 320, 305, 335, 290, 280, 340, 330, 350, 380, 290],
      color: "bg-[#7DC241]",
    },
    {
      name: "Buồng lỗi",
      value: [20, 40, 35, 5, 5, 45, 30, 30, 25, 40, 30, 30],
      color: "bg-[#EB1010]",
    },
    {
      name: "Khối lượng (tấn)",
      value: [11.2, 10.1, 12.0, 10.5, 12.8, 10.3, 9.9, 13.2, 11.0, 13.4, 13.8, 10.1],
      color: "bg-[#6A8FD8]",
    },
    {
      name: "Năng suất (kg/buồng)",
      value: [36.1, 34.0, 35.2, 33.0, 37.0, 35.0, 34.1, 36.2, 33.3, 37.1, 34.8, 35.0],
      color: "bg-[#5A9CCA]",
    },
  ],
};
const DataTotal = [
  { name: "Số nông trường", value: 12, color: "bg-[#Ffff]" },
  { name: "Buồng đầu vào", value: 4110, color: "bg-[#FCD617]" },
  { name: "Buồng đạt", value: 3825, color: "bg-[#7DC241]" },
  { name: "Buồng lỗi", value: 258, color: "bg-[#EB1010]" },
  { name: "Khối lượng (tấn)", value: 13.347, color: "bg-[#6A8FD8]" },
  { name: "Năng suất (kg/buồng)", value: 32.86, color: "bg-[#5A9CCA]" },
];

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const handleChange = (value) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};
const WaitingAreaData = () => {
  return (
    <div className="w-full h-full flex justify-center flex flex-col font-be-vietnam-pro text-sm">
      <div className="h-[1.375rem] w-full flex pl-[0.5rem] border-b-2 border-[#c6c6c670]">
        <div className="h-full w-[4rem] text-sm text-center">Thông số</div>
        <div className="h-full w-[4rem] text-sm text-center">Biểu đồ</div>
      </div>
      <div className="h-[52rem] w-full flex flex-col justify-center items-center">
        <div className="h-[20rem] w-full flex flex-col gap-1 items-center ">
          <div className="h-[2.5rem] w-[99%] flex  ">
            {" "}
            <div className="flex gap-[0.25rem] ">
              <div> 
                {" "}
                <DatePicker onChange={onChange} defaultValue={dayjs()}  />
              </div>
              <div>
                <Button type="primary" icon={<DownloadOutlined />}>
                  Báo cáo
                </Button>
              </div>
            </div>
            <div></div>
          </div>
          <div className="h-[16.5rem] w-[100%] flex justify-center gap-2 flex-wrap ">
            <div className="flex[4] flex flex-col w-[80%] ">
              <div className="h-[2.1875rem] bg-[#c6c6c6] flex justify-center items-center rounded-t-[5px]">
                TỔNG HỢP DỮ LIỆU THU HOẠCH CỦA TỪNG NÔNG TRƯỜNG
              </div>
              <div><TableData rawData={tabledata_statistical}/></div>
            </div>
            <div className="flex[1] flex flex-col w-[19%]">
              <div className="h-[2.1875rem] bg-[#c6c6c6] flex justify-center items-center text-center rounded-t-[5px]">Dữ liệu thống kê tổng thu hoạch</div>
              <div><DataStatistics Data={DataTotal}/></div>
            </div>
          </div>
        </div>
        <div className="h-[30rem] w-[99.5%] flex flex-col  ">
          <div className="flex gap-[0.25rem]  h-[2.5rem] w-[99%] flex  ">
            <div >
              <Select
                labelInValue
                defaultValue={{ value: "1", label: "Nông trường 1 " }}
                style={{ width: 150 }}
                onChange={handleChange}
                options={[
                  { value: "1", label: "Nông trường 1" },
                  { value: "2", label: "Nông trường 2" },
                  { value: "3", label: "Nông trường 12" },
                ]}
              />
            </div>
            <div>
              <Button type="primary" icon={<DownloadOutlined />}>
                Báo cáo
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex justify-center items-center h-[2.1875rem] bg-[#c6c6c6] w-full rounded-t-[5px]" >Chi tiết dữ liệu thu hoạch từng nông trường </div>
            <div className="flex justify-center items-center h-[23.25rem] w-full"><DetailedHarvestData rawData={detailedHarvestDataTable}/></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WaitingAreaData;
