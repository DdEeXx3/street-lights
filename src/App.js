import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
// import logo from "./img/street-light.svg";
import "./App.css";
import Mainscreen from "./components/Mainscreen";
import PredictionRaport from "./components/PredictionRaport";
import ComparisionRaport from "./components/ComparisionRaport";
import { useState } from "react";
// import reactDom from "react-dom";

function App() {
  const [inputPolValue, setInputPolValue] = useState(""); //PolValue - power of lamp value
  const [powerOfLamp, setPowerOfLamp] = useState("");
  const [inputNolValue, setInputNolValue] = useState(""); // NolValue - number of lamp value
  const [numberOfLamp, setNumberOfLamp] = useState("");

  return (
    <div>
      <Mainscreen
        //Power of lamp
        inputPolValue={inputPolValue}
        setInputPolValue={setInputPolValue}
        setPowerOfLamp={setPowerOfLamp}
        // powerOfLamp={powerOfLamp}
        //Number of lamp
        inputNolValue={inputNolValue}
        setInputNolValue={setInputNolValue}
        setNumberOfLamp={setNumberOfLamp}
        // numberOfLamp={numberOfLamp}
      />
      <PredictionRaport powerOfLamp={powerOfLamp} numberOfLamp={numberOfLamp} />
      {/* <ComparisionRaport /> */}
    </div>
  );
}

export default App;
