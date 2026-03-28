import React, { useEffect, useState } from 'react'
import data from "../../manifest.json";
import WeddingDateReveal from '../Countdown/WeddingDateReveal';
import inviteBg from "../../assets/invitaionbg.avif";

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
      <div style={{ textAlign: "center" ,
        minHeight: '90vh',}}>
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
  return (
    <section
        style={{
          width: "90%",
          marginTop: 0,
          backgroundImage: `url(${inviteBg})`,
          backgroundPosition: "center",
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
  )
}

export default Countdown
