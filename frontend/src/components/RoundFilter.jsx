import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function RoundFilter({
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
    <li
      className={`filter--round${isActive ? " active" : ""}`}
      onClick={activateFilter}
      aria-hidden
    >
      {data.name}
    </li>
  );
}

RoundFilter.propTypes = {
  setFiltersList: PropTypes.func.isRequired,
  setIsCleared: PropTypes.func.isRequired,
  isCleared: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    searchQuery: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
