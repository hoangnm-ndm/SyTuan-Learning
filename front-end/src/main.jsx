import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// function App() {
//   return (
//     <div style={{ backgroundColor: "red", fontSize: "24px" }} className={"div"}>
//       noi dung the div
//     </div>
//   );
// }

// const c = `a + b = ${a  + b}`
// * component chủ yếu là giao diện, hầu như không có logic bussiness thì gọi là dumb component
// * component Quản lý logic nghiệp vụ, trạng thái (state) và kết nối dữ liệu là Smart component

// const app = document.getElementById("root");
// const rootReactElement = createRoot(app);
// rootReactElement.render(<App />);
