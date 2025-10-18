import { useState, useEffect } from "react";
import api from "./api";
import Header from "./components/header/header";
// import Tabs from "./components/Tabs/Tab";
import Content from "./components/content/content";
import "./App.css";
import PageWrapper from "./components/Test/PageWrapper";
import Login from "./components/login/Login";

function App() {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState(null);
  const [currentLocation, setCurrentLocation] = useState({
    xuong: "",
    khu: "",
  });
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = (user) => {
    setIsLoginOpen(false);
    // if (userInfo) {
    //   setUserData(userInfo); // userInfo gồm cả id, username, role, token
    //   console.log("Thông tin đăng nhập:", userInfo);
    // }
    // ✅ nếu user đăng nhập thành công thì lưu luôn
    if (user) {
      setUserData(user);
    } else {
      console.log("Đóng login mà không đăng nhập");
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api
        .get("/users/me")
        .then((res) => setUserData(res.data))
        .catch(() => localStorage.removeItem("token"));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserData(null);
    setIsLoginOpen(true);
  };
  console.log("currenLocation", currentLocation);
  console.log("userData", userData);
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
        <Header
          style={{}}
          location={currentLocation}
          onLoginClick={openLogin}
          user={userData}
          onLogout={handleLogout}
        />
        <div className="h-[882px] w-full">
          {/* <Tabs /> */}
          <Content setCurrentLocation={setCurrentLocation} />
          {userData && (
            <div style={{ padding: 20 }}>
              <h3>Thông tin người dùng:</h3>
              <pre>{JSON.stringify(userData, null, 2)}</pre>
            </div>
          )}
          {/* <Login /> */}
          {isLoginOpen && <Login onClose={closeLogin} />}
        </div>
      </div>
    </>
  );
}

export default App;
