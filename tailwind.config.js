/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Code của bạn có sử dụng font family tùy chỉnh và animation
      // Bạn có thể thêm vào đây nếu cần, nhưng code gốc đã dùng style tag
      // nên có thể giữ nguyên mặc định.
    },
  },
  plugins: [],
}
