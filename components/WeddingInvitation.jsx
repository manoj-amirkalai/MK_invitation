import { useState, useEffect, useRef } from "react";
import templeImg from "../src/assets/temple.jpg";
import weddingimg from "../src/assets/wedding.png";
import receptionimg from "../src/assets/reception.png";
import WeddingDateReveal from "./WeddingDateReveal";
import data from "../public/manifest.json";
import audio_bgm from "../src/assets/TheriLoveBgm.mp3";

// ─── Image & Asset URLs (from original HTML) ─────────────────────────────────
const IMG = {
  backgroundImg: templeImg,
  heroBg:
    "https://framerusercontent.com/images/CrkrJDdeoM65OHFWoOmjt0Jln9Y.png?width=393&height=852",
  desktopBg:
    "https://framerusercontent.com/images/cyIPT3IPm257uiP1lpxhaxTt8E.png?width=1386&height=5741",
  sky: "https://framerusercontent.com/images/j3yL0WY8Jp0Fudn00prE6XsVACw.png?width=596&height=1514",
  lantern:
    "https://framerusercontent.com/images/nc35y7b0Zuw1Gp5B9Uyd0lzjxKM.png?width=1024&height=1536",
  ganesha:
    "https://framerusercontent.com/images/tjsmDC8g305SmMs98B3ABqR5QE.png?width=279&height=296",
  cane: "https://framerusercontent.com/images/z8fNGgEf83GUW8GN7ddabomNq0.png?width=774&height=952",
  flower1:
    "https://framerusercontent.com/images/FLSOOveTOLX34LMuvOegzZoZ2eo.png?width=1094&height=1166",
  flower2:
    "https://framerusercontent.com/images/ndc7VHWOkcPiELsDteUplHBg.png?width=1103&height=1174",
  hashtagIcon:
    "https://framerusercontent.com/images/5y8vl5sZQRnq3EHTA5uUoYOFwI.png?width=171&height=177",
  weatherIcon:
    "https://framerusercontent.com/images/ySjcx5lvJ1tclhTZAudrTerk.png?width=170&height=229",
  staffIcon:
    "https://framerusercontent.com/images/fYRKGxDRZ6jYoWaWFqoL0kvBV2M.png?width=96&height=231",
  parkingIcon:
    "https://framerusercontent.com/images/a6hem7eXgySxttf4hkfazX1KQg.png?width=172&height=150",
  mobileFooter:
    "https://framerusercontent.com/images/tkkXhQriBw9Rr0mZOj2I9jY7IA.png?width=596&height=2181",
  rsvpBg:
    "https://framerusercontent.com/images/munXckNtNDlAiOMLLgrVsV1o.png?width=1350&height=2048",
  instagramSvg:
    "https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg",
  whatsappSvg:
    "https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg",
  sectionBg:
    "https://framerusercontent.com/images/CxMq9eNVYFWeipRkOH7L6BF7EV4.png?width=1350&height=3716",
  reception: receptionimg,
  wedding: weddingimg,
};

const AUDIO_SRC = audio_bgm;

// ─── Data ─────────────────────────────────────────────────────────────────────
const EVENTS = [
  {
    name: "Reception",
    date: "Saturday, Sep 12th 2026",
    venue: "K.Pudhur, Perambalur",
    time: "2pm Onwards",
    img: IMG.reception,
  },
  {
    name: "Muhurtham",
    date: "Sunday, Sep 13th 2026",
    venue: "Perambalur",
    time: "8am Onwards",
    img: IMG.wedding,
  },
];

const THINGS = [
  {
    icon: IMG.hashtagIcon,
    title: "Hashtag",
    desc: "While posting photos on social media please use the hashtag - #manojwedskeerthana",
  },
  {
    icon: IMG.weatherIcon,
    title: "Weather",
    desc: "It will be mostly sunny with temperature reaching up to 28 degrees at the venue",
  },
];

// ─── Hook: countdown ──────────────────────────────────────────────────────────
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

