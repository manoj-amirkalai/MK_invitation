import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealcode = () => {
  useEffect(() => {
    // 1. Initialize inside useEffect to ensure DOM is ready
    const sr = ScrollReveal({
      distance: "80px",
      duration: 700,
      reset: false,
      opacity: 0,
    });

    // 2. Define your data
    const animations = [
      // header
      { selector: "#leftflower", origin: "left", delay: 750 },
      { selector: "#rightflower", origin: "left", delay: 750 },
      { selector: "#vinayagar", origin: "bottom", delay: 1250 },
      { selector: "#temple", origin: "bottom", delay: 1750 },
      { selector: "#ohm", origin: "left", delay: 2250 },
      { selector: "#invitationtitle", origin: "right", delay: 2750 },
      { selector: "#thirukural", origin: "left", delay: 3250 },
      { selector: "#wedname", origin: "right", delay: 3750 },
      { selector: "#rightbanana", origin: "left", delay: 4250 },
      { selector: "#leftbanana", origin: "left", delay: 4250 },
      // banner
      { selector: "#banner", origin: "bottom", delay: 2250 },
      // countdown
      { selector: "#countdownHeader", origin: "bottom", delay: 250 },
      { selector: "#daycount", origin: "left", delay: 750 },
      { selector: "#hourscount", origin: "bottom", delay: 1250 },
      { selector: "#mincount", origin: "bottom", delay: 1750 },
      { selector: "#seccount", origin: "right", delay: 2250 },
      { selector: "#welcometext", origin: "bottom", delay: 2750 },
      { selector: "#dayreveal", origin: "left", delay: 3250 },
      { selector: "#monthreveal", origin: "bottom", delay: 3750 },
      { selector: "#yearreveal", origin: "right", delay: 4250 },
      // location details
      { selector: "#locationTitle", origin: "left", delay: 750 },
      { selector: "#glassCard", origin: "bottom", delay: 1250 },
      { selector: "#eventtitle", origin: "left", delay: 1750 },
      { selector: "#dateText", origin: "right", delay: 2250 },
      { selector: "#timeText", origin: "left", delay: 2750 },
      { selector: "#venueText", origin: "right", delay: 3250 },
      { selector: "#mapbutton", origin: "left", delay: 3750 },
      //footer
      { selector: "#footercontainer", origin: "left", delay: 250 },
      { selector: "#heart", origin: "bottom", delay: 1050 },
      { selector: "#thankyou", origin: "bottom", delay: 1250 },
      { selector: "#message", origin: "right", delay: 1750 },
      { selector: "#couplename", origin: "bottom", delay: 2750 },
      { selector: "#whatsupicon", origin: "left", delay: 3250 },
      { selector: "#instagramicon", origin: "bottom", delay: 3750 },
      { selector: "#mailicon", origin: "right", delay: 4250 },
      { selector: "#copyright", origin: "bottom", delay: 4750 },
     
    ];

    // 3. Map through and reveal
    animations.forEach(({ selector, ...config }) => {
      sr.reveal(selector, config);
    });

    // 4. Cleanup (Optional but good practice)
    return () => sr.destroy();
  }, []); // Empty dependency array means this runs once on mount

  return null; // Returns null if this component only handles logic
};

export default ScrollRevealcode;
