// src/components/Test/PageWrapper.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Tabs from "../Tabs/Tab";
import Khutramcho from "../page/khuTramCho/khuTramCho";
import PackagingArea from "../page/PackagingArea/PackagingArea";
import GiamSatChung from "../page/giam_sat_chung/giamsatchung_xuongchuoi";
import WaitingAreaData from "../page/WaitingAreaData/WaitingAreaData";

const PageWrapper = () => {
  const { vung, xuong, khu, tab } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/Data/Data.json")
      .then((res) => res.json())
      .then((json) => {
        const khuData = json[vung]?.[xuong]?.[khu];
        setData(khuData);
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
        return tab === "giam-sat" ? (
          <GiamSatChung data={data} />
        ) : (
          <WaitingAreaData data={data} />
        );
      case "khu-tram-cho":
        return tab === "giam-sat" ? (
          <Khutramcho data={data} />
        ) : (
          <WaitingAreaData data={data} />
        );
      case "khu-dong-goi":
        return tab === "giam-sat" ? (
          <PackagingArea data={data} />
        ) : (
          <WaitingAreaData data={data} />
        );
      default:
        return <div>Chưa có component cho {khu}</div>;
    }
  };

  return (
    <div style={{ width: "100%", }}>
      <Tabs /> {/* thanh tab */}
      <div style={{ marginTop: "1rem" }}>{renderContent()}</div>
    </div>
  );
};

export default PageWrapper;
