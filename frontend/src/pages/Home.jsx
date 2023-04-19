import axios from "axios";
import { useState, useEffect } from "react";
import RecipeDetails from "../components/RecipeDetails";

export default function Home() {
  const [recipeData, setRecipeData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getRecipeData = () => {
      axios
        .get(
          `https://api.edamam.com/api/recipes/v2?type=public&q="pizza"&app_id=${
            import.meta.env.VITE_APP_ID_JB
          }&app_key=${import.meta.env.VITE_APP_KEY_JB}&imageSize=LARGE`
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
      {isLoaded ? (
        <RecipeDetails data={recipeData[5].recipe} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
