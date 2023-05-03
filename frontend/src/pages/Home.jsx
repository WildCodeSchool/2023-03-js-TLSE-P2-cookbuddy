import axios from "axios";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DishTypes from "../components/DishTypes";
import RecipesList from "../components/RecipesList";
import Footer from "../components/Footer";
import "../styles/Home.scss";
import NavBar from "../components/NavBar";
import Filters from "../components/Filters";

export default function Home({ darkmode, toggleDarkmode }) {
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

  useEffect(() => {
    // List of app IDs and app keys
    const keys = [
      {
        appId: import.meta.env.VITE_APP_ID_CF,
        appKey: import.meta.env.VITE_APP_KEY_CF,
      },
      {
        appId: import.meta.env.VITE_APP_ID_JC,
        appKey: import.meta.env.VITE_APP_KEY_JC,
      },
      {
        appId: import.meta.env.VITE_APP_ID_AC,
        appKey: import.meta.env.VITE_APP_KEY_AC,
      },
      {
        appId: import.meta.env.VITE_APP_ID_JB,
        appKey: import.meta.env.VITE_APP_KEY_JB,
      },
    ];

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
  return (
    <>
      <header>
        <NavBar
          darkmode={darkmode}
          toggleDarkmode={toggleDarkmode}
          setAreFiltersVisible={setAreFiltersVisible}
        />
      </header>
      <main>
        <div className="container">
          <DishTypes />
          <section id="chef-suggestion">
            <h2>Chef's suggestions</h2>
            {isLoaded ? (
              <RecipesList data={recipesData} listClass="home" />
            ) : (
              <p>Loading...</p>
            )}
          </section>
        </div>
      </main>
      <Footer />
      {areFiltersVisible && (
        <Filters setAreFiltersVisible={setAreFiltersVisible} />
      )}
    </>
  );
}

Home.propTypes = {
  darkmode: PropTypes.bool.isRequired,
  toggleDarkmode: PropTypes.func.isRequired,
};
