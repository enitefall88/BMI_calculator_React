import React, {useState} from "react";

function App() {
  return <div>

  </div>
  }

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

console.log(calculate_BMI(165,76))

export default App;
