import { useState } from "react";
import PropTypes from "prop-types";

export default function SquareFilter({ data }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="filter__item" onClick={() => setIsActive(!isActive)}>
      <div className={`filter--square${isActive ? " active" : ""}`}>
        <img
          src={isActive ? data.src_white : data.src_green}
          alt={`${data.name} icon`}
        />
      </div>
      <p>{data.name}</p>
    </div>
  );
}
SquareFilter.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    src_green: PropTypes.string.isRequired,
    src_white: PropTypes.string.isRequired,
  }).isRequired,
};
