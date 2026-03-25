// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeddingInvitation from "../components/WeddingInvitation";
import HeaderPage from "../components/HeaderPage/HeaderPage";

const style = {
  width: 480,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "black",
  margin: "0",
  padding: "0",
};
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div style={style}>
      <HeaderPage />
    {/* <WeddingInvitation /> */}
      
    </div>
  </StrictMode>,
);
