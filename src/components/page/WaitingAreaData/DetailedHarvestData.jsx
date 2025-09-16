import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/reset.css";
import "./DetailedHarvestData"
// import "./TableData.css";
import { Table, Tag, Space } from "antd";

const DetailedHarvestData = ({ rawData }) => {
    const [pageSize, setPageSize] = useState(5);
  const columns = rawData.headers.map((header) => ({
    title: header,
    dataIndex: header,
    key: header,
    align: "center",
    render: (value) => (
      <div className="whitespace-nowrap overflow-hidden text-ellipsis ">
        {value}
      </div>
    ),
  }));

  const dataSource = rawData.rows.map((row, index) => {
    const rowData = { key: index };
    rawData.headers.forEach((header, i) => {
      rowData[header] = row.value[i];
    });
    return rowData;
  });

  return (
    <Table
    className="text-sm font-be-vietnam-pro"
      columns={columns}
      bordered
      dataSource={dataSource}
      //   pagination={false}
      pagination={{
        pageSize: pageSize, // Số dòng trên mỗi trang
        showSizeChanger: true, // Cho phép người dùng thay đổi số dòng hiển thị
        pageSizeOptions: ([5, 10, 20]), // Các tùy chọn số dòng
        onShowSizeChange: (current, size) => {
          setPageSize(size); 
        },
      }}
      rowKey="key"
      scroll={{ x: 1000 }}
      style={{ width: "100%", height: "100%",  }}
    />
  );
};
// === STEP 1: Define Columns ===

// createRoot(document.getElementById('root')).render(<TableData />);
export default DetailedHarvestData;
