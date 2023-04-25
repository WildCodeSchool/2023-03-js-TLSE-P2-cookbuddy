import { Link } from "react-router-dom";
import "../styles/components/Filters.scss";
import "../styles/App.scss";
import { useState } from "react";

import { dietsFilters, allergiesFilters } from "../utils";
import SquareFilter from "./SquareFilter";

export default function Filters() {
  const [filtersList, setFiltersList] = useState(() => {
    const initialFilters = {};

    [...dietsFilters, ...allergiesFilters].forEach((filter) => {
      initialFilters[filter.filter] = false;
    });

    return initialFilters;
  });
  return (
    <div className="modal">
      <div className="modal__filter" />
      <div className="modal__container">
        <div className="mobile-drag" />
        <div className="filters__container">
          <div className="input-line">
            <div className="input-field">
              <input
                type="text"
                className="input--search-bar"
                placeholder="Enter ingredients or recipe"
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
                  filtersList={filtersList}
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
          </div>
          <div className="filters__line">
            <p>Cuisines types</p>
          </div>
        </div>
        <div className="buttons-line">
          <button className="reset" type="button">
            Clear all
          </button>
          <Link to="/search" className="search">
            Search
            <i className="bi bi-chevron-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}
