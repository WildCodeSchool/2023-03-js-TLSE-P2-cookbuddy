import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import RecipesList from "../components/RecipesList";

export default function Search() {
  const [recipesData, setRecipesData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const apiURLtable = [
    "https://api.edamam.com/api/recipes/v2?type=public&imageSize=LARGE&random=true",
  ];
  apiURLtable.push(
    searchParams.get("q") ? `q=${searchParams.get("q")} ` : null
  );
  apiURLtable.push(`app_id=${import.meta.env.VITE_APP_ID_CF}`);
  apiURLtable.push(`app_key=${import.meta.env.VITE_APP_KEY_CF}`);
  apiURLtable.push(
    searchParams.get("health") ? `health=${searchParams.get("health")} ` : null
  );
  apiURLtable.push(
    searchParams.get("cuisineType")
      ? `cuisineType=${searchParams.get("cuisineType")}`
      : null
  );
  apiURLtable.push(
    searchParams.get("mealType")
      ? `mealType=${searchParams.get("mealType")}`
      : null
  );
  apiURLtable.push(
    searchParams.get("time")
      ? ` time=${searchParams.get("time")} `
      : "time=1%2B"
  );

  const apiURL = apiURLtable.filter((x) => x).join("&");

  useEffect(() => {
    const getRecipesData = () => {
      axios.get(apiURL).then((response) => {
        setRecipesData(response.data.hits);
        setSearchParams(searchParams);
        setIsLoaded(true);
      });
    };
    getRecipesData();
  }, []);

  return (
    <>
      <nav>
        <p>CookBuddy</p>
      </nav>
      <main>
        <div className="container">
          {isLoaded ? (
            <RecipesList data={recipesData} listClass="home" />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