// ─── Music Button ────────────────────────────────────────────────────────────
function MusicButton() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying((p) => !p);
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      style={{
        position: "fixed",
        top: 16,
        right: 16,
        zIndex: 200,
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: "rgb(207,47,42)",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
        padding: 0,
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
        {playing ? (
          <>
            <rect x="3" y="2" width="3.5" height="12" rx="1" />
            <rect x="9.5" y="2" width="3.5" height="12" rx="1" />
          </>
        ) : (
          <path d="M5.38 1.29C4.97 1.03 4.45 1.02 4.02 1.25 3.6 1.49 3.33 1.93 3.33 2.42L3.33 13.58C3.33 14.07 3.6 14.51 4.02 14.75 4.45 14.98 4.97 14.97 5.38 14.71L14.21 9.13C14.6 8.88 14.84 8.46 14.84 8 14.84 7.54 14.6 7.12 14.21 6.87Z" />
        )}
      </svg>
    </button>
  );
}

// ─── Buy Now Button ───────────────────────────────────────────────────────────
function BuyNowButton() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 200,
      }}
    >
      <a
        href="https://rzp.io/rzp/meenaaya"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "rgba(255,255,255,0.73)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgb(34,34,34)",
          borderRadius: 38.81,
          padding: "10px 16px",
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: "-0.02em",
            color: "#222",
          }}
        >
          Buy Now
        </span>
        <span
          style={{
            background: "rgb(0,0,0)",
            borderRadius: 90,
            padding: "5px 14px",
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 600,
            fontSize: 16,
            letterSpacing: "-0.02em",
            color: "white",
          }}
        >
          INR 3999
        </span>
      </a>
    </div>
  );
}

// ─── Lantern ──────────────────────────────────────────────────────────────────
function Lantern({ style }) {
  return (
    <div
      style={{
        position: "absolute",
        pointerEvents: "none",
        overflow: "hidden",
        ...style,
      }}
    >
      <img
        src={IMG.lantern}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}

// ─── Event Card ──────────────────────────────────────────────────────────────
function EventCard({ event }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        width: "calc(50% - 10px)",
        minWidth: 140,
      }}
    >
      {/* Cane-border oval with flower overlay */}
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "127%" /* 774/952 ≈ keeps ratio */,
          borderRadius: 180,
          boxShadow: "0 0 19px 0 rgba(0,0,0,0.8)",
          overflow: "hidden",
        }}
      >
        <img
          src={event.img}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* Flower top */}
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
          }}
        >
          {/* <img
            src={IMG.flower1}
            alt=""
            style={{ width: "100%", objectFit: "contain" }}
          /> */}
        </div>
      </div>

      {/* Flower 2 sits between the cane and text */}
      <div style={{ width: "65%", marginTop: "-18%" }}>
        <img
          src={IMG.flower2}
          alt=""
          style={{ width: "100%", objectFit: "contain" }}
        />
      </div>

      {/* Event details */}
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <p
          style={{
            fontFamily: "'Aboreto', sans-serif",
            fontSize: 15,
            lineHeight: "150%",
            color: "rgb(69,160,134)",
            margin: 0,
          }}
        >
          {event.name}
        </p>
        <p
          style={{
            fontFamily: "'Cormorant', serif",
            fontSize: 15,
            lineHeight: "100%",
            color: "rgb(69,160,134)",
            margin: 0,
          }}
        >
          {event.date}
        </p>
        <p
          style={{
            fontFamily: "'Cormorant', serif",
            fontSize: 15,
            lineHeight: "100%",
            color: "rgb(69,160,134)",
            margin: 0,
          }}
        >
          {event.venue}
        </p>
        <p
          style={{
            fontFamily: "'Cormorant', serif",
            fontSize: 15,
            lineHeight: "100%",
            color: "rgb(69,160,134)",
            margin: 0,
          }}
        >
          {event.time}
        </p>
        <a
          href="https://maps.app.goo.gl/3rP3EZKLh6GZ5xZU7"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Cormorant', serif",
            fontWeight: 700,
            fontSize: 15,
            color: "rgb(230,211,255)",
            marginTop: 4,
          }}
        >
          See the route
        </a>
      </div>
    </div>
  );
}

