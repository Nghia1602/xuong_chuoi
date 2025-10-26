import React from "react";
import { Table, ConfigProvider, Empty } from "antd";
import "./TableDataTotal.css";

const DataStatistics = ({ tongCong }) => {
  if (!tongCong) {
    return (
      <div
        style={{
          width: "100%",
          height: "225px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Empty description="No data" />
      </div>
    );
  }
  const colorMap = {
    "Buồng đầu vào": "#FCD617", // vàng
    "Buồng đạt": "#7DC241", // xanh lá
    "Buồng lỗi": "#EB1010", // đỏ
    "Khối lượng (tấn)": "#6A8FD8", // xanh dương
    "Năng suất (kg/buồng)": "#5A9CCA", // xanh lam nhạt
  };
  const rows = tongCong?.rows || [];
  const headers = tongCong?.headers || [];

  // ✅ Tính tổng hoặc trung bình cho từng loại dữ liệu
  const dataTotal = rows.map((item) => {
    const values = item.value || [];

    let totalValue = 0;
    if (item.name.includes("Năng suất")) {
      // Trung bình năng suất
      const sum = values.reduce((a, b) => a + b, 0);
      totalValue = (sum / values.length).toFixed(2);
    } else {
      // Tổng cho các loại còn lại
      totalValue = values.reduce((a, b) => a + b, 0).toFixed(0);
    }

    return {
      name: item.name,
      value: totalValue,
      color: colorMap[item.name] || "#ffffff",
    };
  });

  // ✅ Thêm dòng tổng số nông trường (theo headers)
  dataTotal.unshift({
    name: "Số nông trường",
    value: headers.length,
    color: "#ffffff",
  });

  const columns = [
    {
      dataIndex: "name",
      key: "name",
      width: "75%",

      render: (text) => (
        <div
          className="truncate font-be-vietnam-pro text-sm"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {text}
        </div>
      ),
    },
    {
      dataIndex: "value",
      key: "value",
      width: "25%",
      render: (value) => (
        <div className="font-be-vietnam-pro text-sm">{value}</div>
      ),
    },
  ];

  const rowClassName = (record) => record.color;

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
        className="custom-tabletotal"
        dataSource={dataTotal}
        bordered
        columns={columns}
        pagination={false}
        rowClassName={rowClassName}
        rowKey="name"
        style={{ width: "100%", tableLayout: "auto", height: "100%" }}
        scroll={{ x: 250 }}
        showHeader={false}
        onRow={(record) => ({
          style: {
            backgroundColor: record.color,
            color: record.color !== "#ffffff" ? "white" : "black", // 👉 nếu nền có màu thì chữ trắng
            fontWeight: 500,
          },
        })}
      />
    </ConfigProvider>
  );
};

export default DataStatistics;
