import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [nums, setNums] = useState(false);
  const [chars, setChars] = useState(false);
  const [upper, setUpper] = useState(false);
  const [lower, setLower] = useState(false);
  const [val, valer] = useState(0);

  useEffect(() => {
    console.log(nums);
    console.log(chars);
    console.log(upper);
    console.log(lower);

    // if(nums && !chars && !lower && !upper) {

    // }


  },[upper,lower,nums,chars])

  const handler = (e) => {
    valer(e.target.value);
  };

  return (

    <div className="App">
      <div className="inputandoptions">
        <div className="switch1">
          <input
            type="checkbox"
            id="checkbox1"
            onChange={() => setNums(t => !t)}
            defaultChecked={nums}
            value={nums}
          />
          <p className="p-1"> Numbers </p>
        </div>

        <div className="switch2">
          <input
            type="checkbox"
            id="checkbox2"
            onChange={() => setChars(t => !t)}
            defaultChecked={chars}
            value={chars}
          />
          <p className="p-1"> !@#$% </p>
        </div>

        <div className="switch3">
          <input
            type="checkbox"
            id="checkbox3"
            onChange={() => setUpper(t => !t)}
            defaultChecked={upper}
            value={upper}
          />
          <p className="p-1"> UpperCase </p>
        </div>

        <div className="switch4">
          <input
            type="checkbox"
            id="checkbox4"
            onChange={() => setLower(t => !t)}
            defaultChecked={lower}
            value={lower}
          />
          <p className="p-1"> LowerCase </p>
        </div> 


        <input
          type="range"
          min="0"
          max="50"
          defaultValue="0"
          onChange={(e) => handler(e)}
        />
        <span>{val}</span>
        <div className="progress-div">
          <p className="quality-1">weak</p>
          <p className="quality-2">normal</p>
          <p className="quality-3">strong</p>
        </div>
        <progress id="file" value="60" max="100"></progress>
        {/* 28 - 60 - 100 */}
      </div>
    </div>
  );
}

export default App;
