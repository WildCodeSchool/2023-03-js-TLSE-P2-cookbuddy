import React, { useState } from "react";
import "../styles/components/MetabolismCalculator.scss";
import PropTypes from "prop-types";

function MetabolismCalculator({ setIsMetabolismCalculatorVisible }) {
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmr, setBMR] = useState(0);
  const handleButtonClick = () => setIsMetabolismCalculatorVisible(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (sex === "male") {
      setBMR(88.362 + 13.397 * weight + 4.799 * height - 5.677 * age);
    } else if (sex === "female") {
      setBMR(447.593 + 9.247 * weight + 3.098 * height - 4.33 * age);
    }
  };

  return (
    <div className="metabolism-container ">
      <div
        className="metabolism-filter"
        onClick={handleButtonClick}
        aria-hidden
      />
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
        <div className="metabolism-value">
          <button type="submit">Calculate BMR</button>
          <p>Your BMR is {bmr.toFixed(2)} calories.</p>
        </div>
      </form>
    </div>
  );
}
MetabolismCalculator.propTypes = {
  setIsMetabolismCalculatorVisible: PropTypes.func.isRequired,
};

export default MetabolismCalculator;
