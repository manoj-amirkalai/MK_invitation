import React, { useEffect, useState } from "react";
import data from "../../manifest.json";
import WeddingDateReveal from "../Countdown/WeddingDateReveal";
// import inviteBg from "../../assets/invitaionbg.avif";
import inviteBg from "../../assets/webp/wedding1.webp";

const Countdown = () => {
  const countdown = useCountdown(new Date(data.date).getTime());
  function useCountdown(targetDateStr) {
    const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
    useEffect(() => {
      const target = new Date(targetDateStr).getTime();
      const tick = () => {
        const diff = Math.max(0, target - Date.now());
        setTime({
          d: Math.floor(diff / 86400000),
          h: Math.floor((diff % 86400000) / 3600000),
          m: Math.floor((diff % 3600000) / 60000),
          s: Math.floor((diff % 60000) / 1000),
        });
      };
      tick();
      const id = setInterval(tick, 1000);
      return () => clearInterval(id);
    }, [targetDateStr]);
    return time;
  }
  function CountdownUnit({ value, label }) {
    return (
      <div
        style={{
          // Use Flexbox to align content perfectly
          display: "flex",
          marginTop: 75,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          transform: "scale(0.8)", // Slightly larger for better visibility

          // Remove fixed heights to stop the stretching
          width: "max-content",
          minWidth: "70px", // Optional: ensures boxes are uniform size
          padding: "15px 10px",

          // Typography & Style
          fontStyle: "oblique",
          fontWeight: 700,
          color: "white",
          textShadow: "2px 2px 5px rgb(10, 10, 10)",

          // Glassmorphism Effect
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)", // Increased for better "glass" look
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "12px",
        }}
      >
        <p
          style={{
            fontWeight: 700, // Thicker for the number
            fontSize: "32px", // Slightly larger for emphasis
            lineHeight: "1",
            fontStyle: "oblique",
            margin: 0,
            fontVariantNumeric: "tabular-nums",
            color: "white",
            textShadow: "2px 2px 5px rgb(10, 10, 10)",
            whiteSpace: "nowrap",
          }}
        >
          {String(value).padStart(2, "0")}
        </p>
        <p
          style={{
            fontStyle: "oblique",
            fontSize: "12px", // Smaller label for better hierarchy
            margin: "5px 0 0 0",
            letterSpacing: "0.15em",
            color: "rgba(255, 255, 255, 0.8)", // Slightly dimmer for contrast
            textShadow: "1px 1px 3px rgb(10, 10, 10)",
            textTransform: "uppercase",
          }}
        >
          {label}
        </p>
      </div>
    );
  }
  return (
    <section
      style={{
        width: "90%",
        marginTop: 0,
        backgroundImage: `url(${inviteBg})`,
        backgroundPosition: "-580px -300px",
        padding: "10px 24px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <p
        style={{
          // Typography
          fontStyle: "oblique",
          fontWeight: 700,
          fontSize: "20px", // Added 'px' for best practice in strings
          lineHeight: "100.1%",
          color: "white",
          textAlign: "center",
          textShadow: "2px 2px 5px rgb(10, 10, 10)",

          // Glassmorphism Effect
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(1px)", // Matched to Webkit for consistency
          WebkitBackdropFilter: "blur(1px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "10px",

          // Layout
          padding: "10px",
          width: "max-content",
          maxWidth: "800px",
        }}
        id="countdownHeader"
      >
        Two hearts, one countdown.
      </p>

      <WeddingDateReveal />
      <p id="scratchtoreveal" style={{  // Typography
          fontStyle: "oblique",
          fontWeight: 700,
          fontSize: "15px", // Added 'px' for best practice in strings
          lineHeight: "100.1%",
          color: "white",
          textAlign: "center",
          textShadow: "2px 2px 5px rgb(10, 10, 10)",

          // Glassmorphism Effect
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(1px)", // Matched to Webkit for consistency
          WebkitBackdropFilter: "blur(1px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "10px",

          // Layout
          padding: "10px",
          width: "max-content",
          maxWidth: "800px",}}>Scratch to reveal the date.</p>
      {/* Timer */}
      <div style={{ display: "flex", gap: 6 }}>
        <div id="daycount">
          <CountdownUnit value={countdown.d} label="Days" />
        </div>
        <div  id="hourscount">
          {" "}
          <CountdownUnit value={countdown.h} label="Hours" />
        </div>
        <div  id="mincount">
          {" "}
          <CountdownUnit value={countdown.m} label="Mins" />
        </div>
        <div  id="seccount">
          <CountdownUnit value={countdown.s} label="Secs" />
        </div>{" "}
      </div>

      <p
        style={{
          fontStyle: "oblique",
          fontWeight: 700,
          fontSize: "20px", // Added 'px' for best practice in strings
          lineHeight: "100.1%",
          color: "white",
          textAlign: "center",
          textShadow: "2px 2px 5px rgb(10, 10, 10)",

          // Glassmorphism Effect
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(1px)", // Matched to Webkit for consistency
          WebkitBackdropFilter: "blur(1px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "10px",

          // Layout
          padding: "10px",
          width: "max-content",
          maxWidth: "400px",
        }}
        id="welcometext"
      >
        Our families are excited that you are able to join us in celebrating
        what we hope will be one of the happiest days of our lives.
      </p>
    </section>
  );
};

export default Countdown;
