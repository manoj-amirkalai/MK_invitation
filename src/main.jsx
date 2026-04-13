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

  useEffect(() => {
    const handlePageLoad = () => {
      // Wait for all images to load
      const images = document.querySelectorAll("img");
      
      if (images.length === 0) {
        // No images found, hide loader immediately
        setIsLoading(false);
        return;
      }

      let imagesLoaded = 0;
      
      images.forEach((img) => {
        if (img.complete) {
          imagesLoaded++;
        } else {
          img.addEventListener("load", () => {
            imagesLoaded++;
            if (imagesLoaded === images.length) {
              setIsLoading(false);
            }
          });
          img.addEventListener("error", () => {
            imagesLoaded++;
            if (imagesLoaded === images.length) {
              setIsLoading(false);
            }
          });
        }
      });

      // If all images are already loaded
      if (imagesLoaded === images.length) {
        setIsLoading(false);
      }
    };

    // Hide loader when DOM is ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", handlePageLoad);
      return () => document.removeEventListener("DOMContentLoaded", handlePageLoad);
    } else {
      handlePageLoad();
    }
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
