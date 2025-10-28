import React, { useState, useEffect } from "react";
import { DatePicker, Empty, Space } from "antd";
import dayjs from "dayjs";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useLocation } from "react-router-dom";
import api from "../../../../api";
import { notification } from "antd";
// Đăng ký các thành phần cần dùng
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
const { RangePicker } = DatePicker;
// label tổng
const centerTextPlugin = {
  id: "centerText",
  beforeDraw: (chart) => {
    const { width } = chart;
    const { height } = chart;
    const ctx = chart.ctx;
    const data = chart.data.datasets[0].data;
    const total = data.reduce((sum, val) => sum + val, 0);

    ctx.restore();
    const fontSize = (height / 180).toFixed(2);
    ctx.font = `${fontSize}em sans-serif`;
    ctx.textBaseline = "middle";

    const text = `${total}`;
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  },
};
const ChartPackaging = () => {
  const yesterday = dayjs().subtract(1, "day");
  const [selectDate, setSelectDate] = useState(yesterday);
  const [startDate, setStartDate] = useState(yesterday.format("YYYY-MM-DD"));
  const [endDate, setEndDate] = useState(yesterday.format("YYYY-MM-DD"));
  const [dateRange, setDateRange] = useState([yesterday, yesterday]);
  const [loading, setLoading] = useState(false);
  const [chartKeys, setChartKeys] = useState([
    "chart1",
    "chart2",
    "chart3",
    "chart4",
    "chart5",
    "chart6",
  ]);

  // data chart
  const [dataRaw1, setDataRaw1] = useState([]);
  const [dataRaw2, setDataRaw2] = useState([]);
  const [dataRaw3, setDataRaw3] = useState([]);
  const [dataRaw4, setDataRaw4] = useState([]);
  const [dataRaw5, setDataRaw5] = useState([]);
  const [dataRaw6, setDataRaw6] = useState([]);

  const location = useLocation();
  const xuongIdMap = {
    "xuong-bp1-1": 1,
    "xuong-bp1-2": 2,
  };
  const xuongSlug =
    location.pathname.split("/").find((p) => p.startsWith("xuong-")) || "";
  const xuongId = xuongIdMap[xuongSlug] || 1;

  const optionsForBox = (total) => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "35%",
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          color: (ctx) => ctx.dataset.backgroundColor[ctx.dataIndex],
          formatter: (value, context) => {
            const percentage = ((value / total) * 100).toFixed(2);
            const label = context.chart.data.labels[context.dataIndex];
            return [`${label}`, `${value} (${percentage}%)`];
          },
          align: "end",
          anchor: "end",
          offset: 9,
          font: {
            weight: "bold",
            size: 11,
          },
          borderColor: (ctx) => ctx.dataset.backgroundColor[ctx.dataIndex],
          borderWidth: 1,
          backgroundColor: "#fff",
          padding: 4,
          display: true,
          clamp: true,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const total = context.raw;
              return `${context.label}: ${total} thùng`;
            },
          },
        },
      },
      layout: {
        padding: 40,
      },
    };
  };
  // biểu đồ 1.1
  const data1 = {
    labels: dataRaw1.map((item) => item.module),
    datasets: [
      {
        labels: "Thùng",
        data: dataRaw1.map((item) => item.soThung),
        backgroundColor: [
          "#A78BFA",
          "#FCA5A5",
          "#22D3EE",
          "#FBBF24",
          "#60A5FA",
          "#86EFAC",
          "#C084FC",
          "#5EEAD4",
          "#3B82F6",
          "#FACC15",
        ],
        borderWidth: 2,
        hoverOffset: 6,
      },
    ],
  };
  const total1 = dataRaw1
    .map((item) => item.soThung)
    .reduce((a, b) => a + b, 0);
  const options1 = optionsForBox(total1);

  // biểu đồ 1.2
  const data2 = {
    labels: dataRaw2.map((item) => item.module),
    datasets: [
      {
        labels: "Thùng",
        data: dataRaw2.map((item) => item.soThungLoi),
        backgroundColor: [
          "#A78BFA",
          "#FCA5A5",
          "#22D3EE",
          "#FBBF24",
          "#60A5FA",
          "#86EFAC",
          "#C084FC",
          "#5EEAD4",
          "#3B82F6",
          "#FACC15",
        ],
        borderWidth: 2,
        hoverOffset: 6,
      },
    ],
  };
  const total2 = dataRaw2
    .map((item) => item.soThungLoi)
    .reduce((a, b) => a + b, 0);
  const options2 = optionsForBox(total2);

  // biểu đồ 1.3
  const data3 = {
    labels: dataRaw3.map((item) => item.maPhamCap),
    datasets: [
      {
        labels: "Thùng",
        data: dataRaw3.map((item) => item.soThungTheoPhamCap),
        backgroundColor: [
          "#A78BFA",
          "#FCA5A5",
          "#22D3EE",
          "#FBBF24",
          "#60A5FA",
          "#86EFAC",
          "#C084FC",
          "#5EEAD4",
          "#3B82F6",
          "#FACC15",
          "#009C10",
          "#537FF1",
        ],
        borderWidth: 2,
        hoverOffset: 6,
      },
    ],
  };
  const total3 = dataRaw3
    .map((item) => item.soThungTheoPhamCap)
    .reduce((a, b) => a + b, 0);
  const options3 = optionsForBox(total3);

  // biểu đồ 2.1
  const data4 = {
    labels: dataRaw4.map((item) => item.loaiThung),
    datasets: [
      {
        labels: "Thùng",
        data: dataRaw4.map((item) => item.soLuong),
        backgroundColor: ["#A78BFA", "#FCA5A5"],
        borderWidth: 2,
        hoverOffset: 6,
      },
    ],
  };
  const total4 = dataRaw4
    .map((item) => item.soLuong)
    .reduce((a, b) => a + b, 0);
  const options4 = optionsForBox(total4);

  // biểu đồ 2.2
  const data5 = {
    labels: dataRaw5.map((item) => item.loaiChuoi),
    datasets: [
      {
        labels: "Thùng",
        data: dataRaw5.map((item) => item.soLuongTheoPhamCap),
        backgroundColor: ["#91BC39", "#F4CF3B"],
        borderWidth: 2,
        hoverOffset: 6,
      },
    ],
  };
  const total5 = dataRaw5
    .map((item) => item.soLuongTheoPhamCap)
    .reduce((a, b) => a + b, 0);
  const options5 = optionsForBox(total5);

  // biểu đồ 2.3
  const data6 = {
    labels: dataRaw6.map((item) => item.chatLuong),
    datasets: [
      {
        label: "Thùng",
        data: dataRaw6.map((item) => item.soLuong),
        backgroundColor: ["#F25454", "#91BC39"], // có thể mapping động nếu nhiều loại
        borderWidth: 2,
        hoverOffset: 6,
      },
    ],
  };
  const total6 = dataRaw6
    .map((item) => item.soLuong)
    .reduce((a, b) => a + b, 0);
  const options6 = optionsForBox(total6);

  const onChange = (dates, dateStrings) => {
    // dates có thể null khi clear
    if (!dates || dates.length < 2) {
      setDateRange([null, null]);
      return;
    }
    setDateRange(dates);
  };

  useEffect(() => {
    const fetchDataChart = async () => {
      if (!dateRange || !dateRange[0] || !dateRange[1] || !xuongId) return;
      setLoading(true);
      const startDate = dateRange[0].format("YYYY-MM-DD");
      const endDate = dateRange[1].format("YYYY-MM-DD");
      try {
        const response = await api.get("/khu-dong-goi/thong-ke-bieu-do", {
          params: {
            startDate: dateRange[0].format("YYYY-MM-DD"),
            endDate: dateRange[1].format("YYYY-MM-DD"),
            xuong_id: xuongId,
          },
        });

        const data = response?.data?.data || {};
        setDataRaw1(Array.isArray(data.so_thung) ? data.so_thung : []);
        setDataRaw2(Array.isArray(data.so_thung_loi) ? data.so_thung_loi : []);
        setDataRaw3(Array.isArray(data.ma_pham_cap) ? data.ma_pham_cap : []);
        setDataRaw4(Array.isArray(data.loai_thung) ? data.loai_thung : []);
        setDataRaw5(
          Array.isArray(data.nuoc_xuat_khau) ? data.nuoc_xuat_khau : []
        );
        setDataRaw6(Array.isArray(data.chat_luong) ? data.chat_luong : []);
      } catch (err) {
        console.error(err);
        notification.error({
          message: "Lỗi",
          description: "Không thể tải dữ liệu biểu đồ",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchDataChart();
  }, [dateRange, xuongId]);

  useEffect(() => {
    const handleResize = () =>
      setChartKeys((prev) => prev.map((k) => k + "_r"));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chartConfigs = [
    {
      title: "Số thùng theo Module (Đơn vị: Thùng)",
      dataRaw: dataRaw1,
      chartKey: chartKeys[0],
      data: data1,
      options: options1,
    },
    {
      title: "Số thùng lỗi theo Module (Đơn vị: Thùng)",
      dataRaw: dataRaw2,
      chartKey: chartKeys[1],
      data: data2,
      options: options2,
    },
    {
      title: "Số thùng theo phẩm cấp (Đơn vị: Thùng)",
      dataRaw: dataRaw3,
      chartKey: chartKeys[2],
      data: data3,
      options: options3,
    },
  ];

  const chartConfigs2 = [
    {
      title: "Số thùng theo Khối lượng (Đơn vị: Thùng)",
      dataRaw: dataRaw4,
      chartKey: chartKeys[3],
      data: data4,
      options: options4,
    },
    {
      title: "Số thùng lỗi theo Nước xuất khẩu (Đơn vị: Thùng)",
      dataRaw: dataRaw5,
      chartKey: chartKeys[4],
      data: data5,
      options: options5,
    },
    {
      title: "Số thùng Đạt và Lỗi (Đơn vị: Thùng)",
      dataRaw: dataRaw6,
      chartKey: chartKeys[5],
      data: data6,
      options: options6,
    },
  ];
  return (
    <div className="w-full h-[51rem]">
      {/* --- Phần tổng hợp --- */}
      <div className="h-[52rem] w-full flex flex-col gap-2 items-center">
        <div className="h-[2.5rem] w-[100%] flex">
          <div className="flex gap-[0.25rem] pl-[0.4rem] pt-[0.4rem]">
            <Space direction="vertical" size={12}>
              <RangePicker
                onChange={onChange}
                value={dateRange[0] && dateRange[1] ? dateRange : []}
                style={{ width: 230 }}
              />
            </Space>
          </div>
        </div>

        <div className="flex-1 flex border border-[#B6BABD] w-[99%]">
          {chartConfigs.map((cfg, idx) => (
            <div
              key={cfg.chartKey}
              className={`flex-1 flex flex-col${
                idx < chartConfigs.length - 1
                  ? " border-r border-[#B6BABD]"
                  : ""
              }`}
            >
              <div className="text-center text-lg font-semibold text-[#666] bg-[#F0F1F9] border-b border-[#B6BABD] p-2">
                {cfg.title}
              </div>
              <div className="flex-1 flex justify-center items-center p-2">
                {cfg.dataRaw.length > 0 ? (
                  <Doughnut
                    key={cfg.chartKey}
                    data={cfg.data}
                    options={cfg.options}
                    plugins={[centerTextPlugin, ChartDataLabels]}
                  />
                ) : (
                  <Empty />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 2 */}
        <div className="flex-1 flex border border-[#B6BABD] w-[99%]">
          {chartConfigs2.map((cfg, idx) => (
            <div
              key={cfg.chartKey}
              className={`flex-1 flex flex-col${
                idx < chartConfigs2.length - 1
                  ? " border-r border-[#B6BABD]"
                  : ""
              }`}
            >
              <div className="text-center text-lg font-semibold text-[#666] bg-[#F0F1F9] border-b border-[#B6BABD] p-2">
                {cfg.title}
              </div>
              <div className="flex-1 flex justify-center items-center p-2">
                {cfg.dataRaw.length > 0 ? (
                  <Doughnut
                    key={cfg.chartKey}
                    data={cfg.data}
                    options={cfg.options}
                    plugins={[centerTextPlugin, ChartDataLabels]}
                  />
                ) : (
                  <Empty />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ChartPackaging;
