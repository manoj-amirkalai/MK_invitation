import React, { useRef, useState, useEffect } from "react";

const ScratchCircle = ({ size = 150, coverImage, label }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = coverImage;

    img.onload = () => {
      ctx.drawImage(img, -2, -2, size + 4, size + 4);
    };
  }, [coverImage, size]);

  const scratch = (x, y) => {
    const ctx = canvasRef.current.getContext("2d");

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
  };

  const getPosition = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();

    if (e.touches) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }

    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMove = (e) => {
    if (!isDrawing) return;

    const pos = getPosition(e);
    scratch(pos.x, pos.y);
  };

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "22px",
        fontWeight: "bold",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        background: "white",
        border: "1px solid rgba(92, 94, 8, 0.3)",
      }}
    >
      {label}

      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          cursor: "pointer",
          display: "block",
        }}
        onMouseDown={() => setIsDrawing(true)}
        onMouseUp={() => setIsDrawing(false)}
        onMouseLeave={() => setIsDrawing(false)}
        onMouseMove={handleMove}
        onTouchStart={() => setIsDrawing(true)}
        onTouchEnd={() => setIsDrawing(false)}
        onTouchMove={handleMove}
      />
    </div>
  );
};

export default ScratchCircle;
