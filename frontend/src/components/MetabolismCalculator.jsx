import React, { useState } from "react";
import "../styles/components/MetabolismCalculator.scss";

function MetabolismCalculator() {
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let bmr = 0;

    if (sex === "male") {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else if (sex === "female") {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }

    alert(`Your BMR is: ${bmr.toFixed(2)} calories`);
  };

  return (
    <div className="metabolism-container ">
      <form className="metabolism-calculator" onSubmit={handleSubmit}>
        <h2>Metabolism Calculator</h2>
        <label className="label-calculator">
          Sex:
          <select
            className="input-calculator label-calculator"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          >
            <option value="">Select your sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
        <label className="label-calculator">
          Age:
          <input
            className="input-calculator"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <label className="label-calculator">
          Weight (in kg):
          <input
            className="input-calculator"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <br />
        <label className="label-calculator">
          Height (in cm):
          <input
            className="input-calculator"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Calculate BMR</button>
      </form>
    </div>
  );
}

export default MetabolismCalculator;
