import { Routes, Route, Navigate, Outlet } from "react-router-dom";


import GiamSatChung from "../components/page/giam_sat_chung/giamsatchung_xuongchuoi";
import Khutramcho from "../components/page/khuTramCho/khuTramcho";
import PackagingArea from "../components/page/PackagingArea/PackagingArea";
import WaitingAreaData from "../components/page/WaitingAreaData/WaitingAreaData";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/vung-snoul" element={<Outlet />}>
        {/* Giám sát chung của vùng */}
        <Route path="giam-sat-chung" element={<Outlet />} />

        {/* Các xưởng */}
        <Route path="xuong-bp1-1" element={<Outlet />}>
          <Route index element={<Navigate to="giam-sat-chung" replace />} />
          <Route path="giam-sat-chung" element={<GiamSatChung />} />
          <Route path="khu-tram-cho" element={<Khutramcho />} />
          <Route path="khu-dong-goi" element={<PackagingArea />} />
          {/* <Route path="kho-mat" element={< ></>} />
          <Route path="cai-dat" element={< ></>} />
          <Route path="xuat-kho" element={< ></>} /> */}
        </Route>

        <Route path="xuong-bp1-2" element={<Outlet />}>
          <Route path="giam-sat-chung" element={<GiamSatChung />} />
          <Route path="khu-tram-cho" element={<Outlet />}>
            <Route index element={<Navigate to="giam-sat" replace />} />
            <Route path="giam-sat-tram-cho" element={<Khutramcho />} />
            <Route path="du-lieu-tram-cho" element={<WaitingAreaData />} />
          </Route>
          <Route path="khu-dong-goi" element={<PackagingArea />}>
            <Route path="giam-sat-dong-goi" element={<PackagingArea />} />
            <Route path="du-lieu-dong-goi" element={<PackagingArea />} />
          </Route>

          {/* <Route path="kho-mat" element={< ></>} />
          <Route path="cai-dat" element={< ></>} />
          <Route path="xuat-kho" element={< ></>} /> */}
        </Route>

        <Route path="xuong-er1-1" element={<Outlet />}>
          <Route path="giam-sat-chung" element={<GiamSatChung />} />
          <Route path="khu-tram-cho" element={<Khutramcho />} />
          <Route path="khu-dong-goi" element={<PackagingArea />} />
          {/* <Route path="kho-mat" element={< ></>} />
          <Route path="cai-dat" element={< ></>} />
          <Route path="xuat-kho" element={< ></>} /> */}
        </Route>

        <Route path="xuong-er1-2" element={<Outlet />}>
          <Route path="giam-sat-chung" element={<GiamSatChung />} />
          <Route path="khu-tram-cho" element={<Khutramcho />} />
          <Route path="khu-dong-goi" element={<PackagingArea />} />
          {/* <Route path="kho-mat" element={< ></>} />
          <Route path="cai-dat" element={< ></>} />
          <Route path="xuat-kho" element={< ></>} /> */}
        </Route>
      </Route>

      {/* Các vùng khác bạn thêm tiếp bên dưới nếu có */}
    </Routes>
  );
}

export default AppRoutes;
