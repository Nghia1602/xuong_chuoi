import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/reset.css";
import "./TableData.css";
import { Table, Tag, Space } from "antd";

const TableData = ({ rawData }) => {
  const columns = [
    {
      title: "Nông trường",
      dataIndex: "name",
      key: "name",
      fixed: "right",
      minWidth: 200,
    },
    ...rawData.headers.map((header) => ({
      title: header,
      dataIndex: header,
      key: header,
      align: "center",
      minWidth: 40,
      render: (value) => (
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">
          {value}
        </div>
      ),
    })),
  ];
  // === STEP 2: Raw Data ===

  // === STEP 3: Convert to dataSource ===
  const dataSource = rawData.rows.map((row, index) => {
    const rowData = {
      key: index,
      name: row.name,
      color: row.color,
    };

    rawData.headers.forEach((header, i) => {
      rowData[header] = row.value[i];
    });

    return rowData;
  });
  const rowClassName = (record) => record.color;
  // === STEP 4: Render Table ===
  return (<Table
    className="custom-table"
    pagination={false}
    bordered
    columns={columns}
    dataSource={dataSource}
    rowClassName={rowClassName}
    rowKey="name"
    scroll={{ x: 1000 }}
    style={{ tableLayout: "auto", width: "100%", height: "100%" }}
  />)
  
};
// === STEP 1: Define Columns ===

// createRoot(document.getElementById('root')).render(<TableData />);
export default TableData;
