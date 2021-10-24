import "./App.css";
import { useEffect, useState } from "react";

function App() {

  const [nums, setNums] = useState(false);
  const [chars, setChars] = useState(false);
  const [upper, setUpper] = useState(false);
  const [lower, setLower] = useState(false);
  const [count, counter] = useState(0);
  const [passwordPower, powerSetter] = useState(0);
  const [trueCount, trueSetter] = useState(0);
  const [password, passSetter] = useState(" ")

  // we should do smoething that all buttons cant be false together

  useEffect(() => {

    //================== bulding the password ==================

    console.log("count : " + count);

    console.log(nums);
    console.log(chars);
    console.log(upper);
    console.log(lower);

    let ALLNUMBERS = [0,1,2,3,4,5,6,7,8,9];
    let passwordArray = [];
    let ALLCHARS = ["!","@","#","$","%","^","&","*"];
    let ALLLOWERS = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let ALLUPPERS = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    while ( passwordArray.length < count ) {

      if ( !nums && !chars && !lower && !upper ){
        break
      }

      let r = Math.floor(Math.random() * 4);

      if (r===0 && nums) {
        let r2 = Math.floor(Math.random() * 10)
        passwordArray.push(ALLNUMBERS[r2]);
      }

      if (r===1 && chars) {
        let r2 = Math.floor(Math.random() * 8)
        passwordArray.push(ALLCHARS[r2]);
      }
      
      if (r===2 && lower) {
        let r2 = Math.floor(Math.random() * 26)
        passwordArray.push(ALLLOWERS[r2]);
      }

      if (r===3 && upper) {
        let r2 = Math.floor(Math.random() * 26)
        passwordArray.push(ALLUPPERS[r2]);
      }
    }

    passSetter(passwordArray.join(""));

    //================== checking the power of password ==================

    if (!nums && !chars && !lower && !upper){
      trueSetter(0)
    }
    if ((nums && !chars && !lower && !upper) ||
        (!nums && chars && !lower && !upper) ||
        (!nums && !chars && lower && !upper) ||
        (!nums && !chars && !lower && upper)){
      trueSetter(1);
    }
    if ((nums && chars && !lower && !upper) ||
        (nums && lower && !chars && !upper) ||
        (nums && upper && !lower && !chars) ||
        (chars && lower && !upper && !nums) ||
        (chars && upper && !lower && !nums) ||
        (lower && upper && !nums && !upper)){
      trueSetter(2);   
    }
    if ((!nums && chars && lower && upper) ||
        (nums && chars && lower && !upper) ||
        (nums && !chars && lower && upper) ||
        (nums && chars && !lower && upper)){
      trueSetter(3);
    }
    if (nums && chars && lower && upper ){
      trueSetter(4);
    }
    
    console.log("true count = " + trueCount);

    if (count > 12 && trueCount > 0 ){
      powerSetter(100);
    }
    
    if(count < 12 && count > 8 ){
      if (trueCount === 1) {
            powerSetter(60);
      }
      if (trueCount === 0){
        powerSetter(0);
      }
      else {
        powerSetter(100);
      }
    }

    if (count<9 && count>5){
      if (trueCount === 1){
        powerSetter(28)    
      }
      if (trueCount === 2){  
        if(chars){
          powerSetter(60);
        }
        else {
          powerSetter(28);
        }
      }
      if(trueCount > 2){
        powerSetter(60);
      }
    }

    if (count < 6 && count > 0 && trueCount !== 0){
      powerSetter(28);
    }

    if (passwordPower === 28){
      
    }

  },[upper,lower,nums,chars,count,trueCount])

  const changeHandler = (e) => {
    counter(e.target.value);

  };

  return (

    <div className="App">
      <div className="container">

        <h1 className="myh2"> { password} </h1>

        <div className="switch1-2">
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
        </div>

        <div className="switch3-4">
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
        </div>

        <div className="input-container">
          <div className="start-end">
            <span className="start"><b> 0 </b></span>
            <input
              type="range"
              min="0"
              max="50"
              defaultValue="0"
              onChange={(e) => changeHandler(e)}
              className="range"
            />
            <span className="end"><b> 50 </b></span> 
          </div>

          <span className="count"> Password Length : {count} </span>

        </div>

        <div className="progress-container">
          <div className="progress-div">
            <p className="quality-1">weak</p>
            <p className="quality-2">normal</p>
            <p className="quality-3">strong</p>
          </div>

          <div className="progress">
            <div className="progress-bar"></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
