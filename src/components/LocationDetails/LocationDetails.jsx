
import './LocationDetails.css';

const LocationDetails = () => {
  const schedule = [
    
    {
      day: "Day 1: Ponnalaipu",
      date: "Saturday, September 13, 2026",
      time: "2:30 PM Onwards",
      venue: "K.pudhur",
      link : "https://maps.app.goo.gl/CdviNShU4UtMRX2TA"
    },
    {
      day: "Day 1: Engagement",
      date: "Saturday, September 13, 2026",
      time: "6:30 PM Onwards",
      venue: "K.pudhur",
      link : "https://maps.app.goo.gl/CdviNShU4UtMRX2TA"
    },
    {
      day: "Day 2: Muhurtham",
      date: "Sunday, September 12, 2026",
      time: "9:00 AM - 10:30 AM",
      venue: "Perambalur",
      link : "https://maps.app.goo.gl/CdviNShU4UtMRX2TA"
    }
  ];

  return (
    <div className='locationContainer'>
      <h2 className="locationTitle" id='locationTitle'>Location & Timing</h2>
      <div className="scheduleGrid">
        {schedule.map((item, index) => (
          <div key={index} className="glassCard" id='glassCard'>
            <h3 id='eventtitle'>{item.day}</h3>
            <p className="dateText" id='dateText'>{item.date}</p>
            <p className="timeText" id='timeText'>{item.time}</p>
            {/* <hr className="divider" /> */}
            <p className="venueText" id='venueText'>{item.venue}</p>
            <a id='mapbutton' href={item.link} target="_blank" rel="noopener noreferrer">
            <button id='mapbutton' className="mapButton">View on Maps</button></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationDetails;