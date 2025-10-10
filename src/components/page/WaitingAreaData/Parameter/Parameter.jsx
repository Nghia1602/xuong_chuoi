import React, { useState } from "react";
import { Button, Select, DatePicker } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import TableData from "../../khuTramCho/tableData_tramCho";
import DataStatistics from "../../khuTramCho/TableTotalData";
import DetailedHarvestData from "../DetailedHarvestData";
import dayjs from "dayjs";

const Parameter = ({ data }) => {
  const [selectedFarm, setSelectedFarm] = useState("1");
  const [selectDate, setSelectDate] = useState(dayjs().format("YYYY-MM-DD"));

  const handleChange = (value) => {
    setSelectedFarm(value.value);
  };

  const onChange = (date, dateString) => {
    setSelectDate(dateString);
  };

  // Dữ liệu gốc
  
const rawThongso1 = data?.["table-thongso1"]?.[selectDate] || null;

  return (
    <div className="w-full h-[51rem]">
      {/* --- Phần tổng hợp --- */}
      <div className="h-[20rem] w-full flex flex-col gap-1 items-center">
        <div className="h-[2.5rem] w-[100%] flex">
          <div className="flex gap-[0.25rem] pl-[0.4rem] pt-[0.4rem]">
            <div>
              <DatePicker onChange={onChange} defaultValue={dayjs()} />
            </div>
            <div>
              <Button type="primary" icon={<DownloadOutlined />}>
                Báo cáo
              </Button>
            </div>
          </div>
        </div>

        <div className="h-[16.5rem] w-[100%] flex justify-center gap-2 flex-wrap">
          <div className="flex[4] flex flex-col w-[80%]">
            <div className="h-[2.1875rem] bg-[#c6c6c6] flex justify-center items-center rounded-t-[5px]">
              Tổng hợp dữ liệu thu hoạch của từng nông trường
            </div>
            <div>
              <TableData rawData={rawThongso1} />
            </div>
          </div>

          <div className="flex[1] flex flex-col w-[19%]">
            <div className="h-[2.1875rem] bg-[#c6c6c6] flex justify-center items-center text-center rounded-t-[5px]">
              Dữ liệu thống kê tổng thu hoạch
            </div>
            <div>
              <DataStatistics tableData={rawThongso1} />
            </div>
          </div>
        </div>
      </div>

      {/* --- Phần chi tiết nông trường --- */}
      <div className="h-[30rem] w-full flex flex-col px-[0.4rem]">
        <div className="flex gap-[0.25rem] h-[2.5rem] w-[99%] flex">
          <div>
            <Select
              labelInValue
              defaultValue={{ value: "1", label: "Nông trường 1" }}
              style={{ width: 150 }}
              onChange={handleChange}
              options={[
                { value: "1", label: "Nông trường 1" },
                { value: "2", label: "Nông trường 2" },
                { value: "3", label: "Nông trường 3" },
              ]}
            />
          </div>
          <div>
            <Button type="primary" icon={<DownloadOutlined />}>
              Báo cáo
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center mt-2">
          <div className="flex justify-center items-center h-[2.1875rem] bg-[#c6c6c6] w-full rounded-t-[5px]">
            Chi tiết dữ liệu thu hoạch từng nông trường
          </div>
          <div className="flex justify-center items-center h-[26rem] w-full overflow-hidden">
            <DetailedHarvestData
              rawData={data["table-thongso1"]}
              selectedFarm={selectedFarm}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parameter;
