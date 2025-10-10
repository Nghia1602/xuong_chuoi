import React, { useState } from "react";
import { Table } from "antd";
import "antd/dist/reset.css";

const DetailedHarvestData = ({ rawData, selectedFarm }) => {
   const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
  });
  if (!rawData) {
    return (
      <div className="flex justify-center items-center h-full text-gray-500">
        Không có dữ liệu để hiển thị
      </div>
    );
  }

  const columns = [
    { title: "Ngày", dataIndex: "Ngày", key: "Ngày", align: "center" },
    { title: "Buồng đầu vào (buồng)", dataIndex: "Buồng đầu vào (buồng)", key: "Buồng đầu vào (buồng)", align: "center" },
    { title: "Buồng đạt (buồng)", dataIndex: "Buồng đạt (buồng)", key: "Buồng đạt (buồng)", align: "center" },
    { title: "Buồng lỗi (buồng)", dataIndex: "Buồng lỗi (buồng)", key: "Buồng lỗi (buồng)", align: "center" },
    { title: "Khối lượng (tấn)", dataIndex: "Khối lượng (tấn)", key: "Khối lượng (tấn)", align: "center" },
    { title: "Năng suất (kg/buồng)", dataIndex: "Năng suất (kg/buồng)", key: "Năng suất (kg/buồng)", align: "center" },
  ];

  // Tạo danh sách dữ liệu gộp tất cả ngày
  const dataSource = Object.entries(rawData).flatMap(([date, table]) => {
    if (!table || !table.rows) return [];
    const rows = table.rows;

    // Lấy chỉ số tương ứng với nông trường được chọn
    const index = parseInt(selectedFarm, 10) - 1;

    const dauVao = rows.find((r) => r.name.includes("Buồng đầu vào"))?.value[index] || 0;
    const dat = rows.find((r) => r.name.includes("Buồng đạt"))?.value[index] || 0;
    const loi = rows.find((r) => r.name.includes("Buồng lỗi"))?.value[index] || 0;
    const khoiLuong = rows.find((r) => r.name.includes("Khối lượng"))?.value[index] || 0;
    const nangSuat = rows.find((r) => r.name.includes("Năng suất"))?.value[index] || 0;

    return {
      key: date,
      Ngày: date,
      "Buồng đầu vào (buồng)": dauVao,
      "Buồng đạt (buồng)": dat,
      "Buồng lỗi (buồng)": loi,
      "Khối lượng (tấn)": khoiLuong.toFixed(2),
      "Năng suất (kg/buồng)": nangSuat.toFixed(2),
    };
  });
  const onShowSizeChange = (current, pageSize) => {
  console.log(current, pageSize);
};
  const handleTableChange = (newPagination) => {
    setPagination(newPagination);}
  return (
    <Table
      className="text-sm font-be-vietnam-pro"
      columns={columns}
      bordered
      dataSource={dataSource}
      pagination={{ ...pagination,
        showSizeChanger: true,
        pageSizeOptions: ["5", "10", "15", "20"],
        
        position: ["bottomRight"],
      }}
      onChange={(pag) => handleTableChange(pag)}
      style={{height:"100%", width:'100%', }}
      size="small"
      scroll={{ y: 320 }}
    />
  );
};

export default DetailedHarvestData;
