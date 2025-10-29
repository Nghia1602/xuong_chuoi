import React from "react";
import { DatePicker, Button, Select } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import TableData from "../../khuTramCho/tableData_tramCho";
import DataStatistics from "../../khuTramCho/TableTotalData";
import DetailedHarvestData from "../../WaitingAreaData/DetailedHarvestData";
import ActualVsPlannedBoxQuantity from "./ActualVsPlannedBoxQuantityPlanning";
import dayjs from "dayjs";

const onChange = (date, dateString) => {
  setStartDate(dateString);
  
};
const PlanningPackaging = ({ rawDataTable, dataTongCong, data }) => {
  return (
    <div className="w-full h-[51rem] flex flex-col items-center gap-1 justify-between">
      <div className="h-[22.5rem] w-full flex flex-col gap-1 items-center">
        <div className="h-[2.5rem] w-[100%] flex">
          <div className="flex gap-[0.25rem] pl-[0.4rem] pt-[0.4rem]">
            <div>
              <DatePicker onChange={onChange} value={dayjs()} />

            </div>
            <div>
              <Button type="primary" icon={<DownloadOutlined />}>
                Báo cáo
              </Button>
            </div>
          </div>
        </div>

        <div className="h-[16.5rem] w-[100%] flex justify-center gap-2 flex-wrap">
          <div className="flex[4] flex flex-col w-[99.5%]">
            <div className="h-[2.1875rem] bg-[#c6c6c6] flex justify-center items-center rounded-t-[5px]">
              Tổng hợp dữ liệu thu hoạch của từng nông trường
            </div>
            <div>
              <TableData rawData={data["table-tongquan"]} />
            </div>
          </div>

        </div>
      </div>
      <div className="w-[99.5%] h-[30rem] flex   items-center flex-col overflow-x-auto">
        <div className="w-[100%] h-[2.1875rem] flex justify-center items-center  bg-[#c6c6c6] rounded-t-md text-sm">
          BIỂU ĐỒ THỐNG KÊ SỐ LƯỢNG THÙNG ĐẠT CHUẨN VÀ CHỈ TIÊU KẾ HOẠCH THEO
          TỪNG MODULE (THEO NGÀY)
        </div>
        <div className="w-[100%] h-[27rem] flex justify-center items-center">
          <ActualVsPlannedBoxQuantity data={data["barchart-tongquan"]}/>
        </div>
      </div>
    </div>
  );
};
export default PlanningPackaging;
