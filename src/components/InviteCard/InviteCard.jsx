import React from "react";

function InviteCard() {
  return (
    <>
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
            textShadow: "0 1px 8px rgb(254, 255, 253)",
          }}
        >
          ॐ
        </span>
      </div>
      ;{/* Title — திருமண அழைப்பிதழ் */}
      <div
        id="invitationtitle"
        style={{
          ...glassBase,
          position: "absolute",
          top: "215px",
          left: "52%",
          transform: "translateX(-50%)",
          padding: "5px 15px 5px 15px",
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
            textShadow: "0 1px 8px rgb(148, 134, 6)",
          }}
        >
          திருமண அழைப்பிதழ்
        </h1>
      </div>
      ;{/* Thirukural glass card */}
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
            textShadow: "0 1px 8px rgb(148, 134, 6)",
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
            textShadow: "0 1px 8px rgb(148, 134, 6)",
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
              textShadow: "0 1px 8px rgb(148, 134, 6)",
            }}
          >
            {data}
          </p>
        ))}
      </div>
      ;{/* Names + Weds section — glass card */}
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
            top: -2, // Pinned to bottom
            right: -70, // Pinned to right end
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
            top: -2, // Pinned to bottom
            left: -70, // Pinned to right end
            height: "155px", // Adjust height as needed
            width: "auto", // Flips the image so it faces inward
            zIndex: 1,
          }}
        />
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            letterSpacing: "-1px",
            color: "#800000",
            textShadow: "0 1px 8px rgb(148, 134, 6)",
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
            textShadow: "0 1px 8px rgb(148, 134, 6)",
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
      ;
    </>
  );
}

export default InviteCard;
