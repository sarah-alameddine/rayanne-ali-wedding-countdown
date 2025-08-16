import { useEffect, useState } from "react";
import "./index.css";
function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const weddingDate = new Date("September 06, 2025 12:00:00");
      const diff = weddingDate - now;
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="main-text" id="countdown-text">
    <div id="day"><span className="countdown-number">{timeLeft.days}</span> Days &</div>
    <div id="hour"><span className="countdown-number">{timeLeft.hours}</span> HOURS to Go!</div>
      </div>
    </>
  );
}

export default Countdown;
