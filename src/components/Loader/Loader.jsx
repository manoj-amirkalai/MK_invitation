// src/components/Loader/Loader.jsx
import "./Loader.css";
import loader from "../../assets/webp/loader.webp";
import logo from "../../assets/webp/logo.webp";

export default function Loader({ isLoading, realProgress = 0 }) {
  return (
    <div className={`loader-container ${!isLoading ? "hidden" : ""}`}>
      {/* Falling Flowers Background */}
      <div className="flower-rain">
        {Array.from({ length: 200 }).map((_, i) => (
          <div key={i}>
            {" "}
            <span className="falling-flower">🥳</span>
            <span className="falling-flower">🎉</span>
          </div>
        ))}
      </div>
      
      <div className="loader-content">
          <div style={{position:'absolute', top :110,left :115}}><img src={logo} alt="logo" width={250} height={250}  /></div>
        
          <img src={loader} alt="loader" width={450} height={450} className="logo" />

        <div className="celebration-row">
          <div className="instrument drum">🥁</div>

          <div className="instrument nadaswaram">🎺</div>
        </div>

        <div className="progress-section">
          <div className="progress-bar-container">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${realProgress}%` }}
            ></div>
          </div>
          <p className="percentage-text">{realProgress}%</p>
        </div>

        <div className="text-group">
          <p className="loader-text">Summoning the Celebrations...</p>
          <p className="loader-subtitle">
            மகிழ்ச்சியான தருணங்கள் தயார் செய்யப்படுகின்றன
          </p>
        </div>
      </div>
    </div>
  );
}
