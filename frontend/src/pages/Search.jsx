import axios from "axios";
import { useState, useEffect } from "react";

export default function Search() {
  const [recipeData, setRecipeData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getRecipeData = () => {
      axios
        .get(
          `https://api.edamam.com/api/recipes/v2?type=public&q="bread"&app_id=${
            import.meta.env.VITE_APP_ID_CF
          }&app_key=${import.meta.env.VITE_APP_KEY_CF}`
        )
        .then((response) => {
          setRecipeData(response.data.hits);
          setIsLoading(true);
        });
    };
    getRecipeData();
  }, []);

  return (
    <>
      <nav>
        <p>CookBuddy</p>
      </nav>
      <main>
        <div className="container">
          {isLoading ? <p>{recipeData[0].recipe.label}</p> : <p>Loading...</p>}
        </div>
      </main>
    </>
  );
}
