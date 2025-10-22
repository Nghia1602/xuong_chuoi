import React, { useState, useMemo } from "react";
import { Table, Empty, ConfigProvider } from "antd";
// import "antd/dist/reset.css";

const DetailedHarvestData = ({ rawData, selectedFarm }) => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
  });
  const filteredData = useMemo(() => {
        // Dùng optional chaining để tránh lỗi nếu rawData hoặc items là null/undefined
        if (!selectedFarm || !rawData?.items) return [];
        return rawData.items.filter(
            (item) => String(item.ma_nong_truong) === String(selectedFarm)
        );
    }, [rawData?.items, selectedFarm]);
  if (!rawData || !rawData.items ) {
    return (
      <div
        style={{
          width: "100%",
          // height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Empty description="No data" />
      </div>
    );
  }

 
  // 🧾 Tạo dữ liệu cho bảng
  const dataSource = filteredData.map((item, index) => ({
    key: index,
    "Buồng đầu vào (buồng)": item.tong_so_buong ?? 0,
    "Buồng đạt (buồng)": item.tong_so_buong_dat ?? 0,
    "Buồng lỗi (buồng)": item.tong_so_buong_loi ?? 0,
    "Khối lượng (tấn)": (item.tong_khoi_luong_buong_dat ?? 0).toFixed(2),
    "Năng suất (kg/buồng)": (item.nang_suat_buong_dat ?? 0).toFixed(2),
  }));

  // 🧱 Cột hiển thị
  const columns = [
    {
      title: "Buồng đầu vào (buồng)",
      dataIndex: "Buồng đầu vào (buồng)",
      align: "center",
      width:"20%"
    },
    {
      title: "Buồng đạt (buồng)",
      dataIndex: "Buồng đạt (buồng)",
      align: "center",
      width:"20%"
    },
    {
      title: "Buồng lỗi (buồng)",
      dataIndex: "Buồng lỗi (buồng)",
      align: "center",
      width:"20%"
    },
    {
      title: "Khối lượng (tấn)",
      dataIndex: "Khối lượng (tấn)",
      align: "center",
      width:"20%"
    },
    {
      title: "Năng suất (kg/buồng)",
      dataIndex: "Năng suất (kg/buồng)",
      align: "center",
      width:"20%"
    },
  ];

  const handleTableChange = (newPagination) => setPagination(newPagination);
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBorderRadius: 0,
          },
        },
      }}
    >
      <Table
        className="text-sm font-be-vietnam-pro"
        columns={columns}
        bordered
        dataSource={dataSource}
        pagination={{
          ...pagination,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "15", "20"],
          position: ["bottomRight"],
        }}
        onChange={handleTableChange}
        style={{ height: "100%", width: "100%",tableLayout: "fixed" }}
        size="small"
        scroll={{ y: 320 }}
      />
    </ConfigProvider>
  );
};
export default DetailedHarvestData;
