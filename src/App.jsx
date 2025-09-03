import { useState } from "react";

import Header from "./components/header/header";
import Tabs from "./components/tabs/tabs";
import Content from "./components/page/giam_sat_chung/giamsatchung_xuongchuoi";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ width: "100vw",height: "100vh", border: "0.0625rem solid green" }}>
        <Header style={{ }} />
        <Tabs />
        <Content />
      </div>
    </>
  );
}

export default App;
