import React, { useState, useEffect } from "react";
import { Button, Select, DatePicker, Space } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import TableData from "../../khuTramCho/tableData_tramCho";
import DataStatistics from "../../khuTramCho/TableTotalData";
import DetailedHarvestData from "../DetailedHarvestData";
import dayjs from "dayjs";
import api from "../../../../api";
import { useLocation } from "react-router-dom";

const { RangePicker } = DatePicker;
const Parameter = () => {
  const [selectedFarm, setSelectedFarm] = useState("1");
  const [rawDataTable, setRawDataTable] = useState(null);
  const [dataTongCong, setDataTongCong] = useState(null);
  const [detailedData, setDetailedData] = useState(null);
  const [farmOptions, setFarmOptions] = useState([]);
  // const [dateRange, setDateRange] = useState([
  //   dayjs().startOf("day"),
  //   dayjs().endOf("day"),
  // ]);
  // const [selectDate, setSelectDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [data, setData] = useState(null);
  const location = useLocation(); // ✅ Lấy URL hiện tại
  const path = location.pathname;
  const xuongIdMap = {
    "xuong-bp1-1": 1,
    "xuong-bp1-2": 2,
  };
  const xuongSlug = path.split("/").find((p) => p.startsWith("xuong-"));
  const xuongId = xuongIdMap[xuongSlug] || 1; // fallback là 1 nếu không có

  const handleChange = (value) => {
    setSelectedFarm(value.value);
  };
  const [startDate, setStartDate] = useState(dayjs().format("YYYY-MM-DD"));
  const onChange = (date, dateString) => {
    setStartDate(dateString);
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // ...existing api call code...
  //       const { listnongtruong } = res.data.data;

  //       // Transform farm data into Select options format
  //       const options = listnongtruong.map((farm) => ({
  //         value: farm.ma_nong_truong,
  //         label: `Nông trường ${farm.ma_nong_truong}`,
  //       }));

  //       setFarmOptions(options);
  //       // ...rest of existing code...
  //     } catch (error) {
  //       console.error("❌ Lỗi khi gọi API:", error);
  //     }
  //   };

  //   fetchData();
  // }, [startDate, selectedFarm, xuongId]);
  // Dữ liệu gốc
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        // const startDate = dateRange[0]?.format("YYYY-MM-DD");
        // const endDate = dateRange[1]?.format("YYYY-MM-DD");
        console.log("🔄 Gọi API cho:", {
          startDate,
          // selectedFarm,
          xuongId,
        });
        const res = await api.get("/tram-cho/thong-ke-tong-hop", {
          params: {
            startDate,
            // nongTruong: selectedFarm,
            xuong_id: xuongId,
          },
        });

        const { items, listnongtruong, tongcong } = res.data.data;
        const options = listnongtruong.map((nt) => ({
          value: nt.ma_nong_truong,
          label: `Nông trường ${nt.ma_nong_truong}`,
        }));
        setFarmOptions(options);
        setDataTongCong(tongcong?.[0] || null);
        const headers = listnongtruong.map((nt) => `${nt.ma_nong_truong}`);
        console.log("✅ Dữ liệu nhận được:", res.data);
        setData(res.data);
        const dataMap = {};
        items.forEach((item) => {
          dataMap[item.ma_nong_truong] = item;
        });
        const rows = [
          {
            name: "Năng suất buồng đạt",
            value: listnongtruong.map(
              (nt) => dataMap[nt.ma_nong_truong]?.nang_suat_buong_dat ?? 0
            ),
            // color: "bg-[#5A9CCA]",
          },
          {
            name: "Tổng KL buồng đạt",
            value: listnongtruong.map(
              (nt) => dataMap[nt.ma_nong_truong]?.tong_khoi_luong_buong_dat ?? 0
            ),
            // color: "bg-[#6A8FD8]",
          },
          {
            name: "Tổng số buồng",
            value: listnongtruong.map(
              (nt) => dataMap[nt.ma_nong_truong]?.tong_so_buong ?? 0
            ),
            // color: "bg-[#FCD617]",
          },
          {
            name: "Tổng buồng đạt",
            value: listnongtruong.map(
              (nt) => dataMap[nt.ma_nong_truong]?.tong_so_buong_dat ?? 0
            ),
            // color: "bg-[#7DC241]",
          },
          {
            name: "Tổng buồng lỗi",
            value: listnongtruong.map(
              (nt) => dataMap[nt.ma_nong_truong]?.tong_so_buong_loi ?? 0
            ),
            // color: "bg-[#EB1010]",
          },
        ];

        // ✅ Đặt rawData theo đúng cấu trúc TableData
        setRawDataTable({
          headers,
          rows,
        });
        // const farmDetail = items.find(
        //   (item) => item.ma_nong_truong === selectedFarm
        // );
        // setDetailedData(farmDetail || null);
      } catch (error) {
        console.error("❌ Lỗi khi gọi API:", error);
      }
    };

    fetchData();
  }, [startDate, xuongId]);
  useEffect(() => {
    if (
      farmOptions.length > 0 &&
      !farmOptions.find((opt) => opt.value === selectedFarm)
    ) {
      // Đặt mặc định là nông trường đầu tiên nếu nông trường hiện tại không có dữ liệu
      setSelectedFarm(farmOptions[0].value);
    }
  }, [farmOptions]);

  // useEffect(() => {
  //   const fetchDetailedData = async () => {
  //     try {
  //       const token = localStorage.getItem("accessToken");
  //       console.log("🔄 Gọi API chi tiết:", {
  //         // startDate,
  //         selectedFarm,
  //         xuongId,
  //       });
  //       const res = await api.get("/tram-cho/thong-ke-chi-tiet", {
  //         params: {
  //           // startDate,
  //           nongTruong: selectedFarm,
  //           xuong_id: xuongId,
  //         },
  //       });

  //       console.log("✅ Dữ liệu chi tiết nhận được:", res.data);
  //       // 🆕 Giả định res.data.data có dạng { "2025-06-01": { rows: [...] }, ... }
  //       setDetailedData(res.data.data || null);
  //     } catch (error) {
  //       console.error("❌ Lỗi khi gọi API chi tiết:", error);
  //     }
  //   };

  //   fetchDetailedData();
  // }, [selectedFarm, xuongId]);
  // const rawThongso1 = data?.["table-thongso1"]?.[selectDate] || null;

  return (
    <div className="w-full h-[51rem]">
      {/* --- Phần tổng hợp --- */}
      <div className="h-[20rem] w-full flex flex-col gap-1 items-center">
        <div className="h-[2.5rem] w-[100%] flex">
          <div className="flex gap-[0.25rem] pl-[0.4rem] pt-[0.4rem]">
            <div>
              <DatePicker onChange={onChange} value={dayjs(startDate)} />

              {/* <Space
                direction="vertical"
                size={12}
                style={{ maxWidth: "200px" }}
              >
                <RangePicker
                  value={dateRange}
                  onChange={onRangeChange}
                  format="YYYY-MM-DD"
                />
              </Space> */}
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
              <TableData rawData={rawDataTable} />
            </div>
          </div>

          <div className="flex[1] flex flex-col w-[19%]">
            <div className="h-[2.1875rem] bg-[#c6c6c6] flex justify-center items-center text-center rounded-t-[5px]">
              Dữ liệu thống kê tổng thu hoạch
            </div>
            <div>
              <DataStatistics tongCong={dataTongCong} />
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
              value={
                farmOptions.find((opt) => opt.value === selectedFarm) || {
                  value: selectedFarm,
                  label: `Nông trường ${selectedFarm}`,
                }
              }
              style={{ width: 180 }}
              onChange={(val) => setSelectedFarm(val.value)}
              options={farmOptions}
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
              rawData={data?.data} // hoặc rawDataTable nếu bạn muốn hiển thị theo bảng có sẵn
              selectedFarm={selectedFarm}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parameter;
