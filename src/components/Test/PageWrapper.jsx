import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Khutramcho from "../page/khuTramCho/khuTramCho";

const PageWrapper = () => {
  const { vung, xuong, khu } = useParams(); // lấy cả 3 param
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/Data/Data.json")
      .then((res) => res.json())
      .then((json) => {
        console.log("Full JSON:", json);
        console.log("Vùng:", vung, json[vung]);
        console.log("Xưởng:", xuong, json[vung]?.[xuong]);
        console.log("Khu:", khu, json[vung]?.[xuong]?.[khu]);
        const khuData = json[vung]?.[xuong]?.[khu];

        setData(khuData);
        console.log(4444444, khuData);
      });
    console.log(vung, xuong, khu);
  }, [vung, xuong, khu]);

  if (!data) return <div>Loading...</div>;

  switch (khu) {
    case "khu-tram-cho":
      console.log(2222222222, data);
      return <Khutramcho data={data} />;
      console.log(33333333, data);
    default:
      return <div>Chưa có component cho {khu}</div>;
  }
};

export default PageWrapper;
