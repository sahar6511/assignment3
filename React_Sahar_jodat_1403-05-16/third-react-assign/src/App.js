import StageA from "./components/StageA";
import StageB from "./components/StageB";
import StageC from "./components/StageC";
import StageD from "./components/StageD";
import CountSum from "./components/CountSum";
import "./style/main.scss";

const App = () => {
  return (
    <div className="main-div">
      <div className="stage">Stage</div>
      <CountSum></CountSum>
      <div className="all-stages-container">
        <div className="A-B-C-container">
          <StageB></StageB>
          <StageA></StageA>
          <StageC></StageC>
        </div>
        <div className="D-container">
          <StageD></StageD>
        </div>
      </div>
    </div>
  );
};

export default App;
