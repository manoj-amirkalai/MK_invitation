// src/main.jsx
import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Temple from "./components/Temple/Temple";
import Countdown from "./components/Countdown/Countdown";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import "./main.css";
import DomeGallery from "./components/css/DomeGallery/DomeGallery";
import LocationDetails from "./components/LocationDetails/LocationDetails";
import WeddingFooter from "./components/WeddingFooter/WeddingFooter";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0); // Track real percentage

  useEffect(() => {
    const imageElements = Array.from(document.querySelectorAll("img:not(#gallery)"));
    const backgroundUrls = new Set();

    const backgroundCandidates = Array.from(document.querySelectorAll("*"));
    backgroundCandidates.forEach((el) => {
      const bg = getComputedStyle(el).backgroundImage;
      if (!bg || bg === "none") return;

      const matches = [...bg.matchAll(/url\((['"]?)(.*?)\1\)/g)];
      matches.forEach((match) => {
        const url = match[2];
        if (!url || url.startsWith("data:")) return;
        try {
          backgroundUrls.add(new URL(url, globalThis.location.href).href);
        } catch {
          backgroundUrls.add(url);
        }
      });
    });

    const uniqueUrls = new Set(
      imageElements
        .map((img) => img.src)
        .filter(Boolean)
        .concat([...backgroundUrls]),
    );

    const sources = [...uniqueUrls].filter(Boolean);
    if (sources.length === 0) {
      setLoadProgress(100);
      setIsLoading(false);
      return;
    }

    let loadedCount = 0;
    const totalSources = sources.length;
    const updateProgress = () => {
      loadedCount = Math.min(loadedCount + 1, totalSources);
      const percent = Math.floor((loadedCount / totalSources) * 100);
      setLoadProgress(percent);
      if (loadedCount === totalSources) {
        setLoadProgress(100);
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    const timeoutId = globalThis.setTimeout(() => {
      setLoadProgress(100);
      setIsLoading(false);
    }, 15000);

    const createdImages = sources.map((src) => {
      const image = new Image();
      image.src = src;

      if (image.complete) {
        updateProgress();
        return null;
      }

      image.addEventListener("load", updateProgress, { once: true });
      image.addEventListener("error", updateProgress, { once: true });
      return image;
    });

    return () => {
      globalThis.clearTimeout(timeoutId);
      createdImages.forEach((image) => {
        if (!image) return;
        image.removeEventListener("load", updateProgress);
        image.removeEventListener("error", updateProgress);
      });
    };
  }, []);

  const contentStyle = {
    width: 480,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "black",
    margin: "0 !important",
    padding: "0 !important",
    opacity: isLoading ? 0 : 1,
    pointerEvents: isLoading ? "none" : "auto",
    transition: "opacity 0.4s ease-in-out",
    position: "relative",
    zIndex: isLoading ? -1 : 0,
  };

  return (
    <StrictMode>
      <Loader isLoading={isLoading} realProgress={loadProgress} />
      <div style={contentStyle}>
        <Header />
        <Temple />
        <Countdown />
        <div style={{ width: 480, height: "50vh" }}>
          <DomeGallery
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale={false}
          />
        </div>
        <LocationDetails />
        <WeddingFooter />
      </div>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<App />);
