import React from "react";
import PropTypes from "prop-types";

function CalculatorInput({ label, type, value, onChange }) {
  return (
    <label className="label-calculator">
      {label}:
      <input
        className="input-calculator"
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

CalculatorInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CalculatorInput;
