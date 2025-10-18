import axios from "axios";

// 💡 Cờ và Hàng đợi cho logic Refresh Token
let isRefreshing = false;
let failedQueue = [];

// Hàm xử lý các request bị hoãn
const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

const api = axios.create({
  baseURL: "http://10.14.80.251:3001", //
});

// Interceptor Request: Gắn Access Token (dưới tên 'token') vào Header
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Hàm đăng xuất chung
const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken"); // Chuyển hướng về trang chính/đăng nhập
  window.location.href = "/";
};

// Interceptor Response: Xử lý lỗi 401 và Refresh Token
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config; // 1. Kiểm tra nếu không phải lỗi 401 hoặc đã thử lại
    if (error.response?.status !== 401 || originalRequest._retry) {
      // Nếu vẫn là lỗi 401 (hoặc lỗi khác) sau khi refresh, hoặc không phải lỗi hết hạn token
      if (error.response?.status === 401) {
        console.warn("Token không hợp lệ hoặc đã bị revoke. Đăng xuất.");
        logout();
      }
      return Promise.reject(error);
    } // 2. Nếu đang trong quá trình refresh, hoãn request hiện tại

    if (isRefreshing) {
      return new Promise(function (resolve, reject) {
        failedQueue.push({ resolve, reject });
      })
        .then((token) => {
          // Gán token mới và lặp lại request gốc
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return api(originalRequest);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    } // 3. Bắt đầu quá trình làm mới token

    originalRequest._retry = true; // Đánh dấu request này đã thử lại
    isRefreshing = true;
    const refreshToken = localStorage.getItem("refreshToken");
     // 3.1: Nếu không có Refresh Token, đăng xuất luôn.
    if (!refreshToken) {
      isRefreshing = false; // Đảm bảo reset cờ
      logout();
      return Promise.reject(error);
    } // 4. Thực hiện gọi API làm mới token
    try {
      // 🛠️ CHỈNH SỬA: Tạo một request axios KHÔNG có header Authorization
      const refreshRes = await axios.post(
        `${api.defaults.baseURL}/auth/refresh`, // ✅ Endpoint đã được xác nhận
        { refreshToken },
        // 🛠️ Thêm config để đảm bảo request làm mới token không gửi Access Token cũ
        {
          headers: {
            Authorization: undefined, // Loại bỏ header Authorization (Access Token cũ)
          },
          
        }
        
      );
      console.log("refreshToken", refreshToken); // 🛠️ Lấy Access Token mới, kiểm tra cả 2 cấp độ data

      const newAccessToken =
        refreshRes.data?.data?.accessToken || refreshRes.data?.accessToken;
      if (!newAccessToken) {
        throw new Error("Không nhận được Access Token mới.");
      } // 5. Lưu Access Token mới

      localStorage.setItem("accessToken", newAccessToken); // 6. Cập nhật header mặc định và header request gốc
      api.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`; // Xử lý hàng đợi
      processQueue(null, newAccessToken); // 7. Lặp lại yêu cầu gốc
      return api(originalRequest);
    } catch (_error) {
      // 8. Thất bại khi làm mới token -> Đăng xuất
      processQueue(_error, null);
      logout();
      return Promise.reject(_error);
    } finally {
      // Đảm bảo isRefreshing luôn được set về false, ngay cả khi thành công hoặc thất bại.
      isRefreshing = false;
    }
  }
);

export default api;
