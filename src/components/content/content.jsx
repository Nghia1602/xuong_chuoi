import React from "react";
import GiamSatChung from "../page/giam_sat_chung/giamsatchung_xuongchuoi";
import Khutramcho from "../page/khuTramCho/khuTramcho";
import WaitingAreaData from "../page/WaitingAreaData/WaitingAreaData";
import PackagingArea from "../page/PackagingArea/PackagingArea";
import AreaRouter from "../../Router/AreaRouter";
import Home from "../page/Home/Home";
import Modules from "../page/PackagingArea/Module/Module";
import OverView from "../page/PackagingArea/Overview/Overview";
const Content = () => {
  return (
    <div
      style={{
        width: "100%",
        // minHeight: "882px", //847px
        // border: "1px solid red",
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
      }}
    >
      {/* <GiamSatChung/> */}
      {/* <Khutramcho/> */}
      {/* <WaitingAreaData/> */}
      {/* <PackagingArea/> */}
      <AreaRouter />
      {/* <Modules/> */}
      {/* <OverView/> */}
      {/* <Home/> */}
    </div>
  );
};
export default Content;
