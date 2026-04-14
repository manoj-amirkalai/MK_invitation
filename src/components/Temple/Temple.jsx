import { useEffect, useState } from "react";
import PILLAR_B64 from "../../assets/avif/templebg.avif";
import TEMPLE_B64 from "../../assets/webp/temple3d.webp";
import templeBg from "../../assets/jpg/templebgcrop.jpg";



export default function Temple() {
  const [scrollY, setScrollY] = useState(0);


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const HEADER_H = 850;
  const pillarMoveUp = scrollY * 0.6;
  const templeRise = scrollY * 0;
  const templeInitialTop = HEADER_H * 0.3;

  return (
    <div style={{ backgroundColor: "#fff", overflow: "hidden" ,width: 480}}>
      {/* 1. MAIN WRAPPER */}   
  
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
          backgroundImage: `url(${templeBg})`,
          backgroundPosition: "bottom center", // Anchors the image to the bottom
          backgroundSize: "cover",      // Ensures the image fills the area
          backgroundRepeat: "no-repeat", // PULLS content up to align with sticky
          marginBottom: `-${HEADER_H+55}px`
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
              id="temple"
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
        </div>
      </div>

      {/* 4. NEXT COMPONENT */}
     
    </div>
  );
}