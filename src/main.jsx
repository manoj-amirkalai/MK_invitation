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
      const images = document.querySelectorAll("img");
    const totalImages = images.length;
      
    if (totalImages === 0) {
      setLoadProgress(100);
      setIsLoading(false);
      return;
      }

      let imagesLoaded = 0;
    const updateProgress = () => {
          imagesLoaded++;
      const percent = Math.floor((imagesLoaded / totalImages) * 100);
      setLoadProgress(percent);
      if (imagesLoaded === totalImages) {
        setTimeout(() => setIsLoading(false), 500); // Slight delay for smooth exit
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        updateProgress();
    } else {
        img.addEventListener("load", updateProgress);
        img.addEventListener("error", updateProgress);
    }
    });
  }, []);

  const style = {
    width: 480,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "black",
    margin: "0 !important",
    padding: "0 !important",
  };

  return (
    <StrictMode>
     {isLoading ? <Loader isLoading={isLoading} /> :
      <div style={style}>
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
      </div>}
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<App />);
