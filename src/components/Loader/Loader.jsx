// src/components/Loader/Loader.jsx
import "./Loader.css";

export default function Loader({ isLoading , realProgress }) {
  return (
    <div className={`loader-container ${!isLoading ? "hidden" : ""}`}>
      {/* Falling Flowers Background */}
      <div className="flower-rain">
        {Array.from({ length: 200 }).map((_, i) => (
          <div key={i}>
            {" "}
            <span  className="falling-flower">
              🥳
            </span>
            <span  className="falling-flower">
              🎉
            </span>
          </div>
        ))}
      </div>
      
      <div className="loader-content">
        <h1 className="couple-name">Manoj </h1>
        
        <h1 className="couple-name"> & </h1>
        
        <h1 className="couple-name">Keerthana</h1>

        <div className="celebration-row">
          <div className="instrument drum">🥁</div>

          <div className="instrument nadaswaram">🎺</div>
        </div>

        <div className="progress-section">
          <div className="progress-bar-container">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${realProgress}%` }} // Use the prop here
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
