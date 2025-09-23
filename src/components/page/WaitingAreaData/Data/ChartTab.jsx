import React from "react";
import { DatePicker, Button, Select } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import TableData from "../../khuTramCho/tableData_tramCho";

import DetailedHarvestData from "../DetailedHarvestData";
import DataStatistics from "../../khuTramCho/TableTotalData";
import BananaBunchMassStatisticsChart from "./BananaBunchMassStatisticsChart";
import BananaBunchQuanlityStatisticsChart from "./BananaBunchQuanlityStatisticsChart";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const handleChange = (value) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};
const ChartTab = (props) => {
  return (
    <div className="w-full h-[52rem]">
      <div className="h-[22rem] w-full flex flex-col gap-1 items-center ">
        <div className="h-[2.5rem] w-[100%] flex ">
          {" "}
          <div className="flex gap-[0.25rem] pl-[0.4rem] pt-[0.4rem]">
            <div>
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
              {" "}
              <DatePicker onChange={onChange} defaultValue={dayjs()} />
            </div>
          </div>
          <div></div>
        </div>
        <div className="h-[16.5rem] w-[100%] flex justify-center gap-2 flex-wrap ">
          <div className="w-[99.4%] h-[2.1875rem] bg-[#c6c6c6] flex items-center justify-center rounded-t-[0.3125rem]">Thống kê số lượng buồng thu hoạch theo ngày</div>
          
          <BananaBunchMassStatisticsChart/>
        </div>
      </div>
      <div className="h-[26rem] w-full flex flex-col px-[0.4rem]   ">
        {/* <div className="flex gap-[0.25rem]  h-[2.5rem] w-[99%] flex  ">
          <div>
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
        </div> */}
        <div className="flex flex-col items-center ">
          <div className="flex justify-center items-center h-[2.1875rem] bg-[#c6c6c6] w-full rounded-t-[5px]">
            Chi tiết dữ liệu thu hoạch từng nông trường{" "}
          </div>
          <div className="flex justify-center items-center h-[27rem] w-full  ">
            <BananaBunchQuanlityStatisticsChart />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChartTab;
