import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate, useParams } from "react-router-dom";
import GiamSatChung from "../components/page/giam_sat_chung/giamsatchung_xuongchuoi";
import Khutramcho from "../components/page/khuTramCho/khuTramcho";
import PackagingArea from "../components/page/PackagingArea/PackagingArea";
const XuongPage = () => {
  const { xuongId, section } = useParams();

  switch (section) {
    case "giam-sat-chung":
      return <GiamSatChung xuongId={xuongId} />;
    case "khu-tram-cho":
      return <Khutramcho xuongId={xuongId} />;
    case "khu-dong-goi":
      return <PackagingArea xuongId={xuongId} />;
    // case 'kho-mat': return <KhoMatPage xuongId={xuongId} />;
    // case 'xuat-kho': return <XuatKhoPage xuongId={xuongId} />;
    // case 'cai-dat': return <CaiDatPage xuongId={xuongId} />;
    default:
      return <Navigate to={`/xuong/${xuongId}/giam-sat-chung`} />;
  }
};

// Main App với Router
const AreaRouter = () => (
  <div style={{ fontFamily: "Arial, sans-serif" , width:"100%", height: "100%" }}>
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/xuong/bp1-1/giam-sat-chung" replace />}
      />
      <Route path="/giam-sat-chung" element={<GiamSatChung />} />
      <Route path="/xuong/:xuongId/:section" element={<XuongPage />} />
      <Route path="*" element={<div>404 - Không tìm thấy trang</div>} />
    </Routes>
  </div>
);

export default AreaRouter;
