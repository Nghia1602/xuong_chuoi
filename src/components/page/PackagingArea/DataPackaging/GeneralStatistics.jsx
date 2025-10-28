import React, { useState, useEffect, useMemo } from "react";
import { DatePicker, Button, Select } from "antd";
import Title from "./Title";
import "./index.css";
import { Popover } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import TableData from "../../khuTramCho/tableData_tramCho";
import DataStatistics from "../../khuTramCho/TableTotalData";
import DetailedHarvestData from "../../WaitingAreaData/DetailedHarvestData";
import ActualVsPlannedBoxQuantity from "./ActualVsPlannedBoxQuantity";
import dayjs from "dayjs";
import api from "../../../../api";
import { useLocation } from "react-router-dom";
import { SettingOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import { Bar } from "react-chartjs-2";

// const onChange = (date, dateString) => {
//   setStartDate(dateString);
// };

const GeneralStatisticsPackaging = ({ rawDataTable, dataTongCong, data }) => {
  const location = useLocation();
  const path = location.pathname;
  const [key, setKey] = useState(false);
  // 🔹 Map slug sang ID xưởng
  const xuongIdMap = {
    "xuong-bp1-1": 1,
    "xuong-bp1-2": 2,
  };
  

  // 🔹 Tự động lấy slug trong URL (vd: /xuong-bp1-1/bao-cao)
  const xuongSlug = path.split("/").find((p) => p.startsWith("xuong-"));
  const xuongId = xuongIdMap[xuongSlug] || 1;
  const yesterday = dayjs().subtract(1, "day");
  const [selectDate, setSelectDate] = useState(yesterday);
  const [dataTable, setDataTable] = useState([]);
  const [modules, setModules] = useState([]);
  const [labelsNameChina, setLabelsNameChina] = useState([]);
  const [labelsNameJapan, setLabelsNameJapan] = useState([]);
  const [selectedModules, setSelectedModules] = useState([]);

  const onChange = (date) => setSelectDate(date);

  const handleCheckboxChange = (module) => {
    setSelectedModules((prev) =>
      prev.includes(module)
        ? prev.filter((item) => item !== module)
        : [...prev, module]
    );
  };

  const contentOfPopSettingModule = (
    <div>
      {modules.map((module, index) => (
        <div key={index}>
          <Checkbox
            checked={selectedModules.includes(module)}
            onChange={() => handleCheckboxChange(module)}
          >
            {module}
          </Checkbox>
        </div>
      ))}
    </div>
  );

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (widthTableRef.current) {
  //       const width = widthTableRef.current.offsetWidth - 10;
  //       setTableMaxWidth(width);
  //     }
  //   };
  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  const filteredData = useMemo(() => {
    return dataTable.filter((data) => selectedModules.includes(data.module));
  }, [dataTable, selectedModules]);
  const dataChart = useMemo(
    () => ({
      labels: filteredData.map((data) => `Module ${data.module}`),
      datasets: [
        {
          label: "Thùng Trung Quốc",
          data: filteredData.map((data) => data.tongThungChina),
          backgroundColor: "#FCD617",
          borderWidth: 1,
          borderColor: "#333333",
          borderRadius: 4,
          barThickness: 30,
          datalabels: {
            display: true,
            color: "black",
            anchor: "center",
            align: "center",
            offset: 0,
            font: {
              weight: "bold",
              size: 13,
            },
            formatter: Math.round,
          },
          stack: "stack1",
        },
        {
          label: "Thùng Nhật Bản",
          data: filteredData.map((data) => data.tongThungJapan),
          backgroundColor: "#82BA11",
          borderWidth: 1,
          borderColor: "#333333",
          borderRadius: 4,
          barThickness: 30,
          datalabels: {
            display: true,
            color: "black",
            anchor: "center",
            align: "center",
            offset: 0,
            font: {
              weight: "bold",
              size: 13,
            },
            formatter: Math.round,
          },
          stack: "stack1",
        },
        {
          label: "Thùng lỗi",
          data: filteredData.map((data) => data.thungLoiLuyKe),
          backgroundColor: "#E95656",
          borderWidth: 1,
          borderColor: "#333333",
          borderRadius: 4,
          barThickness: 30,
          datalabels: {
            display: true,
            color: "red",
            anchor: "end",
            align: "top",
            offset: 0,
            font: {
              weight: "bold",
              size: 13,
            },
            formatter: Math.round,
          },
        },
      ],
    }),
    [filteredData]
  );

  const optionsChart = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Biểu đồ thống kê",
      },
    },
    scales: {
      x: {
        stacked: true, // kích hoạt cột chồng theo trục X
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
  };
  useEffect(() => {
    const fetchDataTable = async () => {
      if (!selectDate || !xuongId) return;
      const startDate = selectDate.format("YYYY-MM-DD");
      const endDate = selectDate.format("YYYY-MM-DD");

      try {
        const res = await api.get("/khu-dong-goi/thong-ke-tong-hop", {
          params: {
            startDate,
            endDate,
            xuong_id: xuongId,
          },
        });

        const data = Array.isArray(res?.data?.data) ? res.data.data : [];

        const dataTable = data.map((moduleItem) => {
          const result = {
            module: moduleItem.module,
            detailsJapan: {},
            detailsChina: {},
            nangSuatJapan: 0,
            nangSuatChina: 0,
            people: 0,
            soGioLamJapan: 0,
            soGioLamChina: 0,
            thungDatChuan: 0,
            thungLoiJapan: 0,
            thungLoiChina: 0,
            thungLoiLuyKe: 0,
            tongThungJapan: 0,
            tongThungChina: 0,
          };

          moduleItem.children.forEach((item) => {
            const target = item.loai_chuoi === "Nhat Ban" ? "Japan" : "China";

            result[`nangSuat${target}`] = item.nang_suat_dong_goi || 0;
            result.people += item.so_nhan_cong;
            result[`soGioLam${target}`] += item.thoi_gian_lam_viec;
            result[`tongThung${target}`] += item.tong_so_thung;
            result[`thungLoi${target}`] += item.tong_so_thung_loi;
            result.thungLoiLuyKe += item.tong_so_thung_loi;
            result.thungDatChuan += item.tong_so_thung - item.tong_so_thung_loi;

            item.phamcap_json.forEach((p) => {
              result[`details${target}`][p.maPhamCap] = p.soThung;
            });
          });

          return result;
        });

        setDataTable(dataTable);

        const labelsNameJapan = [];
        const labelsNameChina = [];

        data.forEach((moduleItem) => {
          moduleItem.children.forEach((item) => {
            const target =
              item.loai_chuoi === "Nhat Ban"
                ? labelsNameJapan
                : labelsNameChina;
            item.phamcap_json.forEach((p) => {
              if (!target.includes(p.maPhamCap)) target.push(p.maPhamCap);
            });
          });
        });

        setLabelsNameChina(labelsNameChina);
        setLabelsNameJapan(labelsNameJapan);
      } catch (error) {
        console.error("Lỗi khi fetch data:", error);
      }
    };

    fetchDataTable();
  }, [selectDate, xuongId]);

  useEffect(() => {
    if (dataTable.length > 0) {
      const modules = dataTable.map((item) => item.module);
      setModules(modules);
      setSelectedModules(modules);
    }
  }, [dataTable]);
  return (
    <div className="w-full h-full flex flex-col items-center gap-3 ">
      <div className=" w-full flex flex-col gap-1 items-center">
        {/* //h-[22.5rem] */}
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

        <div className=" w-[100%] flex justify-center gap-2">
          <div className="flex flex-col w-[99.5%]">
            <Title title="Bảng thống kê số lượng thùng thực tế và chỉ tiêu kế hoạch theo từng module (Theo ngày)" />
            <div
              style={{ maxWidth: "100%" }}
              className="overflow-auto custom-scrollbar max-h-[330px] border-b border-[#B6BABD] text-sm font-normal"
            >
              <table className="min-w-[1000px] custom-table-hard w-full  border-collapse ">
                <thead className="sticky top-0 z-10">
                  <tr>
                    <th className="p-2 bg-[#F0F4F9]" rowSpan={2}>
                      Module{" "}
                      <Popover
                        content={contentOfPopSettingModule}
                        title="Module hiển thị"
                        trigger="click"
                        placement="bottom"
                      >
                        <SettingOutlined
                          style={{
                            fontSize: "14px",
                            color: "#1890ff",
                            cursor: "pointer",
                          }}
                        />
                      </Popover>
                    </th>
                    <th className="p-2 bg-[#FDEBD0]" rowSpan={2}>
                      Số nhân sự
                    </th>
                    <th
                      className="p-2 text-center bg-[#FCD617]"
                      colSpan={labelsNameChina.length + 4}
                    >
                      Trung Quốc
                    </th>
                    <th
                      className="p-2 text-center bg-[#82BA11]"
                      colSpan={labelsNameJapan.length + 4}
                    >
                      Nhật Bản
                    </th>
                    <th className="p-2 bg-[#95B7F9]" colSpan={2}>
                      Lũy kế
                    </th>
                  </tr>
                  <tr>
                    {labelsNameChina.map((label, i) => (
                      <th key={i} className="p-2 bg-[#FCD617]">
                        {label}
                      </th>
                    ))}
                    <th className="p-2 bg-[#FCD617]">Tổng thùng</th>
                    <th className="p-2 bg-[#FCD617]">Giờ làm</th>
                    <th className="p-2 bg-[#FCD617]">Năng suất</th>
                    <th className="p-2 bg-[#FCD617]">Thùng lỗi</th>
                    {labelsNameJapan.map((label, i) => (
                      <th key={i} className="p-2 bg-[#82BA11]">
                        {label}
                      </th>
                    ))}
                    <th className="p-2 bg-[#82BA11]">Tổng thùng</th>
                    <th className="p-2 bg-[#82BA11]">Giờ làm</th>
                    <th className="p-2 bg-[#82BA11]">Năng suất</th>
                    <th className="p-2 bg-[#82BA11]">Thùng lỗi</th>
                    <th className="p-2 bg-[#95B7F9]">Thùng đạt</th>
                    <th className="p-2 bg-[#95B7F9]">Thùng lỗi</th>
                  </tr>
                </thead>

                <tbody>
                  {dataTable.map(
                    (row, idx) =>
                      selectedModules.includes(row.module) && (
                        <tr key={idx} className="text-center font-semibold">
                          <td className="p-2 text-[#0B03B2]">{row.module}</td>
                          <td className="p-2 text-[#5A9CCA]">{row.people}</td>

                          {labelsNameChina.map((label, i) => (
                            <td key={i} className="p-2 text-[#A7AC00]">
                              {row.detailsChina[label]}
                            </td>
                          ))}
                          <td className="p-2 text-[#92400E]">
                            {row.tongThungChina}
                          </td>
                          <td className="p-2 text-[#6B7280]">
                            {row.soGioLamChina}
                          </td>
                          <td className="p-2 text-[#D97706]">
                            {row.nangSuatChina}
                          </td>
                          <td className="p-2 text-[#EB1010]">
                            {row.thungLoiChina}
                          </td>

                          {labelsNameJapan.map((label, i) => (
                            <td key={i} className="p-2 text-[#4FBA11]">
                              {row.detailsJapan[label]}
                            </td>
                          ))}
                          <td className="p-2 text-[#92400E]">
                            {row.tongThungJapan}
                          </td>
                          <td className="p-2 text-[#6B7280]">
                            {row.soGioLamJapan}
                          </td>
                          <td className="p-2 text-[#D97706]">
                            {row.nangSuatJapan}
                          </td>
                          <td className="p-2 text-[#EB1010]">
                            {row.thungLoiJapan}
                          </td>
                          <td className="p-2 text-[#D97706] font-bold">
                            {row.thungDatChuan}
                          </td>
                          <td className="p-2 text-[#EB1010] font-bold">
                            {row.thungLoiLuyKe}
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-1 flex-col w-[99.5%]">
        <Title title="Thống kê sản lượng line đóng gói" />
        <div className="h-[90%]">
          <Bar key={key} data={dataChart} options={optionsChart} />
        </div>
      </div>
    </div>
  );
};
export default GeneralStatisticsPackaging;
