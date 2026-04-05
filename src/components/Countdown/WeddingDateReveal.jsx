
import data from "../../manifest.json";
import scratchImg from "../../assets/ribbon.jpg";
import ScratchCircle from "./ScratchReveal";

function WeddingDate() {
  const date = new Date(data.date);

  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        marginTop: "0px"
      }}
    >
      <ScratchCircle
        size={100}
        coverImage={scratchImg}
        label={date.getDate()}
      />

      <ScratchCircle
        size={100}
        coverImage={scratchImg}
        label={months[date.getMonth()]}
      />

      <ScratchCircle
        size={100}
        coverImage={scratchImg}
        label={date.getFullYear()}
      />
    </div>
  );
}

export default WeddingDate;