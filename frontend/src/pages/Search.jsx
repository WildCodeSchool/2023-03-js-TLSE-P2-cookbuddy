import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SearchPageNavBar from "../components/SearchPageNavBar";
import Footer from "../components/Footer";
import Filters from "../components/Filters";
import RecipesList from "../components/RecipesList";

import "../styles/Search.scss";

export default function Search({ darkmode, toggleDarkmode }) {
  const [recipesData, setRecipesData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const [areFiltersVisible, setAreFiltersVisible] = useState(false);
  const apiURLtable = [
    "https://api.edamam.com/api/recipes/v2?type=public&imageSize=LARGE&random=true",
  ];
  apiURLtable.push(`app_id=${import.meta.env.VITE_APP_ID_CF}`);
  apiURLtable.push(`app_key=${import.meta.env.VITE_APP_KEY_CF}`);

  const params = [];
  let entry = null;
  for (entry of searchParams.entries()) {
    params.push(entry);
  }
  let hasTime = false;
  for (let i = 0; i < params.length; i += 1) {
    if (params[i][0] === "time") {
      hasTime = true;
    }
  }

  const totalActiveFilters = params.length;

  if (!hasTime) {
    params.push(["time", "1%2B"]);
  }

  const paramsList = [];

  for (let i = 0; i < params.length; i += 1) {
    paramsList.push(params[i].join("="));
  }
  apiURLtable.push(`${paramsList.join("&")}`);

  const apiURL = apiURLtable.join("&");

  const searchQueryText = searchParams.get("q");

  const getRecipesData = () => {
    axios.get(apiURL).then((response) => {
      setRecipesData(response.data.hits);
      setIsLoaded(true);
      setAreFiltersVisible(false);
    });
  };
  useEffect(() => {
    getRecipesData();
  }, [apiURL]);

  return (
    <>
      <nav>
        <SearchPageNavBar
          setAreFiltersVisible={setAreFiltersVisible}
          darkmode={darkmode}
          toggleDarkmode={toggleDarkmode}
          totalActiveFilters={totalActiveFilters}
          searchQueryText={searchQueryText}
        />
      </nav>
      <main className="has-navbar">
        <div className="container">
          {isLoaded ? (
            <RecipesList data={recipesData} listClass="home" />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </main>
      <Footer />
      {areFiltersVisible && (
        <Filters
          setAreFiltersVisible={setAreFiltersVisible}
          searchQueryText={searchQueryText}
          getRecipesData={getRecipesData}
        />
      )}
    </>
  );
}
Search.propTypes = {
  darkmode: PropTypes.bool.isRequired,
  toggleDarkmode: PropTypes.func.isRequired,
};
