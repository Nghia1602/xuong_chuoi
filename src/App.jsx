import { useState } from "react";

import Header from "./components/header/header";
import Tabs from "./components/tabs/tabs";
import Content from "./components/content/content";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ width: "98.7vw",height: "98.9vh",display:"flex",justifyContent:"center", flexDirection:"column", }}>
        <Header style={{ }} />
     
        <Tabs />
        <Content />
      </div>
    </>
  );
}

export default App;
