import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Countdown /> */}
      {/* main pic  */}
      <img src= 'src/assets/weddingcouple.svg'></img>
      {/* Bottom words */}
      <div>
        <p>ALI & RAYANNE’s Big Day!</p>
      </div>
      {/* footer words */}
            <div>
        <p>Saturday 6 september</p>
        <p>2025</p>

      </div>
    </>
  );
}

export default App;
