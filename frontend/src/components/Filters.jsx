import { Link, useNavigate } from "react-router-dom";
import "../styles/components/Filters.scss";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import {
  dietsFilters,
  allergiesFilters,
  mealTypesFilters,
  cuisineTypesFilters,
} from "../utils";
import SquareFilter from "./SquareFilter";
import RoundFilter from "./RoundFilter";

export default function Filters({
  setAreFiltersVisible,
  searchQueryText,
  getRecipesData,
  searchParams = "",
  setSearchQueryText,
  setIsBodyScrollable,
}) {
  const [isCleared, setIsCleared] = useState(false);

  let minCookingTimeInitial = "";
  let maxCookingTimeInitial = "";
  const zero = 0;
  const one = 1;
  if (searchParams !== "") {
    let entry = null;
    for (entry of searchParams.entries()) {
      if (entry[0] === "time") {
        const cookingTime = entry[1].split("-");
        minCookingTimeInitial = cookingTime[zero];
        maxCookingTimeInitial = cookingTime[one];
      }
    }
  }
  const [minCookingTime, setMinCookingTime] = useState(minCookingTimeInitial);
  const [maxCookingTime, setMaxCookingTime] = useState(maxCookingTimeInitial);
  const [areMoreFiltersVisible, setAreMoreFiltersVisible] = useState(false);

  const handleSearchQuery = (e) => {
    setSearchQueryText(e.target.value);
  };

  const handleMinCookingTime = (e) => {
    setMinCookingTime(e.target.value <= 0 ? "" : e.target.value);
  };

  const handleMaxCookingTime = (e) => {
    setMaxCookingTime(e.target.value <= 0 ? "" : e.target.value);
  };

  const [filtersList, setFiltersList] = useState(() => {
    const initialFilters = {};

    [
      ...dietsFilters,
      ...allergiesFilters,
      ...mealTypesFilters,
      ...cuisineTypesFilters,
    ].forEach((filter) => {
      initialFilters[filter.searchQueryText] = {
        isActive: false,
        category: filter.category,
      };
    });

    let entry = null;

    if (searchParams !== "") {
      for (entry of searchParams.entries()) {
        if (entry[0] !== "time" && entry[0] !== "q") {
          initialFilters[entry[1]] = {
            isActive: true,
            category: entry[0],
          };
        }
      }
    }
    return initialFilters;
  });

  let searchQueryUrl = [];
  if (searchQueryText) {
    searchQueryUrl.push(`q=${searchQueryText}`);
  }

  if (minCookingTime || maxCookingTime) {
    if (minCookingTime && maxCookingTime) {
      searchQueryUrl.push(
        `time=${minCookingTime <= 0 ? 1 : minCookingTime}-${maxCookingTime}`
      );
    } else if (minCookingTime) {
      searchQueryUrl.push(`time=${minCookingTime <= 0 ? 1 : minCookingTime}-`);
    } else if (maxCookingTime) {
      searchQueryUrl.push(`time=1-${maxCookingTime}`);
    }
  }

  let key = null;
  for (key in filtersList) {
    if (filtersList[key].isActive) {
      searchQueryUrl.push(`${filtersList[key].category}=${key}`);
    }
  }
  searchQueryUrl = searchQueryUrl.join("&");

  const handleClearFilters = () => {
    setSearchQueryText("");
    setMinCookingTime("");
    setMaxCookingTime("");
    setIsCleared(true);
    setFiltersList(() => {
      const initialFilters = {};

      [
        ...dietsFilters,
        ...allergiesFilters,
        ...mealTypesFilters,
        ...cuisineTypesFilters,
      ].forEach((filter) => {
        initialFilters[filter.searchQueryText] = {
          isActive: false,
          category: filter.category,
        };
      });

      return initialFilters;
    });
  };
  const navigate = useNavigate();

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setAreFiltersVisible(false);
        setIsBodyScrollable(true);
      }
      if (e.key === "Enter") {
        navigate(`/search?${searchQueryUrl}`);
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [searchQueryUrl]);

  return (
    <div className="modal">
      <div
        className="modal__filter"
        onClick={() => {
          setAreFiltersVisible(false);
          setIsBodyScrollable(true);
        }}
        aria-hidden
      />
      <div className="modal__container">
        <div
          className="mobile-drag"
          onClick={() => {
            setAreFiltersVisible(false);
            setIsBodyScrollable(true);
          }}
          aria-hidden
        />
        <div className="filters__container">
          <div className="filters__header">
            <div className="input-line search">
              <div className="input-field">
                <input
                  type="text"
                  className="input--search-bar"
                  placeholder="Enter ingredients or recipe"
                  onChange={handleSearchQuery}
                  value={searchQueryText}
                  enterKeyHint="search"
                />
              </div>
            </div>
            <div className="buttons">
              <button
                className="reset"
                type="button"
                onClick={handleClearFilters}
              >
                Clear all
              </button>
              <Link
                to={`/search?${searchQueryUrl}`}
                className="search"
                onClick={() =>
                  typeof getRecipesData === "function" && getRecipesData()
                }
              >
                Search
                <i className="bi bi-chevron-right" />
              </Link>
            </div>
          </div>
          <div className="filters__line">
            <p>Specific diet</p>
            <div className="filters__list">
              {dietsFilters.map((filter) => (
                <SquareFilter
                  data={filter}
                  key={filter.id}
                  setFiltersList={setFiltersList}
                  setIsCleared={setIsCleared}
                  filtersList={filtersList}
                  isCleared={isCleared}
                />
              ))}
            </div>
          </div>
          <div className="filters__line">
            <p>Allergies</p>
            <ul className="filters__list">
              {allergiesFilters.map((filter) => (
                <SquareFilter
                  data={filter}
                  key={filter.id}
                  setFiltersList={setFiltersList}
                  setIsCleared={setIsCleared}
                  filtersList={filtersList}
                  isCleared={isCleared}
                />
              ))}
            </ul>
          </div>
          {areMoreFiltersVisible ? (
            <button
              type="button"
              className="see-more"
              onClick={() => setAreMoreFiltersVisible(!areMoreFiltersVisible)}
              aria-hidden
            >
              See less filters
              <i className="bi bi-dash-lg" />
            </button>
          ) : (
            <button
              type="button"
              className="see-more"
              onClick={() => setAreMoreFiltersVisible(!areMoreFiltersVisible)}
              aria-hidden
            >
              See more filters
              <i className="bi bi-plus-lg" />
            </button>
          )}
          <div
            className={`more-filters ${
              areMoreFiltersVisible ? "visible" : "hidden"
            }`}
          >
            <div className="filters__line cooking-time">
              <p>Cooking time</p>
              <div className="filters__list--inputs">
                <div className="input-field">
                  <input
                    type="number"
                    placeholder="minimum"
                    onChange={handleMinCookingTime}
                    value={minCookingTime}
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                </div>
                <p>to</p>
                <div className="input-field">
                  <input
                    type="number"
                    placeholder="maximum"
                    onChange={handleMaxCookingTime}
                    value={maxCookingTime}
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                </div>
                <p>mins</p>
              </div>
            </div>
            <div className="filters__line">
              <p>Dish types</p>
              <ul className="filters__list--wrap">
                {mealTypesFilters.map((filter) => (
                  <RoundFilter
                    data={filter}
                    key={filter.id}
                    setFiltersList={setFiltersList}
                    filtersList={filtersList}
                    setIsCleared={setIsCleared}
                    isCleared={isCleared}
                  />
                ))}
              </ul>
            </div>
            <div className="filters__line">
              <p>Cuisine types</p>
              <ul className="filters__list--wrap">
                {cuisineTypesFilters.map((filter) => (
                  <RoundFilter
                    data={filter}
                    key={filter.id}
                    setFiltersList={setFiltersList}
                    filtersList={filtersList}
                    setIsCleared={setIsCleared}
                    isCleared={isCleared}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="buttons-line">
          <button className="reset" type="button" onClick={handleClearFilters}>
            Clear all
          </button>
          <Link
            to={`/search?${searchQueryUrl}`}
            className="search"
            onClick={() =>
              typeof getRecipesData === "function" && getRecipesData()
            }
          >
            Search
            <i className="bi bi-chevron-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}

Filters.propTypes = {
  setAreFiltersVisible: PropTypes.func.isRequired,
  getRecipesData: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  searchQueryText: PropTypes.string,
  setSearchQueryText: PropTypes.func.isRequired,
  setIsBodyScrollable: PropTypes.func.isRequired,
  searchParams: PropTypes.oneOfType([
    PropTypes.shape({
      entries: PropTypes.func,
    }),
    PropTypes.string,
  ]),
};

Filters.defaultProps = {
  searchQueryText: "",
  getRecipesData: "",
  searchParams: "",
};
