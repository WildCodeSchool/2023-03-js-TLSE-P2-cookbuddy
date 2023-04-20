import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function Search() {
  const [recipeData, setRecipeData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

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
          setIsLoaded(true);
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
          {isLoaded ? <p>{recipeData[0].recipe.label}</p> : <p>Loading...</p>}
        </div>
      </main>
      <Footer />
    </>
  );
}
