import axios from "axios";
import { useState, useEffect } from "react";
import DishTypes from "../components/DishTypes";

export default function Home() {
  const [recipeData, setRecipeData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getRecipeData = () => {
      axios
        .get(
          `https://api.edamam.com/api/recipes/v2?type=public&q="bread"&app_id=${
            import.meta.env.VITE_APP_ID_JC
          }&app_key=${import.meta.env.VITE_APP_KEY_JC}`
        )
        .then((response) => {
          setRecipeData(response.data.hits);
          setIsLoaded(true);
        });
    };
    getRecipeData();
  }, []);

  return (
    <div>
      <p>CookBuddy</p>
      <div className="container">
        <DishTypes />
      </div>
      {isLoaded ? <p>{recipeData[0].recipe.label}</p> : <p>Loading...</p>}
    </div>
  );
}
