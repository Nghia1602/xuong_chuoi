
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
const { createRoot } = ReactDOM;
import { Table, Tag, Space } from 'antd';

// === STEP 1: Define Columns ===
const columns = [
  {
    title: 'Tên chỉ số',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  ...Array.from({ length: 12 }, (_, i) => ({
    title: `Tháng ${i + 1}`,
    dataIndex: `${i + 1}`,
    key: `${i + 1}`,
    align: 'center',
  })),
];

// === STEP 2: Raw Data ===
const rawData = {
  headers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  rows: [
    {
      name: "Buồng đầu vào",
      value: [310, 337, 345, 302, 348, 322, 300, 379, 349, 381, 424, 313],
      color: "bg-[#FCD617]",
    },
    {
      name: "Buồng đạt",
      value: [304, 293, 326, 295, 345, 283, 275, 352, 320, 358, 390, 284],
      color: "bg-[#7DC241]",
    },
    {
      name: "Buồng lỗi",
      value: [6, 44, 19, 7, 3, 39, 25, 27, 29, 23, 34, 29],
      color: "bg-[#EB1010]",
    },
    {
      name: "Khối lượng (tấn)",
      value: [
        10.7, 9.81, 11.38, 9.68, 12.45, 9.74, 9.32, 12.5, 10.46, 13.0, 13.1,
        9.87,
      ],
      color: "bg-[#6A8FD8]",
    },
    {
      name: "Năng suất (kg/buồng)",
      value: [
        35.2, 33.5, 34.9, 32.8, 36.1, 34.4, 33.9, 35.5, 32.7, 36.3, 33.6, 34.74,
      ],
      color: "bg-[#5A9CCA]",
    },
  ],
};

// === STEP 3: Convert to dataSource ===
const dataSource = rawData.rows.map((row, index) => {
  const monthData = {};
  row.value.forEach((val, i) => {
    monthData[i + 1] = val;
  });

  return {
    key: index + 1,
    name: row.name,
    color: row.color,
    ...monthData,
  };
});

// === STEP 4: Render Table ===
const App = () => <Table columns={columns} dataSource={dataSource} scroll={{ x: 1200 }} />;
const TableData = App;

createRoot(document.getElementById('root')).render(<TableData />);
export default TableData