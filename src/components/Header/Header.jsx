import React from "react";
import PILLAR_B64 from "/assets/avif/templebg.avif";
import "./Header.css";
import vinayagar from "/assets/webp/vinayagar.webp";
import leftFlower from "/assets/png/lampbg.png";
import banner from "/assets/webp/bannerCardImage.webp";
import ScrollRevealcode from "../ScrollRevealcode";

const glassBase = {
  backdropFilter: "blur(1px) saturate(180%)",
  WebkitBackdropFilter: "blur(1px) saturate(180%)",
  border: "1px solid rgba(255, 255, 255, 0.45)",
  boxShadow:
    "0 8px 32px rgba(128, 0, 0, 0.10), 0 1.5px 8px rgba(255,255,255,0.18) inset",
  borderRadius: "20px",
};

const Header = ({ isLoading }) => {
  return (
    <div
      style={{
        width: 440,
        minHeight: "50vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${PILLAR_B64})`,
        backgroundSize: "fit",
        backgroundPosition: "center 0px",
        padding: "20px",
        overflow: "hidden",
      }}
    >
      {/* <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>
      <div className="cloud cloud3"></div>
      <div className="cloud cloud4"></div>
       <div className="cloud cloud5"></div>
      <div className="cloud cloud6"></div> */}
      {!isLoading && <ScrollRevealcode />}
      <img
        src={leftFlower} // Your coconut image path
        alt="leftFlower"
        id="leftflower"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100px", // Coconut size relative to the div
          height: "100px", // Coconut size relative to the div
          display: "block",
          margin: "0 auto", // Center the coconut
        }}
      />
      <img
        src={leftFlower} // Your coconut image path
        alt="rightFlower"
        id="rightflower"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100px", // Coconut size relative to the div
          height: "100px", // Coconut size relative to the div
          display: "block",
          transform: "scaleX(-1)", // Flip the image horizontally
          margin: "0 auto", // Center the coconut
        }}
      />
      {/* <img
        src={marraige} // Your coconut image path
        alt="marraige"
        id="marraige"
        style={{
          position: "absolute",
          top: 435,
          left: 240,
          transform: "translate(-50%, -50%)", // Center the coconut
          height: "225px", // Coconut size relative to the div
          width: "325px", // Coconut size relative to the div
          display: "block",
          margin: "0 auto", // Center the coconut
        }}
      /> */}

      {/* Vinayagar image */}
      <img
        src={vinayagar}
        alt="vinayagar"
        id="vinayagar"
        style={{
          position: "absolute",
          top: 80,
          left: 242,
          transform: "translate(-50%, -50%)",
          height: "150px",
          width: "150px",
          display: "block",
          margin: "0 auto",
        }}
      />

      {/* Banner image */}
      <img
        src={banner}
        alt="banner"
        id="banner"
        style={{
          position: "absolute",
          top: 355,
          left: 240,
          // Note: Combined your transforms into one string to avoid overwriting
          transform: "translate(-50%, -50%) scale(1.3)",
          height: "50%",
          width: "400px",
          display: "block",
          margin: "0 auto",

          // The magic line:
          filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.5))",
        }}
      />
    </div>
  );
};

export default Header;
