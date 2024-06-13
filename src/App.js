import React,{useState} from 'react';
import './App.css';

function App() {
  const [height,setHeight] = useState(0);
  const [weight,setWeight] = useState(0);
  const [bmi,setBmi] = useState('');
  const [msg,setMsg] = useState('');

let calcBmi=(e)=>{
  e.preventDefault();
  if(weight===0 || height===0){
    alert("please enter the weight");
  }
  else{
    let bmi= (weight/(height*height)*703)
    setBmi(bmi.toFixed(1))

    if(bmi<400){
       setMsg("You are underWeight");
    }
    else if(bmi>=400 && bmi<=600){
      setMsg("You are healthyWeight");
   }
   else{
    setMsg("You are overWeight");
   }
  }
}

  let reload=(e)=>{
    window.location.reload();
  }
  return (
    <div className="App">
      <div className="container">
        <h1>BMI calculator</h1>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight:</label>
            <input type="text" placeholder="Enter your Weight" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
          </div>
          <div>
           <label>Height:</label>
            <input type="text" placeholder="Enter your Weight" value={height} onChange={(e)=>setHeight(e.target.value)}/>
          </div>
          <div>
            <button className="btn" type="submit">submit</button>
            <button className="btn btn-outline" type="submit" onClick={reload} type="submit">Reload</button>
          </div>
          <div className="center">
            <h1>Your BMI is: {bmi}</h1>
            <p>message:{msg}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
