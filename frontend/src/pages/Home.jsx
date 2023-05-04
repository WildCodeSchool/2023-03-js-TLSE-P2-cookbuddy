import axios from "axios";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import Filters from "../components/Filters";
import MetabolismCalculator from "../components/MetabolismCalculator";
import DishTypes from "../components/DishTypes";
import RecipesList from "../components/RecipesList";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import "../styles/Home.scss";
import { keys } from "../utils";

export default function Home({
  darkmode,
  toggleDarkmode,
  setIsBodyScrollable,
}) {
  const [recipesData, setRecipesData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const today = new Date();
  const time = today.getHours();

  let mealSearchType;
  switch (true) {
    case time > 0 && time <= 10:
      mealSearchType = "Breakfast";
      break;
    case time > 10 && time <= 14:
      mealSearchType = "Lunch";
      break;
    case time > 14 && time <= 16:
      mealSearchType = "Teatime";
      break;
    case time > 16 && time <= 18:
      mealSearchType = "Snack";
      break;
    case time > 18 && time <= 22:
      mealSearchType = "Dinner";
      break;
    default:
      mealSearchType = "Lunch";
  }
  const [isMetabolismCalculatorVisible, setIsMetabolismCalculatorVisible] =
    useState(false);

  useEffect(() => {
    const { appId, appKey } = keys[Math.floor(Math.random() * keys.length)];
    const getAnotherKeys = (currentAppId, currentAppKey) => {
      const availableKeys = keys.filter(
        (newKeys) =>
          newKeys.appId !== currentAppId || newKeys.appKey !== currentAppKey
      );

      const newKeys =
        availableKeys[Math.floor(Math.random() * availableKeys.length)];

      if (newKeys) {
        return newKeys;
      }
      return { appId: currentAppId, appKey: currentAppKey };
    };
    // eslint-disable-next-line no-shadow
    const getHomeRecipesData = (appId, appKey) => {
      axios
        .get(
          `https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_key=${appKey}&mealType=${mealSearchType}&time=1%2B&imageSize=LARGE&random=true`
        )
        .then((response) => {
          setRecipesData(response.data.hits.splice(0, 6));
          setIsLoaded(true);
        })
        .catch((error) => {
          if (error.response.status === 429) {
            const newKeys = getAnotherKeys(appId, appKey);
            getHomeRecipesData(newKeys.appId, newKeys.appKey);
          } else {
            console.error(error);
          }
        });
    };

    getHomeRecipesData(appId, appKey);
  }, []);
  const [areFiltersVisible, setAreFiltersVisible] = useState(false);

  const [searchQueryText, setSearchQueryText] = useState("");

  return (
    <>
      <header>
        <NavBar
          setAreFiltersVisible={setAreFiltersVisible}
          setIsMetabolismCalculatorVisible={setIsMetabolismCalculatorVisible}
          darkmode={darkmode}
          toggleDarkmode={toggleDarkmode}
          setIsBodyScrollable={setIsBodyScrollable}
        />
        {isMetabolismCalculatorVisible && (
          <MetabolismCalculator
            setIsMetabolismCalculatorVisible={setIsMetabolismCalculatorVisible}
            setIsBodyScrollable={setIsBodyScrollable}
          />
        )}
      </header>
      <main>
        <div className="container">
          <DishTypes />
          <section id="chef-suggestion">
            <h2>Chef's suggestions</h2>
            {isLoaded ? (
              <RecipesList
                data={recipesData}
                listClass="home"
                setIsBodyScrollable={setIsBodyScrollable}
              />
            ) : (
              <LoadingScreen />
            )}
          </section>
        </div>
      </main>
      <Footer />
      {areFiltersVisible && (
        <Filters
          setAreFiltersVisible={setAreFiltersVisible}
          searchQueryText={searchQueryText}
          setSearchQueryText={setSearchQueryText}
          setIsBodyScrollable={setIsBodyScrollable}
        />
      )}
    </>
  );
}

Home.propTypes = {
  darkmode: PropTypes.bool.isRequired,
  toggleDarkmode: PropTypes.func.isRequired,
  setIsBodyScrollable: PropTypes.func.isRequired,
};
