import React, {useState} from "react";

function calculate_BMI(height, weight) {
  let bmi = 0
  return bmi = weight / (height/100) ** 2
}

function tell_BMI(bmi) {
    return bmi <= 18.5 ? "Underweight"   :
         bmi <= 24.9 ? "Normal Weight" :
         bmi <= 29.9 ? "Overweight"    :
                       "Obese"
}

function tell_BMI_color(bmi) {
  return bmi <= 18.5 ? "warning" :
         bmi <= 24.9 ? "success" :
         bmi <= 29.9 ? "warning" :
                       "danger"
}

function Slider({minValue, maxValue, currentValue, onChange, title}) {
  return <div className="slidecontainer">
    <input type="range" min={minValue} max={maxValue} value={currentValue} style={{width: "35rem"}}
           onChange={e=> parseInt(onChange(e.target.value))} className="slider" id="myRange"/>
    {currentValue}
  </div>
}

function App() {
let [weight, setWeight] = useState(0)
let [height, setHeight] = useState(0)

  return <div>
    <Slider minValue={140} maxValue={200}
    currentValue={height} onChange={setHeight} title="Height">
    Height
    </Slider >
    <Slider minValue={30} maxValue={180}
    currentValue={weight} onChange={setWeight} title="Weight">
    Weight
    </Slider>
  </div>
}


export default App;
