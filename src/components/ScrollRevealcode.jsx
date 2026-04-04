import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealcode = () => {
  useEffect(() => {
    // 1. Initialize inside useEffect to ensure DOM is ready
    const sr = ScrollReveal({
      distance: "200px",
      duration: 700,
      reset: false,
      opacity: 0,
    });

    // 2. Define your data
    const animations = [
      { selector: "#leftflower", origin: "left", delay: 750 },
      { selector: "#rightflower", origin: "left", delay: 750 },
      { selector: "#vinayagar", origin: "bottom", delay: 1250 },
      { selector: "#temple", origin: "bottom", delay: 1750},
      { selector: "#marraige", origin: "bottom", delay: 2250},
      { selector: "#ohm", origin: "left", delay: 2750},
      { selector: "#invitationtitle", origin: "right", delay: 3250},
      { selector: "#thirukural", origin: "left", delay: 3750},
      { selector: "#wedname", origin: "right", delay: 4250},
      { selector: "#rightbanana", origin: "left", delay: 4750},
      { selector: "#leftbanana", origin: "left", delay: 4750},
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
