import { useState } from "react";
import "./index.css";
import Countdown from "./Countdown";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mainbody">
        <Countdown />
        {/* main pic  */}
        <img id="raynalipic" src="src/assets/raynali.png"></img>
        {/* Bottom words */}
        <div className="main-text">
          <p>ALI & RAYANNE’s Big Day!</p>
        </div>
        {/* footer words */}
        <div className="main-text">
          <p>Saturday 6 september</p>
          <p>2025</p>
        </div>
      </div>
    </>
  );
}

export default App;
