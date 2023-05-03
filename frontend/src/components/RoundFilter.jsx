import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function RoundFilter({
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
  filtersList: PropTypes.shape([PropTypes.string]),
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    searchQuery: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

RoundFilter.defaultProps = {
  filtersList: {},
};
