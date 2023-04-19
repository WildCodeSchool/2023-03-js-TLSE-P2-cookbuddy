import axios from "axios";
import { useState, useEffect } from "react";
import RecipesList from "../components/RecipesList";

export default function Home() {
  const [recipeData, setRecipeData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getRecipeData = () => {
      axios
        .get(
          `https://api.edamam.com/api/recipes/v2?type=public&q="bread"&app_id=${
            import.meta.env.VITE_APP_ID_CF
          }&app_key=${import.meta.env.VITE_APP_KEY_CF}&imageSize=LARGE`
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
      <header>
        <p>CookBuddy</p>
      </header>
      <main>
        <div className="container">
          <section id="chef-suggestion">
            {isLoading ? <RecipesList data={recipeData} /> : <p>Loading...</p>}
          </section>
        </div>
      </main>
    </>
  );
}
