import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function SquareFilter({
  data,
  setFiltersList,
  setIsCleared,
  isCleared,
}) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isCleared) {
      setIsActive(false);
      setIsCleared(false);
    }
  }, [isCleared, setIsCleared]);

  const activateFilter = () => {
    setIsActive(!isActive);
    setFiltersList((prevState) => ({
      ...prevState,
      [data.searchQuery]: { isActive: !isActive, category: data.category },
    }));
  };
  return (
    <li className="filter__item" onClick={activateFilter} aria-hidden>
      <div className={`filter--square${isActive ? " active" : ""}`}>
        <img
          src={isActive ? data.src_white : data.src_green}
          alt={`${data.name} icon`}
        />
      </div>
      <p>{data.name}</p>
    </li>
  );
}
SquareFilter.propTypes = {
  setFiltersList: PropTypes.func.isRequired,
  setIsCleared: PropTypes.func.isRequired,
  isCleared: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    src_green: PropTypes.string.isRequired,
    src_white: PropTypes.string.isRequired,
    searchQuery: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
