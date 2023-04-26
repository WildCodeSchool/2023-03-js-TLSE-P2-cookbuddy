import { Link } from "react-router-dom";
import "../styles/components/Filters.scss";
import "../styles/App.scss";
import { useState } from "react";
import PropTypes from "prop-types";

import {
  dietsFilters,
  allergiesFilters,
  mealTypesFilters,
  cuisineTypesFilters,
} from "../utils";
import SquareFilter from "./SquareFilter";
import RoundFilter from "./RoundFilter";

export default function Filters({ setAreFiltersVisible }) {
  const [isCleared, setIsCleared] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const [filtersList, setFiltersList] = useState(() => {
    const initialFilters = {};

    [
      ...dietsFilters,
      ...allergiesFilters,
      ...mealTypesFilters,
      ...cuisineTypesFilters,
    ].forEach((filter) => {
      initialFilters[filter.searchQuery] = {
        isActive: false,
        category: filter.category,
      };
    });

    return initialFilters;
  });
  let searchQueryUrl = [];
  if (searchQuery) {
    searchQueryUrl.push(`q=${searchQuery}`);
  }

  let key = null;
  for (key in filtersList) {
    if (filtersList[key].isActive) {
      searchQueryUrl.push(`${filtersList[key].category}=${key}`);
    }
  }
  searchQueryUrl = searchQueryUrl.join("&");

  const handleClearFilters = () => {
    setSearchQuery("");
    setIsCleared(true);
    setFiltersList(() => {
      const initialFilters = {};

      [
        ...dietsFilters,
        ...allergiesFilters,
        ...mealTypesFilters,
        ...cuisineTypesFilters,
      ].forEach((filter) => {
        initialFilters[filter.searchQuery] = {
          isActive: false,
          category: filter.category,
        };
      });

      return initialFilters;
    });
  };
  return (
    <div className="modal">
      <div
        className="modal__filter"
        onClick={() => setAreFiltersVisible(false)}
        aria-hidden
      />
      <div className="modal__container">
        <div className="mobile-drag" />
        <div className="filters__container">
          <div className="input-line">
            <div className="input-field">
              <input
                type="text"
                className="input--search-bar"
                placeholder="Enter ingredients or recipe"
                onChange={handleSearchQuery}
                value={searchQuery}
              />
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
                  isCleared={isCleared}
                />
              ))}
            </ul>
          </div>
          <button type="button" className="see-more">
            See more filters
          </button>
          <div className="filters__line">
            <p>Cooking time</p>
          </div>
          <div className="filters__line">
            <p>Dish types</p>
            <ul className="filters__list--wrap">
              {mealTypesFilters.map((filter) => (
                <RoundFilter
                  data={filter}
                  key={filter.id}
                  setFiltersList={setFiltersList}
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
                  setIsCleared={setIsCleared}
                  isCleared={isCleared}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="buttons-line">
          <button className="reset" type="button" onClick={handleClearFilters}>
            Clear all
          </button>
          <Link to={`/search?${searchQueryUrl}`} className="search">
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
};
