import React from "react";

const Login = ({ onClose }) => {
  return (
    // Overlay full màn hình, nền mờ
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
      onClick={onClose}
    >
      {/* Modal chính */}
      <div
        className="w-[50rem] h-[40rem] bg-white rounded-lg relative"
        onClick={(e) => e.stopPropagation()} // tránh click bên trong modal đóng popup
      >
        {/* Nút đóng modal */}
        <button
          className="absolute top-4 right-4 text-white text-3xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="flex flex-col justify-around items-center w-[50%] h-full">
            <div></div>
            <div></div>
            <input type="text" placeholder="Tên và MSNV" className="w-[300px] h-[35px] bg-white-400 rounded-[5px] pl-2 border border-1-c6c6c6"/>
            <input type="password" placeholder="Mật khẩu" className="w-[300px] h-[35px] bg-white-400 pl-2 rounded-[5px] border border-1-c6c6c6"/>
            <button type="primary" className="w-[300px] h-[35px] bg-blue-400"> Đăng nhập</button>
            <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Login;
