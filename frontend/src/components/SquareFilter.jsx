import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function SquareFilter({
  data,
  setFiltersList,
  filtersList,
  setIsCleared,
  isCleared,
}) {
  const initialIsActive = filtersList[data.searchQuery]
    ? filtersList[data.searchQuery].isActive
    : false;
  const [isActive, setIsActive] = useState(initialIsActive);

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
  filtersList: PropTypes.shape([PropTypes.string]),
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    src_green: PropTypes.string.isRequired,
    src_white: PropTypes.string.isRequired,
    searchQuery: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

SquareFilter.defaultProps = {
  filtersList: {},
};
