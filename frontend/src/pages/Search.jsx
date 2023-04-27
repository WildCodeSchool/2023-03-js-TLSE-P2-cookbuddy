import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchPageNavBar from "../components/SearchPageNavBar";
import Footer from "../components/Footer";
import RecipesList from "../components/RecipesList";
import "../styles/Search.scss";

export default function Search() {
  const [recipesData, setRecipesData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const apiURLtable = [
    "https://api.edamam.com/api/recipes/v2?type=public&imageSize=LARGE&random=true",
  ];
  if (searchParams.get("q")) {
    apiURLtable.push(`q=${searchParams.get("q")}`);
  }
  apiURLtable.push(`app_id=${import.meta.env.VITE_APP_ID_CF}`);
  apiURLtable.push(`app_key=${import.meta.env.VITE_APP_KEY_CF}`);
  if (searchParams.get("health")) {
    apiURLtable.push(`health=${searchParams.get("health")}`);
  }
  if (searchParams.get("cuisineType")) {
    apiURLtable.push(`cuisineType=${searchParams.get("cuisineType")}`);
  }
  if (searchParams.get("mealType")) {
    apiURLtable.push(`mealType=${searchParams.get("mealType")}`);
  }
  apiURLtable.push(
    searchParams.get("time") ? `time=${searchParams.get("time")}` : "time=1%2B"
  );

  const apiURL = apiURLtable.join("&");

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
        <SearchPageNavBar />
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
    </>
  );
}
