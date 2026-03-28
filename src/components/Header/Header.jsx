import React from "react";
import PILLAR_B64 from "../../assets/templebg.avif";
import "./Header.css";
import coconut from "../../assets/coconut.png";

const Header = () => {
  return (
    <div
      style={{
        width: 440,
        minHeight: '60vh',// Container width
        display: "flex", // Now flex works on the div
        justifyContent: "center", // Centers the coconut
        alignItems: "center",
        backgroundImage: `url(${PILLAR_B64})`, // Use the imported variable
        backgroundSize: "fit",
        backgroundPosition: "center 0px",
        padding: "20px", // Space around the coconut
      }}
    >
      {/* <img
        src={coconut} // Your coconut image path
        alt="coconut"
        style={{
          width: "50%", // Coconut size relative to the div
          display: "block",
          margin: "0 auto", // Center the coconut
        }}
      /> */}
    </div>
  );
};

export default Header;
