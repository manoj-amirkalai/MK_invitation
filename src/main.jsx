// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Temple from "./components/Temple/Temple";
import Countdown from "./components/Countdown/Countdown";
import Header from "./components/Header/Header";
import "./main.css";

const style = {
  width: 480,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "black",
  margin: "0 !important",
  padding: "0 !important",
};
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div style={style}>
      <Header/>
      <Temple />
      <Countdown/>
      
    </div>
  </StrictMode>,
);
