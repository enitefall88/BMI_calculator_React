import React, {useState} from "react";
import PT from "prop-types"

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
    <label>
     <h4>{title}</h4>
      <input type="range" min={minValue} max={maxValue} value={currentValue} style={{width: "35rem"}}
           onChange={e=> parseInt(onChange(e.target.value))} className="slider" id="myRange"
    />
    </label>
    {currentValue}
  </div>
}

Slider.propTypes = {
  minValue: PT.number.isRequired,
  maxValue: PT.number.isRequired,
  currentValue: PT.number.isRequired,
  title: PT.string.isRequired,
  onChange: PT.func.isRequired
}

function App() {
let [weight, setWeight] = useState(46)
let [height, setHeight] = useState(175)

let bmi = calculate_BMI(height, weight)
let bmiDescription = tell_BMI(bmi)
let bmiColor = tell_BMI_color(bmi)

  return <div>
    <Slider minValue={140} maxValue={200}
    currentValue={height} onChange={setHeight} title="Height">
    Height
    </Slider >
    <Slider minValue={30} maxValue={180}
    currentValue={weight} onChange={setWeight} title="Weight">
    Weight
    </Slider>
    <div><h4>BMI {bmi.toFixed(2)}</h4> </div>
    <span className={`badge-${bmiColor}`}>
      {bmiDescription}
    </span>
  </div>
}


export default App;
