import React from "react";
import { Table, ConfigProvider, Empty } from "antd";
import "./TableDataTotal.css";

const DataStatistics = ({ tableData }) => {
  if (!tableData || !tableData.headers || !tableData.rows) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Empty description="No data" />
      </div>
    );
  }

  const numberOfFields = tableData.headers.length;

  const dataTotal = tableData.rows.map((row) => {
    let totalValue = row.value.reduce((sum, v) => sum + v, 0);

    // Nếu là năng suất, chia cho số nông trường
    if (row.name.toLowerCase().includes("năng suất")) {
      totalValue = totalValue / numberOfFields;
      // Làm tròn 2 chữ số thập phân
      totalValue = Math.round(totalValue * 100) / 100;
    }

    return {
      name: row.name,
      value: totalValue,
      color: row.color,
    };
  });

  // Thêm row "Số nông trường"
  dataTotal.unshift({
    name: "Số nông trường",
    value: numberOfFields,
    color: "bg-[#FFFFFF]",
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
      />
    </ConfigProvider>
  );
};

export default DataStatistics;
