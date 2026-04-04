import React from "react";
import PILLAR_B64 from "../../assets/templebg.avif";
import "./Header.css";
import vinayagar from "../../assets/vinayagar.png";
import leftFlower from "../../assets/left.webp";
import rightFlower from "../../assets/coconut.png";
import marraige from "../../assets/headercouple.png";
import banana from "../../assets/banana.png";
import TextType from "../WordType/TextType";
import ScrollRevealcode from "../ScrollRevealcode";

const glassBase = {
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  background: "rgba(255, 255, 255, 0.18)",
  border: "1px solid rgba(255, 255, 255, 0.45)",
  boxShadow:
    "0 8px 32px rgba(128, 0, 0, 0.10), 0 1.5px 8px rgba(255,255,255,0.18) inset",
  borderRadius: "20px",
};

const Header = () => {
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
      <ScrollRevealcode />
      {/* <img
        src={leftFlower} // Your coconut image path
        alt="leftFlower"
        id="leftflower"
        style={{
          position: "absolute",
          top: 0,
          left: -30,
          width: '200px', // Coconut size relative to the div
          height: '200px', // Coconut size relative to the div
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
          right : -30,
          width: '200px', // Coconut size relative to the div
          height: '200px', // Coconut size relative to the div
          display: "block",
          transform: "scaleX(-1)", // Flip the image horizontally
          margin: "0 auto", // Center the coconut
        }}
      />  */}
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

      {/* OM Symbol — transparent glass pill */}
      <div
      id="ohm"
        style={{
          ...glassBase,
          position: "absolute",
          top: "165px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "6px 6px 0 6px",
          zIndex: 10,
          background: "rgba(255,255,255,0.12)",
          borderRadius: "50px",
          boxShadow:
            "0 4px 24px rgba(128,0,0,0.08), 0 1px 6px rgba(255,255,255,0.25) inset",
        }}
      >
        <span
          style={{
            fontSize: "1rem",
            color: "#800000",
            fontWeight: "700",
            letterSpacing: "1px",
            display: "block",
            textShadow: "0 1px 8px rgba(255,255,255,0.7)",
          }}
        >
          ॐ
        </span>
      </div>

      {/* Title — திருமண அழைப்பிதழ் */}
      <div
        id="invitationtitle"
        style={{
          ...glassBase,
          position: "absolute",
          top: "215px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "5px 28px 5px 28px",
          zIndex: 10,
          whiteSpace: "nowrap",
          borderRadius: "10px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "1.25rem",
            color: "#800000",
            textAlign: "center",
            fontWeight: "800",
            letterSpacing: "1px",
            textShadow: "0 1px 10px rgba(255,255,255,0.6)",
          }}
        >
          திருமண அழைப்பிதழ்
        </h1>
      </div>

      {/* Thirukural glass card */}
      <div
        id="thirukural"
        style={{
          ...glassBase,
          position: "absolute",
          top: "265px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "12px 24px",
          zIndex: 10,
          whiteSpace: "nowrap",
          background: "rgba(255, 245, 235, 0.22)",
          borderRadius: "16px",
          width: "80%",
          boxShadow:
            "0 6px 28px rgba(128,0,0,0.12), 0 1.5px 8px rgba(255,255,255,0.25) inset",
        }}
      >
        <p
          style={{
            margin: "0 0 4px 0",
            color: "#800000",
            fontSize: "0.85rem",
            fontWeight: "600",
            textAlign: "center",
            textShadow: "0 1px 6px rgba(255,255,255,0.5)",
            lineHeight: "1.6",
          }}
        >
          மனைத்தக்க மாண்புடையள் ஆகித்தற் கொண்டான்
        </p>
        <p
          style={{
            margin: 0,
            color: "#800000",
            fontSize: "0.85rem",
            fontWeight: "600",
            textAlign: "center",
            textShadow: "0 1px 6px rgba(255,255,255,0.5)",
            lineHeight: "1.6",
          }}
        >
          வளத்தக்காள் வாழ்க்கைத் துணை.
        </p>
        {/* Subtle decorative divider */}
        <div
          style={{
            marginTop: "8px",
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(128,0,0,0.3), transparent)",
          }}
        />

        {[
          "— திருவள்ளுவர்",
          "வீட்டுக்குத் தேவையானதை சிறப்புற செய்பவளை தனதாகக்",
          " கொண்டவன், வளம் பல காணும் வாழ்க்கைத் துணையை அடைந்தவன்.",
        ].map((data, index) => (
          <p
            key={index}
            style={{
              margin: "6px 0 0 -10px",
              fontSize: "0.65rem",
              color: "rgb(167, 16, 16)",
              textAlign: "center",
              fontStyle: "italic",
              letterSpacing: "0.5px",
            }}
          >
            {data}
          </p>
        ))}
      </div>

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

      {/* Names + Weds section — glass card */}
      <div
        id="wedname"
        style={{
          ...glassBase,
          width: "50%",
          marginTop: "400px",
          padding: "24px 36px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.75rem",
          background: "rgba(255, 255, 255, 0.22)",
          borderRadius: "10px",
        }}
      >
        <img
        src={banana}
        alt="right-banana"
        id="rightbanana" // Matches your ScrollReveal ID
        style={{
          position: "absolute",
          bottom: 0, 
          top : -2,      // Pinned to bottom
         right: -70,        // Pinned to right end
          height: "155px", // Adjust height as needed
          width: "auto",
          transform: "scaleX(-1)", // Flips the image so it faces inward
          zIndex: 1,
        }}
      />
      <img
        src={banana}
        alt="right-banana"
        id="leftbanana" // Matches your ScrollReveal ID
        style={{
          position: "absolute",
          bottom: 0,   
          top : -2,        // Pinned to bottom
          left: -70,        // Pinned to right end
          height: "155px", // Adjust height as needed
          width: "auto",// Flips the image so it faces inward
          zIndex: 1,
        }}
      />
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            letterSpacing: "-1px",
            color: "#800000",
          }}
        >
          <TextType
            text={["Manoj...", "Keerthana..."]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter=""
            texts={["Welcome!", "Build amazing things!"]}
            deletingSpeed={50}
          />
        </div>

        {/* Weds divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "100%",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(128,0,0,0.35))",
            }}
          />
          <p
            style={{
              margin: 0,
              color: "#800000",
              fontWeight: "600",
              fontSize: "0.85rem",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            weds
          </p>
          <div
            style={{
              flex: 1,
              height: "1px",
              background:
                "linear-gradient(to left, transparent, rgba(128,0,0,0.35))",
            }}
          />
        </div>

        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            letterSpacing: "-1px",
            color: "#800000",
          }}
        >
          <TextType
            text={["Keerthana...", "Manoj..."]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter=""
            texts={["Glad you're here!", "Let's create!"]}
            deletingSpeed={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
