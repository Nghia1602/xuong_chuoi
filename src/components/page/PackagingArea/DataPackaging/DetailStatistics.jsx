import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { DatePicker, Button, Select, Table, notification } from "antd";
import Title from "./Title";
import { Space } from "antd";
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

const DetailStatisticsPackaging = ({ rawDataTable, dataTongCong, data }) => {
  const { Option } = Select;
  const yesterday = dayjs().subtract(1, "day");
  const [selectDate, setSelectDate] = useState(yesterday);
  const [selectModule, setSelectModule] = useState(null);
  const [modules, setModules] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [key, setKey] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const onChange = (date, dateString) => {
    setSelectDate(date);
  };
  const location = useLocation();
  const path = location.pathname;
  const xuongIdMap = {
    "xuong-bp1-1": 1,
    "xuong-bp1-2": 2,
  };
  const xuongSlug = path.split("/").find((p) => p.startsWith("xuong-")) || "";
  const xuongId = xuongIdMap[xuongSlug] || 1;
  const onChangeModule = (value) => {
    setSelectModule(value);
  };

  console.log("dataTable", dataTable);

  //  lọc theo line
  const lineFilters = useMemo(() => {
    const uniqueLines = [...new Set(dataTable.map((item) => item.line))];
    return uniqueLines.map((line) => ({ text: line, value: line }));
  }, [dataTable]);

  //  lọc theo thị trường
  const uniqueMarkets = [...new Set(dataTable.map((item) => item.thiTruong))];
  const marketFilters = uniqueMarkets.map((market) => ({
    text: market,
    value: market,
  }));

  //  lọc theo phẩm cấp
  const uniqueTypes = [...new Set(dataTable.map((item) => item.loaiPhamCap))];
  const typeFilters = uniqueTypes.map((type) => ({ text: type, value: type }));

  const columnsTable = [
    {
      title: "STT",
      dataIndex: "stt",
      width: 70,
      align: "center",
    },
    {
      title: "Thời gian",
      dataIndex: "thoiGian",
      width: 400,
      sorter: (a, b) => new Date(a.thoiGian) - new Date(b.thoiGian),
      render: (text) => (text ? dayjs(text).format("DD/MM/YYYY HH:mm:ss") : ""),
    },
    {
      title: "Line",
      dataIndex: "line",
      width: 300,
      filters: lineFilters,
      onFilter: (value, record) => record.line === value,
    },
    {
      title: "Thị trường",
      dataIndex: "thiTruong",
      width: 350,
      filters: marketFilters,
      onFilter: (value, record) => record.thiTruong === value,
    },
    {
      title: "Loại phẩm cấp",
      dataIndex: "loaiPhamCap",
      width: 350,
      filters: typeFilters,
      onFilter: (value, record) => record.loaiPhamCap === value,
    },
    {
      title: "Chất lượng",
      dataIndex: "isThungDat",
      // width: 200,
      filters: [
        { text: "Đạt", value: 1 },
        { text: "Không đạt", value: 0 },
      ],
      onFilter: (value, record) => record.isThungDat === value,
      render: (text) => (
        <span className={text === 1 ? "font-medium text-[#0FC41F]" : ""}>
          {text === 1 ? "✅ Đạt" : "❌ Không đạt"}
        </span>
      ),
    },
  ];

  const handleDownload = async () => {
    if (!selectDate || !selectModule) {
      notification.warning({
        message: "Cảnh báo",
        description: "Vui lòng chọn đầy đủ thông tin",
      });
      return;
    }

    try {
      const response = await api.get("/khu-dong-goi/thong-ke-chi-tiet", {
        params: {
          statisticDate: selectDate.format("YYYY-MM-DD"),
          module: selectModule,
          xuong_id: xuongId,
        },
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.download = `Thong_ke_chi_tiet_${selectDate.format(
        "YYYY-MM-DD"
      )}_Module${selectModule}.xlsx`;
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      notification.error({
        message: "Lỗi",
        description: "Không thể tải file báo cáo",
      });
    }
  };

  useEffect(() => {
    const fetchDataTable = async () => {
      if (!selectDate || !xuongId || !selectModule) return;
      setLoading(true);
      try {
        const res = await api.get("/khu-dong-goi/thong-ke-chi-tiet", {
          params: {
            page: pagination.current,
            pageSize: pagination.pageSize,
            module: selectModule,
            statisticDate: selectDate.format("YYYY-MM-DD"),
            xuong_id: xuongId,
          },
        });

         const responseData = res?.data?.data?.products || [];

        setDataTable(
          responseData.map((row, index) => ({
            ...row,
            stt: (pagination.current - 1) * pagination.pageSize + index + 1,
          }))
        );

        setPagination((prev) => ({
          ...prev,
          total: res?.data?.total || 0,
        }));
      } catch (error) {
        console.error("Lỗi khi fetch data:", error);
        notification.error({
          message: "Lỗi",
          description: "Không thể tải dữ liệu bảng",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchDataTable();
  }, [
    selectDate,
    xuongId,
    selectModule,
    pagination.current,
    pagination.pageSize,
  ]);
  const handleTableChange = (newPagination, filters, sorter) => {
    setPagination({
      ...pagination,
      current: newPagination.current,
      pageSize: newPagination.pageSize,
    });
  };

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const res = await api.get("/khu-dong-goi/thong-ke-chi-tiet");
        const products = res.data?.data?.products || [];

        const uniqueModules = [...new Set(products.map((item) => item.tenModule))];

        const formattedModules = uniqueModules.map((name) => ({
          label: name,
          value: name,
        }));

        setModules(formattedModules);
      } catch (err) {
        console.error("Lỗi khi lấy danh sách module:", err);
        notification.error({
          message: "Lỗi",
          description: "Không thể tải danh sách module!",
        });
      }
    };

    fetchModules();
  }, [xuongId]);

  // useEffect(() => {
  //   setKey((pre) => !pre);
  // }, [selectDate, selectModule]);
  return (
    <div className="w-full h-full flex flex-col items-center gap-3 ">
      <div className=" w-full flex flex-col gap-1 items-center">
        {/* //h-[22.5rem] */}
        <div className="h-[2.5rem] w-[100%] flex">
          <div className="flex gap-[0.25rem] pl-[0.4rem] pt-[0.4rem]">
            <Select
              value={selectModule}
              onChange={onChangeModule}
              style={{ width: 130 }}
              placeholder="Chọn Module"
              options={modules}
            ></Select>
            <div>
              <DatePicker onChange={onChange} value={selectDate} />
            </div>
            <div>
              <Button
                type="primary"
                icon={<DownloadOutlined />}
                onClick={handleDownload}
                className="bg-btn-success hover:bg-btn-success-hover text-[#fff]"
              >
                Báo cáo
              </Button>
            </div>
          </div>
        </div>

        <div className=" w-[100%] flex justify-center gap-2">
          <div className="flex flex-col w-[99.5%]">
            <Title title={`Bảng thống kê chi tiết kết quả sản xuất `} />
            <Table
              size="small"
              dataSource={dataTable}
              columns={columnsTable}
              pagination={{
                ...pagination,
                showSizeChanger: true,
                showTotal: (total, range) =>
                  `${range[0]}-${range[1]} of ${total} items`,
              }}
              onChange={handleTableChange}
              scroll={{ x: "max-content" }}
              rowKey="stt"
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailStatisticsPackaging;
