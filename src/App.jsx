import { useState } from "react";

import Header from "./components/header/header";
import Tabs from "./components/Tabs/TabWaitingArea";
import Content from "./components/content/content";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ width: "100vw",height: "954px",display:"flex",justifyContent:"center", flexDirection:"column", }}>
        <Header style={{ }} />
        <Tabs />
        <Content />
      </div>
    </>
  );
}

export default App;
