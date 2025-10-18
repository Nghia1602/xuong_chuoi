// src/components/Test/PageWrapper.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Tabs from "../Tabs/Tab";
import axios from "axios";

import Khutramcho from "../page/khuTramCho/khuTramcho";
import PackagingArea from "../page/PackagingArea/PackagingArea";
import GiamSatChung from "../page/giam_sat_chung/giamsatchung_xuongchuoi";
// import WaitingAreaData from "../page/WaitingAreaData/WaitingAreaData";
import ChartTab from "../page/WaitingAreaData/Data/ChartTab";
import Parameter from "../page/WaitingAreaData/Parameter/Parameter";
import Modules from "../page/PackagingArea/Module/Module";
import OverView from "../page/PackagingArea/Overview/Overview";
const PageWrapper = ({ setCurrentLocation }) => {
  const { vung, xuong, khu, tab, subtab } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  console.log("Params:", { vung, xuong, khu, tab, subtab });

  // useEffect(() => {
  //   axios
  //     .get("http://10.14.80.251:3001/api/v1/plc")
  //     .then((res) => {
  //       console.log("Dữ liệu PLC:", res.data);
  //       // setPlcList(res.data);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  useEffect(() => {
    if (setCurrentLocation) setCurrentLocation({ xuong, khu });
    console.log("setCurrentLocation", setCurrentLocation);
    fetch("/Data/Data.json")
      .then((res) => res.json())
      .then((json) => {
        const khuData = json[vung]?.[xuong]?.[khu] || {};
        setData(khuData);
        console.log("khuData", khuData);
        if (khu === "khu-dong-goi" && tab === "giam-sat" && !subtab) {
          navigate("tong-quan", { replace: true });
        }
        if (khu && window.location.pathname.endsWith(khu)) {
          navigate(`giam-sat`, { replace: true });
        }
      });
  }, [vung, xuong, khu]);

  if (!data) return <div>Loading...</div>;

  // Render content theo khu + tab
  const renderContent = () => {
    switch (khu) {
      case "giam-sat-chung":
        return <GiamSatChung data={data} />;
      case "khu-tram-cho":
        if (tab === "giam-sat") {
          return <Khutramcho data={data} />;
        }
        if (tab === "du-lieu") {
          // Check subtab
          switch (subtab) {
            case "thong-so":
              return <Parameter data={data} />;
            case "bieu-do":
              return <ChartTab data={data} />;
            default:
              return <Parameter data={data} />;
          }
        }
      case "khu-dong-goi":
        if (tab === "giam-sat") {
          // Check subtab
          switch (subtab) {
            case "tong-quan":
              return <OverView data={data} />;
            case "module":
              return <Modules data={data} />;
            default:
              return <OverView data={data} />;
          }
        }
      default:
        return (
          <div className="w-full flex justify-center items-center">
            {khu} trống
          </div>
        );
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <Tabs /> {/* thanh tab */}
      <div
        style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default PageWrapper;
