import React from "react";
import "antd/dist/reset.css";
import "./TableData.css";
import { Table, ConfigProvider, Empty } from "antd";

const colorMap = {
  "Năng suất (kg/buồng)": "#5A9CCA",
  "Khối lượng (tấn)": "#6A8FD8",
  "Buồng đầu vào": "#FCD617",
  "Buồng đạt": "#7DC241",
  "Buồng lỗi": "#EB1010",
};

const TableData = ({ rawData }) => {
  if (!rawData || !rawData.headers || !rawData.rows) {
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

  // === STEP 1: Define Columns ===
  const columns = [
    {
      title: "Nông trường",
      dataIndex: "name",
      key: "name",
      fixed: "right",
      width: 200,
      render: (text) => (
        <div className="whitespace-nowrap text-ellipsis font-medium">
          {text}
        </div>
      ),
    },
    ...rawData.headers.map((header) => ({
      title: <span className="font-medium">{header}</span>,
      dataIndex: header,
      key: header,
      align: "center",
      render: (value) => (
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">
          {value}
        </div>
      ),
    })),
  ];

  // === STEP 2: Convert rawData to dataSource ===
  const dataSource = rawData.rows.map((row, index) => {
    const rowData = {
      key: index,
      name: row.name,
      color: colorMap[row.name] || "", // ánh xạ màu nền từ colorMap
    };
    rawData.headers.forEach((header, i) => {
      rowData[header] = row.value[i];
    });
    return rowData;
  });

  // === STEP 3: Render Table ===
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
        className="custom-table"
        pagination={false}
        bordered
        columns={columns}
        dataSource={dataSource}
        rowKey="name"
        scroll={{ x: 1000 }}
        style={{ tableLayout: "auto", width: "100%", height: "100%" }}
        // ✅ Cách đúng để thêm màu nền từng dòng
        onRow={(record) => ({
          style: {
            backgroundColor: record.color || "white",
            color: record.color !== "#ffffff" ? "white" : "black", // 👉 nếu nền có màu thì chữ trắng
            fontWeight: 500,
          },
        })}
      />
    </ConfigProvider>
  );
};

export default TableData;