// ─── Things to Know Card ─────────────────────────────────────────────────────
function ThingCard({ item }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        padding: "16px 12px",
        textAlign: "center",
      }}
    >
      <img
        src={item.icon}
        alt={item.title}
        style={{ width: 44, objectFit: "contain" }}
      />
      <p
        style={{
          fontFamily: "'Aboreto', sans-serif",
          fontSize: 20,
          color: "rgb(105,107,54)",
          margin: 0,
        }}
      >
        {item.title}
      </p>
      <p
        style={{
          fontFamily: "'Yaldevi', sans-serif",
          fontSize: 20,
          color: "rgb(105,107,54)",
          margin: 0,
          lineHeight: 1.6,
        }}
      >
        {item.desc}
      </p>
    </div>
  );
}

// ─── Countdown Unit ───────────────────────────────────────────────────────────
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

// ─── Main Export ─────────────────────────────────────────────────────────────
export default function WeddingInvitation() {
  const countdown = useCountdown(new Date(data.date).getTime());

  return (
    <div
      style={{
        fontFamily: "'Gotu', sans-serif",
        background: "#fff",
        maxWidth: 480,
        margin: "0 auto",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,700;1,400;1,700&family=Cormorant+Upright:wght@400;500&family=Cormorant+Infant:wght@400&family=Gotu&family=Manrope:wght@400;500;600&family=Aboreto&family=Yaldevi:wght@400;600&display=swap');
        *{box-sizing:border-box;}
        h1,h2,h3,h4,h5,h6,p,figure{margin:0;}
      `}</style>

      {/* ── Fixed elements ── */}
      <MusicButton />
      {/* <BuyNowButton /> */}

      {/* ════════════════════════════════════════════
          INVITE BLOCK – dark temple background
      ════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          background: "#130e0600",
          padding: "60px 28px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 14,
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
          {/* Om */}
          <p
            style={{
              fontFamily: "'Gotu', sans-serif",
              fontSize: 15,
              lineHeight: "10%",
              color: "rgb(243,236,186)",
              marginBottom: 12,
            }}
          >
            ॐ
          </p>

          {/* Ganesha image */}
          <div style={{ width: 130, height: 130, margin: "0 auto 18px" }}>
            <img
              src={IMG.ganesha}
              alt="Ganesha"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </div>

        <img
          src={IMG.backgroundImg}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 20px",
            transform: "scale(1.1)",
            filter: "brightness(0.9)",
            zIndex: 0,
          }}
        />

        {/* ════════════════════════════════════════════
          HERO – sky background + lanterns + names
      ════════════════════════════════════════════ */}
        <section
          style={{
            position: "relative",
            width: "100%",
            minHeight: 760,
            overflow: "hidden",
          }}
        >
          {/* Full bleed background */}
          <img
            src={IMG.heroBg}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 200px",
              zIndex: 0,
            }}
          />

          {/* Lanterns – left side */}
          {/* <Lantern style={{ top: -10, left: -15, width: 85, height: 138, zIndex: 1 }} />
        <Lantern style={{ top: 30, left: 50, width: 58, height: 94, zIndex: 1 }} />
        <Lantern style={{ top: 100, left: 14, width: 35, height: 57, zIndex: 1 }} />
        <Lantern style={{ top: 160, left: 30, width: 28, height: 45, zIndex: 1 }} /> */}

          {/* Lanterns – right side (mirrored) */}
          {/* <Lantern style={{ top: -5, right: 10, width: 72, height: 117, zIndex: 1, transform: "scaleX(-1)" }} />
        <Lantern style={{ top: 40, right: 45, width: 43, height: 70, zIndex: 1, transform: "scaleX(-1)" }} />
        <Lantern style={{ top: 120, right: 8, width: 33, height: 53, zIndex: 1, transform: "scaleX(-1)" }} /> */}

          {/* Names – MANOJ WEDS KEERTHANA */}
          {/* <div style={{
          position: "relative", zIndex: 2,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          paddingTop: 200, paddingBottom: 80,
          textAlign: "center",
        }}>
          <h3 style={{
            
            fontSize: 72, lineHeight: 1,
            color: "rgba(189, 180, 115, 0.69)",
          }}>
            MANOJ
          </h3>
          <h2 style={{
            fontFamily: "'Cormorant', serif",
            fontSize: 36, letterSpacing: "0.42em",
            lineHeight: "60px", color: "rgb(134, 123, 16)",
            margin: "6px 0",
          }}>
            WEDS
          </h2>
          <h3 style={{
            
            fontSize: 72, lineHeight: 1,
            color: "rgb(175, 157, 19)",
          }}>
            KEERTHANA
          </h3>
20    </div> */}
        </section>
      </section>
      {/* ── Fixed elements ── */}
      <MusicButton />
      {/* <BuyNowButton /> */}

      {/* ════════════════════════════════════════════
          INVITE BLOCK – dark temple background
      ════════════════════════════════════════════ */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          padding: "20px 28px",
          backgroundImage: `url(${IMG.mobileFooter})`,
          backgroundSize: "fit",
          backgroundPosition: "center -1050px",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Om */}

        {/* Family blessings */}
        <p
          style={{
            fontSize: 15,
            letterSpacing: "-0.03em",
            lineHeight: "100%",
            color: "black",
            fontWeight: 500,
            textShadow: "0 0 3px rgb(236, 236, 236)",
            background: "rgba(255, 255, 255, 0.82)",
          }}
        >
          With the heavenly blessings of
        </p>
        <p
          style={{
            fontSize: 15,
            letterSpacing: "-0.03em",
            lineHeight: "110%",
            color: "black",
            marginTop: 6,
            background: "rgba(255, 255, 255, 0.82)",
          }}
        >
          Smt. AMIRTHALINGAM &amp; KALAIVANI
        </p>
        <p
          style={{
            fontSize: 15,
            letterSpacing: "-0.03em",
            lineHeight: "150%",
            color: "black",
          }}
        >
          ——
        </p>
        <p
          style={{
            fontSize: 15,
            letterSpacing: "-0.03em",
            lineHeight: "150%",
            background: "rgba(255, 255, 255, 0.82)",
            color: "black",
          }}
        >
          Smt. PALLIKONDAN &amp; SUMATHI
        </p>

        {/* INVITE headline */}
        <p
          style={{
            fontFamily: "'Cormorant Infant', serif",
            fontSize: 15,
            lineHeight: "70%",
            color: "black",
            marginTop: 10,
            marginBottom: 18,
            background: "rgba(255, 255, 255, 0.82)",
          }}
        >
          INVITE
        </p>

        {/* Sub text */}
        <p
          style={{
            fontSize: 15,
            letterSpacing: "-0.05em",
            background: "rgba(255, 255, 255, 0.82)",
            lineHeight: "100%",
            color: "black",
          }}
        >
          You to join us in the wedding celebrations of
        </p>

        {/* Large names */}
        <p
          style={{
            fontSize: 15,
            background: "rgba(255, 255, 255, 0.82)",
            lineHeight: "190.1%",
            color: "black",
            marginTop: 4,
          }}
        >
          MANOJ
        </p>
        <p
          style={{
            fontSize: 15,
            background: "rgba(255, 255, 255, 0.82)",
            lineHeight: "110%",
            color: "black",
          }}
        >
          &amp;
        </p>
        <p
          style={{
            fontFamily: "'Cormorant', serif",
            background: "rgba(255, 255, 255, 0.82)",
            fontSize: 15,
            lineHeight: "110%",
            color: "black",
          }}
        >
          KEERTHANA
        </p>

        {/* Daughter of / On the following events */}
        <div
          style={{
            marginTop: 18,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <p
            style={{
              fontSize: 15,
              letterSpacing: "-0.05em",
              color: "black",
              background: "rgba(255, 255, 255, 0.82)",
              marginTop: 12,
            }}
          >
            On the following events
          </p>
        </div>
      </div>
      {/* ════════════════════════════════════════════
          COUNTDOWN
      ════════════════════════════════════════════ */}
      <section
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
      {/* ════════════════════════════════════════════
          EVENTS GRID
      ════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          background: "#130e06",
          padding: "40px 16px 60px",
        }}
      >
        <img
          src={IMG.sectionBg}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.12,
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 20,
          }}
        >
          {EVENTS.map((ev) => (
            <EventCard key={ev.name} event={ev} />
          ))}
        </div>

        {/* See the route CTA */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginTop: 60,
            gap: 8,
          }}
        >
          <p
            style={{
              fontFamily: "'Aboreto', sans-serif",
              fontSize: 15,
              lineHeight: "115.74%",
              color: "rgb(220,221,166)",
            }}
          >
            See the route
          </p>
          <p
            style={{
              fontFamily: "'Yaldevi', sans-serif",
              fontSize: 15,
              color: "rgb(218,220,163)",
            }}
          >
            Click to open the map
          </p>
          <a
            href="https://maps.app.goo.gl/3rP3EZKLh6GZ5xZU7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open map"
            style={{
              marginTop: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 80,
              height: 80,
              borderRadius: "50%",
              border: "9px solid rgb(220,221,166)",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                border: "2px solid rgb(220,221,166)",
              }}
            />
          </a>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          RSVP
      ════════════════════════════════════════════ */}
      <section
        id="rsvp"
        style={{
          position: "relative",
          background: "#1d1105",
          padding: "80px 24px 100px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          overflow: "hidden",
        }}
      >
        <img
          src={IMG.rsvpBg}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.25,
            zIndex: 0,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontFamily: "'Aboreto', sans-serif",
              fontSize: 15,
              lineHeight: "115.74%",
              color: "rgb(251,237,226)",
            }}
          >
            Please
            <br />
            rsvp
          </p>
          <p
            style={{
              fontFamily: "'Yaldevi', sans-serif",
              fontSize: 15,
              color: "rgb(251,237,226)",
              marginTop: 12,
            }}
          >
            Click to message on WhatsApp
          </p>
          <a
            href="https://wa.me/qr/CWYH77IQQSYQK1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 24,
              background: "#25D366",
              color: "#fff",
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              padding: "12px 28px",
              borderRadius: 40,
              textDecoration: "none",
            }}
          >
            <img
              src={IMG.whatsappSvg}
              alt=""
              style={{ width: 22, height: 22 }}
            />
            WhatsApp
          </a>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          THINGS TO KNOW
      ════════════════════════════════════════════ */}
      <section
        id="things-to-know"
        style={{
          background: "rgb(243,243,220)",
          padding: "60px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        <p
          style={{
            fontFamily: "'Aboreto', sans-serif",
            fontSize: 15,
            textAlign: "center",
            color: "rgb(7, 52, 94)",
          }}
        >
          Things to know
        </p>
        <p
          style={{
            fontFamily: "'Yaldevi', sans-serif",
            fontSize: 15,
            textAlign: "center",
            color: "rgb(7, 52, 94)",
            lineHeight: 1.6,
            maxWidth: 360,
          }}
        >
          To help you feel at ease and enjoy every moment of the celebrations,
          we've gathered a few thoughtful details we'd love for you to know
          before the big day.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 8,
            width: "100%",
          }}
        >
          {THINGS.map((t) => (
            <div
              key={t.title}
              style={{ width: "calc(50% - 4px)", minWidth: 130 }}
            >
              <ThingCard item={t} />
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FOLLOW THE ACTION (Instagram)
      ════════════════════════════════════════════ */}
      <section
        style={{
          background: "#130e06",
          padding: "80px 24px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <p
          style={{
            fontFamily: "'Aboreto', sans-serif",
            fontSize: 15,
            lineHeight: "115.74%",
            color: "rgb(243,236,186)",
          }}
        >
          Follow
          <br />
          the action
        </p>
        <p
          style={{
            fontFamily: "'Yaldevi', sans-serif",
            fontSize: 15,
            color: "rgb(243,236,186)",
          }}
        >
          Click to open our Instagram page
        </p>
        <a
          href="https://www.instagram.com/am__rare_one?igsh=MTB5aThnY2JqejFhOQ=="
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background:
              "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
            color: "#fff",
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 600,
            fontSize: 15,
            padding: "12px 28px",
            borderRadius: 40,
            textDecoration: "none",
          }}
        >
          <img
            src={IMG.instagramSvg}
            alt=""
            style={{ width: 22, height: 22, filter: "brightness(10)" }}
          />
          Instagram
        </a>
      </section>

      {/* ════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════ */}
      <footer
        style={{
          position: "relative",
          background: "#0d0a04",
          minHeight: 160,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: 80,
          overflow: "hidden",
        }}
      >
        <img
          src={IMG.mobileFooter}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.55,
            zIndex: 0,
          }}
        />
        <p
          style={{
            position: "relative",
            zIndex: 1,

            fontSize: 15,

            color: "rgb(10, 82, 163)",
            textAlign: "center",
          }}
        >
          © Missing Piece 2025
        </p>
      </footer>
    </div>
  );
}
