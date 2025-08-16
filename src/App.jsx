import "./index.css";
import Countdown from "./Countdown";

function App() {
  return (
    <>
      <div className="mainbody">
        <Countdown />
        {/* main pic  */}
        <img id="raynalipic" src="/raynali.png" />
        {/* Bottom words */}
        <div className="main-text">ALI & RAYANNE’s Big Day!</div>
        {/* footer words */}
        <div className="main-text bottom-text">Saturday 6 September </div>
        <div className="main-text bottom-text">2025</div>
      </div>
    </>
  );
}

export default App;
