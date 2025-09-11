import React from "react";
import GiamSatChung from "../page/giam_sat_chung/giamsatchung_xuongchuoi";
import Khutramcho from "../page/khuTramCho/khuTramcho";
const Content=() => {
  return <div style={{
        width: "100%",
        minHeight: "847px", //847px
        // border: "1px solid red",
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
        // boxSizing: "border-box",
        // fontFamily: "'Be Vietnam Pro',sans-serif ",
        // overflow:"hidden",
        // flexWrap: "wrap",
      }}>
    {/* <GiamSatChung/> */}
    <Khutramcho/>
  </div>;
};
export default Content;