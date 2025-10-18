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

  const dataTotal = [
    {
      name: "Số nông trường",
      value: tongCong.tong_so_nong_truong ?? 0,
      color: "bg-white",
    },
    // {
    //   name: "Số nông trường hoạt động",
    //   value: tongCong.tong_so_nong_truong_hoat_dong ?? 0,
    //   color: "bg-white",
    // },
    {
      name: "Năng suất buồng đạt",
      value: tongCong.nang_suat_buong_dat ?? 0,
      color: "bg-[#5A9CCA]",
    },
    {
      name: "Tổng KL buồng đạt",
      value: tongCong.tong_khoi_luong_buong_dat ?? 0,
      color: "bg-[#6A8FD8]",
    },
    {
      name: "Tổng số buồng",
      value: tongCong.tong_so_buong ?? 0,
      color: "bg-[#FCD617]",
    },
    {
      name: "Tổng buồng đạt",
      value: tongCong.tong_so_buong_dat ?? 0,
      color: "bg-[#7DC241]",
    },
    {
      name: "Tổng buồng lỗi",
      value: tongCong.tong_so_buong_loi ?? 0,
      color: "bg-[#EB1010]",
    },
  ];

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
