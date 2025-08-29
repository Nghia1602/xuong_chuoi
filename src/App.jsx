import { useState } from "react";

import Header from "./components/header/header";
import Tabs from "./components/tabs/tabs";
import Content from "./components/content/content";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ width: "1920px",height: "952px", border: "1px solid green" }}>
        <Header style={{ }} />
        <Tabs />
        <Content />
      </div>
    </>
  );
}

export default App;
