import data from "../../manifest.json";
import scratchImg from "/assets/png/logoreveal.png";
import ScratchCircle from "./ScratchReveal";

function WeddingDate() {
  const date = new Date(data.date);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        marginTop: "0px",
      }}
    >
      <div id="dayreveal">
        {" "}
        <ScratchCircle
          size={100}
          coverImage={scratchImg}
          label={date.getDate()}
        />
      </div>
      <div id="monthreveal">
        <ScratchCircle
          size={100}
          coverImage={scratchImg}
          label={months[date.getMonth()]}
        />
      </div>
      <div id="yearreveal">
        <ScratchCircle
          size={100}
          coverImage={scratchImg}
          label={date.getFullYear()}
        />
      </div>
    </div>
  );
}

export default WeddingDate;
