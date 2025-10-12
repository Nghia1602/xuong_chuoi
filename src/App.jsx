import { useState } from "react";

import Header from "./components/header/header";
// import Tabs from "./components/Tabs/Tab";
import Content from "./components/content/content";
import "./App.css";
import PageWrapper from "./components/Test/PageWrapper";
import Login from "./components/login/Login";

function App() {
  const [count, setCount] = useState(0);
  const [currentLocation, setCurrentLocation] = useState({
    xuong: "",
    khu: "",
  });
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);
  console.log("currenLocation", currentLocation);
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "954px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Header style={{}} location={currentLocation} onLoginClick ={openLogin} />
        <div className="h-[882px] w-full">
          {/* <Tabs /> */}
          <Content setCurrentLocation={setCurrentLocation} />
          {/* <Login /> */}
          {isLoginOpen && <Login onClose={closeLogin}/>}
        </div>
      </div>
    </>
  );
}

export default App;
