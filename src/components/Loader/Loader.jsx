import './Loader.css';

export default function Loader({ isLoading }) {
  return (
    <div className={`loader-container ${!isLoading ? 'hidden' : ''}`}>
      <div className="loader-content">
        <div className="spinner"></div>
        <p className="loader-text">Loading...</p>
      </div>
    </div>
  );
}
