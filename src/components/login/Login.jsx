import React, { useState } from "react";
import api from "../../api";

const Login = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/auth/login", { username, password });

      // 💡 SỬA LỖI Ở ĐÂY: Truy cập qua res.data.data
      const { accessToken, refreshToken, user } = res.data.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      // Kiểm tra và lưu token

      onClose({
        ...user,
        accessToken: accessToken,
        refreshToken: refreshToken,
      }); // ✅ userData giờ sẽ có user info và token

      alert("Đăng nhập thành công!");
      // Vui lòng đảm bảo bạn đã xóa dòng onClose() thứ hai như đã hướng dẫn trước đó
      onClose(); // ❌ Dòng này phải được xóa (hoặc chỉ nên gọi 1 lần)
    } catch (err) {
      setError(
        err.response?.data?.message || "Sai tên đăng nhập hoặc mật khẩu!"
      );
    }
  };
  return (
    // Overlay full màn hình, nền mờ
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
      onClick={() => onClose(null)}
    >
      {/* Modal chính */}
      <div
        className="w-[50rem] h-[30rem] bg-white rounded-[30px] relative flex"
        onClick={(e) => e.stopPropagation()} // tránh click bên trong modal đóng popup
      >
        {/* Nút đóng modal */}
        <button
          className="absolute top-4 right-4 text-white text-3xl font-bold"
          onClick={() => onClose(null)}
        >
          &times;
        </button>

        <div className="flex flex-col  justify-center items-center items-center w-[50%] h-full">
          <div className="pb-[5px]">
            <img
              src="/images/logo_login_thaco_agri.png"
              className="h-[100px]"
            />
          </div>
          <div className="h-[2.5rem] text-[1.5rem] font-bold text-[#66BA11] text-be-vietnam-pro flex items-center">
            Đăng nhập
          </div>
          <div className="flex flex-col justify-between gap-5 h-[150px] ">
            <input
              type="text"
              placeholder="Tên hoặc MSNV"
              className="w-[300px] h-[35px] bg-[#EEEEEE50] rounded-[5px] pl-2 border border-1-c6c6c6 font-be-vietnam-pro text-sm"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              className="w-[300px] h-[35px] bg-[#EEEEEE50] pl-2 rounded-[5px] border border-1-c6c6c6 font-be-vietnam-pro text-sm"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="primary"
              className="w-[300px] h-[35px] bg-[#66BA11] rounded-[5px] text-white font-be-vietnam-pro text-sm"
              onClick={handleLogin}
            >
              Đăng nhập
            </button>
          </div>
          {error && <p className="text-red-500 mt-3">{error}</p>}
          <div></div>
        </div>
        <div className="bg-[#66BA11] w-[50%] rounded-l-[40px] rounded-r-[30px] gap-3 flex flex-col justify-center items-center">
          <span className="font-bold text-white text-[20px]">Xin chào!</span>
          <span className="text-white text-[16px] w-[80%] text-center" >Tạo tài khoản để truy cập toàn bộ tính năng của trang web</span>
          <button className="bg-[#66BA11] text-white cusor-pointer w-[30%] h-[30px] rounded-[5px] border border-1-white">Đăng ký</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
