import ScratchCircle from "./ScratchReveal";
import data from "../public/manifest.json";

function WeddingDate() {
  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      
      <ScratchCircle
        size={100}
        coverImage="../src/assets/scratch.png"
        label={new Date(data.date).getDate()}
      />

      <ScratchCircle
        size={100}
        coverImage="../src/assets/scratch.png"
        label={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][new Date(data.date).getMonth()]}
      />

      <ScratchCircle
        size={100}
        coverImage="../src/assets/scratch.png"
        label={new Date(data.date).getFullYear()}
      />

    </div>
  );
}

export default WeddingDate;