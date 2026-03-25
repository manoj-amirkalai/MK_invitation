import { useEffect, useRef, useState } from "react";
import PILLAR_B64 from "../../src/assets/templebg.avif";
import TEMPLE_B64 from "../../src/assets/temple3d.png";
import WeddingInvitation from "../WeddingInvitation";
import WeddingDateReveal from "../WeddingDateReveal";
import data from "../../public/manifest.json";



export default function TempleHeader() {
  const [scrollY, setScrollY] = useState(0);
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
    <div style={{ textAlign: "center" }}>
      <p
        style={{
          fontWeight: 500,
          fontSize: 15,
          lineHeight: "1em",

          color: "rgb(10, 82, 163)",
          margin: 0,
          fontVariantNumeric: "tabular-nums",
          whiteSpace: "nowrap",
        }}
      >
        {String(value).padStart(2, "0")}
      </p>
      <p
        style={{
          fontFamily: "'Yaldevi', sans-serif",
          fontSize: 15,

          color: "rgb(10, 82, 163)",
          margin: 0,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </p>
    </div>
  );
}

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const HEADER_H = 850;
  const pillarMoveUp = scrollY * 0.6;
  const templeRise = scrollY * 0;
  const templeInitialTop = HEADER_H * 0.35;

  return (
    <div style={{ backgroundColor: "#fff", overflow: "hidden" }}>
      {/* 1. MAIN WRAPPER */}   <section
        style={{
          marginTop: 0,
          background: "rgb(211, 210, 204)",
          padding: "60px 24px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <p
          style={{
            fontSize: 15,
            lineHeight: "100.1%",
            color: "rgb(10, 82, 163)",
          }}
        >
          The countdown begins
        </p>

        <WeddingDateReveal />
        {/* Timer */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
          <CountdownUnit value={countdown.d} label="Days" />
          <span
            style={{
              fontSize: 15,
              color: "rgb(10, 82, 163)",
              lineHeight: "1em",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            :
          </span>
          <CountdownUnit value={countdown.h} label="Hours" />
          <span
            style={{
              fontSize: 15,
              color: "rgb(10, 82, 163)",
              lineHeight: "1em",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            :
          </span>
          <CountdownUnit value={countdown.m} label="Mins" />
          <span
            style={{
              fontSize: 15,

              color: "rgb(10, 82, 163)",
              lineHeight: "1em",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            :
          </span>
          <CountdownUnit value={countdown.s} label="Secs" />
        </div>

        <p
          style={{
            fontSize: 15,
            textAlign: "center",

            color: "rgb(10, 82, 163)",
            maxWidth: 300,
            lineHeight: 1.6,
          }}
        >
          Our families are excited that you are able to join us in celebrating
          what we hope will be one of the happiest days of our lives.
        </p>
      </section>
      <div style={{ 
        position: "relative", 
        width: "480px", 
        margin: "0 auto",
        display: "flex",        // Flexbox prevents sub-pixel gaps
        flexDirection: "column"
      }}>
        
        {/* 2. THE STICKY TEMPLE WINDOW */}
        <div style={{
          position: "sticky",
          top: 0,
          width: "100%",
          height: `${HEADER_H}px`,
          overflow: "hidden",
          zIndex: 10,
          background: "rgb(211, 210, 204)",
          marginBottom: `-${HEADER_H}px`, // PULLS content up to align with sticky
        }}>
          {/* BACKGROUND PILLARS */}
          <div style={{
            position: "absolute",
            inset: 0,
            top: `${-pillarMoveUp}px`,
            height: `${HEADER_H + 300}px`,
            zIndex: 1,
          }}>
            <img 
              src={PILLAR_B64} 
              alt="pillars" 
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
            />
          </div>

          {/* TEMPLE */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: `${templeInitialTop - templeRise}px`,
            transform: "translateX(-50%)",
            width: "550px",
            zIndex: 5,
          }}>
            <img 
              src={TEMPLE_B64} 
              alt="temple" 
              style={{ width: "100%", display: "block" }} 
            />
          </div>
        </div>

        {/* 3. THE INVITATION AREA */}
        {/* This spacer creates the scroll area where the temple is fully visible 
            before the invitation starts moving. */}
        <div style={{ height: `${HEADER_H}px`, background: "transparent" }} />

        <div style={{
          position: "relative",
          zIndex: 50,
          width: "100%",
          backgroundColor: "black",
          padding: 0, 
          margin: 0,
          border: "none",
          // Ensures the black background starts cleanly
          boxShadow: "0 0 0 1px black" 
        }}>
          <WeddingInvitation />
        </div>
      </div>

      {/* 4. NEXT COMPONENT */}
      <div style={{ 
        position: "relative",
        zIndex: 60,
        backgroundColor: "white", 
        marginTop: "-1px" // Prevents sub-pixel white lines between black and white
      }}>
      </div>
    </div>
  );
}