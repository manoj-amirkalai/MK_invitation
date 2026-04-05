// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Temple from "./components/Temple/Temple";
import Countdown from "./components/Countdown/Countdown";
import Header from "./components/Header/Header";
import "./main.css";
import DomeGallery from "./components/css/DomeGallery/DomeGallery";

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
      <Header />
      <Temple />
      <Countdown />
      <div style={{ width: 480, height: "50vh" }}>
      <DomeGallery
  fit={0.8}
  minRadius={600}
  maxVerticalRotationDeg={0}
  segments={34}
  dragDampening={2}
  grayscale={false}
/>
      </div>
    </div>
  </StrictMode>,
);
